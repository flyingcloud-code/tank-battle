# 二战坦克大战 - Phase 3.5

基于 `Three.js + Cannon-es + Vite + TypeScript` 的 Web 二战坦克战场原型，当前版本在 Phase 3 基础上补齐了载具动态表现、击中反馈和真实模型接入链路。

## 功能

- `GLTFLoader` 模型加载器，支持 `GLTF/GLB`、缓存和异步加载
- Tiger I、Panther、T-34/85、M4 Sherman 的专属外观模型，外部资源缺失时自动回退
- 程序生成坦克 PBR 贴图：迷彩、法线、粗糙度、金属度、编号和战损
- 履带滚动动画、差速转向、加减速惯性、刹车前倾和车体震动
- 炮管后坐力、开火抖动、受损烟雾、受损火花和更强的爆炸表现
- 粒子系统：炮口火焰、命中火花、履带尘土、引擎烟雾、受损烟火、爆炸碎片
- 环境增强：天空环境贴图、起伏地表、掩体和草地植被
- 后期处理：景深、Bloom、色调映射、FXAA
- 三种视角、AI 敌人、伤害系统、HUD 和移动端虚拟摇杆

## 启动

```bash
npm install
npm run dev
```

## 操作

- `W / A / S / D`: 移动与转向
- 鼠标移动: 炮塔与炮管瞄准
- 点击画面: 锁定鼠标
- `V`: 切换 POV / 第三人称 / 俯视
- 鼠标左键 / `Space`: 开火
- 选车界面按 `1-9`: 快速选择当前国家坦克

## 外部模型接入

Phase 3.5 会优先尝试加载以下路径的外部模型：

- `public/models/tanks/tiger-i.glb`
- `public/models/tanks/panther.glb`
- `public/models/tanks/t34-85.glb`
- `public/models/tanks/m4-sherman.glb`

Sketchfab 模型导出后建议把节点重命名为以下之一，便于自动绑定炮塔和炮管：

- 车体: `Hull` / `Body` / `Chassis`
- 炮塔: `Turret` / `Tower` / `Mantlet`
- 炮管: `Gun` / `Barrel` / `Cannon` / `Main_Gun`

模型尺寸会在加载时按宽度、深度和高度自动归一化到现有碰撞箱上。由于 Sketchfab 资源通常带有不同授权，仓库默认不直接附带这些 `.glb` 文件；把资源放到 `public/models/tanks/` 后会自动替换内置几何体外观。
