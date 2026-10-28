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
    }
];

export function getBrandBySlug(slug: string): AirportBrand | undefined {
    return AIRPORT_BRANDS.find(b => b.slug.toLowerCase() === slug.toLowerCase());
}

export function getFeaturedBrand(): AirportBrand {
    return AIRPORT_BRANDS[0]; // 光速云
}
