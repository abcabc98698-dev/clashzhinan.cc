<div align="center">

# 🌐 Clash指南网 (clashzhinan.cc)

**2026 高速专线机场实测 · 全平台代理客户端指南 · 全球 PoP 延迟观测站 · 现代技术知识库**

[![Astro](https://img.shields.io/badge/Astro-7.4-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SEO Health](https://img.shields.io/badge/SEO_Score-98.5%2F100-brightgreen?style=flat-square&logo=google&logoColor=white)](https://clashzhinan.cc/)
[![GEO Ready](https://img.shields.io/badge/GEO-LLMs.txt_Enabled-blue?style=flat-square&logo=openai&logoColor=white)](https://clashzhinan.cc/llms.txt)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

[🌐 访问线上官网 (Production Site)](https://clashzhinan.cc/) • [📊 全球网络图志 (Traces)](https://clashzhinan.cc/traces) • [🚀 机场推荐库 (Brands)](https://clashzhinan.cc/brands) • [🤖 LLMs 语义上下文](https://clashzhinan.cc/llms.txt)

---

</div>

## 📖 项目简介 (Overview)

**Clash指南网 (`clashzhinan.cc`)** 是一个专注于现代跨境网络工程、IEPL 专线可观测性实测与科学上网技术选型的权威平台。

项目基于 **Astro 7 SSG 静态预渲染架构**，融合了暗黑极简观测站美学（Playfair Display + Inter）、零 JS 服务端 DOM 输出与端到端工业级 SEO/GEO 优化标准。旨在为个人与企业提供客观、透明、可验证的网络加速技术指南与排障手册。

```
                       ┌──────────────────────────────────────────────┐
                       │   Clash指南网 (clashzhinan.cc) 技术核心架构   │
                       └──────────────────────┬───────────────────────┘
                                              │
              ┌───────────────────────────────┼───────────────────────────────┐
              ▼                               ▼                               ▼
    【8 大核心技术专栏】              【全球 PoP 物理观测站】             【SEO / GEO 基础设施】
    • /jichang/ 机场选购              • 跨太平洋海缆登陆点              • 100% 结构化数据 Schema
    • /vpn/     VPN协议实测           • 光纤物理时延极值推导            • 动态 XML Sitemap 索引
    • /clash/   Mihomo规则集          • 晚高峰 4 层握手探针             • /go/[slug] 商业防连坐隔离
    • /tutorial/ 客户端排障           • 42 家机场实测雷达               • llms.txt 生成式引擎语料直供
```

---

## 🌟 核心功能与架构特性 (Features)

### 1. 🏛️ 8 大核心专栏体系 (Core Hub Pillars)
- **`/` [全景主门户]**：40,000+ 字级决策拓扑网、42 家机场矩阵、全平台客户端选型表、3 步新手快速上手 SOP。
- **`/jichang/` [机场推荐专栏]**：深度拆解企业级 IEPL 专线、BGP 隧道中转与公网直连的本质差异，提供晚高峰防卡顿、防跑路选购指南。
- **`/vpn/` [VPN 与协议实测]**：对比传统商业 VPN（WireGuard / OpenVPN）与现代专线代理，剖析 GFW 深度包检测（DPI）拦截阻断原理。
- **`/clash/` [Clash 与 Mihomo 专栏]**：深入解析 Clash Verge Rev、Mihomo Party 与 Sing-box 内核配置、TUN 模式虚拟网卡调优与分流策略组脚本编写。
- **`/nodes/` [节点与物理拓扑]**：基于石英玻璃光纤折射率（$n=1.468$）推导物理延迟极限，收录香港、日本、新加坡、美西机房实测指标。
- **`/tizi/` [梯子避坑指南]**：总结科学上网“三不碰”铁律与“主力专线 + 永不过期备用包”的终极容灾双持法则。
- **`/free/` [免费资源真相]**：深度揭露免费节点中间人劫持（MITM）、明文抓包与黑产肉鸡风险，推荐安全的低成本替代路线。
- **`/tutorial/` [使用实操教程]**：覆盖 Windows、macOS、iOS、Android 及路由器的图文配置教程与 8 大经典报错排障树。

### 2. 📡 全球网络观测站 (`/traces`)
- **交互式物理地图**：基于 Leaflet 与 OpenStreetMap，实时标定全球核心海底光缆登陆点（旧金山 Equinix SV1、东京 CCX、伦敦 Telehouse North 等）。
- **光缆物理学推导**：公开光在光纤中的传播速度计算公式（$v = c / n \approx 204,218\text{ km/s}$），提供科学的时延下限基准。
- **CLI 诊断实操**：内置 PowerShell、Linux MTR 与 NextTrace 路由追踪脚本，用户可自主复现端到端网络质量。

### 3. 🎯 工业级 SEO & GEO (生成式引擎) 全案
- **100% 结构化数据 (JSON-LD)**：全站页面严密覆盖 `WebSite`、`Organization`、`CollectionPage`、`Article`、`BreadcrumbList` 与 `FAQPage`，与前台可见 DOM 严格 1:1 吻合。
- **分级索引架构 (Tiered Indexation)**：精选 14 家顶级旗舰品牌进入 XML Sitemap；对次要长尾模板页自动注入 `noindex, follow`，彻底杜绝 Google“规模化内容滥用（Scaled Content Abuse）”降权。
- **GEO 大模型原生支持**：
  - 规范化分发 [`/llms.txt`](https://clashzhinan.cc/llms.txt) 与 [`/llms-full.txt`](https://clashzhinan.cc/llms-full.txt)。
  - 提供 `.md` 与 `.mdx` 双扩展名无死链映射，方便 Perplexity、OpenAI SearchGPT、Claude 直接抓取 Markdown 结构化语料。
- **商业跳板安全隔离**：所有推广链接统一走站内跳板 `/go/[slug]`，强制附带 `rel="nofollow sponsored noopener"`，且在 `robots.txt` 中严密屏蔽，杜绝外部连坐风险。

---

## 🛠️ 技术选型 (Tech Stack)

| 领域 | 核心技术 / 库 | 用途与说明 |
| :--- | :--- | :--- |
| **基础框架** | **[Astro 7.4](https://astro.build/)** | 极致响应速度、默认零 JS 输出、静态预渲染 (SSG) |
| **交互岛屿** | **[React 19.3](https://react.dev/)** | 用于客户端轻量交互组件（筛选搜索、地图、动态图表） |
| **样式工程** | **[Tailwind CSS 4.3](https://tailwindcss.com/)** | 现代 `@theme` 变量系统，原子化设计与深色模式自适应 |
| **动效呈现** | **[Motion 14](https://motion.dev/)** | 平滑的进场微交互与视口加载动效（服务端初始透明度锁定优化） |
| **地图呈现** | **[Leaflet](https://leafletjs.com/) + React-Leaflet** | 轻量级全球光缆机房交互式拓扑图志 |
| **离线搜索** | **[Pagefind 1.5](https://pagefind.app/)** | 本地静态全文字词索引，无需依赖外部搜索服务 |
| **排版公式** | **[KaTeX](https://katex.org/) + remark-math** | 快速渲染数学与物理光学公式 |
| **矢量图标** | **[Remix Icon](https://remixicon.com/)** | 现代精炼的 SVG 线性图标体系 |

---

## 📂 项目工程目录 (Repository Structure)

```text
clashzhinan.cc/
├── public/                       # 静态公开资源 (Favicon, 离线审计报告等)
├── src/
│   ├── components/               # 可复用组件库
│   │   ├── brands/               # 品牌库筛选卡片与交互组件
│   │   ├── traces/               # 全球延迟雷达、地图与路线探索器
│   │   ├── ui/                   # 导航栏、动效、文字渲染、卡片等 UI 组件
│   │   └── BaseHead.astro        # 全站统一 SEO Head（含站长验证与防转码Meta）
│   ├── content/                  # 内容集合 (Content Collections)
│   │   ├── blog/                 # 核心技术长文 (MDX 格式，超高信息密度)
│   │   ├── pages/                # 独立说明白皮书 (关于与测试方法论)
│   │   └── traces/               # 7 大 PoP 物理站坐标与遥测记录
│   ├── data/                     # 结构化数据库 (42 家机场品牌参数库)
│   ├── layouts/
│   │   └── Layout.astro          # 全局主布局 (导航栏、主题切换、单一Schema图谱)
│   ├── pages/                    # 路由体系
│   │   ├── index.astro           # 网站首页 (40,000+ 字全景决策门户)
│   │   ├── vpn/                  # VPN 专栏
│   │   ├── jichang/              # 机场推荐专栏
│   │   ├── clash/                # Clash 核心专栏
│   │   ├── nodes/                # 节点图志专栏
│   │   ├── tizi/                 # 梯子避坑专栏
│   │   ├── free/                 # 免费资源专栏
│   │   ├── tutorial/             # 使用教程专栏
│   │   ├── brands/               # 42 家机场详情页与筛选索引
│   │   ├── traces/               # 全球跨境网络观测站
│   │   ├── clients/              # 全平台客户端大全
│   │   ├── go/                   # 商业推广安全跳板
│   │   ├── raw/                  # 大模型专用 Raw Markdown 镜像端点
│   │   ├── robots.txt.ts         # 动态搜索引擎抓取规则
│   │   ├── sitemap.xml           # 动态站点地图索引
│   │   └── llms.txt.ts           # GEO 大模型发现协议端点
│   ├── styles/                   # 全局样式与自定义字体
│   └── config.ts                 # 网站核心配置 (主域名、导航、站长验证)
├── astro.config.mjs              # Astro 配置文件 (Sitemap 分块与路径过滤集成)
└── package.json                  # 项目依赖与编译脚本
```

---

## 🚀 本地开发与构建 (Quick Start)

### 1. 环境准备
确保您的运行环境中已安装：
- **Node.js** >= 22.22.0
- **pnpm** >= 9.0.0

### 2. 克隆项目与安装依赖
```bash
git clone https://github.com/abcabc98698-dev/clashzhinan.cc.git
cd clashzhinan.cc

# 安装生产与开发依赖
pnpm install
```

### 3. 启动本地开发服务
```bash
pnpm run dev
# 本地服务将在 http://localhost:4321 运行并支持热模块重载 (HMR)
```

### 4. 生产构建与静态生成
```bash
# 执行完整 SSG 预渲染与 Pagefind 索引生成
pnpm run build

# 本地预览生产构建产物
pnpm run preview
```

---

## 🚢 生产部署 (Deployment)

本项目构建输出为纯静态目录（`dist/`），可无缝部署至任意现代静态托管平台：

### 方案 A：Cloudflare Pages (推荐)
- **Framework preset**: `Astro`
- **Build command**: `pnpm run build`
- **Build output directory**: `dist`
- **环境变量**: `NODE_VERSION = 22.22.0`

### 方案 B：Vercel / Netlify
- 直接导入 GitHub 仓库，选择 Astro 预设，构建命令使用 `pnpm run build`，输出目录指向 `dist`。

### 方案 C：传统 Nginx 服务器
将 `dist/` 目录上传至服务器网站根目录，并在 Nginx 配置文件中加入：
```nginx
server {
    listen 443 ssl http2;
    server_name clashzhinan.cc;

    root /var/www/clashzhinan.cc/dist;
    index index.html;

    # 静态资源强缓存
    location ~* \.(?:css|js|woff2?|svg|png|jpg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 目录尾部斜杠自动规范
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 📄 开源许可与免责声明 (License & Disclaimer)

1. **开源协议**：本项目源码基于 [MIT License](LICENSE) 协议开源。
2. **免责声明**：本项目所有评测数据与技术分析均基于客观网络实验室测试结果，仅供学术研究、网络运维及合规跨境商务交流参考。请遵守用户所在地区的法律法规，文明合规使用网络技术。

---

<div align="center">

**Clash指南网 · 专注于真实且纯粹的跨境网络技术探索**  
© 2026 [clashzhinan.cc](https://clashzhinan.cc/). All Rights Reserved.

</div>
