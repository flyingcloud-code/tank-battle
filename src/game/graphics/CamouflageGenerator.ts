import {
  CanvasTexture,
  LinearMipmapLinearFilter,
  NoColorSpace,
  RepeatWrapping,
  SRGBColorSpace,
  Texture
} from 'three';

export type Nation = 'GER' | 'USA' | 'UK' | 'USSR';

export interface TankSurface {
  albedo: Texture;
  normal: Texture;
  roughness: Texture;
  metalness: Texture;
  damage: Texture;
  marking: Texture;
  dispose(): void;
}

const CAMO_COLORS: Record<Nation, string[]> = {
  GER: ['#6d744a', '#96713d', '#3b4a2a'],
  USA: ['#56683f', '#7b6a44', '#384028'],
  UK: ['#435537', '#776143', '#202920'],
  USSR: ['#53683c', '#766147', '#dad9d1']
};

const NATION_MARKINGS: Record<Nation, { symbol: string; code: string }> = {
  GER: { symbol: 'cross', code: '331' },
  USA: { symbol: 'star', code: 'A12' },
  UK: { symbol: 'roundel', code: 'B07' },
  USSR: { symbol: 'red-star', code: '214' }
};

export class CamouflageGenerator {
  static generate(nation: Nation, tankId: string, size = 2048): TankSurface {
    const baseCanvas = this.createCanvas(size);
    const markingCanvas = this.createCanvas(size);
    const damageCanvas = this.createCanvas(size);
    const normalCanvas = this.createCanvas(size);
    const roughnessCanvas = this.createCanvas(size);
    const metalnessCanvas = this.createCanvas(size);

    const baseContext = this.getContext(baseCanvas);
    const markingContext = this.getContext(markingCanvas);
    const damageContext = this.getContext(damageCanvas);
    const normalContext = this.getContext(normalCanvas);
    const roughnessContext = this.getContext(roughnessCanvas);
    const metalnessContext = this.getContext(metalnessCanvas);

    this.paintAlbedo(baseContext, nation, tankId, size);
    this.paintMarkings(markingContext, nation, tankId, size);
    this.paintDamage(damageContext, size);
    baseContext.drawImage(markingCanvas, 0, 0);
    baseContext.globalAlpha = 0.48;
    baseContext.drawImage(damageCanvas, 0, 0);
    baseContext.globalAlpha = 1;

    this.paintNormal(normalContext, size);
    this.paintRoughness(roughnessContext, size);
    this.paintMetalness(metalnessContext, size);

    const textures = {
      albedo: this.makeTexture(baseCanvas, SRGBColorSpace),
      normal: this.makeTexture(normalCanvas, NoColorSpace),
      roughness: this.makeTexture(roughnessCanvas, NoColorSpace),
      metalness: this.makeTexture(metalnessCanvas, NoColorSpace),
      damage: this.makeTexture(damageCanvas, NoColorSpace),
      marking: this.makeTexture(markingCanvas, SRGBColorSpace)
    };

    return {
      ...textures,
      dispose(): void {
        Object.values(textures).forEach((texture) => texture.dispose());
      }
    };
  }

  private static paintAlbedo(
    context: CanvasRenderingContext2D,
    nation: Nation,
    tankId: string,
    size: number
  ): void {
    const palette = CAMO_COLORS[nation];
    context.fillStyle = palette[0];
    context.fillRect(0, 0, size, size);

    for (let index = 0; index < 26; index += 1) {
      const color = palette[(index % (palette.length - 1)) + 1];
      this.drawBlob(context, size, color, 0.14 + Math.random() * 0.08);
    }

    for (let index = 0; index < 10; index += 1) {
      const lineWidth = 2 + Math.random() * 6;
      context.strokeStyle = `rgba(14, 18, 20, ${0.08 + Math.random() * 0.08})`;
      context.lineWidth = lineWidth;
      context.beginPath();
      context.moveTo(Math.random() * size, Math.random() * size);
      context.lineTo(Math.random() * size, Math.random() * size);
      context.stroke();
    }

    for (let index = 0; index < 360; index += 1) {
      context.fillStyle = 'rgba(255,255,255,0.035)';
      context.fillRect(
        Math.random() * size,
        Math.random() * size,
        2 + Math.random() * 6,
        1 + Math.random() * 4
      );
    }

    const accentLabel = tankId.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
    context.save();
    context.globalAlpha = 0.08;
    context.fillStyle = '#f6f1dd';
    context.font = `600 ${Math.floor(size * 0.16)}px sans-serif`;
    context.rotate(-0.16);
    context.fillText(accentLabel, size * 0.12, size * 0.5);
    context.restore();
  }

