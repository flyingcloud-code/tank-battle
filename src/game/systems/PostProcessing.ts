import { ACESFilmicToneMapping, SRGBColorSpace, Vector2, WebGLRenderer } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';

import { CameraMode, type CameraController } from '../controllers/CameraController';
import type { Scene } from 'three';

export class PostProcessing {
  private readonly composer: EffectComposer;
  private readonly bloomPass: UnrealBloomPass;
  private readonly dofPass: BokehPass;
  private readonly fxaaPass: ShaderPass;
  private readonly outputPass: OutputPass;

  constructor(
    renderer: WebGLRenderer,
    scene: Scene,
    cameraController: CameraController,
    isMobile: boolean
  ) {
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.toneMappingExposure = isMobile ? 1.0 : 1.08;

    this.composer = new EffectComposer(renderer);
    this.composer.addPass(new RenderPass(scene, cameraController.camera));

    this.bloomPass = new UnrealBloomPass(
      new Vector2(window.innerWidth, window.innerHeight),
      isMobile ? 0.25 : 0.38,
      0.7,
      0.78
    );
    this.composer.addPass(this.bloomPass);

    this.dofPass = new BokehPass(scene, cameraController.camera, {
      focus: 40,
      aperture: isMobile ? 0.000015 : 0.000025,
      maxblur: isMobile ? 0.001 : 0.0015
    });
    this.composer.addPass(this.dofPass);

    this.fxaaPass = new ShaderPass(FXAAShader);
    this.composer.addPass(this.fxaaPass);

    this.outputPass = new OutputPass();
    this.composer.addPass(this.outputPass);

    this.resize(window.innerWidth, window.innerHeight, Math.min(window.devicePixelRatio, 2));
  }

  resize(width: number, height: number, pixelRatio: number): void {
    this.composer.setPixelRatio(pixelRatio);
    this.composer.setSize(width, height);
    this.bloomPass.setSize(width, height);
    this.fxaaPass.material.uniforms.resolution.value.set(
      1 / (width * pixelRatio),
      1 / (height * pixelRatio)
    );
  }

  updateCameraMode(mode: CameraMode): void {
    const focus = mode === CameraMode.POV ? 30 : mode === CameraMode.ThirdPerson ? 50 : 80;
    const material = (this.dofPass as unknown as { materialBokeh?: { uniforms?: { focus?: { value: number } } } }).materialBokeh;

    if (material?.uniforms?.focus) {
      material.uniforms.focus.value = focus;
    }
  }

  render(delta: number): void {
    this.composer.render(delta);
  }
}
