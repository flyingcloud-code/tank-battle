# 二战坦克大战 - Phase 5

基于 `Three.js + Cannon-es + Vite + TypeScript` 的 Web 二战坦克战场游戏，支持多人在线对战、AI 敌人、多种战场环境和天气系统。

## 功能特性

### 核心玩法
- **WASD 驾驶**：支持前进、后退、转向、差速转向
- **炮塔瞄准**：鼠标控制炮塔旋转和炮管俯仰
- **开火系统**：支持炮弹飞行、命中判定、伤害计算
- **多种视角**：POV 第一人称、第三人称、战术俯视
- **AI 敌人**：智能寻路、攻击、躲避

### 坦克系统
- 德国：Panzer IV、Panther、Tiger I、Tiger II
- 美国：M4 Sherman、M26 Pershing、M36 Jackson
- 苏联：T-34/85、IS-2、SU-85
- 英国：Cromwell、Churchill、Firefly

### 战场环境
- **场景**：废弃工厂、城市废墟、乡村战场
- **天气**：晴空、暴雨、浓雾、黄昏
- **地形**：草地、泥地、雪地，影响坦克机动性

### 视觉效果
- PBR 材质：迷彩、法线、粗糙度、金属度
- 履带滚动动画、车体震动、炮管后坐力
- 粒子系统：炮口火焰、命中火花、爆炸碎片
- 后期处理：Bloom、色调映射、FXAA

## 最近修复 (2025-04-05)

### 速度优化
- 提升最高车速 **6 倍**，解决坦克移动过慢问题
- 加速响应提升 **3.2 倍**，驾驶手感更流畅
- 刹车响应同步优化，保持操控稳定性

### 渲染层级简化
- 炮塔层级从 **4 层简化到 2 层**（车体 + 炮塔）
- 移除独立的 `gunGroup`，合并到 `turretGroup` 内部
- 使用 `Object3D` 替代 `Group` 减少场景图层级

## 启动

```bash
npm install
npm run dev
```

## 操作

| 按键 | 功能 |
|------|------|
| `W / A / S / D` | 移动与转向 |
| 鼠标移动 | 炮塔与炮管瞄准 |
| 鼠标左键 / `Space` | 开火 |
| `V` | 切换视角 |
| `H` | 开启/关闭准星 |
| `1-4` | 快速选择坦克 |
| `Enter` | 进入战场 |

## 技术栈

- **渲染**：Three.js + WebGL 2
- **物理**：Cannon-es
- **构建**：Vite + TypeScript
- **样式**：Tailwind CSS
- **部署**：Vercel

## 在线体验

https://tank-battle-ui-fix.vercel.app

## 模型接入

支持加载外部 GLTF/GLB 模型，放置到 `public/models/tanks/` 目录：

- 车体节点：`Hull` / `Body` / `Chassis`
- 炮塔节点：`Turret` / `Tower` / `Mantlet`
- 炮管节点：`Gun` / `Barrel` / `Cannon`

## License

MIT