  private static paintMarkings(
    context: CanvasRenderingContext2D,
    nation: Nation,
    tankId: string,
    size: number
  ): void {
    const marking = NATION_MARKINGS[nation];
    const labels = [
      `${marking.code}-${tankId.slice(-2).toUpperCase()}`,
      `${tankId.replace(/-/g, ' ').toUpperCase().slice(0, 10)}`
    ];

    context.save();
    context.globalCompositeOperation = 'multiply';
    context.fillStyle = nation === 'USSR' ? 'rgba(209, 74, 67, 0.85)' : 'rgba(215, 210, 198, 0.82)';
    context.strokeStyle = 'rgba(35, 26, 12, 0.35)';
    context.lineWidth = 4;
    this.drawInsignia(context, marking.symbol, size * 0.18, size * 0.24, size * 0.08);
    this.drawInsignia(context, marking.symbol, size * 0.82, size * 0.72, size * 0.08);
    context.restore();

    context.save();
    context.globalCompositeOperation = 'overlay';
    context.fillStyle = 'rgba(245, 238, 215, 0.65)';
    context.font = `600 ${Math.floor(size * 0.06)}px "Courier New", monospace`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(labels[0], size * 0.25, size * 0.72);
    context.fillText(labels[1], size * 0.72, size * 0.22);
    context.restore();
  }

