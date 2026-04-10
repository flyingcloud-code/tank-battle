import { Vector3 } from 'three';

import type { AmmoDefinition } from '../../data/tanks';

export interface AimObstacleHit<TTarget> {
  point: Vector3;
  target: TTarget | null;
}

export interface AimTargetHit<TTarget> {
  target: TTarget;
  point: Vector3;
  distance: number;
}

export interface AimSolution<TTarget> {
  impactPoint: Vector3;
  distance: number;
  travelTime: number;
  target: TTarget | null;
}

export interface AimSolverOptions<TTarget> {
  ammo: AmmoDefinition;
  origin: Vector3;
  direction: Vector3;
  stepSeconds: number;
  maxSteps: number;
  maxDistance: number;
  startOffset?: number;
  groundCutoffY?: number;
  traceObstacleHit: (start: Vector3, end: Vector3) => AimObstacleHit<TTarget> | null;
  traceTargetHit: (start: Vector3, end: Vector3, secondsAhead: number) => AimTargetHit<TTarget> | null;
}

const GRAVITY = 9.82;

export function solveAimTrajectory<TTarget>({
  ammo,
  origin,
  direction,
  stepSeconds,
  maxSteps,
  maxDistance,
  startOffset = 0.7,
  groundCutoffY = 0,
  traceObstacleHit,
  traceTargetHit
}: AimSolverOptions<TTarget>): AimSolution<TTarget> {
  const gravity = new Vector3(0, -GRAVITY * ammo.gravityScale, 0);
  const normalizedDirection = direction.clone().normalize();
  const velocity = normalizedDirection.clone().multiplyScalar(ammo.speed);
  const from = origin.clone().addScaledVector(normalizedDirection, startOffset);

  let previous = from.clone();
  let impactPoint = previous.clone();
  let target: TTarget | null = null;
  let travelTime = 0;

  for (let step = 0; step < maxSteps; step += 1) {
    velocity.addScaledVector(gravity, stepSeconds);
    const next = previous.clone().addScaledVector(velocity, stepSeconds);
    travelTime += stepSeconds;

    const targetHit = traceTargetHit(previous, next, travelTime);
    const obstacleHit = traceObstacleHit(previous, next);

    if (targetHit) {
      const obstacleDistance = obstacleHit
        ? previous.distanceTo(obstacleHit.point)
        : Number.POSITIVE_INFINITY;

      if (targetHit.distance <= obstacleDistance + 0.05) {
        impactPoint = targetHit.point.clone();
        target = targetHit.target;
        break;
      }
    }

    if (obstacleHit) {
      impactPoint = obstacleHit.point.clone();
      target = obstacleHit.target;
      break;
    }

    impactPoint = next.clone();
    previous = next;

    if (next.y <= groundCutoffY || next.distanceTo(from) > maxDistance) {
      break;
    }
  }

  return {
    impactPoint,
    distance: from.distanceTo(impactPoint),
    travelTime,
    target
  };
}
