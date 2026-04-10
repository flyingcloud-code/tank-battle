import test from 'node:test';
import assert from 'node:assert/strict';

import { shouldHideGameplayCursor } from '../src/game/ui/gameplayCursor.ts';

test('hides the gameplay cursor for fine pointers during active battle', () => {
  const hidden = shouldHideGameplayCursor({
    hasFinePointer: true,
    selectionVisible: false,
    pauseVisible: false
  });

  assert.equal(hidden, true);
});

test('keeps the cursor visible while overlays are open', () => {
  const hidden = shouldHideGameplayCursor({
    hasFinePointer: true,
    selectionVisible: true,
    pauseVisible: false
  });

  assert.equal(hidden, false);
});
