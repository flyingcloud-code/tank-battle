# Third-Person Aiming Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make third-person reticle display the shell’s true predicted impact point with a single HUD reticle, and remove the camera-driven barrel feedback loop that caused high-angle oscillation.

**Architecture:** Extract a single aim-solution pipeline shared by HUD and camera, keep ballistic prediction authoritative, clamp one reticle to the viewport instead of switching display modes, and keep camera framing separate from barrel control. Clean up desktop cursor handling so gameplay never shows a second crosshair.

**Tech Stack:** TypeScript, Three.js, Cannon-es, Vite, Node test runner

---

### Task 1: Extract Aim Presentation Helpers

**Files:**
- Create: `src/game/aiming/AimPresentation.ts`
- Test: `verify/reticle-position.test.ts`

- [ ] Expand reticle projection into a simple presentation model with `onscreen` and `behind` states.
- [ ] Move viewport clamping into pure helpers so the same reticle can stay visible near the edge.
- [ ] Update `verify/reticle-position.test.ts` to cover on-screen, clamped, and behind-camera states.
- [ ] Run: `node --test --experimental-strip-types verify/reticle-position.test.ts`

### Task 2: Extract Ballistic Aim Solver

**Files:**
- Create: `src/game/aiming/AimSolver.ts`
- Modify: `src/game/Game.ts`
- Test: `verify/aim-solver.test.ts`

- [ ] Move ballistic impact simulation out of `Game.buildAimPrediction()` into a focused solver module.
- [ ] Keep support for obstacle hits and enemy target detection.
- [ ] Add a pure or near-pure regression test for a stable solver case.
- [ ] Run: `node --test --experimental-strip-types verify/aim-solver.test.ts`

### Task 3: Refactor Third-Person Camera Pose

**Files:**
- Modify: `src/game/camera/orbitCameraPose.ts`
- Modify: `src/game/controllers/CameraController.ts`
- Modify: `src/game/Game.ts`
- Test: `verify/orbit-camera.test.ts`

- [ ] Redefine third-person control pose so the camera is not locked to looking at tank center.
- [ ] Remove camera-ray target chasing from third-person turret steering.
- [ ] Keep the rendered camera pose readable without feeding a separate world-target control loop back into the barrel.
- [ ] Run: `node --test --experimental-strip-types verify/orbit-camera.test.ts`

### Task 4: Update HUD Reticle Rendering

**Files:**
- Modify: `index.html`
- Modify: `src/style.css`
- Modify: `src/game/Game.ts`
- Test: `verify/reticle-position.test.ts`

- [ ] Keep only one visible reticle element in the HUD.
- [ ] Clamp that same reticle to the viewport when the impact point remains in front of the camera.
- [ ] Preserve reload ring, ready state, and hostile-state coloring for the full reticle.
- [ ] Run: `node --test --experimental-strip-types verify/reticle-position.test.ts`

### Task 5: Clean Up Gameplay Cursor Handling

**Files:**
- Modify: `src/game/ui/gameplayCursor.ts`
- Modify: `src/main.ts`
- Modify: `src/game/Game.ts`
- Modify: `src/style.css`
- Test: `verify/gameplay-cursor.test.ts`

- [ ] Keep cursor visibility driven by gameplay/overlay state and input device class.
- [ ] Request pointer lock only from user-gesture paths.
- [ ] Ensure desktop gameplay hides the OS cursor even if pointer lock cannot be confirmed immediately.
- [ ] Run: `node --test --experimental-strip-types verify/gameplay-cursor.test.ts`

### Task 6: Final Verification

**Files:**
- Verify only

- [ ] Run the focused Node tests together:
  `node --test --experimental-strip-types verify/reticle-position.test.ts verify/orbit-camera.test.ts verify/gameplay-cursor.test.ts verify/aim-solver.test.ts`
- [ ] Run the project build:
  `npm run build`
- [ ] Run the dev server:
  `npm run dev`
- [ ] Reproduce in a real browser:
  confirm third-person reticle moves away from screen center, remains a single element when raised high, and no second crosshair is shown during active gameplay on desktop.