  private static paintDamage(context: CanvasRenderingContext2D, size: number): void {
    context.clearRect(0, 0, size, size);

    for (let index = 0; index < 180; index += 1) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const length = 12 + Math.random() * 44;
      context.strokeStyle = `rgba(33, 24, 18, ${0.05 + Math.random() * 0.18})`;
      context.lineWidth = 1 + Math.random() * 2;
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x + Math.random() * length, y + (Math.random() - 0.5) * 12);
      context.stroke();
    }

    for (let index = 0; index < 42; index += 1) {
      const radius = 8 + Math.random() * 24;
      const gradient = context.createRadialGradient(
        Math.random() * size,
        Math.random() * size,
        radius * 0.1,
        Math.random() * size,
        Math.random() * size,
        radius
      );
      gradient.addColorStop(0, 'rgba(54, 45, 39, 0.24)');
      gradient.addColorStop(1, 'rgba(54, 45, 39, 0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, size, size);
    }
  }

  private static paintNormal(context: CanvasRenderingContext2D, size: number): void {
    context.fillStyle = 'rgb(128, 128, 255)';
    context.fillRect(0, 0, size, size);

    for (let index = 0; index < 20; index += 1) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const width = size * (0.06 + Math.random() * 0.16);
      const height = 4 + Math.random() * 10;
      context.fillStyle = `rgb(${118 + Math.random() * 22}, ${118 + Math.random() * 22}, 255)`;
      context.fillRect(x, y, width, height);
      context.fillStyle = 'rgba(140, 140, 255, 0.8)';
      context.fillRect(x, y + height, width, 2);
    }

    for (let index = 0; index < 240; index += 1) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      context.fillStyle = 'rgb(132, 132, 255)';
      context.beginPath();
      context.arc(x, y, 1 + Math.random() * 2.4, 0, Math.PI * 2);
      context.fill();
    }
  }

  private static paintRoughness(context: CanvasRenderingContext2D, size: number): void {
    context.fillStyle = 'rgb(180, 180, 180)';
    context.fillRect(0, 0, size, size);

    for (let index = 0; index < 380; index += 1) {
      const shade = 118 + Math.floor(Math.random() * 80);
      context.fillStyle = `rgb(${shade}, ${shade}, ${shade})`;
      context.fillRect(
        Math.random() * size,
        Math.random() * size,
        3 + Math.random() * 10,
        3 + Math.random() * 10
      );
    }
  }

  private static paintMetalness(context: CanvasRenderingContext2D, size: number): void {
    context.fillStyle = 'rgb(58, 58, 58)';
    context.fillRect(0, 0, size, size);

    for (let index = 0; index < 32; index += 1) {
      const shade = 90 + Math.floor(Math.random() * 80);
      context.fillStyle = `rgb(${shade}, ${shade}, ${shade})`;
      context.fillRect(
        Math.random() * size,
        Math.random() * size,
        size * (0.04 + Math.random() * 0.1),
        8 + Math.random() * 16
      );
    }
  }

  private static drawInsignia(
    context: CanvasRenderingContext2D,
    symbol: string,
    x: number,
    y: number,
    size: number
  ): void {
    if (symbol === 'cross') {
      context.fillRect(x - size * 0.12, y - size * 0.5, size * 0.24, size);
      context.fillRect(x - size * 0.5, y - size * 0.12, size, size * 0.24);
      return;
    }

    if (symbol === 'star' || symbol === 'red-star') {
      this.drawStar(context, x, y, size, size * 0.42, 5);
      return;
    }

    context.beginPath();
    context.arc(x, y, size * 0.54, 0, Math.PI * 2);
    context.stroke();
    context.beginPath();
    context.arc(x, y, size * 0.3, 0, Math.PI * 2);
    context.fill();
  }

  private static drawStar(
    context: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    outerRadius: number,
    innerRadius: number,
    points: number
  ): void {
    context.beginPath();

    for (let index = 0; index < points * 2; index += 1) {
      const angle = (Math.PI * index) / points - Math.PI / 2;
      const radius = index % 2 === 0 ? outerRadius : innerRadius;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;

      if (index === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    }

    context.closePath();
    context.fill();
  }

  private static drawBlob(
    context: CanvasRenderingContext2D,
    size: number,
    color: string,
    scale: number
  ): void {
    const centerX = Math.random() * size;
    const centerY = Math.random() * size;
    const radius = size * scale;

    context.fillStyle = color;
    context.beginPath();

    for (let point = 0; point <= 7; point += 1) {
      const angle = (Math.PI * 2 * point) / 7;
      const offset = radius * (0.7 + Math.random() * 0.6);
      const x = centerX + Math.cos(angle) * offset;
      const y = centerY + Math.sin(angle) * offset;

      if (point === 0) {
        context.moveTo(x, y);
      } else {
        context.quadraticCurveTo(
          centerX + Math.cos(angle - 0.35) * offset,
          centerY + Math.sin(angle - 0.35) * offset,
          x,
          y
        );
      }
    }

    context.closePath();
    context.fill();
  }

  private static makeTexture(
    canvas: HTMLCanvasElement,
    colorSpace: typeof SRGBColorSpace | typeof NoColorSpace
  ): Texture {
    const texture = new CanvasTexture(canvas);
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(1, 1);
    texture.generateMipmaps = true;
    texture.minFilter = LinearMipmapLinearFilter;
    texture.colorSpace = colorSpace;
    texture.needsUpdate = true;
    return texture;
  }

  private static createCanvas(size: number): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    return canvas;
  }

  private static getContext(canvas: HTMLCanvasElement): CanvasRenderingContext2D {
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Unable to create camouflage canvas.');
    }

    return context;
  }
}
