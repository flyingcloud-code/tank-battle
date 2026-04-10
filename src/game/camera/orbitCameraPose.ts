export interface CameraVector3 {
  x: number;
  y: number;
  z: number;
}

export interface OrbitCameraPoseOptions {
  tankPosition: CameraVector3;
  orbitYaw: number;
  orbitPitch: number;
  orbitDistance: number;
  orbitPivotHeight: number;
  shoulderOffset: number;
  lookDistance: number;
}

export interface OrbitCameraPose {
  position: CameraVector3;
  lookAt: CameraVector3;
}

export function computeOrbitCameraPose({
  tankPosition,
  orbitYaw,
  orbitPitch,
  orbitDistance,
  orbitPivotHeight,
  shoulderOffset,
  lookDistance
}: OrbitCameraPoseOptions): OrbitCameraPose {
  const pivot = {
    x: tankPosition.x,
    y: tankPosition.y + orbitPivotHeight,
    z: tankPosition.z
  };

  const forward = normalize({
    x: -Math.sin(orbitYaw) * Math.cos(orbitPitch),
    y: -Math.sin(orbitPitch),
    z: -Math.cos(orbitYaw) * Math.cos(orbitPitch)
  });
  const right = normalize({
    x: forward.z,
    y: 0,
    z: -forward.x
  });

  const position = {
    x: pivot.x - forward.x * orbitDistance + right.x * shoulderOffset,
    y: pivot.y - forward.y * orbitDistance,
    z: pivot.z - forward.z * orbitDistance + right.z * shoulderOffset
  };

  const lookAt = {
    x: pivot.x + forward.x * lookDistance,
    y: pivot.y + forward.y * lookDistance,
    z: pivot.z + forward.z * lookDistance
  };

  return {
    position,
    lookAt
  };
}

function normalize(vector: CameraVector3): CameraVector3 {
  const length = Math.hypot(vector.x, vector.y, vector.z) || 1;

  return {
    x: vector.x / length,
    y: vector.y / length,
    z: vector.z / length
  };
}
