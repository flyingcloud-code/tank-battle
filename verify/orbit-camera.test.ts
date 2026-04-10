import test from 'node:test';
import assert from 'node:assert/strict';

import { computeOrbitCameraPose } from '../src/game/camera/orbitCameraPose.ts';

test('places the third-person camera over the shoulder and looks ahead of the tank', () => {
  const pose = computeOrbitCameraPose({
    tankPosition: { x: 10, y: 2, z: -3 },
    orbitYaw: Math.PI,
    orbitPitch: 0,
    orbitDistance: 10,
    orbitPivotHeight: 1.6,
    shoulderOffset: 1.4,
    lookDistance: 32
  });

  assert.equal(pose.position.z, -13);
  assert.ok(pose.position.x > 10);
  assert.equal(pose.lookAt.z, 29);
  assert.equal(pose.lookAt.y, 3.6);
});
