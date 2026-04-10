import test from 'node:test';
import assert from 'node:assert/strict';

import { Vector3 } from 'three';

import { solveAimTrajectory } from '../src/game/aiming/AimSolver.ts';

const ammo = {
  caliber: 'test',
  speed: 100,
  mass: 1,
  penetration: 1,
  damage: 1,
  gravityScale: 1,
  trailColor: '#fff'
};

test('simulates ballistic drop from the live muzzle direction', () => {
  const solution = solveAimTrajectory({
    ammo,
    origin: new Vector3(0, 1, 0),
    direction: new Vector3(0, 0, 1),
    stepSeconds: 0.5,
    maxSteps: 2,
    maxDistance: 200,
    startOffset: 0,
    groundCutoffY: 0,
    traceObstacleHit: () => null,
    traceTargetHit: () => null
  });

  assert.equal(solution.target, null);
  assert.equal(solution.impactPoint.z, 50);
  assert.ok(Math.abs(solution.impactPoint.y + 1.455) < 0.0001);
});

test('prefers a target hit that is closer than the obstacle hit in the same step', () => {
  const solution = solveAimTrajectory({
    ammo,
    origin: new Vector3(0, 1, 0),
    direction: new Vector3(0, 0, 1),
    stepSeconds: 0.2,
    maxSteps: 1,
    maxDistance: 200,
    startOffset: 0,
    groundCutoffY: -10,
    traceObstacleHit: () => ({
      point: new Vector3(0, 1, 30),
      target: null
    }),
    traceTargetHit: () => ({
      point: new Vector3(0, 1, 20),
      target: 'enemy',
      distance: 20
    })
  });

  assert.equal(solution.target, 'enemy');
  assert.equal(solution.impactPoint.z, 20);
});
