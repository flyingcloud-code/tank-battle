export interface GameplayCursorState {
  hasFinePointer: boolean;
  selectionVisible: boolean;
  pauseVisible: boolean;
}

export function shouldHideGameplayCursor({
  hasFinePointer,
  selectionVisible,
  pauseVisible
}: GameplayCursorState): boolean {
  return hasFinePointer && !selectionVisible && !pauseVisible;
}
