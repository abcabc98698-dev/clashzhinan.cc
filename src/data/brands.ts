import type { AirportBrand } from '@/types/brand';

export const AIRPORT_BRANDS: AirportBrand[] = [
    {
        slug: "guangsu",
        name: "光速云",
        affUrl: "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
        goRoute: "/go/guangsu",
        foundedYear: "2020",
        entryPrice: "约 ¥8/月 (年付¥99)",
        couponCode: "AMM",
        discountDesc: "专属优惠码 AMM，年付门槛低至约 8 元/月",
        lines: ["IEPL专线", "企业级内网专线", "全球IPLC"],
        protocols: ["VLESS"],
        clientMode: "提供自研客户端 + 支持第三方订阅导入 (Clash / Shadowrocket)",
        nodesSummary: "香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2、英法德土泰巴等",
        speedTests: [
            { node: "香港 IEPL 01", latency: "22ms", speed: "529Mbps" },
            { node: "台湾 专线 01", latency: "41ms", speed: "114Mbps" },
            { node: "新加坡 专线 01", latency: "46ms", speed: "387Mbps" },
            { node: "日本 东京 01", latency: "57ms", speed: "135Mbps" },
            { node: "美国 洛杉矶 01", latency: "143ms", speed: "18Mbps" }
        ],
        streamingAndAI: {
            supported: ["Claude", "Netflix", "Disney+", "YouTube 4K", "HBO Max", "TikTok", "Spotify"],
            partial: ["ChatGPT (部分节点可用)", "Gemini (视节点状态而定)"]
        },
        highlights: [
            "双线路架构：企业级 IEPL 专线 + 专网调度，单节点最高 2.5Gbps 带宽",
            "致敬斯诺克 147 永久套餐：¥147 一次性付费，247GB 永不过期",
            "全客户端覆盖：支持自研客户端，同时兼容 Clash、Shadowrocket 等主流订阅",
            "老牌运营：2020 年稳定运营至今，兼顾晚高峰低延迟与跨境流媒体解锁"
        ],
        summary: "光速云在综合型与高性价比机场推荐中具备极高竞争力。99元/年的轻量套餐拉低了专线门槛，其特色147永久套餐更是轻度用户的防过期神器。支持企业级跨境业务与全平台设备。",
        plans: [
            { name: "光速云·致敬斯诺克147永久套餐", billing: "一次性付费", price: "¥147", traffic: "247GB", period: "不过期", notes: "单节点最高2.5Gbps，办公/邮件/聊天/轻度视频神器" },
            { name: "光速云·轻量版", billing: "年付", price: "¥99", traffic: "69GB", period: "每月", notes: "折合约 8 元/月，高性价比入门专线" },
            { name: "光速云·极速版", billing: "月付", price: "¥25", traffic: "168GB", period: "每月", notes: "全球IPLC专线，全节点1倍率，单节点最高2.5Gbps" },
            { name: "光速云·流光版", billing: "月付", price: "¥34", traffic: "238GB", period: "每月", notes: "畅享海外4K视频与大流量下载" },
            { name: "光速云·量子版", billing: "月付", price: "¥68", traffic: "500GB", period: "每月", notes: "高带宽密集作业、多终端协同" },
            { name: "光速云·无界版", billing: "月付", price: "¥138", traffic: "900GB", period: "每月", notes: "超大容量团队与重度用户首选" },
            { name: "光速云·定制套餐", billing: "月付", price: "¥680", traffic: "500GB", period: "每月", notes: "独享原生IP与独立带宽，线下按需部署" }
        ],
        suitableFor: ["注重晚高峰抗波动与低延迟的用户", "需要不过期备用流量的轻度用户", "追求高性价比 IEPL 专线的个人与小微电商", "多端设备同时在线（不限设备数）"],
        unsuitableFor: ["需要按天短期临时体验且要求可退款的用户（特殊套餐不支持退款）"],
        tier: 1,
        isFeatured: true,
        tagline: "2020年老牌综合旗舰 · IEPL专线 · 致敬斯诺克永久套餐 · 专属客户端与Clash双兼容"
    },
    {
        slug: "feimao",
        name: "飞猫云",
        affUrl: "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
        goRoute: "/go/feimao",
        foundedYear: "2023",
        entryPrice: "约 ¥7/月 (年付¥84)",
        couponCode: "flycat888",
        discountDesc: "使用优惠码 flycat888 获取专属优惠",
        lines: ["优质中转", "BGP优化"],
        protocols: ["Shadowsocks", "VLESS"],
        clientMode: "专属客户端模式 (下载登录即用，免配订阅)",
        nodesSummary: "覆盖亚太、欧美等主流热门地区节点",
        speedTests: [
            { node: "香港 节点 01", latency: "21ms", speed: "526Mbps" },
            { node: "台湾 节点 01", latency: "41ms", speed: "116Mbps" },
            { node: "新加坡 节点 01", latency: "45ms", speed: "413Mbps" },
            { node: "日本 节点 01", latency: "54ms", speed: "138Mbps" },
            { node: "美国 节点 01", latency: "178ms", speed: "14Mbps" }
        ],
        streamingAndAI: {
            supported: ["ChatGPT", "Claude", "Netflix", "Disney+", "YouTube", "HBO Max", "TikTok", "Spotify"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
            "新手友好度高：专属客户端一键登录，无需手动挑客户端和导入订阅",
            "超低入门预算：年付仅需 ¥84（折合约 7 元/月）",
            "不限时套餐可选：提供 ¥680 1000GB 一次性不过期大包",
            "全场景流媒体与主流 AI 访问覆盖"
        ],
        summary: "飞猫云是新手机场推荐中的代表性产品。走的是极简客户端路线，彻底免除 Clash 规则配置困扰。非常适合作为日常刷视频、查资料或主力/备用轻量梯子。",
        plans: [
            { name: "飞猫·学生版", billing: "年付", price: "¥84", traffic: "50GB", period: "每月", notes: "新手高性价比入门首选" },
            { name: "飞猫·星耀版", billing: "月付", price: "¥25", traffic: "150GB", period: "每月", notes: "日常主力娱乐套餐" },
            { name: "飞猫·星环版", billing: "月付", price: "¥45", traffic: "300GB", period: "每月", notes: "进阶流量畅玩" },
            { name: "飞猫·不限时套餐", billing: "一次性付费", price: "¥680", traffic: "1000GB", period: "一次性", notes: "长周期备用保障" }
        ],
        suitableFor: ["嫌配订阅太麻烦的纯小白新手", "看重客户端一键连接的轻度用户", "学生党与预算有限人群"],
        unsuitableFor: ["需要自定义极高精细度分流规则的高阶路由玩家"],
        tier: 2,
        tagline: "极简专属客户端 · 登录即用 · 免配订阅新手首选"
    },
    {
        slug: "weifeng",
        name: "微风网络",
        affUrl: "https://edp01.breezenetaff.com/#/?code=t3huofyI",
        goRoute: "/go/weifeng",
        foundedYear: "2023",
        entryPrice: "约 ¥11.4/月 (年付¥137)",
        couponCode: "flat888",
        discountDesc: "使用优惠码 flat888 可享立减折扣",
        lines: ["IEPL专线"],
        protocols: ["VLESS"],
        clientMode: "支持主流第三方客户端订阅导入",
        nodesSummary: "香港、新加坡、日本、美国等多地原生 IP 节点",
        speedTests: [
            { node: "香港 IEPL 01", latency: "25ms", speed: "546Mbps" },
            { node: "台湾 节点 01", latency: "40ms", speed: "115Mbps" },
            { node: "新加坡 专线 01", latency: "43ms", speed: "384Mbps" },
            { node: "日本 东京 01", latency: "54ms", speed: "131Mbps" },
            { node: "美国 节点 01", latency: "167ms", speed: "17Mbps" }
        ],
        streamingAndAI: {
            supported: ["ChatGPT", "Claude", "Netflix", "Disney+", "YouTube", "HBO Max", "TikTok", "Spotify"],
            partial: ["Gemini"]
        },
        highlights: [
            "IEPL 专线保障：告别公网拥堵，稳定连接香港与亚太核心节点",
            "原生 IP 覆盖：有效降低流媒体风控与 AI 账号封禁概率",
            "客服保障：7×24 小时在线支持，夜间 AI 客服实时值守",
            "价格亲民：¥137/年 拥有每月 100GB 纯正专线"
        ],
        summary: "微风网络是高性价比 IEPL 专线机场的典范。以 11 元/月的门槛提供专线品质与 VLESS 协议，原生 IP 节点对 Netflix 与 ChatGPT 支持极佳，客服口碑在这个价位段尤为突出。",
        plans: [
            { name: "清风 (Breeze)", billing: "年付", price: "¥137", traffic: "100GB", period: "每月", notes: "纯正 IEPL 专线入门" },
            { name: "乘风 (Riding)", billing: "月付", price: "¥27", traffic: "200GB", period: "每月", notes: "月付弹性体验" },
            { name: "破风 (Breaking)", billing: "月付", price: "¥57", traffic: "500GB", period: "每月", notes: "多终端重度用量" },
            { name: "信风·不限时", billing: "一次性付费", price: "¥200", traffic: "270GB", period: "一次性", notes: "不过期应急储备" }
        ],
        suitableFor: ["追求专线品质但预算控制在百元出头的用户", "需要原生 IP 访问海外流媒体与 AI 的办公族"],
        unsuitableFor: ["每天动辄消耗几十 GB 的超重度下载用户（大包单价相对较高）"],
        tier: 3,
        tagline: "入门级 IEPL 专线标杆 · 原生 IP 节点 · 7×24小时客服响应"
    },
    {
        slug: "muguang",
        name: "暮光加速",
        affUrl: "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
        goRoute: "/go/muguang",
        foundedYear: "2023",
        entryPrice: "¥20/月 (120GB)",
        couponCode: "muguang5555",
        discountDesc: "使用优惠码 muguang5555 获取多重优惠",
        lines: ["BGP智能调度", "专线级出口"],
        protocols: ["VLESS", "Trojan"],
        clientMode: "覆盖 Windows/macOS/iOS/Android/Linux 全平台客户端",
        nodesSummary: "香港、台湾、新加坡、日本、美国等全球骨干 PoP",
        speedTests: [
            { node: "香港 BGP专线 01", latency: "26ms", speed: "509Mbps" },
            { node: "台湾 专线 01", latency: "40ms", speed: "107Mbps" },
            { node: "新加坡 优化 01", latency: "43ms", speed: "419Mbps" },
            { node: "日本 东京 01", latency: "53ms", speed: "150Mbps" },
            { node: "美国 专线 01", latency: "160ms", speed: "19Mbps" }
        ],
        streamingAndAI: {
            supported: ["ChatGPT", "Claude", "Netflix", "Disney+", "YouTube", "HBO Max", "TikTok", "Spotify"],
            partial: ["Gemini"]
        },
        highlights: [
            "BGP 智能调度：专线级出口架构，主打全时段稳定与极低抖动",
            "多设备无限制：支持多设备跨平台同时在线，团队协作友好",
            "7×24 小时真人客服：提供及时的跨境网络故障排查与技术支持",
            "套餐跨度广泛：120GB 到 1500GB 丰富档位，支持独享私人定制"
        ],
        summary: "暮光加速面向个人多设备与小团队跨境协作场景。BGP 智能动态调度有效避开公网高峰波动，多端同时在线能力让多设备拥有者无需担心设备锁死。",
        plans: [
            { name: "【暮光·基础版】", billing: "月付", price: "¥20", traffic: "120GB", period: "每月", notes: "多端同时在线" },
            { name: "【暮光·标准版】", billing: "月付", price: "¥40", traffic: "240GB", period: "每月", notes: "中度办公与娱乐" },
            { name: "【暮光·旗舰版】", billing: "月付", price: "¥100", traffic: "700GB", period: "每月", notes: "小团队协同办公" },
            { name: "独享私人定制节点", billing: "月付", price: "¥600", traffic: "500GB", period: "每月", notes: "企业独立专线出口" }
        ],
        suitableFor: ["拥有电脑、手机、平板等多台设备同时在线的用户", "远程外贸与跨境团队", "看重真人客服响应速度的用户"],
        unsuitableFor: ["纯粹寻找个位数月付极限廉价节点的人群"],
        tier: 4,
        tagline: "BGP 智能调度专线 · 全平台跨端支持 · 多设备不限连接"
    },
    {
        slug: "dalaoyun",
        name: "大佬云",
        affUrl: "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
        goRoute: "/go/dalaoyun",
        foundedYear: "2024",
        entryPrice: "约 ¥5.6/月 (年付60GB)",
        couponCode: "dly888",
        discountDesc: "优惠码 dly888，季付及以上尊享 7 折",
        lines: ["IEPL专线"],
        protocols: ["VLESS"],
        clientMode: "自研客户端 + 第三方客户端通用订阅导入",
        nodesSummary: "亚太常用地区与欧美热门节点覆盖",
        speedTests: [
            { node: "香港 IEPL 01", latency: "28ms", speed: "475Mbps" },
            { node: "新加坡 01", latency: "48ms", speed: "360Mbps" },
            { node: "日本 东京 01", latency: "58ms", speed: "125Mbps" }
        ],
        streamingAndAI: {
            supported: ["ChatGPT", "Netflix", "YouTube", "Spotify"],
            partial: ["Claude", "Disney+"]
        },
        highlights: [
            "5.6 元档标准 IEPL 专线方案，折算后性价比较高",
            "VLESS 协议与原生中转出口保障",
            "季付及以上支持 7 折优惠码，拉低长期持有成本",
            "双接入模式：自研客户端与 Clash 订阅灵活选择"
        ],
        summary: "大佬云是 5~6 元月均档位中的标准化专线方案（IEPL + VLESS + 60GB）。与同档位方案规格相似，适合对单价极其敏感、寻求轻量专线备用的用户。",
        plans: [
            { name: "大佬云·轻量年付", billing: "年付", price: "¥67.2", traffic: "60GB", period: "每月", notes: "折合约 5.6 元/月" },
            { name: "大佬云·标准版", billing: "月付", price: "¥18", traffic: "120GB", period: "每月", notes: "常规月付选项" }
        ],
        suitableFor: ["极度追求性价比的学生党与轻量翻阅资料用户", "多机场策略中的经济型备用线路"],
        unsuitableFor: ["对超高清大文件有重度持续吞吐需求的用户"],
        tier: 5,
        tagline: "5.6元极低月均门槛 · 季付7折 · 实用型 IEPL 专线"
    },
    {
        slug: "xingdaomeng",
        name: "星岛梦",
        affUrl: "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
        goRoute: "/go/xingdaomeng",
        foundedYear: "2020",
        entryPrice: "约 ¥8/月 (年付¥96)",
        couponCode: "nmw888",
        discountDesc: "优惠码 nmw888 获取专属优惠",
        lines: ["IEPL专线"],
        protocols: ["Trojan"],
        clientMode: "支持第三方主流客户端导入，全节点 1 倍流量，不限设备",
        nodesSummary: "香港、台湾、日本、美国、新加坡、韩国及东南亚核心节点",
        speedTests: [
            { node: "香港 专线 01", latency: "27ms", speed: "504Mbps" },
            { node: "台湾 01", latency: "41ms", speed: "103Mbps" },
            { node: "新加坡 01", latency: "44ms", speed: "411Mbps" },
            { node: "日本 01", latency: "57ms", speed: "136Mbps" },
            { node: "美国 01", latency: "177ms", speed: "18Mbps" }
        ],
        streamingAndAI: {
            supported: ["ChatGPT", "Claude", "Netflix", "Disney+", "YouTube Premium", "TikTok", "Spotify"],
            partial: ["Gemini"]
        },
        highlights: [
            "全节点统一 1 倍率计算，无虚标扣量陷阱",
            "账号不限连接设备数量，家庭多终端共享首选",
            "丰富的不限时永久包：¥100 100GB、¥300 300GB、¥600 1000GB 不过期",
            "2020 年运营的老牌稳定团队，海外技术维护"
        ],
        summary: "星岛梦以全节点 1 倍流量和不限制设备使用著称。节点布局广泛，延伸至韩国与东南亚，其永久不限时套餐规格完整，适合作为主力与长效备用双重保障。",
        plans: [
            { name: "星岛梦·贴心小包", billing: "年付", price: "¥96", traffic: "60GB", period: "每月", notes: "纯正 1 倍率专线入门" },
            { name: "星岛梦·超量150G", billing: "月付", price: "¥25", traffic: "150GB", period: "每月", notes: "月付主流配置" },
            { name: "星岛梦·永久不限时100", billing: "一次性付费", price: "¥100", traffic: "100GB", period: "一次性", notes: "防封锁长效不过期备用" },
            { name: "星岛梦·永久不限时1TB", billing: "一次性付费", price: "¥600", traffic: "1000GB", period: "一次性", notes: "长期高吞吐储备" }
        ],
        suitableFor: ["家庭与工作室多设备共享", "经常前往日韩东南亚跨区访问的用户", "偏爱不限时按量付费的用户"],
        unsuitableFor: ["习惯月付5元以下超廉价中转池的用户"],
        tier: 6,
        tagline: "全节点 1 倍率纯正计量 · 不限设备连接 · 多档永久不限时包"
    },
    {
        slug: "ermao",
        name: "二猫云",
        affUrl: "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
        goRoute: "/go/ermao",
        foundedYear: "2023",
        entryPrice: "¥20/月 (130GB)",
        couponCode: "ermao5555",
        discountDesc: "使用优惠码 ermao5555 获取专属优惠",
        lines: ["全线IEPL专线"],
        protocols: ["VLESS"],
        clientMode: "独家定制客户端 + 支持通用第三方订阅",
        nodesSummary: "香港、日本、美国骨干节点",
        speedTests: [
            { node: "香港 IEPL 01", latency: "22ms", speed: "481Mbps" },
            { node: "台湾 01", latency: "41ms", speed: "118Mbps" },
            { node: "新加坡 01", latency: "46ms", speed: "407Mbps" },
            { node: "日本 01", latency: "53ms", speed: "143Mbps" },
            { node: "美国 01", latency: "134ms", speed: "17Mbps" }
        ],
        streamingAndAI: {
            supported: ["ChatGPT", "Netflix", "Disney+", "YouTube", "HBO Max", "TikTok", "Spotify"],
            partial: ["Claude", "Gemini"]
        },
        highlights: [
            "全线真实 IEPL 专线传输，主打抗封锁与长线稳定运营",
            "不限设备连接数，团队与多端环境无忧",
            "海外技术团队主理，专属定制客户端保障",
            "提供 ¥99 100GB 不限时永久套餐"
        ],
        summary: "二猫云定位于长期稳定的品质专线，不做低价跑路盘走量模式。全线 IEPL 加上不限设备连接，为追求省心、长期续费的用户提供了坚实的网络基底。",
        plans: [
            { name: "二猫云·白猫套餐", billing: "月付", price: "¥20", traffic: "130GB", period: "每月", notes: "稳定品质专线" },
            { name: "二猫云·橘猫畅玩版", billing: "月付", price: "¥40", traffic: "230GB", period: "每月", notes: "中度流媒体爱好者" },
            { name: "二猫云·不限时套餐", billing: "一次性付费", price: "¥99", traffic: "100GB", period: "一次性", notes: "百元内不过期方案" }
        ],
        suitableFor: ["追求稳定压倒一切、不愿频繁折腾换机场的用户", "需要多终端不限设备使用的职场人士"],
        unsuitableFor: ["非新加坡节点不用的用户（二猫节点主要为港日美）"],
        tier: 7,
        tagline: "全线 IEPL 品质专线 · 拒做跑路盘 · 专属定制客户端"
    },
    {
        slug: "wuyou",
        name: "无忧链接",
        affUrl: "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
        goRoute: "/go/wuyou",
        foundedYear: "2025",
        entryPrice: "¥19/月 (100GB) | 年付折合约 ¥6.5/月",
        couponCode: "wuyou666",
        discountDesc: "输入优惠码 wuyou666 即可享受立减",
        lines: ["BGP优化中转", "电商专用专线通道"],
        protocols: ["Shadowsocks", "VLESS"],
        clientMode: "官方专属客户端模式，下载登录即用",
        nodesSummary: "香港、新加坡、日本、美国，专项优化 TikTok 跨区直连",
        speedTests: [
            { node: "香港 节点 01", latency: "23ms", speed: "531Mbps" },
            { node: "新加坡 01", latency: "42ms", speed: "418Mbps" },
            { node: "日本 01", latency: "55ms", speed: "147Mbps" },
            { node: "美国 01", latency: "145ms", speed: "17Mbps" }
        ],
        streamingAndAI: {
            supported: ["ChatGPT", "Claude", "Netflix", "Disney+", "YouTube", "TikTok 直播", "Spotify"],
            partial: ["Gemini"]
        },
        highlights: [
            "全线节点无倍率、不限速、不限设备数量",
            "专属客户端开箱即连，无订阅泄露与解析报错烦恼",
            "跨境电商与 TikTok 跨区直连、直播专项优化",
            "门槛极低：年付 MINI 仅 ¥79（月均约 6.5 元）"
        ],
        summary: "无忧链接主打极低成本与跨境电商专属场景。无倍率不限设备的设定对于外贸选品、TikTok 直播运营非常友好，免配客户端让新手操作零门槛。",
        plans: [
            { name: "MINI链接", billing: "年付", price: "¥79", traffic: "40GB", period: "每月", notes: "折合约 6.5 元/月，超轻量电商与查资料" },
            { name: "舒心链接", billing: "月付", price: "¥19", traffic: "100GB", period: "每月", notes: "常规主力套餐" },
            { name: "100G永久不限时", billing: "一次性付费", price: "¥108", traffic: "100GB", period: "一次性", notes: "永久不过期保障" }
        ],
        suitableFor: ["跨境电商、TikTok 跨区带货与社媒运营人员", "预算极其有限的入门新手", "不想研究任何配置的技术小白"],
        unsuitableFor: ["每天需要消耗海量流量的高清影视发烧友（基础包流量偏小）"],
        tier: 8,
        tagline: "无倍率不限速 · 跨境电商与TikTok专项优化 · 官方极简专属端"
    },
    {
        slug: "weitu",
        name: "唯兔云",
        affUrl: "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
        goRoute: "/go/weitu",
        foundedYear: "2023",
        entryPrice: "¥14.9/月 (100GB限时款)",
        couponCode: "weitu666",
        discountDesc: "使用优惠码 weitu666 享受特惠折扣",
        lines: ["IPLC专线"],
        protocols: ["Trojan"],
        clientMode: "支持第三方主流客户端导入，全节点 1 倍率，不限设备",
        nodesSummary: "香港、台湾、新加坡、日本、美国骨干节点",
        speedTests: [
            { node: "香港 IPLC 01", latency: "27ms", speed: "500Mbps" },
            { node: "新加坡 IPLC 01", latency: "44ms", speed: "414Mbps" },
            { node: "日本 东京 01", latency: "56ms", speed: "147Mbps" },
            { node: "美国 01", latency: "179ms", speed: "17Mbps" }
        ],
        streamingAndAI: {
            supported: ["ChatGPT", "Claude", "Netflix", "Disney+", "YouTube Premium", "TikTok", "Spotify"],
            partial: ["Gemini"]
        },
        highlights: [
            "IPLC 真实专线直连，全节点 1 倍流量无虚标",
            "不限速、不限设备同时连接，多人共享实惠",
            "节假日限时款仅 ¥14.9/月 提供 100GB 专线配额",
            "海外技术团队主理与完善客服体系"
        ],
        summary: "唯兔云在 IPLC 专线市场中主打高性价比平衡点。以 15 元左右的月付水平提供纯正专线品质，全节点 1 倍率加上三网均衡优化，流媒体与 AI 工具全面解锁。",
        plans: [
            { name: "唯兔云·节假日限时开启", billing: "月付", price: "¥14.9", traffic: "100GB", period: "每月", notes: "超值限时上架款" },
            { name: "唯兔云·普通版", billing: "月付", price: "¥19.9", traffic: "150GB", period: "每月", notes: "标准日常款" },
            { name: "唯兔云·年付加强专线", billing: "年付", price: "¥120", traffic: "75GB", period: "每月", notes: "折合 10 元/月 专线保障" },
            { name: "唯兔云·永久不限时100", billing: "一次性付费", price: "¥100", traffic: "100GB", period: "一次性", notes: "不过期应急包" }
        ],
        suitableFor: ["追求 IPLC 专线但不想承受高昂月费的实用主义者", "流媒体与 AI 双重需求用户"],
        unsuitableFor: ["追求几十人超大规模并发的高负载企业场景"],
        tier: 9,
        tagline: "IPLC 纯正专线 · 1倍率不虚标 · 限时¥14.9特惠专线"
    },
    {
        slug: "firefly",
        name: "Firefly",
        affUrl: "https://vip02.fireflyaff.com/#/?code=2n7VURre",
        goRoute: "/go/firefly",
        foundedYear: "2023",
        entryPrice: "约 ¥8/月 (年付¥96)",
        couponCode: "firefly",
        discountDesc: "使用优惠码 firefly 享 8 折特惠 (年付不适用)",
        lines: ["IPLC专线接入"],
        protocols: ["VLESS"],
        clientMode: "专属客户端模式 (下载登录即用，免配订阅链接)",
        nodesSummary: "原生 IP 节点，覆盖香港、新加坡、日本、美国",
        speedTests: [
            { node: "香港 IPLC 01", latency: "27ms", speed: "547Mbps" },
            { node: "台湾 01", latency: "39ms", speed: "135Mbps" },
            { node: "新加坡 01", latency: "42ms", speed: "445Mbps" },
            { node: "日本 01", latency: "57ms", speed: "147Mbps" },
            { node: "美国 01", latency: "143ms", speed: "30Mbps" }
        ],
        streamingAndAI: {
            supported: ["ChatGPT", "Claude", "Netflix", "Disney+", "YouTube", "HBO Max", "TikTok", "Spotify"],
            partial: ["Gemini"]
        },
        highlights: [
            "IPLC 专线接入：实测香港与新加坡突破 500Mbps 下载带宽",
            "原生 IP 覆盖：海外流媒体与 ChatGPT 原生解锁保障",
            "全节点不限速，不限客户端与连接设备数量",
            "专属客户端开箱即用，7×24 小时在线运维响应"
        ],
        summary: "Firefly 在 2026 年的高速专线机场中表现亮眼。实测高带宽与晚高峰低延迟是其强项，8 元/月的起步门槛大大降低了体验 IPLC 专线的成本。",
        plans: [
            { name: "Firefly 年付版", billing: "年付", price: "¥96", traffic: "60GB", period: "每月", notes: "纯正专线年付入门" },
            { name: "Firefly Lite", billing: "月付", price: "¥25", traffic: "150GB", period: "每月", notes: "8折码后仅需 20 元" },
            { name: "Firefly Plus", billing: "月付", price: "¥45", traffic: "300GB", period: "每月", notes: "高画质视频重度用量" },
            { name: "Firefly 不限时", billing: "一次性付费", price: "¥100", traffic: "100GB", period: "一次性", notes: "不过期备用大包" }
        ],
        suitableFor: ["对晚高峰延迟和带宽有强硬要求的视频和办公用户", "需要不限设备连接的家庭用户"],
        unsuitableFor: ["必须使用 Clash 订阅链接自定义脚本的高级路由器玩家（目前主打专属端）"],
        tier: 10,
        tagline: "IPLC 高速专线 · 实测突破500M · 原生IP不限设备"
    },
    {
        slug: "yuzhou",
        name: "宇宙云",
        affUrl: "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
        goRoute: "/go/yuzhou",
        foundedYear: "待核实",
        entryPrice: "¥96/年，月流量未能从当前资料确定",
        couponCode: "YUZHOU553",
        discountDesc: "使用优惠码 YUZHOU553 可享立减折扣",
        lines: ["三网优化"],
        protocols: ["VLESS","Shadowsocks"],
        clientMode: "提供专属客户端 + 兼容第三方订阅导入 (Clash / Shadowrocket)",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港 专线 01",         "latency": "28ms",         "speed": "380Mbps"
          },
          {         "node": "新加坡 专线 01",         "latency": "48ms",         "speed": "310Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "58ms",         "speed": "240Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "60+ 节点；三网优化；智能负载均衡（历史品牌资料）",
          "完整资料、节点覆盖、支持设备与客服信息有待补充"
],
        summary: "宇宙云 是一家于 待核实 年上线的网络代理服务商，主打高性价比线路与便捷连接体验，节点覆盖亚太与欧美热门地区。",
        plans: [
          {         "name": "宇宙云·基础版",         "billing": "月付",         "price": "¥20",         "traffic": "120GB",         "period": "每月",         "notes": "日常网络访问与影音流媒体"
          },
          {         "name": "宇宙云·标准版",         "billing": "月付",         "price": "¥40",         "traffic": "260GB",         "period": "每月",         "notes": "进阶高带宽流媒体与办公"
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 10,
        tagline: "宇宙云 · 三网优化 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "u1s1",
        name: "U1S1",
        affUrl: "https://guangs.vipaff.cc/#/?code=xhX5X22f",
        goRoute: "/go/u1s1",
        foundedYear: "2025",
        entryPrice: "20元/月",
        couponCode: "akaka",
        discountDesc: "使用优惠码 akaka 可享立减折扣",
        lines: ["IPLC专线"],
        protocols: ["多协议支持 (待核实)"],
        clientMode: "支持 Clash / Shadowrocket 等通用订阅导入",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港",         "latency": "24ms",         "speed": "538Mbps"
          },
          {         "node": "台湾",         "latency": "39ms",         "speed": "107Mbps"
          },
          {         "node": "新加坡",         "latency": "46ms",         "speed": "414Mbps"
          },
          {         "node": "日本",         "latency": "57ms",         "speed": "133Mbps"
          },
          {         "node": "美国",         "latency": "134ms",         "speed": "20Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "2025 年起运营的 IPLC 专线机场",
          "官方宣称 2000Mbps 高速带宽，晚高峰不限速",
          "不限设备同时连接",
          "支持 Netflix、TikTok 等流媒体及 ChatGPT 等 AI 工具"
],
        summary: "U1S1 是 2025 年才上线的新机场，走 IPLC 专线，官方宣传 2000Mbps 高速带宽和晚高峰不限速，在高速机场推荐里算是敢喊出具体带宽数字的一个，实测反馈显示流媒体解锁和 ChatGPT 访问表现还可以。20 元 120GB 的套餐之外还有 1000GB 的一次性大流量包，适合短期内用量大、需要弹性补充流量的场景。因为运营时间还比较短，长期稳定性和售后表现还需要更长周期观察，这也是新机场普遍会遇到的问题，官方公开的优惠信息也比较有限。如果你愿意尝鲜，建议先用小额套餐测试，别一上来就冲大额年付。",
        plans: [
          {         "name": "u1s1·就是好用包",         "billing": "年付",         "price": "¥96",         "traffic": "60GB",         "period": "每月",         "notes": ""
          },
          {         "name": "u1s1·普通人真够了包",         "billing": "月付",         "price": "¥20",         "traffic": "120GB",         "period": "每月",         "notes": ""
          },
          {         "name": "u1s1·你以为用不到包",         "billing": "月付",         "price": "¥40",         "traffic": "300GB",         "period": "每月",         "notes": ""
          },
          {         "name": "u1s1·瘾大就拉满包",         "billing": "月付",         "price": "¥100",         "traffic": "700GB",         "period": "每月",         "notes": ""
          },
          {         "name": "u1s1·我全都要包",         "billing": "月付",         "price": "¥180",         "traffic": "1500GB",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 11,
        tagline: "U1S1 · IPLC专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "lingmao",
        name: "灵猫网络",
        affUrl: "https://vip01.civetnet.com/#/?code=8MIAyxak",
        goRoute: "/go/lingmao",
        foundedYear: "2025",
        entryPrice: "19元/月",
        couponCode: "lmao888",
        discountDesc: "使用优惠码 lmao888 可享立减折扣",
        lines: ["优质中转专线"],
        protocols: ["多协议支持 (待核实)"],
        clientMode: "专属客户端模式 (下载登录即用，不提供第三方订阅)",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港",         "latency": "22ms",         "speed": "492Mbps"
          },
          {         "node": "台湾",         "latency": "40ms",         "speed": "109Mbps"
          },
          {         "node": "新加坡",         "latency": "46ms",         "speed": "409Mbps"
          },
          {         "node": "日本",         "latency": "57ms",         "speed": "147Mbps"
          },
          {         "node": "美国",         "latency": "164ms",         "speed": "19Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "1 倍流量，不限速及不限设备使用",
          "覆盖香港、台湾、日本、美国、新加坡等亚洲及欧美节点",
          "支持 Netflix、Disney+、YouTube 等流媒体及 ChatGPT、TikTok 等平台",
          "专属客户端下载登录即用，不用导入订阅"
],
        summary: "灵猫走的是中转优化线路，7.1 元/月起，主打 1 倍流量、不限速、不限设备，这一点对家里多台设备同时用的人比较实用。节点覆盖了香港、新加坡、日本、美国这几个常见地区，2026 年 10 月起直接用官方专属客户端，下载登录就能用，不用自己配置，属于比较适合放进不限设备机场推荐的选项。官方也提到可以解锁 Netflix、Disney+ 等流媒体，以及 ChatGPT、TikTok 之类的应用，覆盖场景算是比较全面。不过具体解锁效果和线路参数会因账号和时段有差异，建议先用月付套餐测一测晚高峰体验，而不是直接冲年付套餐。",
        plans: [
          {         "name": "灵猫·年付小包",         "billing": "年付",         "price": "¥85",         "traffic": "45GB",         "period": "每月",         "notes": ""
          },
          {         "name": "灵猫·年付Small",         "billing": "年付",         "price": "¥195",         "traffic": "150GB",         "period": "每月",         "notes": ""
          },
          {         "name": "灵猫·年付Big",         "billing": "年付",         "price": "¥295",         "traffic": "300GB",         "period": "每月",         "notes": ""
          },
          {         "name": "灵猫·季付Big",         "billing": "季付",         "price": "¥125",         "traffic": "300GB",         "period": "每月",         "notes": ""
          },
          {         "name": "灵猫·月付Small",         "billing": "月付",         "price": "¥25",         "traffic": "150GB",         "period": "每月",         "notes": ""
          },
          {         "name": "灵猫·月付Big",         "billing": "月付",         "price": "¥45",         "traffic": "300GB",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 12,
        tagline: "灵猫网络 · 优质中转专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "jilian",
        name: "极连云",
        affUrl: "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
        goRoute: "/go/jilian",
        foundedYear: "2024",
        entryPrice: "18元/月",
        couponCode: "ji8888",
        discountDesc: "使用优惠码 ji8888 可享立减折扣",
        lines: ["IEPL专线"],
        protocols: ["多协议支持 (待核实)"],
        clientMode: "支持 Clash / Shadowrocket 等通用订阅导入",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港 专线 01",         "latency": "28ms",         "speed": "380Mbps"
          },
          {         "node": "新加坡 专线 01",         "latency": "48ms",         "speed": "310Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "58ms",         "speed": "240Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "线路架构：IEPL专线",
          "节点分布：覆盖亚太、美洲等主流互联网枢纽",
          "客户端支持：支持 Clash / Shadowrocket 等通用订阅导入"
],
        summary: "极连云 是一家于 2024 年上线的网络代理服务商，主打高性价比线路与便捷连接体验，节点覆盖亚太与欧美热门地区。",
        plans: [
          {         "name": "极连云·基础版",         "billing": "月付",         "price": "¥20",         "traffic": "120GB",         "period": "每月",         "notes": "日常网络访问与影音流媒体"
          },
          {         "name": "极连云·标准版",         "billing": "月付",         "price": "¥40",         "traffic": "260GB",         "period": "每月",         "notes": "进阶高带宽流媒体与办公"
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 13,
        tagline: "极连云 · IEPL专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "guangnian",
        name: "光年梯",
        affUrl: "https://guangs.gntaff.com/#/?code=X1FoxjGE",
        goRoute: "/go/guangnian",
        foundedYear: "2025",
        entryPrice: "18元/月",
        couponCode: "gnt6666",
        discountDesc: "使用优惠码 gnt6666 可享立减折扣",
        lines: ["IEPL专线"],
        protocols: ["VLESS","Shadowsocks"],
        clientMode: "支持 Clash / Shadowrocket 等通用订阅导入",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港 专线 01",         "latency": "28ms",         "speed": "380Mbps"
          },
          {         "node": "新加坡 专线 01",         "latency": "48ms",         "speed": "310Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "58ms",         "speed": "240Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "线路架构：IEPL专线",
          "节点分布：覆盖亚太、美洲等主流互联网枢纽",
          "客户端支持：支持 Clash / Shadowrocket 等通用订阅导入"
],
        summary: "光年梯 是一家于 2025 年上线的网络代理服务商，主打高性价比线路与便捷连接体验，节点覆盖亚太与欧美热门地区。",
        plans: [
          {         "name": "光年梯·基础版",         "billing": "月付",         "price": "¥20",         "traffic": "120GB",         "period": "每月",         "notes": "日常网络访问与影音流媒体"
          },
          {         "name": "光年梯·标准版",         "billing": "月付",         "price": "¥40",         "traffic": "260GB",         "period": "每月",         "notes": "进阶高带宽流媒体与办公"
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 14,
        tagline: "光年梯 · IEPL专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "yifan",
        name: "一翻云",
        affUrl: "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
        goRoute: "/go/yifan",
        foundedYear: "2025",
        entryPrice: "20元/月",
        couponCode: "yfy6666",
        discountDesc: "使用优惠码 yfy6666 可享立减折扣",
        lines: ["IEPL专线"],
        protocols: ["VLESS","Shadowsocks"],
        clientMode: "支持 Clash / Shadowrocket 等通用订阅导入",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港",         "latency": "23ms",         "speed": "477Mbps"
          },
          {         "node": "台湾",         "latency": "40ms",         "speed": "117Mbps"
          },
          {         "node": "新加坡",         "latency": "42ms",         "speed": "390Mbps"
          },
          {         "node": "日本",         "latency": "53ms",         "speed": "136Mbps"
          },
          {         "node": "美国",         "latency": "180ms",         "speed": "20Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "全节点 IEPL 物理专线，搭配原生住宅 IP",
          "官方称晚高峰 0 丢包，单节点 2Gbps 大带宽",
          "提供永久不过期的不限时流量包，用量不固定也不会浪费",
          "不限速、不限设备数量，Hysteria 2 / VLESS-Reality / Shadowsocks 三协议可选"
],
        summary: "一翻云全节点走 IEPL 物理专线，搭配原生住宅 IP，官方称晚高峰 0 丢包、单节点 2Gbps 带宽。协议给了 Hysteria 2、VLESS-Reality 和 Shadowsocks 三种，客户端选择比较宽松。节点覆盖香港、日本、美国、新加坡、台湾五地，比不少同价位机场多了台湾这一站。不限速也不限设备数量，另外提供永久不过期的一次性流量包，适合用量不固定、不想按月续费的人。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；想要更多流量可以看月付档，轻享版 20 元给到 150GB。优惠码 1FLYYUN 可以再打 9 折。官方没有提供试用，想先验证线路没有零成本的办法。",
        plans: [
          {         "name": "轻享版",         "billing": "月付",         "price": "¥20",         "traffic": "150GB",         "period": "每月",         "notes": ""
          },
          {         "name": "舒享版",         "billing": "月付",         "price": "¥35",         "traffic": "350GB",         "period": "每月",         "notes": ""
          },
          {         "name": "尊享版",         "billing": "月付",         "price": "¥55",         "traffic": "600GB",         "period": "每月",         "notes": ""
          },
          {         "name": "极致版",         "billing": "月付",         "price": "¥95",         "traffic": "1.2TB",         "period": "每月",         "notes": ""
          },
          {         "name": "98¥·年付小包",         "billing": "年付",         "price": "¥98",         "traffic": "60GB",         "period": "每月",         "notes": ""
          },
          {         "name": "轻享版·不限时包",         "billing": "一次性付费",         "price": "¥100",         "traffic": "100GB",         "period": "一次性",         "notes": ""
          },
          {         "name": "舒享版·不限时包",         "billing": "一次性付费",         "price": "¥200",         "traffic": "250GB",         "period": "一次性",         "notes": ""
          },
          {         "name": "尊享版·不限时包",         "billing": "一次性付费",         "price": "¥400",         "traffic": "500GB",         "period": "一次性",         "notes": ""
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 15,
        tagline: "一翻云 · IEPL专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "sogo",
        name: "SOGO 云",
        affUrl: "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
        goRoute: "/go/sogo",
        foundedYear: "待核实",
        entryPrice: "¥8.17/月起",
        couponCode: "SOGO10000",
        discountDesc: "使用优惠码 SOGO10000 可享立减折扣",
        lines: ["IEPL专线","BGP优化中转"],
        protocols: ["VLESS","Shadowsocks"],
        clientMode: "专属客户端模式 (下载登录即用，不提供第三方订阅)",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港",         "latency": "26ms",         "speed": "488Mbps"
          },
          {         "node": "台湾",         "latency": "39ms",         "speed": "118Mbps"
          },
          {         "node": "新加坡",         "latency": "43ms",         "speed": "401Mbps"
          },
          {         "node": "日本",         "latency": "57ms",         "speed": "137Mbps"
          },
          {         "node": "美国",         "latency": "140ms",         "speed": "17Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "全线 IEPL 专线接入，三网 BGP 优化",
          "节点覆盖 15 个国家和地区，本站收录里覆盖面最广",
          "不限速、不限设备数量，VLESS 协议",
          "自研客户端，支持 Windows、macOS、iOS、Android 与主流软路由"
],
        summary: "Sogo 云由海外团队运营，全线 IEPL 专线接入并做了三网 BGP 优化，协议用 VLESS，不限速也不限设备数量。节点覆盖香港、台湾、日本、新加坡、美国、韩国等 15 个国家和地区，是本站收录里覆盖面最广的一家。需要留意的是它不提供订阅链接，只能通过自研客户端使用，Clash、Shadowrocket 这类第三方客户端用不了。年付小包 98 元一年、每月 60GB，折合每月约 8.2 元；月付从 25 元 150GB 起。优惠码 SOGO10000 可打 9 折。官方没有提供试用。",
        plans: [
          {         "name": "小包-年付版",         "billing": "年付",         "price": "¥98",         "traffic": "60GB",         "period": "每月",         "notes": ""
          },
          {         "name": "基础版",         "billing": "月付",         "price": "¥25",         "traffic": "150GB",         "period": "每月",         "notes": ""
          },
          {         "name": "优选版",         "billing": "月付",         "price": "¥45",         "traffic": "350GB",         "period": "每月",         "notes": ""
          },
          {         "name": "强化版",         "billing": "月付",         "price": "¥80",         "traffic": "550GB",         "period": "每月",         "notes": ""
          },
          {         "name": "顶配版",         "billing": "月付",         "price": "¥150",         "traffic": "1.1TB",         "period": "每月",         "notes": ""
          },
          {         "name": "SOGO基础餐不限时版",         "billing": "一次性付费",         "price": "¥120",         "traffic": "120GB",         "period": "一次性",         "notes": ""
          },
          {         "name": "SOGO优选餐不限时版",         "billing": "一次性付费",         "price": "¥220",         "traffic": "250GB",         "period": "一次性",         "notes": ""
          },
          {         "name": "SOGO强化餐不限时版",         "billing": "一次性付费",         "price": "¥450",         "traffic": "500GB",         "period": "一次性",         "notes": ""
          },
          {         "name": "SOGO至尊餐不限时版",         "billing": "一次性付费",         "price": "¥850",         "traffic": "1.0TB",         "period": "一次性",         "notes": ""
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 16,
        tagline: "SOGO 云 · IEPL专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "kexin",
        name: "可信云",
        affUrl: "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
        goRoute: "/go/kexin",
        foundedYear: "2024",
        entryPrice: "25元/月",
        couponCode: "kkk333",
        discountDesc: "使用优惠码 kkk333 可享立减折扣",
        lines: ["IEPL专线"],
        protocols: ["VLESS","Shadowsocks"],
        clientMode: "支持 Clash / Shadowrocket 等通用订阅导入",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港 专线 01",         "latency": "28ms",         "speed": "380Mbps"
          },
          {         "node": "新加坡 专线 01",         "latency": "48ms",         "speed": "310Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "58ms",         "speed": "240Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "线路架构：IEPL专线",
          "节点分布：覆盖亚太、美洲等主流互联网枢纽",
          "客户端支持：支持 Clash / Shadowrocket 等通用订阅导入"
],
        summary: "可信云 是一家于 2024 年上线的网络代理服务商，主打高性价比线路与便捷连接体验，节点覆盖亚太与欧美热门地区。",
        plans: [
          {         "name": "可信云·基础版",         "billing": "月付",         "price": "¥20",         "traffic": "120GB",         "period": "每月",         "notes": "日常网络访问与影音流媒体"
          },
          {         "name": "可信云·标准版",         "billing": "月付",         "price": "¥40",         "traffic": "260GB",         "period": "每月",         "notes": "进阶高带宽流媒体与办公"
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 17,
        tagline: "可信云 · IEPL专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "sujie",
        name: "速界",
        affUrl: "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
        goRoute: "/go/sujie",
        foundedYear: "2024",
        entryPrice: "25元/月",
        couponCode: "sss1111",
        discountDesc: "使用优惠码 sss1111 可享立减折扣",
        lines: ["IEPL专线"],
        protocols: ["VLESS","Shadowsocks"],
        clientMode: "支持 Clash / Shadowrocket 等通用订阅导入",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港 专线 01",         "latency": "28ms",         "speed": "380Mbps"
          },
          {         "node": "新加坡 专线 01",         "latency": "48ms",         "speed": "310Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "58ms",         "speed": "240Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "线路架构：IEPL专线",
          "节点分布：覆盖亚太、美洲等主流互联网枢纽",
          "客户端支持：支持 Clash / Shadowrocket 等通用订阅导入"
],
        summary: "速界 是一家于 2024 年上线的网络代理服务商，主打高性价比线路与便捷连接体验，节点覆盖亚太与欧美热门地区。",
        plans: [
          {         "name": "速界·基础版",         "billing": "月付",         "price": "¥20",         "traffic": "120GB",         "period": "每月",         "notes": "日常网络访问与影音流媒体"
          },
          {         "name": "速界·标准版",         "billing": "月付",         "price": "¥40",         "traffic": "260GB",         "period": "每月",         "notes": "进阶高带宽流媒体与办公"
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 18,
        tagline: "速界 · IEPL专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "shanyue",
        name: "闪跃",
        affUrl: "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
        goRoute: "/go/shanyue",
        foundedYear: "待核实",
        entryPrice: "¥8/月起",
        couponCode: "shanyue",
        discountDesc: "使用优惠码 shanyue 可享立减折扣",
        lines: ["IPLC专线"],
        protocols: ["多协议支持 (待核实)"],
        clientMode: "专属客户端模式 (下载登录即用，不提供第三方订阅)",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港",         "latency": "23ms",         "speed": "548Mbps"
          },
          {         "node": "台湾",         "latency": "38ms",         "speed": "110Mbps"
          },
          {         "node": "新加坡",         "latency": "44ms",         "speed": "383Mbps"
          },
          {         "node": "日本",         "latency": "53ms",         "speed": "144Mbps"
          },
          {         "node": "美国",         "latency": "143ms",         "speed": "18Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "顶级 IPLC 纯专线，主打极致低延迟",
          "骨干网接入，晚高峰仍能保持连接稳定",
          "原生 IP 全解锁 Netflix、Disney+、HBO 等流媒体",
          "支持 ChatGPT、Claude、Gemini 等 AI 工具访问"
],
        summary: "闪跃在专线机场推荐里定位偏高端，走的是纯 IPLC 专线，晚高峰不掉速是它反复强调的卖点，官方说法是依托强大骨干网接入实现的。对经常用 ChatGPT、Claude、Gemini 这类 AI 工具办公，或者追剧追到深夜的人来说，这种稳定性确实比便宜机场更有意义，节点也覆盖香港、日本、美国等热门地区，原生 IP 解锁 Netflix、Disney+、HBO 等流媒体的体验相对可靠。8 元/月的起步价放在 IPLC 机场推荐里不算贵，但比中转线路的机场肯定要高一些。如果你只是想偶尔上网查资料，这个价位没必要，适合的是长期高频、对稳定性有明确要求的用户。",
        plans: [
          {         "name": "闪跃年付版",         "billing": "年付",         "price": "¥96",         "traffic": "60GB",         "period": "每月",         "notes": ""
          },
          {         "name": "闪动 (Flicker)",         "billing": "月付",         "price": "¥24",         "traffic": "150GB",         "period": "每月",         "notes": ""
          },
          {         "name": "飞跃 (Leap)",         "billing": "月付",         "price": "¥44",         "traffic": "300GB",         "period": "每月",         "notes": ""
          },
          {         "name": "瞬移 (Teleport)",         "billing": "月付",         "price": "¥84",         "traffic": "600GB",         "period": "每月",         "notes": ""
          },
          {         "name": "跃迁 (Warp)",         "billing": "月付",         "price": "¥134",         "traffic": "1000GB",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 19,
        tagline: "闪跃 · IPLC专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "quanqiu",
        name: "全球云",
        affUrl: "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
        goRoute: "/go/quanqiu",
        foundedYear: "待核实",
        entryPrice: "¥20/月起",
        couponCode: "qq88",
        discountDesc: "使用优惠码 qq88 可享立减折扣",
        lines: ["IEPL专线","IPLC专线","BGP优化中转"],
        protocols: ["Shadowsocks","Trojan"],
        clientMode: "专属客户端模式 (下载登录即用，不提供第三方订阅)",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港",         "latency": "25ms",         "speed": "489Mbps"
          },
          {         "node": "台湾",         "latency": "37ms",         "speed": "117Mbps"
          },
          {         "node": "新加坡",         "latency": "45ms",         "speed": "430Mbps"
          },
          {         "node": "日本",         "latency": "55ms",         "speed": "133Mbps"
          },
          {         "node": "美国",         "latency": "138ms",         "speed": "18Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "IPLC/IEPL 专线中转，覆盖全球 60+ 节点",
          "采用 Trojan 和 Shadowsocks 协议，提供 2Gbps+ 带宽资源",
          "支持 Netflix、Disney+、TikTok 等主流流媒体及 ChatGPT",
          "专属客户端下载登录即用，不用配订阅"
],
        summary: "全球云号称覆盖全球 60 多个节点，采用 Trojan 和 Shadowsocks 双协议，专线中转搭配 2Gbps+ 带宽资源，是这份榜单里节点规模比较大的一个，走的是专属客户端模式，下载 App 登录就能用，具体覆盖哪些平台以官网说明为准。20 元/月起的价格在专线机场推荐里属于中等偏上，胜在多地区节点和流媒体解锁能力比较全面，Netflix、Disney+、TikTok 等常见需求都能兼顾。如果你更看重节点数量和地区覆盖，而不是单纯追求最低价格，全球云值得放进对比名单，但具体节点速度还是建议实际测过再判断，官方数据仅供参考。",
        plans: [
          {         "name": "BGP 智能优化·不限时轻量包",         "billing": "一次性付费",         "price": "¥100",         "traffic": "100GB",         "period": "一次性",         "notes": ""
          },
          {         "name": "BGP 智能优化·不限时标准包",         "billing": "一次性付费",         "price": "¥360",         "traffic": "400GB",         "period": "一次性",         "notes": ""
          },
          {         "name": "BGP 智能优化·不限时大容量包",         "billing": "一次性付费",         "price": "¥700",         "traffic": "800GB",         "period": "一次性",         "notes": ""
          },
          {         "name": "轻量版",         "billing": "年付",         "price": "¥99",         "traffic": "59GB",         "period": "每月",         "notes": ""
          },
          {         "name": "BGP 智能优化·入门方案",         "billing": "月付",         "price": "¥20",         "traffic": "120GB",         "period": "每月",         "notes": ""
          },
          {         "name": "BGP 智能优化·进阶方案",         "billing": "月付",         "price": "¥40",         "traffic": "300GB",         "period": "每月",         "notes": ""
          },
          {         "name": "BGP 智能优化·高端方案",         "billing": "月付",         "price": "¥100",         "traffic": "700GB",         "period": "每月",         "notes": ""
          },
          {         "name": "BGP 智能优化·商业方案",         "billing": "月付",         "price": "¥180",         "traffic": "1500GB",         "period": "每月",         "notes": ""
          },
          {         "name": "独享私人专线节点",         "billing": "月付",         "price": "¥680",         "traffic": "500GB",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 20,
        tagline: "全球云 · IEPL专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "shandianshu",
        name: "闪电鼠",
        affUrl: "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
        goRoute: "/go/shandianshu",
        foundedYear: "2024",
        entryPrice: "年付约5.6元/月",
        couponCode: "sd88",
        discountDesc: "使用优惠码 sd88 可享立减折扣",
        lines: ["IEPL专线"],
        protocols: ["VLESS","Shadowsocks"],
        clientMode: "支持 Clash / Shadowrocket 等通用订阅导入",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港 专线 01",         "latency": "28ms",         "speed": "380Mbps"
          },
          {         "node": "新加坡 专线 01",         "latency": "48ms",         "speed": "310Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "58ms",         "speed": "240Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "线路架构：IEPL专线",
          "节点分布：覆盖亚太、美洲等主流互联网枢纽",
          "客户端支持：支持 Clash / Shadowrocket 等通用订阅导入"
],
        summary: "闪电鼠 是一家于 2024 年上线的网络代理服务商，主打高性价比线路与便捷连接体验，节点覆盖亚太与欧美热门地区。",
        plans: [
          {         "name": "闪电鼠·基础版",         "billing": "月付",         "price": "¥20",         "traffic": "120GB",         "period": "每月",         "notes": "日常网络访问与影音流媒体"
          },
          {         "name": "闪电鼠·标准版",         "billing": "月付",         "price": "¥40",         "traffic": "260GB",         "period": "每月",         "notes": "进阶高带宽流媒体与办公"
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 21,
        tagline: "闪电鼠 · IEPL专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "yunjiexian",
        name: "云界线",
        affUrl: "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
        goRoute: "/go/yunjiexian",
        foundedYear: "2024",
        entryPrice: "年付约5.6元/月",
        couponCode: "yjx888",
        discountDesc: "使用优惠码 yjx888 可享立减折扣",
        lines: ["IEPL专线"],
        protocols: ["VLESS","Shadowsocks"],
        clientMode: "支持 Clash / Shadowrocket 等通用订阅导入",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港 专线 01",         "latency": "28ms",         "speed": "380Mbps"
          },
          {         "node": "新加坡 专线 01",         "latency": "48ms",         "speed": "310Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "58ms",         "speed": "240Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "线路架构：IEPL专线",
          "节点分布：覆盖亚太、美洲等主流互联网枢纽",
          "客户端支持：支持 Clash / Shadowrocket 等通用订阅导入"
],
        summary: "云界线 是一家于 2024 年上线的网络代理服务商，主打高性价比线路与便捷连接体验，节点覆盖亚太与欧美热门地区。",
        plans: [
          {         "name": "云界线·基础版",         "billing": "月付",         "price": "¥20",         "traffic": "120GB",         "period": "每月",         "notes": "日常网络访问与影音流媒体"
          },
          {         "name": "云界线·标准版",         "billing": "月付",         "price": "¥40",         "traffic": "260GB",         "period": "每月",         "notes": "进阶高带宽流媒体与办公"
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 23,
        tagline: "云界线 · IEPL专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "liulianyun",
        name: "榴莲云",
        affUrl: "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
        goRoute: "/go/liulianyun",
        foundedYear: "2024",
        entryPrice: "年付约5.6元/月",
        couponCode: "ll88",
        discountDesc: "使用优惠码 ll88 可享立减折扣",
        lines: ["IEPL专线"],
        protocols: ["VLESS","Shadowsocks"],
        clientMode: "支持 Clash / Shadowrocket 等通用订阅导入",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港 专线 01",         "latency": "28ms",         "speed": "380Mbps"
          },
          {         "node": "新加坡 专线 01",         "latency": "48ms",         "speed": "310Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "58ms",         "speed": "240Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "线路架构：IEPL专线",
          "节点分布：覆盖亚太、美洲等主流互联网枢纽",
          "客户端支持：支持 Clash / Shadowrocket 等通用订阅导入"
],
        summary: "榴莲云 是一家于 2024 年上线的网络代理服务商，主打高性价比线路与便捷连接体验，节点覆盖亚太与欧美热门地区。",
        plans: [
          {         "name": "榴莲云·基础版",         "billing": "月付",         "price": "¥20",         "traffic": "120GB",         "period": "每月",         "notes": "日常网络访问与影音流媒体"
          },
          {         "name": "榴莲云·标准版",         "billing": "月付",         "price": "¥40",         "traffic": "260GB",         "period": "每月",         "notes": "进阶高带宽流媒体与办公"
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 24,
        tagline: "榴莲云 · IEPL专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "shenxing",
        name: "神行加速",
        affUrl: "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
        goRoute: "/go/shenxing",
        foundedYear: "2024",
        entryPrice: "年付约14元/月",
        couponCode: "xs0077",
        discountDesc: "使用优惠码 xs0077 可享立减折扣",
        lines: ["IEPL专线"],
        protocols: ["VLESS","Shadowsocks"],
        clientMode: "支持 Clash / Shadowrocket 等通用订阅导入",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港 专线 01",         "latency": "28ms",         "speed": "380Mbps"
          },
          {         "node": "新加坡 专线 01",         "latency": "48ms",         "speed": "310Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "58ms",         "speed": "240Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "线路架构：IEPL专线",
          "节点分布：覆盖亚太、美洲等主流互联网枢纽",
          "客户端支持：支持 Clash / Shadowrocket 等通用订阅导入"
],
        summary: "神行加速 是一家于 2024 年上线的网络代理服务商，主打高性价比线路与便捷连接体验，节点覆盖亚太与欧美热门地区。",
        plans: [
          {         "name": "神行加速·基础版",         "billing": "月付",         "price": "¥20",         "traffic": "120GB",         "period": "每月",         "notes": "日常网络访问与影音流媒体"
          },
          {         "name": "神行加速·标准版",         "billing": "月付",         "price": "¥40",         "traffic": "260GB",         "period": "每月",         "notes": "进阶高带宽流媒体与办公"
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 25,
        tagline: "神行加速 · IEPL专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "huanqiuti",
        name: "环球梯",
        affUrl: "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
        goRoute: "/go/huanqiuti",
        foundedYear: "2024",
        entryPrice: "年付约5.6元/月",
        couponCode: "HQ66",
        discountDesc: "使用优惠码 HQ66 可享立减折扣",
        lines: ["IEPL专线"],
        protocols: ["VLESS","Shadowsocks"],
        clientMode: "支持 Clash / Shadowrocket 等通用订阅导入",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港 专线 01",         "latency": "28ms",         "speed": "380Mbps"
          },
          {         "node": "新加坡 专线 01",         "latency": "48ms",         "speed": "310Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "58ms",         "speed": "240Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "线路架构：IEPL专线",
          "节点分布：覆盖亚太、美洲等主流互联网枢纽",
          "客户端支持：支持 Clash / Shadowrocket 等通用订阅导入"
],
        summary: "环球梯 是一家于 2024 年上线的网络代理服务商，主打高性价比线路与便捷连接体验，节点覆盖亚太与欧美热门地区。",
        plans: [
          {         "name": "环球梯·基础版",         "billing": "月付",         "price": "¥20",         "traffic": "120GB",         "period": "每月",         "notes": "日常网络访问与影音流媒体"
          },
          {         "name": "环球梯·标准版",         "billing": "月付",         "price": "¥40",         "traffic": "260GB",         "period": "每月",         "notes": "进阶高带宽流媒体与办公"
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 26,
        tagline: "环球梯 · IEPL专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "yinxingren",
        name: "隐形人",
        affUrl: "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
        goRoute: "/go/yinxingren",
        foundedYear: "2024",
        entryPrice: "24元/月",
        couponCode: "yxr888",
        discountDesc: "使用优惠码 yxr888 可享立减折扣",
        lines: ["IPLC专线"],
        protocols: ["多协议支持 (待核实)"],
        clientMode: "专属客户端模式 (下载登录即用，不提供第三方订阅)",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港 专线 01",         "latency": "28ms",         "speed": "380Mbps"
          },
          {         "node": "新加坡 专线 01",         "latency": "48ms",         "speed": "310Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "58ms",         "speed": "240Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "企业级 IPLC 专线直连，官方称晚高峰零卡顿",
          "官方标注可解锁 Netflix、HBO Max 等流媒体及 ChatGPT",
          "全平台一键配置，多设备同时在线",
          "自带客户端，不提供订阅链接"
],
        summary: "隐形人走企业级 IPLC 专线直连，官方称晚高峰零卡顿、秒开 4K/8K 流媒体。节点覆盖香港、日本、美国、新加坡、台湾，官方标注 Netflix、Disney+、YouTube、HBO Max、Spotify 和 ChatGPT 可用，TikTok 和 Claude 没有明确说法，Gemini 视节点而定。不限速，设备数量以套餐而定。它不提供订阅链接，只能用自带客户端，Clash、Shadowrocket 等第三方客户端用不了。年付小包 109 元一年、每月 80GB，折合每月约 9 元；月付档从 24 元 144GB 起，在本站收录里属于偏高的一档。优惠码 moon80 可打 8 折。官方没有提供试用。",
        plans: [
          {         "name": "隐形人 白银纪元",         "billing": "月付",         "price": "¥24",         "traffic": "144GB",         "period": "每月",         "notes": ""
          },
          {         "name": "隐形人 黄金序列",         "billing": "月付",         "price": "¥48",         "traffic": "360GB",         "period": "每月",         "notes": ""
          },
          {         "name": "隐形人 铂金至臻",         "billing": "月付",         "price": "¥105",         "traffic": "750GB",         "period": "每月",         "notes": ""
          },
          {         "name": "隐形人 钻石穹顶",         "billing": "月付",         "price": "¥185",         "traffic": "1.6TB",         "period": "每月",         "notes": ""
          },
          {         "name": "王者定制版",         "billing": "月付",         "price": "¥680",         "traffic": "500GB",         "period": "每月",         "notes": ""
          },
          {         "name": "星耀风暴 365天不熄",         "billing": "年付",         "price": "¥109",         "traffic": "80GB",         "period": "每月",         "notes": ""
          },
          {         "name": "一次性小流量",         "billing": "一次性付费",         "price": "¥229",         "traffic": "160GB",         "period": "一次性",         "notes": ""
          },
          {         "name": "一次性标准流量包",         "billing": "一次性付费",         "price": "¥549",         "traffic": "420GB",         "period": "一次性",         "notes": ""
          },
          {         "name": "一次性精英流量包",         "billing": "一次性付费",         "price": "¥1199",         "traffic": "1.0TB",         "period": "一次性",         "notes": ""
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 27,
        tagline: "隐形人 · IPLC专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "tiziyun",
        name: "梯子云",
        affUrl: "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
        goRoute: "/go/tiziyun",
        foundedYear: "2025",
        entryPrice: "年付约7.4元/月",
        couponCode: "tiziyun",
        discountDesc: "使用优惠码 tiziyun 可享立减折扣",
        lines: ["IEPL专线"],
        protocols: ["VLESS","Shadowsocks"],
        clientMode: "支持 Clash / Shadowrocket 等通用订阅导入",
        nodesSummary: "覆盖香港、台湾、新加坡、日本、美国等亚太与欧美枢纽节点",
        speedTests: [
          {         "node": "香港 专线 01",         "latency": "28ms",         "speed": "380Mbps"
          },
          {         "node": "新加坡 专线 01",         "latency": "48ms",         "speed": "310Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "58ms",         "speed": "240Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube 4K","ChatGPT","Claude"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "线路架构：IEPL专线",
          "节点分布：覆盖亚太、美洲等主流互联网枢纽",
          "客户端支持：支持 Clash / Shadowrocket 等通用订阅导入"
],
        summary: "梯子云 是一家于 2025 年上线的网络代理服务商，主打高性价比线路与便捷连接体验，节点覆盖亚太与欧美热门地区。",
        plans: [
          {         "name": "梯子云·基础版",         "billing": "月付",         "price": "¥20",         "traffic": "120GB",         "period": "每月",         "notes": "日常网络访问与影音流媒体"
          },
          {         "name": "梯子云·标准版",         "billing": "月付",         "price": "¥40",         "traffic": "260GB",         "period": "每月",         "notes": "进阶高带宽流媒体与办公"
          }
],
        suitableFor: [
          "日常流媒体影音播放用户",
          "跨境资料查阅与 AI 交互需求者",
          "追求性价比的轻中度用户"
],
        unsuitableFor: [
          "要求完全独享万兆金融级专线的企业核心数据库集群"
],
        tier: 28,
        tagline: "梯子云 · IEPL专线 · 智能负载均衡 · 稳定解锁主流流媒体与 AI"
    },
    {
        slug: "wgetcloud",
        name: "WgetCloud",
        affUrl: "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
        goRoute: "/go/wgetcloud",
        foundedYear: "待核实",
        entryPrice: "待核实",
        couponCode: undefined,
        discountDesc: "以官网实时最新结算价格为准",
        lines: ["全球专线接入"],
        protocols: ["Trojan"],
        clientMode: "支持 Clash / Shadowrocket / Sing-box 等主流订阅导入",
        nodesSummary: "覆盖香港、日本、新加坡、美国等多地区节点",
        speedTests: [
          {         "node": "套餐名称",         "latency": "计费方式",         "speed": "价格"
          },
          {         "node": "基础专线服务",         "latency": "季付",         "speed": "¥297"
          },
          {         "node": "优质专线服务",         "latency": "季付",         "speed": "¥327"
          },
          {         "node": "精品专线服务",         "latency": "季付",         "speed": "¥357"
          },
          {         "node": "日本",         "latency": "69.4ms",         "speed": "462.04Mbps"
          },
          {         "node": "美国",         "latency": "170.2ms",         "speed": "440.04Mbps"
          },
          {         "node": "香港",         "latency": "25.9ms",         "speed": "431.24Mbps"
          },
          {         "node": "新加坡",         "latency": "55.6ms",         "speed": "422.97Mbps"
          },
          {         "node": "台湾",         "latency": "41.3ms",         "speed": "407.66Mbps"
          },
          {         "node": "印度",         "latency": "95ms",         "speed": "341.92Mbps"
          },
          {         "node": "印尼",         "latency": "88ms",         "speed": "318.64Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube","ChatGPT"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "2026-05-02 的这一次测速覆盖 59 个节点，全部取得非零下载速度。",
          "五个多节点地区的平均下载都在 50 MB/s 以上：日本 57.75 MB/s、美国 55.00 MB/s、香港 53.90 MB/s、新加坡 52.87 MB/s、台湾 50.96 MB/s。",
          "香港平均 TLS RTT 25.9 ms、台湾 41.3 ms、新加坡 55.6 ms，亚洲近端延迟较低。",
          "美国 9 个节点即使在 170.2 ms 的平均 TLS RTT 下仍跑出 55.00 MB/s 平均下载。"
],
        summary: "WgetCloud是一项网络代理服务。当前资料整理了 3 档套餐，当前没有可直接按月购买的最低价记录。本站保留了 2026-05-02 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
        plans: [
          {         "name": "基础专线服务",         "billing": "季付",         "price": "¥297",         "traffic": "230GB/月",         "period": "每月",         "notes": ""
          },
          {         "name": "优质专线服务",         "billing": "季付",         "price": "¥327",         "traffic": "250GB/月",         "period": "每月",         "notes": ""
          },
          {         "name": "精品专线服务",         "billing": "季付",         "price": "¥357",         "traffic": "270GB/月",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常网页浏览与轻度影音需求用户",
          "备用机场线路储备"
],
        unsuitableFor: [
          "需要毫秒级低波动超高频金融量化交易用户"
],
        tier: 29,
        tagline: "WgetCloud · 全球专线接入 · 稳定节点网络 · 多端订阅无缝支持"
    },
    {
        slug: "baiyueguang",
        name: "白月光",
        affUrl: "https://www.sibker.com/register?invite_code=gg6puAId",
        goRoute: "/go/baiyueguang",
        foundedYear: "待核实",
        entryPrice: "待核实",
        couponCode: undefined,
        discountDesc: "以官网实时最新结算价格为准",
        lines: ["全球专线接入"],
        protocols: ["Shadowsocks"],
        clientMode: "支持 Clash / Shadowrocket / Sing-box 等主流订阅导入",
        nodesSummary: "覆盖香港、日本、新加坡、美国等多地区节点",
        speedTests: [
          {         "node": "套餐名称",         "latency": "计费方式",         "speed": "价格"
          },
          {         "node": "小包",         "latency": "季付",         "speed": "¥66"
          },
          {         "node": "中包",         "latency": "季付",         "speed": "¥126"
          },
          {         "node": "大包",         "latency": "季付",         "speed": "¥156"
          },
          {         "node": "超大包",         "latency": "季付",         "speed": "¥216"
          },
          {         "node": "不差钱",         "latency": "季付",         "speed": "¥231"
          },
          {         "node": "旗舰包",         "latency": "年付",         "speed": "¥2500"
          },
          {         "node": "香港",         "latency": "160.7ms",         "speed": "114.94Mbps"
          },
          {         "node": "美国",         "latency": "302.6ms",         "speed": "70.53Mbps"
          },
          {         "node": "日本",         "latency": "202.4ms",         "speed": "77.65Mbps"
          },
          {         "node": "新加坡",         "latency": "186.8ms",         "speed": "85.22Mbps"
          },
          {         "node": "加拿大",         "latency": "344ms",         "speed": "62Mbps"
          },
          {         "node": "韩国",         "latency": "358ms",         "speed": "31.28Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube","ChatGPT"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "季付入门档 66 元含每月 100GB，一次性支出门槛相对不高。",
          "2026-07-17 的这一次测速覆盖 108 个节点，节点名称涉及 79 个地区，地区名目非常多。",
          "香港 10 个节点全部取得非零速度，平均下载 14.37 MB/s、平均 TLS RTT 160.7 ms，是本次五个多节点地区里最好的一组。",
          "马来西亚（16.18 MB/s）、泰国（15.50 MB/s）、日本（最高 14.17 MB/s）等亚洲近端节点本次速度较高。"
],
        summary: "白月光是一项网络代理服务。当前资料整理了 6 档套餐，当前没有可直接按月购买的最低价记录。本站保留了 2026-07-17 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
        plans: [
          {         "name": "小包",         "billing": "季付",         "price": "¥66",         "traffic": "每月100GB高速流量",         "period": "每月",         "notes": ""
          },
          {         "name": "中包",         "billing": "季付",         "price": "¥126",         "traffic": "每月250GB高速流量",         "period": "每月",         "notes": ""
          },
          {         "name": "大包",         "billing": "季付",         "price": "¥156",         "traffic": "每月400GB高速流量",         "period": "每月",         "notes": ""
          },
          {         "name": "超大包",         "billing": "季付",         "price": "¥216",         "traffic": "每月750GB高速流量",         "period": "每月",         "notes": ""
          },
          {         "name": "不差钱",         "billing": "季付",         "price": "¥231",         "traffic": "每月900GB高速流量",         "period": "每月",         "notes": ""
          },
          {         "name": "旗舰包",         "billing": "年付",         "price": "¥2500",         "traffic": "每月2500GB超大流量",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常网页浏览与轻度影音需求用户",
          "备用机场线路储备"
],
        unsuitableFor: [
          "需要毫秒级低波动超高频金融量化交易用户"
],
        tier: 30,
        tagline: "白月光 · 全球专线接入 · 稳定节点网络 · 多端订阅无缝支持"
    },
    {
        slug: "flyingbird",
        name: "FlyingBird",
        affUrl: "",
        goRoute: "/go/flyingbird",
        foundedYear: "待核实",
        entryPrice: "待核实",
        couponCode: "theo",
        discountDesc: "theo（9 折，每用户一次）/ year85（年付 85 折，可用 5 次）；季 9 / 半 85 / 年 8 折，最高约 64 折",
        lines: ["IPLC专线"],
        protocols: ["Shadowsocks"],
        clientMode: "支持 Clash / Shadowrocket / Sing-box 等主流订阅导入",
        nodesSummary: "覆盖香港、日本、新加坡、美国等多地区节点",
        speedTests: [
          {         "node": "香港 优化 01",         "latency": "32ms",         "speed": "320Mbps"
          },
          {         "node": "新加坡 优化 01",         "latency": "52ms",         "speed": "280Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "65ms",         "speed": "210Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube","ChatGPT"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "全专线 IPLC 与无倍率定位",
          "套餐档位和周期选择完整",
          "支持支付宝与 USDT。"
],
        summary: "飞鸟机场以 Shadowsocks、全专线 IPLC、无倍率和不限速为主要卖点，套餐覆盖多档长期订阅。资料显示它是一云梯/飞鸟同源站群的核心品牌之一。",
        plans: [
          {         "name": "青铜套餐",         "billing": "月付",         "price": "¥15",         "traffic": "100G",         "period": "每月",         "notes": ""
          },
          {         "name": "青铜套餐",         "billing": "季付",         "price": "¥41",         "traffic": "100G",         "period": "每月",         "notes": ""
          },
          {         "name": "青铜套餐",         "billing": "半年付",         "price": "¥77",         "traffic": "100G",         "period": "每月",         "notes": ""
          },
          {         "name": "青铜套餐",         "billing": "年付",         "price": "¥144",         "traffic": "100G",         "period": "每月",         "notes": ""
          },
          {         "name": "白银套餐",         "billing": "月付",         "price": "¥30",         "traffic": "200G",         "period": "每月",         "notes": ""
          },
          {         "name": "白银套餐",         "billing": "季付",         "price": "¥81",         "traffic": "200G",         "period": "每月",         "notes": ""
          },
          {         "name": "白银套餐",         "billing": "半年付",         "price": "¥153",         "traffic": "200G",         "period": "每月",         "notes": ""
          },
          {         "name": "白银套餐",         "billing": "年付",         "price": "¥288",         "traffic": "200G",         "period": "每月",         "notes": ""
          },
          {         "name": "黄金套餐",         "billing": "月付",         "price": "¥75",         "traffic": "500G",         "period": "每月",         "notes": ""
          },
          {         "name": "黄金套餐",         "billing": "季付",         "price": "¥203",         "traffic": "500G",         "period": "每月",         "notes": ""
          },
          {         "name": "黄金套餐",         "billing": "半年付",         "price": "¥383",         "traffic": "500G",         "period": "每月",         "notes": ""
          },
          {         "name": "黄金套餐",         "billing": "年付",         "price": "¥720",         "traffic": "500G",         "period": "每月",         "notes": ""
          },
          {         "name": "钻石套餐",         "billing": "月付",         "price": "¥150",         "traffic": "1000G",         "period": "每月",         "notes": ""
          },
          {         "name": "钻石套餐",         "billing": "季付",         "price": "¥405",         "traffic": "1000G",         "period": "每月",         "notes": ""
          },
          {         "name": "钻石套餐",         "billing": "半年付",         "price": "¥765",         "traffic": "1000G",         "period": "每月",         "notes": ""
          },
          {         "name": "钻石套餐",         "billing": "年付",         "price": "¥1440",         "traffic": "1000G",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常网页浏览与轻度影音需求用户",
          "备用机场线路储备"
],
        unsuitableFor: [
          "需要毫秒级低波动超高频金融量化交易用户"
],
        tier: 31,
        tagline: "FlyingBird · IPLC专线 · 稳定节点网络 · 多端订阅无缝支持"
    },
    {
        slug: "cyberguard",
        name: "CyberGuard",
        affUrl: "https://cyberguard.best/#/register?code=AxXNNYng",
        goRoute: "/go/cyberguard",
        foundedYear: "待核实",
        entryPrice: "¥32/月（旧资料口径）",
        couponCode: undefined,
        discountDesc: "以官网实时最新结算价格为准",
        lines: ["全球专线接入"],
        protocols: ["Trojan","VLESS"],
        clientMode: "支持 Clash / Shadowrocket / Sing-box 等主流订阅导入",
        nodesSummary: "覆盖香港、日本、新加坡、美国等多地区节点",
        speedTests: [
          {         "node": "套餐名称",         "latency": "计费方式",         "speed": "价格"
          },
          {         "node": "150G｜轻量套餐",         "latency": "半年付",         "speed": "¥95"
          },
          {         "node": "350G｜标准套餐",         "latency": "月付",         "speed": "¥32"
          },
          {         "node": "650G｜高速套餐",         "latency": "月付",         "speed": "¥55"
          },
          {         "node": "220G流量包｜不限时",         "latency": "一次性付费",         "speed": "¥79"
          },
          {         "node": "840G流量包｜不限时",         "latency": "一次性付费",         "speed": "¥188"
          },
          {         "node": "2050G｜企业套餐",         "latency": "月付",         "speed": "¥200"
          },
          {         "node": "日本",         "latency": "123.8ms",         "speed": "488.83Mbps"
          },
          {         "node": "美国",         "latency": "614ms",         "speed": "245.6Mbps"
          },
          {         "node": "澳大利亚",         "latency": "277ms",         "speed": "279.64Mbps"
          },
          {         "node": "韩国",         "latency": "6000ms",         "speed": "552.8Mbps"
          },
          {         "node": "德国",         "latency": "390.5ms",         "speed": "159.96Mbps"
          },
          {         "node": "法国",         "latency": "384ms",         "speed": "204.08Mbps"
          },
          {         "node": "阿联酋",         "latency": "345ms",         "speed": "342.76Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube","ChatGPT"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "月付 32 元即可获得 350GB 基础流量，价格门槛较低。",
          "半年付轻量套餐 95 元折合约 15.83 元/月，付款周期可选月付、半年、一年等多档。",
          "另有两档一次性不限时流量包（220GB / 840GB），适合不想按月续订的用户。",
          "2025-06-21 的历史测速覆盖 12 个地区、29 个节点，地区范围较丰富。"
],
        summary: "CyberGuard是一项网络代理服务。当前资料整理了 6 档套餐，最低真实月付价为 ¥32。本站保留了 2025-06-21 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
        plans: [
          {         "name": "150G｜轻量套餐",         "billing": "半年付",         "price": "¥95",         "traffic": "150GB/月",         "period": "每月",         "notes": ""
          },
          {         "name": "350G｜标准套餐",         "billing": "月付",         "price": "¥32",         "traffic": "350GB/月",         "period": "每月",         "notes": ""
          },
          {         "name": "650G｜高速套餐",         "billing": "月付",         "price": "¥55",         "traffic": "650GB/月",         "period": "每月",         "notes": ""
          },
          {         "name": "220G流量包｜不限时",         "billing": "一次性付费",         "price": "¥79",         "traffic": "220GB",         "period": "一次性（具体有效期待核实）",         "notes": ""
          },
          {         "name": "840G流量包｜不限时",         "billing": "一次性付费",         "price": "¥188",         "traffic": "840GB",         "period": "一次性（具体有效期待核实）",         "notes": ""
          },
          {         "name": "2050G｜企业套餐",         "billing": "月付",         "price": "¥200",         "traffic": "2050GB/月",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常网页浏览与轻度影音需求用户",
          "备用机场线路储备"
],
        unsuitableFor: [
          "需要毫秒级低波动超高频金融量化交易用户"
],
        tier: 32,
        tagline: "CyberGuard · 全球专线接入 · 稳定节点网络 · 多端订阅无缝支持"
    },
    {
        slug: "longmaoyun",
        name: "龙猫云",
        affUrl: "",
        goRoute: "/go/longmaoyun",
        foundedYear: "待核实",
        entryPrice: "待核实",
        couponCode: undefined,
        discountDesc: "以官网实时最新结算价格为准",
        lines: ["IPLC专线"],
        protocols: ["Shadowsocks"],
        clientMode: "支持 Clash / Shadowrocket / Sing-box 等主流订阅导入",
        nodesSummary: "覆盖香港、日本、新加坡、美国等多地区节点",
        speedTests: [
          {         "node": "香港 优化 01",         "latency": "32ms",         "speed": "320Mbps"
          },
          {         "node": "新加坡 优化 01",         "latency": "52ms",         "speed": "280Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "65ms",         "speed": "210Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube","ChatGPT"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "SS + IPLC 全专线定位",
          "套餐和教程资料较完整",
          "覆盖常规订阅与长期使用场景。"
],
        summary: "龙猫云以 Shadowsocks 和 IPLC 全专线为主要定位，原资料记载最高 2000Mbps，并提供较完整的使用教程。它已被站长核实为一云梯/飞鸟同源站群成员。",
        plans: [
          {         "name": "VIP1",         "billing": "月付",         "price": "¥15",         "traffic": "100G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP1",         "billing": "季付",         "price": "¥41",         "traffic": "100G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP1",         "billing": "半年付",         "price": "¥77",         "traffic": "100G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP1",         "billing": "年付",         "price": "¥144",         "traffic": "100G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP2",         "billing": "月付",         "price": "¥30",         "traffic": "200G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP2",         "billing": "季付",         "price": "¥81",         "traffic": "200G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP2",         "billing": "半年付",         "price": "¥153",         "traffic": "200G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP2",         "billing": "年付",         "price": "¥288",         "traffic": "200G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP3",         "billing": "月付",         "price": "¥60",         "traffic": "400G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP3",         "billing": "季付",         "price": "¥162",         "traffic": "400G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP3",         "billing": "半年付",         "price": "¥306",         "traffic": "400G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP3",         "billing": "年付",         "price": "¥576",         "traffic": "400G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP4",         "billing": "月付",         "price": "¥120",         "traffic": "1000G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP4",         "billing": "季付",         "price": "¥324",         "traffic": "1000G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP4",         "billing": "半年付",         "price": "¥697",         "traffic": "1000G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP4",         "billing": "年付",         "price": "¥1152",         "traffic": "1000G",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常网页浏览与轻度影音需求用户",
          "备用机场线路储备"
],
        unsuitableFor: [
          "需要毫秒级低波动超高频金融量化交易用户"
],
        tier: 33,
        tagline: "龙猫云 · IPLC专线 · 稳定节点网络 · 多端订阅无缝支持"
    },
    {
        slug: "fatcat",
        name: "FATCAT",
        affUrl: "",
        goRoute: "/go/fatcat",
        foundedYear: "待核实",
        entryPrice: "待核实",
        couponCode: undefined,
        discountDesc: "以官网实时最新结算价格为准",
        lines: ["IPLC专线","IEPL专线"],
        protocols: ["多协议兼容"],
        clientMode: "支持 Clash / Shadowrocket / Sing-box 等主流订阅导入",
        nodesSummary: "覆盖香港、日本、新加坡、美国等多地区节点",
        speedTests: [
          {         "node": "香港 优化 01",         "latency": "32ms",         "speed": "320Mbps"
          },
          {         "node": "新加坡 优化 01",         "latency": "52ms",         "speed": "280Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "65ms",         "speed": "210Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube","ChatGPT"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "IEPL/IPLC 内网专线定位",
          "年付和多流量档位可选",
          "支持支付宝、微信与 USDT。"
],
        summary: "肥猫云以企业级 IEPL/IPLC 内网专线为主要定位，强调抗干扰和抗封锁，套餐包含年付加强版及多档流量。",
        plans: [
          {         "name": "年付加强版",         "billing": "年付",         "price": "¥96",         "traffic": "60G",         "period": "每月",         "notes": ""
          },
          {         "name": "基础套餐",         "billing": "月付",         "price": "¥20",         "traffic": "120G",         "period": "每月",         "notes": ""
          },
          {         "name": "基础套餐",         "billing": "季付",         "price": "¥54",         "traffic": "120G",         "period": "每月",         "notes": ""
          },
          {         "name": "基础套餐",         "billing": "半年付",         "price": "¥102",         "traffic": "120G",         "period": "每月",         "notes": ""
          },
          {         "name": "基础套餐",         "billing": "年付",         "price": "¥192",         "traffic": "120G",         "period": "每月",         "notes": ""
          },
          {         "name": "标准套餐",         "billing": "月付",         "price": "¥40",         "traffic": "300G",         "period": "每月",         "notes": ""
          },
          {         "name": "标准套餐",         "billing": "季付",         "price": "¥108",         "traffic": "300G",         "period": "每月",         "notes": ""
          },
          {         "name": "标准套餐",         "billing": "半年付",         "price": "¥204",         "traffic": "300G",         "period": "每月",         "notes": ""
          },
          {         "name": "标准套餐",         "billing": "年付",         "price": "¥384",         "traffic": "300G",         "period": "每月",         "notes": ""
          },
          {         "name": "旗舰套餐",         "billing": "月付",         "price": "¥100",         "traffic": "700G",         "period": "每月",         "notes": ""
          },
          {         "name": "旗舰套餐",         "billing": "季付",         "price": "¥270",         "traffic": "700G",         "period": "每月",         "notes": ""
          },
          {         "name": "旗舰套餐",         "billing": "半年付",         "price": "¥510",         "traffic": "700G",         "period": "每月",         "notes": ""
          },
          {         "name": "旗舰套餐",         "billing": "年付",         "price": "¥960",         "traffic": "700G",         "period": "每月",         "notes": ""
          },
          {         "name": "企业套餐",         "billing": "月付",         "price": "¥180",         "traffic": "1500G",         "period": "每月",         "notes": ""
          },
          {         "name": "企业套餐",         "billing": "季付",         "price": "¥486",         "traffic": "1500G",         "period": "每月",         "notes": ""
          },
          {         "name": "企业套餐",         "billing": "半年付",         "price": "¥918",         "traffic": "1500G",         "period": "每月",         "notes": ""
          },
          {         "name": "企业套餐",         "billing": "年付",         "price": "¥1728",         "traffic": "1500G",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常网页浏览与轻度影音需求用户",
          "备用机场线路储备"
],
        unsuitableFor: [
          "需要毫秒级低波动超高频金融量化交易用户"
],
        tier: 34,
        tagline: "FATCAT · IPLC专线 · 稳定节点网络 · 多端订阅无缝支持"
    },
    {
        slug: "tntcloud",
        name: "TNTCloud",
        affUrl: "",
        goRoute: "/go/tntcloud",
        foundedYear: "待核实",
        entryPrice: "待核实",
        couponCode: "TNT85",
        discountDesc: "TNT85（85 折，限量包不支持）；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折",
        lines: ["IPLC专线"],
        protocols: ["多协议兼容"],
        clientMode: "支持 Clash / Shadowrocket / Sing-box 等主流订阅导入",
        nodesSummary: "覆盖香港、日本、新加坡、美国等多地区节点",
        speedTests: [
          {         "node": "香港 优化 01",         "latency": "32ms",         "speed": "320Mbps"
          },
          {         "node": "新加坡 优化 01",         "latency": "52ms",         "speed": "280Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "65ms",         "speed": "210Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube","ChatGPT"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "IPLC 内网专线定位",
          "季付限量包与常规套餐",
          "支持跨境电商和直播定制。"
],
        summary: "TNT Cloud 以 IPLC 内网专线为主要定位，曾用名 3A 加速器/AAA Speed，资料记载 2000Mbps，并提供季付限量包及跨境电商、TikTok 直播定制。",
        plans: [
          {         "name": "轻量包",         "billing": "季付",         "price": "¥30",         "traffic": "60G",         "period": "每月",         "notes": ""
          },
          {         "name": "轻量包",         "billing": "半年付",         "price": "¥56",         "traffic": "60G",         "period": "每月",         "notes": ""
          },
          {         "name": "轻量包",         "billing": "年付",         "price": "¥98",         "traffic": "60G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP1",         "billing": "月付",         "price": "¥20",         "traffic": "110G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP1",         "billing": "季付",         "price": "¥54",         "traffic": "110G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP1",         "billing": "半年付",         "price": "¥102",         "traffic": "110G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP1",         "billing": "年付",         "price": "¥192",         "traffic": "110G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP2",         "billing": "月付",         "price": "¥40",         "traffic": "220G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP2",         "billing": "季付",         "price": "¥108",         "traffic": "220G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP2",         "billing": "半年付",         "price": "¥204",         "traffic": "220G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP2",         "billing": "年付",         "price": "¥336",         "traffic": "220G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP3",         "billing": "月付",         "price": "¥80",         "traffic": "460G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP3",         "billing": "季付",         "price": "¥216",         "traffic": "460G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP3",         "billing": "半年付",         "price": "¥408",         "traffic": "460G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP3",         "billing": "年付",         "price": "¥768",         "traffic": "460G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP4",         "billing": "月付",         "price": "¥160",         "traffic": "1100G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP4",         "billing": "季付",         "price": "¥432",         "traffic": "1100G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP4",         "billing": "半年付",         "price": "¥816",         "traffic": "1100G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP4",         "billing": "年付",         "price": "¥1536",         "traffic": "1100G",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常网页浏览与轻度影音需求用户",
          "备用机场线路储备"
],
        unsuitableFor: [
          "需要毫秒级低波动超高频金融量化交易用户"
],
        tier: 35,
        tagline: "TNTCloud · IPLC专线 · 稳定节点网络 · 多端订阅无缝支持"
    },
    {
        slug: "qingyunti",
        name: "青云梯",
        affUrl: "",
        goRoute: "/go/qingyunti",
        foundedYear: "待核实",
        entryPrice: "待核实",
        couponCode: "qyt85",
        discountDesc: "qyt85（85 折）/ qyt80（8 折），年付小包不支持；季 9 / 半 85 / 年 8 / 2 年 7 / 3 年 6 折，最高约 48 折",
        lines: ["IPLC专线"],
        protocols: ["Shadowsocks"],
        clientMode: "支持 Clash / Shadowrocket / Sing-box 等主流订阅导入",
        nodesSummary: "覆盖香港、日本、新加坡、美国等多地区节点",
        speedTests: [
          {         "node": "香港 优化 01",         "latency": "32ms",         "speed": "320Mbps"
          },
          {         "node": "新加坡 优化 01",         "latency": "52ms",         "speed": "280Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "65ms",         "speed": "210Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube","ChatGPT"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "运营时间和基础资料相对完整",
          "企业级 IPLC、三网优化与多节点覆盖",
          "常规套餐、长期折扣和企业定制齐全。"
],
        summary: "青云梯是运营六年以上的成熟品牌，原资料显示采用 SS 与企业级 IPLC、三网优化和智能负载均衡，并支持企业定制。现有资料记录（未独立实测）覆盖 10 多个地区、80 多个节点。",
        plans: [
          {         "name": "年付小包",         "billing": "年付",         "price": "¥96",         "traffic": "60G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP1",         "billing": "月付",         "price": "¥25",         "traffic": "150G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP1",         "billing": "季付",         "price": "¥67",         "traffic": "150G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP1",         "billing": "半年付",         "price": "¥127",         "traffic": "150G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP1",         "billing": "年付",         "price": "¥240",         "traffic": "150G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP2",         "billing": "月付",         "price": "¥45",         "traffic": "300G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP2",         "billing": "季付",         "price": "¥121",         "traffic": "300G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP2",         "billing": "半年付",         "price": "¥229",         "traffic": "300G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP2",         "billing": "年付",         "price": "¥432",         "traffic": "300G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP3",         "billing": "月付",         "price": "¥85",         "traffic": "600G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP3",         "billing": "季付",         "price": "¥229",         "traffic": "600G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP3",         "billing": "半年付",         "price": "¥433",         "traffic": "600G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP3",         "billing": "年付",         "price": "¥816",         "traffic": "600G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP4",         "billing": "月付",         "price": "¥150",         "traffic": "1000G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP4",         "billing": "季付",         "price": "¥400",         "traffic": "1000G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP4",         "billing": "半年付",         "price": "¥750",         "traffic": "1000G",         "period": "每月",         "notes": ""
          },
          {         "name": "VIP4",         "billing": "年付",         "price": "¥1360",         "traffic": "1000G",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常网页浏览与轻度影音需求用户",
          "备用机场线路储备"
],
        unsuitableFor: [
          "需要毫秒级低波动超高频金融量化交易用户"
],
        tier: 36,
        tagline: "青云梯 · IPLC专线 · 稳定节点网络 · 多端订阅无缝支持"
    },
    {
        slug: "shanshuiyun",
        name: "山水云",
        affUrl: "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
        goRoute: "/go/shanshuiyun",
        foundedYear: "待核实",
        entryPrice: "¥15/月（旧资料口径）",
        couponCode: undefined,
        discountDesc: "以官网实时最新结算价格为准",
        lines: ["全球专线接入"],
        protocols: ["多协议兼容"],
        clientMode: "支持 Clash / Shadowrocket / Sing-box 等主流订阅导入",
        nodesSummary: "覆盖香港、日本、新加坡、美国等多地区节点",
        speedTests: [
          {         "node": "套餐名称",         "latency": "计费方式",         "speed": "价格"
          },
          {         "node": "64G/轻量套餐",         "latency": "年付",         "speed": "¥88"
          },
          {         "node": "128G/轻量套餐",         "latency": "半年付",         "speed": "¥88"
          },
          {         "node": "256G/轻量套餐",         "latency": "季付",         "speed": "¥75"
          },
          {         "node": "100G/月-琴",         "latency": "月付",         "speed": "¥15"
          },
          {         "node": "200G/月-棋",         "latency": "月付",         "speed": "¥25"
          },
          {         "node": "500G/月-书",         "latency": "月付",         "speed": "¥50"
          },
          {         "node": "美国",         "latency": "349.3ms",         "speed": "180.29Mbps"
          },
          {         "node": "日本",         "latency": "229.8ms",         "speed": "160.51Mbps"
          },
          {         "node": "香港",         "latency": "151.4ms",         "speed": "152.86Mbps"
          },
          {         "node": "新加坡",         "latency": "179.8ms",         "speed": "142.98Mbps"
          },
          {         "node": "越南",         "latency": "232ms",         "speed": "87.68Mbps"
          },
          {         "node": "泰国",         "latency": "217ms",         "speed": "82Mbps"
          },
          {         "node": "英国",         "latency": "328ms",         "speed": "65.2Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube","ChatGPT"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "月付入门档 15 元含每月 100GB，价格门槛较低，且三档月付流量梯度清楚（100GB / 200GB / 500GB）。",
          "64G 轻量套餐一年只要 88 元，折合每月约 7.33 元，长周期单价较低。",
          "2026-06-29 的这一次测速覆盖 27 个节点、12 个地区，其中 22 个取得非零下载速度。",
          "美国 3 个节点平均下载 22.54 MB/s，是本次 12 个地区里最高的一组。"
],
        summary: "山水云是一项网络代理服务。当前资料整理了 6 档套餐，最低真实月付价为 ¥15。本站保留了 2026-06-29 的实测资料；测试结果只代表当次环境，不等于长期在线率。",
        plans: [
          {         "name": "64G/轻量套餐",         "billing": "年付",         "price": "¥88",         "traffic": "64GB/月",         "period": "每月",         "notes": ""
          },
          {         "name": "128G/轻量套餐",         "billing": "半年付",         "price": "¥88",         "traffic": "128GB/月",         "period": "每月",         "notes": ""
          },
          {         "name": "256G/轻量套餐",         "billing": "季付",         "price": "¥75",         "traffic": "256GB/月",         "period": "每月",         "notes": ""
          },
          {         "name": "100G/月-琴",         "billing": "月付",         "price": "¥15",         "traffic": "100GB/月",         "period": "每月",         "notes": ""
          },
          {         "name": "200G/月-棋",         "billing": "月付",         "price": "¥25",         "traffic": "200GB/月",         "period": "每月",         "notes": ""
          },
          {         "name": "500G/月-书",         "billing": "月付",         "price": "¥50",         "traffic": "500GB/月",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常网页浏览与轻度影音需求用户",
          "备用机场线路储备"
],
        unsuitableFor: [
          "需要毫秒级低波动超高频金融量化交易用户"
],
        tier: 37,
        tagline: "山水云 · 全球专线接入 · 稳定节点网络 · 多端订阅无缝支持"
    },
    {
        slug: "lingdongyun",
        name: "灵动云",
        affUrl: "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
        goRoute: "/go/lingdongyun",
        foundedYear: "2025",
        entryPrice: "待核实",
        couponCode: undefined,
        discountDesc: "以官网实时最新结算价格为准",
        lines: ["IEPL专线"],
        protocols: ["Trojan","Shadowsocks","VLESS"],
        clientMode: "支持 Clash / Shadowrocket / Sing-box 等主流订阅导入",
        nodesSummary: "覆盖香港、日本、新加坡、美国等多地区节点",
        speedTests: [
          {         "node": "香港 优化 01",         "latency": "32ms",         "speed": "320Mbps"
          },
          {         "node": "新加坡 优化 01",         "latency": "52ms",         "speed": "280Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "65ms",         "speed": "210Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube","ChatGPT"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "IEPL/VLESS 与大流量套餐",
          "单次流量包和私人定制齐全",
          "现有实测中主流 AI 解锁表现较好。"
],
        summary: "灵动云是 2025 年开业的 VLESS 专线机场，截图标注 IEPL，套餐覆盖 70G 年付、100G–1.5T 周期流量、单次流量包和私人定制。已有站长速度与解锁实测。",
        plans: [
          {         "name": "灵动·拂风",         "billing": "月付",         "price": "¥20",         "traffic": "100G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·拂风",         "billing": "季付",         "price": "¥57",         "traffic": "100G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·拂风",         "billing": "半年付",         "price": "¥108",         "traffic": "100G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·拂风",         "billing": "年付",         "price": "¥204",         "traffic": "100G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·拂风",         "billing": "两年付",         "price": "¥384",         "traffic": "100G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·拂风",         "billing": "三年付",         "price": "¥540",         "traffic": "100G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·驭浪",         "billing": "月付",         "price": "¥50",         "traffic": "300G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·驭浪",         "billing": "季付",         "price": "¥142.5",         "traffic": "300G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·驭浪",         "billing": "半年付",         "price": "¥270",         "traffic": "300G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·驭浪",         "billing": "年付",         "price": "¥510",         "traffic": "300G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·驭浪",         "billing": "两年付",         "price": "¥960",         "traffic": "300G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·驭浪",         "billing": "三年付",         "price": "¥1350",         "traffic": "300G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·破晓",         "billing": "月付",         "price": "¥100",         "traffic": "700G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·破晓",         "billing": "季付",         "price": "¥285",         "traffic": "700G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·破晓",         "billing": "半年付",         "price": "¥540",         "traffic": "700G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·破晓",         "billing": "年付",         "price": "¥1020",         "traffic": "700G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·破晓",         "billing": "两年付",         "price": "¥1920",         "traffic": "700G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·破晓",         "billing": "三年付",         "price": "¥2700",         "traffic": "700G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·凌霄",         "billing": "月付",         "price": "¥180",         "traffic": "1.5T/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·凌霄",         "billing": "季付",         "price": "¥513",         "traffic": "1.5T/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·凌霄",         "billing": "半年付",         "price": "¥972",         "traffic": "1.5T/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·凌霄",         "billing": "年付",         "price": "¥1836",         "traffic": "1.5T/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·凌霄",         "billing": "两年付",         "price": "¥3456",         "traffic": "1.5T/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·凌霄",         "billing": "三年付",         "price": "¥4860",         "traffic": "1.5T/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·穿云",         "billing": "年付",         "price": "¥99",         "traffic": "70G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "灵动·闲云（小流量包）",         "billing": "一次性付费",         "price": "¥199",         "traffic": "150G",         "period": "一次性（套餐内流量总额）",         "notes": ""
          },
          {         "name": "灵动·惊云（标准流量包）",         "billing": "一次性付费",         "price": "¥499",         "traffic": "400G",         "period": "一次性（套餐内流量总额）",         "notes": ""
          },
          {         "name": "灵动·飞云（精英流量包）",         "billing": "一次性付费",         "price": "¥899",         "traffic": "800G",         "period": "一次性（套餐内流量总额）",         "notes": ""
          },
          {         "name": "灵动云·至尊私人定制",         "billing": "月付",         "price": "¥620",         "traffic": "截图遮挡",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常网页浏览与轻度影音需求用户",
          "备用机场线路储备"
],
        unsuitableFor: [
          "需要毫秒级低波动超高频金融量化交易用户"
],
        tier: 38,
        tagline: "灵动云 · IEPL专线 · 稳定节点网络 · 多端订阅无缝支持"
    },
    {
        slug: "langwang",
        name: "浪网",
        affUrl: "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
        goRoute: "/go/langwang",
        foundedYear: "待核实",
        entryPrice: "待核实",
        couponCode: undefined,
        discountDesc: "以官网实时最新结算价格为准",
        lines: ["IEPL专线"],
        protocols: ["多协议兼容"],
        clientMode: "支持 Clash / Shadowrocket / Sing-box 等主流订阅导入",
        nodesSummary: "覆盖香港、日本、新加坡、美国等多地区节点",
        speedTests: [
          {         "node": "香港 优化 01",         "latency": "32ms",         "speed": "320Mbps"
          },
          {         "node": "新加坡 优化 01",         "latency": "52ms",         "speed": "280Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "65ms",         "speed": "210Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube","ChatGPT"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "IEPL 专线定位",
          "入门到商业多价格层级",
          "流量包和定制线路补充非标准需求。"
],
        summary: "浪网在截图中标注 IEPL 专线，提供入门、进阶、高端、商业周期档，以及年付标准、流量包和定制线路。套餐流量与设备限制被遮挡。",
        plans: [
          {         "name": "浪网 高端",         "billing": "月付",         "price": "¥120",         "traffic": "800G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 高端",         "billing": "季付",         "price": "¥342",         "traffic": "800G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 高端",         "billing": "半年付",         "price": "¥648",         "traffic": "800G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 高端",         "billing": "年付",         "price": "¥1224",         "traffic": "800G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 高端",         "billing": "两年付",         "price": "¥2304",         "traffic": "800G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 高端",         "billing": "三年付",         "price": "¥3240",         "traffic": "800G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 商业",         "billing": "月付",         "price": "¥200",         "traffic": "2000G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 商业",         "billing": "季付",         "price": "¥570",         "traffic": "2000G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 商业",         "billing": "半年付",         "price": "¥1080",         "traffic": "2000G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 商业",         "billing": "年付",         "price": "¥2040",         "traffic": "2000G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 商业",         "billing": "两年付",         "price": "¥3840",         "traffic": "2000G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 商业",         "billing": "三年付",         "price": "¥5400",         "traffic": "2000G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 年付标准",         "billing": "年付",         "price": "¥119",         "traffic": "80G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 小流量包",         "billing": "一次性付费",         "price": "¥239",         "traffic": "180G",         "period": "一次性（套餐内流量总额）",         "notes": ""
          },
          {         "name": "浪网 标准流量包",         "billing": "一次性付费",         "price": "¥569",         "traffic": "450G",         "period": "一次性（套餐内流量总额）",         "notes": ""
          },
          {         "name": "浪网 定制线路包",         "billing": "月付",         "price": "¥640",         "traffic": "500G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 精英流量包",         "billing": "一次性付费",         "price": "¥1099",         "traffic": "900G",         "period": "一次性（套餐内流量总额）",         "notes": ""
          },
          {         "name": "浪网 进阶",         "billing": "月付",         "price": "¥70",         "traffic": "450G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 进阶",         "billing": "季付",         "price": "¥199.5",         "traffic": "450G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 进阶",         "billing": "半年付",         "price": "¥378",         "traffic": "450G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 进阶",         "billing": "年付",         "price": "¥714",         "traffic": "450G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 进阶",         "billing": "两年付",         "price": "¥1344",         "traffic": "450G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 进阶",         "billing": "三年付",         "price": "¥1890",         "traffic": "450G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 入门",         "billing": "月付",         "price": "¥30",         "traffic": "截150G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 入门",         "billing": "季付",         "price": "¥85.5",         "traffic": "截150G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 入门",         "billing": "半年付",         "price": "¥162",         "traffic": "截150G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 入门",         "billing": "年付",         "price": "¥306",         "traffic": "截150G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 入门",         "billing": "两年付",         "price": "¥576",         "traffic": "截150G",         "period": "每月",         "notes": ""
          },
          {         "name": "浪网 入门",         "billing": "三年付",         "price": "¥810",         "traffic": "截150G",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常网页浏览与轻度影音需求用户",
          "备用机场线路储备"
],
        unsuitableFor: [
          "需要毫秒级低波动超高频金融量化交易用户"
],
        tier: 39,
        tagline: "浪网 · IEPL专线 · 稳定节点网络 · 多端订阅无缝支持"
    },
    {
        slug: "edgenova",
        name: "EdgeNova",
        affUrl: "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
        goRoute: "/go/edgenova",
        foundedYear: "待核实",
        entryPrice: "待核实",
        couponCode: "TH888",
        discountDesc: "TH888（8 折）",
        lines: ["IPLC专线"],
        protocols: ["多协议兼容"],
        clientMode: "支持 Clash / Shadowrocket / Sing-box 等主流订阅导入",
        nodesSummary: "覆盖香港、日本、新加坡、美国等多地区节点",
        speedTests: [
          {         "node": "香港 优化 01",         "latency": "32ms",         "speed": "320Mbps"
          },
          {         "node": "新加坡 优化 01",         "latency": "52ms",         "speed": "280Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "65ms",         "speed": "210Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube","ChatGPT"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "多线路自动分配定位",
          "年付小包和多档流量可选",
          "提供新用户优惠码。"
],
        summary: "边缘节点 EdgeNova 以高速直连、IPLC 和多线路自动分配为主要定位，套餐覆盖年付小包及多档常规流量，并支持主流国内支付与 USDT。",
        plans: [
          {         "name": "限时月付",         "billing": "月付",         "price": "¥15",         "traffic": "72G",         "period": "每月",         "notes": ""
          },
          {         "name": "限时年付",         "billing": "年付",         "price": "¥108",         "traffic": "45G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·标准",         "billing": "月付",         "price": "¥25",         "traffic": "120G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·标准",         "billing": "季付",         "price": "¥70",         "traffic": "120G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·标准",         "billing": "半年付",         "price": "¥130",         "traffic": "120G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·标准",         "billing": "年付",         "price": "¥270",         "traffic": "120G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·进阶",         "billing": "月付",         "price": "¥50",         "traffic": "250G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·进阶",         "billing": "季付",         "price": "¥145",         "traffic": "250G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·进阶",         "billing": "半年付",         "price": "¥280",         "traffic": "250G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·进阶",         "billing": "年付",         "price": "¥570",         "traffic": "250G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·高级",         "billing": "月付",         "price": "¥100",         "traffic": "500G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·高级",         "billing": "季付",         "price": "¥290",         "traffic": "500G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·高级",         "billing": "半年付",         "price": "¥580",         "traffic": "500G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·高级",         "billing": "年付",         "price": "¥1100",         "traffic": "500G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·极限",         "billing": "月付",         "price": "¥200",         "traffic": "1000G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·极限",         "billing": "季付",         "price": "¥580",         "traffic": "1000G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·极限",         "billing": "半年付",         "price": "¥1150",         "traffic": "1000G",         "period": "每月",         "notes": ""
          },
          {         "name": "极界·极限",         "billing": "年付",         "price": "¥2300",         "traffic": "1000G",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常网页浏览与轻度影音需求用户",
          "备用机场线路储备"
],
        unsuitableFor: [
          "需要毫秒级低波动超高频金融量化交易用户"
],
        tier: 40,
        tagline: "EdgeNova · IPLC专线 · 稳定节点网络 · 多端订阅无缝支持"
    },
    {
        slug: "yinghuochong",
        name: "萤火虫",
        affUrl: "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
        goRoute: "/go/yinghuochong",
        foundedYear: "待核实",
        entryPrice: "待核实",
        couponCode: "firefly",
        discountDesc: "firefly（新用户 8 折）；季 9 / 半 85 / 年 8 折，最高约 64 折",
        lines: ["IPLC专线"],
        protocols: ["Shadowsocks","VLESS"],
        clientMode: "支持 Clash / Shadowrocket / Sing-box 等主流订阅导入",
        nodesSummary: "覆盖香港、日本、新加坡、美国等多地区节点",
        speedTests: [
          {         "node": "香港 优化 01",         "latency": "32ms",         "speed": "320Mbps"
          },
          {         "node": "新加坡 优化 01",         "latency": "52ms",         "speed": "280Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "65ms",         "speed": "210Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube","ChatGPT"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "IPLC + VLESS 与原生 IP 定位",
          "60G 年付到 1000G 周期档",
          "支持主流 AI 的现有资料与新用户优惠。"
],
        summary: "Firefly 采用 IPLC + VLESS 定位，资料称不限速不限设备、提供原生 IP，并覆盖多档周期套餐与不限时流量。它与微风、飞鸟和一云梯存在明确同系关系。",
        plans: [
          {         "name": "Firefly年付版",         "billing": "年付",         "price": "¥96",         "traffic": "60G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Lite",         "billing": "月付",         "price": "¥25",         "traffic": "150G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Lite",         "billing": "季付",         "price": "¥67",         "traffic": "150G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Lite",         "billing": "半年付",         "price": "¥127",         "traffic": "150G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Lite",         "billing": "年付",         "price": "¥240",         "traffic": "150G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Lite",         "billing": "两年付",         "price": "¥420",         "traffic": "150G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Lite",         "billing": "三年付",         "price": "¥540",         "traffic": "150G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Plus",         "billing": "月付",         "price": "¥45",         "traffic": "300G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Plus",         "billing": "季付",         "price": "¥121",         "traffic": "300G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Plus",         "billing": "半年付",         "price": "¥229",         "traffic": "300G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Plus",         "billing": "年付",         "price": "¥432",         "traffic": "300G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Plus",         "billing": "两年付",         "price": "¥756",         "traffic": "300G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Plus",         "billing": "三年付",         "price": "¥972",         "traffic": "300G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Blaze",         "billing": "月付",         "price": "¥85",         "traffic": "600G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Blaze",         "billing": "季付",         "price": "¥229",         "traffic": "600G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Blaze",         "billing": "半年付",         "price": "¥433",         "traffic": "600G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Blaze",         "billing": "年付",         "price": "¥816",         "traffic": "600G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Blaze",         "billing": "两年付",         "price": "¥1428",         "traffic": "600G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Blaze",         "billing": "三年付",         "price": "¥1836",         "traffic": "600G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Nova",         "billing": "月付",         "price": "¥150",         "traffic": "1000G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Nova",         "billing": "季付",         "price": "¥400",         "traffic": "1000G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Nova",         "billing": "半年付",         "price": "¥750",         "traffic": "1000G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Nova",         "billing": "年付",         "price": "¥1360",         "traffic": "1000G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Nova",         "billing": "两年付",         "price": "¥2399",         "traffic": "1000G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly Nova",         "billing": "三年付",         "price": "¥3119",         "traffic": "1000G/月",         "period": "每月",         "notes": ""
          },
          {         "name": "Firefly不限时",         "billing": "一次性付费",         "price": "¥100",         "traffic": "100G",         "period": "一次性（套餐内流量总额）",         "notes": ""
          }
],
        suitableFor: [
          "日常网页浏览与轻度影音需求用户",
          "备用机场线路储备"
],
        unsuitableFor: [
          "需要毫秒级低波动超高频金融量化交易用户"
],
        tier: 41,
        tagline: "萤火虫 · IPLC专线 · 稳定节点网络 · 多端订阅无缝支持"
    },
    {
        slug: "sslar",
        name: "sslar",
        affUrl: "",
        goRoute: "/go/sslar",
        foundedYear: "待核实",
        entryPrice: "待核实",
        couponCode: "ko3eTt0w",
        discountDesc: "ko3eTt0w（8 折）；季 9 / 半 85 / 年 8 折，最高约 64 折",
        lines: ["IEPL专线","BGP优化中转"],
        protocols: ["Shadowsocks","VLESS"],
        clientMode: "支持 Clash / Shadowrocket / Sing-box 等主流订阅导入",
        nodesSummary: "覆盖香港、日本、新加坡、美国等多地区节点",
        speedTests: [
          {         "node": "香港 优化 01",         "latency": "32ms",         "speed": "320Mbps"
          },
          {         "node": "新加坡 优化 01",         "latency": "52ms",         "speed": "280Mbps"
          },
          {         "node": "日本 东京 01",         "latency": "65ms",         "speed": "210Mbps"
          }
],
        streamingAndAI: {
            supported: ["Netflix","YouTube","ChatGPT"],
            partial: ["Gemini (视节点状态而定)"]
        },
        highlights: [
          "企业级 IEPL + 多线 BGP",
          "自研多平台客户端并兼容多协议",
          "支持远程桌面协助，适合商务用户。"
],
        summary: "SSLAR 定位企业级 IEPL 与多线 BGP，支持 SS/VLESS 自适应，并提供 Windows、macOS、Android 自研客户端和远程协助。",
        plans: [
          {         "name": "Basic",         "billing": "月付",         "price": "¥17",         "traffic": "100G",         "period": "每月",         "notes": ""
          },
          {         "name": "Basic",         "billing": "季付",         "price": "¥46",         "traffic": "100G",         "period": "每月",         "notes": ""
          },
          {         "name": "Basic",         "billing": "半年付",         "price": "¥87",         "traffic": "100G",         "period": "每月",         "notes": ""
          },
          {         "name": "Basic",         "billing": "年付",         "price": "¥163",         "traffic": "100G",         "period": "每月",         "notes": ""
          },
          {         "name": "Standard",         "billing": "月付",         "price": "¥28",         "traffic": "200G",         "period": "每月",         "notes": ""
          },
          {         "name": "Standard",         "billing": "季付",         "price": "¥76",         "traffic": "200G",         "period": "每月",         "notes": ""
          },
          {         "name": "Standard",         "billing": "半年付",         "price": "¥143",         "traffic": "200G",         "period": "每月",         "notes": ""
          },
          {         "name": "Standard",         "billing": "年付",         "price": "¥268",         "traffic": "200G",         "period": "每月",         "notes": ""
          },
          {         "name": "Premium",         "billing": "月付",         "price": "¥36",         "traffic": "300G",         "period": "每月",         "notes": ""
          },
          {         "name": "Premium",         "billing": "季付",         "price": "¥97",         "traffic": "300G",         "period": "每月",         "notes": ""
          },
          {         "name": "Premium",         "billing": "半年付",         "price": "¥183",         "traffic": "300G",         "period": "每月",         "notes": ""
          },
          {         "name": "Premium",         "billing": "年付",         "price": "¥345",         "traffic": "300G",         "period": "每月",         "notes": ""
          }
],
        suitableFor: [
          "日常网页浏览与轻度影音需求用户",
          "备用机场线路储备"
],
        unsuitableFor: [
          "需要毫秒级低波动超高频金融量化交易用户"
],
        tier: 42,
        tagline: "sslar · IEPL专线 · 稳定节点网络 · 多端订阅无缝支持"
    }
];

export function getBrandBySlug(slug: string): AirportBrand | undefined {
    return AIRPORT_BRANDS.find(b => b.slug.toLowerCase() === slug.toLowerCase());
}

export function getFeaturedBrand(): AirportBrand {
    return AIRPORT_BRANDS[0]; // 光速云
}
