将外部坦克模型放到这个目录后，游戏会优先加载这些资源：

- `tiger-i.glb`
- `panther.glb`
- `t34-85.glb`
- `m4-sherman.glb`

推荐的 Sketchfab 后处理约定：

- 统一导出 `glb`
- 车体节点命名为 `Hull` / `Body` / `Chassis`
- 炮塔节点命名为 `Turret`
- 炮管节点命名为 `Gun` / `Barrel` / `Cannon`

如果模型缺少这些节点，运行时会自动回退到内置几何模型。
