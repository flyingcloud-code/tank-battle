import {
  BoxGeometry,
  ColorRepresentation,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Scene,
  SphereGeometry,
  Vector3
} from 'three';

interface ParticleState {
  mesh: Mesh;
  velocity: Vector3;
  life: number;
  maxLife: number;
  baseScale: number;
  growRate: number;
  drag: number;
  gravity: number;
  spin: number;
}

export class ParticleSystem {
  private readonly particles: ParticleState[] = [];
  private readonly sphereGeometry = new SphereGeometry(1, 10, 10);
  private readonly debrisGeometry = new BoxGeometry(1, 1, 1);

  constructor(private readonly scene: Scene) {}

  spawnMuzzleFlash(position: Vector3, direction: Vector3, color: ColorRepresentation): void {
    this.addParticle(position, direction.clone().multiplyScalar(3.8), color, 0.12, 0.18, 0.42, 5, 0, 0.6);

    for (let index = 0; index < 4; index += 1) {
      this.addParticle(
        position,
        direction
          .clone()
          .multiplyScalar(2.2 + Math.random() * 2.4)
          .add(
            new Vector3(
              (Math.random() - 0.5) * 1.8,
              (Math.random() - 0.5) * 1.2,
              (Math.random() - 0.5) * 1.8
            )
          ),
        '#ffd996',
        0.15,
        0.08,
        0.2,
        4,
        0,
        0.9
      );
    }
  }

  spawnImpact(position: Vector3, normal: Vector3, penetrated: boolean): void {
    const sparks = penetrated ? 10 : 5;

    for (let index = 0; index < sparks; index += 1) {
      const velocity = normal
        .clone()
        .multiplyScalar(4.5 + Math.random() * 5)
        .add(
          new Vector3(
            (Math.random() - 0.5) * (penetrated ? 5.1 : 4),
            Math.random() * (penetrated ? 3.1 : 2.6),
            (Math.random() - 0.5) * (penetrated ? 5.1 : 4)
          )
        );
      this.addParticle(
        position,
        velocity,
        penetrated ? '#ffbd59' : '#dce6ff',
        0.24 + Math.random() * 0.22,
        0.08,
        penetrated ? 0.34 : 0.25,
        4.4,
        5.5,
        1.4
      );
    }

    this.addParticle(
      position,
      new Vector3(
        (Math.random() - 0.5) * 1.4,
        1.4 + Math.random() * 1.4,
        (Math.random() - 0.5) * 1.4
      ),
      penetrated ? '#72665f' : '#8d9081',
      penetrated ? 0.72 : 0.6,
      penetrated ? 0.28 : 0.22,
      penetrated ? 0.94 : 0.8,
      1.2,
      0.4,
      0.5
    );

    if (penetrated) {
      this.spawnDamageSparks(position, 0.55);
    }
  }

  spawnTrackDust(position: Vector3, direction: Vector3, speedRatio: number): void {
    if (speedRatio < 0.18) {
      return;
    }

    const offset = new Vector3(-direction.z, 0, direction.x).multiplyScalar(1.6);
    const left = position.clone().add(offset).add(new Vector3(0, -0.3, 0));
    const right = position.clone().sub(offset).add(new Vector3(0, -0.3, 0));
    const rise = 0.9 + speedRatio * 1.4;

    [left, right].forEach((origin) => {
      this.addParticle(
        origin,
        new Vector3(
          (Math.random() - 0.5) * 0.9,
          rise,
          (Math.random() - 0.5) * 0.9
        ),
        '#9a8e6f',
        0.55,
        0.2 + speedRatio * 0.06,
        0.9,
        1.5,
        0.15,
        0.2
      );
    });
  }

  spawnEngineSmoke(position: Vector3, intensity: number): void {
    this.addParticle(
      position,
      new Vector3(
        (Math.random() - 0.5) * 0.45,
        0.45 + intensity * 0.85,
        (Math.random() - 0.5) * 0.45
      ),
      '#4f5258',
      0.9 + intensity * 0.45,
      0.18 + intensity * 0.04,
      0.95,
      1.1,
      0.05,
      0.25
    );
  }

  spawnDamageSmoke(position: Vector3, intensity: number): void {
    this.addParticle(
      position,
      new Vector3(
        (Math.random() - 0.5) * 0.65,
        0.65 + intensity * 1.1,
        (Math.random() - 0.5) * 0.65
      ),
      intensity > 0.7 ? '#2b2a29' : '#57514b',
      0.95 + intensity * 0.65,
      0.22 + intensity * 0.08,
      1.05 + intensity * 0.4,
      1.1,
      0.08,
      0.22
    );
  }

