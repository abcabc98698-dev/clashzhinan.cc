# Clash指南 (ClashZhinan)

> 专注于网络技术探索、规则架构解析与数字漫游的极简主义开放知识库与数字画廊。

## 特性

- **极简主义美学**：玻璃拟态（Glassmorphism）与严谨排版系统
- **原生暗色模式**：基于原生 View Transitions API 的平滑过渡
- **摄影与视觉画廊**：
  - 16:10 画册流布局
  - 双浏览模式：**Stage**（沉浸舞台）与 **Wall**（瀑布流网格）
  - 全屏无缝 Lightbox 视图
- **漫游图志 (Traces)**：
  - 基于 Leaflet 与矢量拓扑渲染的漫游日志
  - 路径感知、环境基准数据与坐标记录
- **双重搜索引擎**：
  - 基于 **Pagefind** 的轻量级本地客户端全文搜索
  - 基于 **Model Context Protocol (MCP)** 与语义向量数据库的 AI 搜索支持
- **现代前端全栈**：Astro 7 + React 19 + Tailwind CSS 4 + TypeScript 6 + Motion 14
- **全方位 SEO 优化**：Schema.org JSON-LD 结构化数据、自动化 XML Sitemap、OpenGraph 与 RSS 订阅

## 技术栈

- **框架**: [Astro 7.4](https://astro.build/) - 默认零 JS 静态输出
- **UI 组件**: [React 19.3](https://react.dev/) - 交互式客户端 Islands
- **样式**: [Tailwind CSS 4](https://tailwindcss.com/) - 现代 CSS 变量与设计令牌
- **动效**: [Motion 14](https://motion.dev/) (Framer Motion)
- **图标**: [Remix Icon](https://remixicon.com/) (`@remixicon/react`)
- **地图**: [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)
- **本地搜索**: [Pagefind](https://pagefind.app/)

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器 (默认端口 http://localhost:4321)
pnpm run dev

# 生产环境构建与全量索引
pnpm run build
```

## 许可证

MIT © Clash指南
