import test from 'node:test';
import assert from 'node:assert/strict';

import { computeReticlePresentation } from '../src/game/aiming/AimPresentation.ts';

test('uses the full reticle when impact is on screen', () => {
  const presentation = computeReticlePresentation(
    { x: 0.4, y: -0.2, z: 0.1, isBehindCamera: false },
    { width: 1000, height: 800 }
  );

  assert.equal(presentation.mode, 'onscreen');
  assert.equal(presentation.screenX, 700);
  assert.equal(presentation.screenY, 480);
});

test('clamps the full reticle to the viewport when impact leaves the screen in front of the camera', () => {
  const presentation = computeReticlePresentation(
    { x: 1.6, y: 0.2, z: 0.1, isBehindCamera: false },
    { width: 1000, height: 800 }
  );

  assert.equal(presentation.mode, 'onscreen');
  assert.equal(presentation.screenX, 972);
  assert.equal(presentation.screenY, 320);
});

test('hides the full reticle when impact is behind the camera', () => {
  const presentation = computeReticlePresentation(
    { x: 0.2, y: 0.1, z: 0.1, isBehindCamera: true },
    { width: 1000, height: 800 }
  );

  assert.equal(presentation.mode, 'behind');
  assert.equal(presentation.screenX, 500);
  assert.equal(presentation.screenY, 400);
});