  spawnDamageSparks(position: Vector3, intensity: number): void {
    const count = Math.max(3, Math.round(4 + intensity * 6));

    for (let index = 0; index < count; index += 1) {
      this.addParticle(
        position,
        new Vector3(
          (Math.random() - 0.5) * (2.8 + intensity * 2.4),
          1.2 + Math.random() * (1.4 + intensity * 1.6),
          (Math.random() - 0.5) * (2.8 + intensity * 2.4)
        ),
        index % 2 === 0 ? '#ffb347' : '#ffd89b',
        0.2 + Math.random() * 0.16,
        0.06,
        0.18,
        4.8,
        5.8,
        1.8
      );
    }
  }

  spawnExplosion(position: Vector3, intensity = 1): void {
    const fireCount = Math.max(10, Math.round(12 * intensity));
    const smokeCount = Math.max(6, Math.round(7 * intensity));

    for (let index = 0; index < fireCount; index += 1) {
      this.addParticle(
        position,
        new Vector3(
          (Math.random() - 0.5) * (5.6 + intensity * 2.4),
          1.6 + Math.random() * (4.2 + intensity * 1.8),
          (Math.random() - 0.5) * (5.6 + intensity * 2.4)
        ),
        index < fireCount * 0.45 ? '#ff9c52' : '#5e554c',
        index < fireCount * 0.45 ? 0.55 + intensity * 0.08 : 1.04 + intensity * 0.18,
        index < fireCount * 0.45 ? 0.24 : 0.32,
        index < fireCount * 0.45 ? 0.92 + intensity * 0.1 : 1.18,
        1.4,
        index < fireCount * 0.45 ? 1.05 : 0.45,
        1.2
      );
    }

    for (let index = 0; index < smokeCount; index += 1) {
      this.addParticle(
        position,
        new Vector3(
          (Math.random() - 0.5) * (4.8 + intensity * 1.8),
          1.8 + Math.random() * (2.6 + intensity * 0.9),
          (Math.random() - 0.5) * (4.8 + intensity * 1.8)
        ),
        '#50483f',
        1.1 + intensity * 0.35,
        0.12 + intensity * 0.04,
        0.08,
        1.4,
        5.6,
        2,
        true
      );
    }

    this.spawnDamageSmoke(position, Math.min(1.15, 0.7 + intensity * 0.25));
  }

  update(delta: number): void {
    for (let index = this.particles.length - 1; index >= 0; index -= 1) {
      const particle = this.particles[index];
      particle.life -= delta;

      if (particle.life <= 0) {
        this.disposeParticle(particle);
        this.particles.splice(index, 1);
        continue;
      }

      const progress = 1 - particle.life / particle.maxLife;
      particle.mesh.position.addScaledVector(particle.velocity, delta);
      particle.velocity.multiplyScalar(Math.max(0, 1 - particle.drag * delta));
      particle.velocity.y -= particle.gravity * delta;
      particle.mesh.scale.setScalar(particle.baseScale + particle.growRate * progress);
      particle.mesh.rotation.x += particle.spin * delta;
      particle.mesh.rotation.y += particle.spin * 0.7 * delta;

      const material = particle.mesh.material;

      if (material instanceof MeshBasicMaterial || material instanceof MeshStandardMaterial) {
        material.opacity = Math.max(0, 1 - progress);
      }
    }
  }

  dispose(): void {
    this.particles.splice(0).forEach((particle) => this.disposeParticle(particle));
    this.sphereGeometry.dispose();
    this.debrisGeometry.dispose();
  }

  private addParticle(
    position: Vector3,
    velocity: Vector3,
    color: ColorRepresentation,
    life: number,
    baseScale: number,
    growRate: number,
    drag: number,
    gravity: number,
    spin: number,
    debris = false
  ): void {
    const material = new MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 1
    });
    const mesh = new Mesh(debris ? this.debrisGeometry : this.sphereGeometry, material);
    mesh.position.copy(position);
    mesh.scale.setScalar(baseScale);
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    this.scene.add(mesh);
    this.particles.push({
      mesh,
      velocity,
      life,
      maxLife: life,
      baseScale,
      growRate,
      drag,
      gravity,
      spin
    });
  }

  private disposeParticle(particle: ParticleState): void {
    this.scene.remove(particle.mesh);

    const material = particle.mesh.material;

    if (material instanceof MeshBasicMaterial || material instanceof MeshStandardMaterial) {
      material.dispose();
    }
  }
}
