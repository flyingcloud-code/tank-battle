# Third-Person Aiming Redesign

**Problem**

The current third-person aiming stack mixes four different meanings:

1. The camera screen center.
2. The turret/gun orientation target.
3. The projectile's true ballistic impact point.
4. The HUD reticle position.

Because those values are computed by different subsystems with different assumptions, the player cannot trust the reticle, the gun, or the camera framing.

**Goal**

In third-person mode, the reticle must always represent the projectile's true predicted impact point, even when that point is not at the screen center.

**Implemented Simplification**

The final shipped behavior for this refactor is intentionally simpler than the earlier exploratory versions:

- third-person uses one HUD reticle only
- the reticle is driven only by the current barrel direction and ballistic impact prediction
- the reticle is clamped to the viewport when the impact point is still in front of the camera
- the camera does not steer the barrel and the barrel does not chase a camera-ray target

**Core Rules**

1. Third-person has one source of truth: the current projectile trajectory simulated from the live muzzle position, live muzzle direction, and active ammo data.
2. The reticle is a presentation of that trajectory result, not a separate aiming system.
3. The camera never defines a different hit position. It may help framing, but it does not redefine impact.
4. The operating-system cursor must never appear as a second crosshair during active gameplay on fine-pointer devices.

## Desired Player Experience

### Third-Person Reticle

- When the ballistic impact point is inside the viewport, show the full reticle at that exact screen position.
- When the ballistic impact point is outside the viewport but still in front of the camera, clamp that same full reticle to the viewport border.
- When the ballistic impact point is behind the camera, hide the reticle.

### Third-Person Camera

- Mouse movement controls third-person camera yaw/pitch directly.
- The camera should feel like a controllable chase/orbit camera, not like a camera permanently staring at the tank center.
- The camera may frame the tank more readably, but it must not participate in the barrel-control loop.

### Firing Semantics

- Turret/gun movement should follow direct player input rather than chasing a world target solved from the camera.
- Projectile spawn and trajectory prediction must share the same muzzle transform and ammo parameters.
- Firing should not use a hidden target point that the HUD does not know about.

## Architecture

### 1. Aim Solution

Create a single `AimSolution` model that represents the live aiming state for the player.

Suggested fields:

- `impactPoint: Vector3`
- `distance: number`
- `target: TankActor | null`
- `canHit: boolean`
- `presentation.mode: 'onscreen' | 'behind'`
- `presentation.screenX: number`
- `presentation.screenY: number`

This model should be produced once per frame and consumed by the HUD and camera.

### 2. Aim Solver

Extract ballistic prediction into a dedicated solver module.

Inputs:

- muzzle world position
- muzzle world direction
- ammo speed and gravity scale
- physics world
- actor lookup

Outputs:

- impact point
- collision/target metadata

The solver must remain the authoritative source for “where this shell will land if fired now.”

### 3. Reticle Presenter

Create a pure presentation helper that converts a projected impact point into a reticle state:

- full reticle when on screen
- same full reticle clamped to the viewport when off-screen but still in front
- hidden when behind

This helper must not depend on gameplay state beyond the projected point and viewport size.

### 4. Third-Person Camera Pose

Refactor the third-person camera into a dedicated pose calculation:

- position derived from third-person yaw/pitch/distance around the tank anchor
- look target derived from camera forward direction for readable framing only

The camera must not feed a separate world-target solution back into turret steering.

## Frame Update Order

Third-person update must follow this order:

1. Read input and update camera yaw/pitch.
2. Feed direct player aim input to the turret/gun controller.
3. Build the current ballistic `AimSolution` from the live muzzle transform.
4. Render HUD reticle from `AimSolution.presentation`.
5. Update the camera render pose without re-solving a barrel target from the camera.
6. Fire projectiles using the same live muzzle transform used by the solver.

## HUD Design

### Full Reticle

- visible only when `presentation.mode === 'onscreen'`
- anchored at exact predicted impact position
- clamped to the viewport border if the impact is in front of the camera but off-screen
- retains reload ring, hostile coloring, and ready state

### Hidden/Behind-Camera State

- no full reticle
- range/hit text may continue to use the latest valid solution

## Cursor Rules

- During active gameplay on fine-pointer devices, hide the OS cursor over the gameplay canvas.
- When the selection screen or pause/result overlay is visible, restore the OS cursor.
- Cursor behavior must not depend on pointer lock success alone; the gameplay state and input device class are the true conditions.

## Testing Strategy

### Pure Tests

- ballistic solver returns a stable impact point for a known muzzle state
- reticle presenter classifies on-screen and behind-camera cases correctly, and clamps the single reticle at the viewport edge
- third-person camera pose remains stable without feeding a separate barrel target loop
- gameplay cursor visibility rules match overlay state

### Integration Checks

- build passes
- in third-person mode, the reticle is not pinned to the center
- no second crosshair appears from the OS cursor during normal gameplay on desktop
- raising the barrel does not trigger a separate second reticle path

## Non-Goals

- Reworking first-person aiming semantics
- Adding ballistic lead computation for enemies beyond current behavior
- Replacing the entire camera mode system
