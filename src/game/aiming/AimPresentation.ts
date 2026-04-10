export interface ProjectedAimPoint {
  x: number;
  y: number;
  z: number;
  isBehindCamera: boolean;
}

export interface ViewportSize {
  width: number;
  height: number;
}

export interface ReticlePresentation {
  mode: 'onscreen' | 'behind';
  screenX: number;
  screenY: number;
}

/**
 * Keep the full reticle fully inside the viewport when clamped.
 * The HUD reticle is ~44.8px wide, so 28px leaves a small visual buffer.
 */
const RETICLE_EDGE_PADDING = 28;

export function computeReticlePresentation(
  projectedPoint: ProjectedAimPoint | null,
  viewport: ViewportSize
): ReticlePresentation {
  const centerX = viewport.width * 0.5;
  const centerY = viewport.height * 0.5;

  if (
    !projectedPoint ||
    !Number.isFinite(projectedPoint.x) ||
    !Number.isFinite(projectedPoint.y) ||
    !Number.isFinite(projectedPoint.z)
  ) {
    return {
      mode: 'behind',
      screenX: centerX,
      screenY: centerY
    };
  }

  const rawX = ((projectedPoint.x + 1) * 0.5) * viewport.width;
  const rawY = ((-projectedPoint.y + 1) * 0.5) * viewport.height;

  if (projectedPoint.isBehindCamera) {
    return {
      mode: 'behind',
      screenX: centerX,
      screenY: centerY
    };
  }

  const minX = RETICLE_EDGE_PADDING;
  const minY = RETICLE_EDGE_PADDING;
  const maxX = Math.max(RETICLE_EDGE_PADDING, viewport.width - RETICLE_EDGE_PADDING);
  const maxY = Math.max(RETICLE_EDGE_PADDING, viewport.height - RETICLE_EDGE_PADDING);

  const isOnScreen =
    rawX >= minX &&
    rawX <= maxX &&
    rawY >= minY &&
    rawY <= maxY &&
    projectedPoint.z >= -1 &&
    projectedPoint.z <= 1;

  return {
    mode: 'onscreen',
    screenX: isOnScreen ? rawX : clamp(rawX, minX, maxX),
    screenY: isOnScreen ? rawY : clamp(rawY, minY, maxY)
  };
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
