export interface ClientSoftware {
    id: string;
    name: string;
    os: string[]; // ["Windows", "macOS", "Linux", "Android", "iOS", "OpenWrt"]
    core: string; // "Mihomo (Clash Meta)" | "Xray" | "sing-box" | "Surge"
    features: string[];
    downloadType: "GitHub" | "App Store" | "Official";
    downloadUrl: string;
    description: string;
    isRecommended?: boolean;
    configGuideTip: string;
}

export const CLIENT_DATA: ClientSoftware[] = [
    {
        id: "clash-verge-rev",
        name: "Clash Verge Rev",
        os: ["Windows", "macOS", "Linux"],
        core: "Mihomo (Clash.Meta) 内核",
        features: ["TUN 虚拟网卡模式", "规则智能分流", "多订阅合并管理", "现代 Fluent 设计界面"],
        downloadType: "GitHub",
        downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases",
        description: "当前 Windows 与 macOS 桌面平台最主流、最稳定的 Clash 继承者。内置最新 Mihomo 内核，支持完整规则集与 TUN 模式，适合新手到高阶全阶段用户。",
        isRecommended: true,
        configGuideTip: "建议开启【服务模式】与【TUN 模式】，可实现全系统无死角接管，免除浏览器和开发工具单独配置代理的烦恼。"
    },
    {
        id: "v2rayn",
        name: "v2rayN",
        os: ["Windows", "macOS", "Linux"],
        core: "Xray / sing-box / Mihomo 多核心",
        features: ["多核心自由切换", "批量节点测速与真连接测试", "全面兼容 VLESS/VMess/Trojan/Shadowsocks", "支持自定义路由规则"],
        downloadType: "GitHub",
        downloadUrl: "https://github.com/2dust/v2rayN/releases",
        description: "Windows 平台历史悠久且功能极其强悍的多协议客户端。支持多内核切换，节点延迟与带宽实测精准，是网络调试与多机场聚合测试的标准利器。",
        isRecommended: true,
        configGuideTip: "导入机场订阅后，点击【路由设置】选择【绕过大陆】模式，按 Ctrl+A 全选节点后按 Ctrl+R 即可进行真连接可用性批量测速。"
    },
    {
        id: "flclash",
        name: "FlClash",
        os: ["Windows", "macOS", "Linux", "Android"],
        core: "Mihomo 内核",
        features: ["Flutter 跨平台现代化 UI", "全平台统一交互体验", "极低资源占用", "Clash YAML 订阅无缝解析"],
        downloadType: "GitHub",
        downloadUrl: "https://github.com/chen08209/FlClash/releases",
        description: "基于 Flutter 打造的轻量级全平台代理客户端。在 Windows、Android 和 macOS 上拥有一致的优雅设计与快速响应能力，深受追求简约的用户青睐。",
        isRecommended: true,
        configGuideTip: "适合厌烦复杂配置、追求在手机和电脑端拥有完全相同操作界面的极简主义用户。"
    },
    {
        id: "hiddify",
        name: "Hiddify",
        os: ["Windows", "macOS", "Linux", "Android", "iOS"],
        core: "sing-box 官方核心",
        features: ["全自动智能选路", "支持跨协议所有主流格式", "无缝深色模式与现代界面", "新手零配置导入"],
        downloadType: "GitHub",
        downloadUrl: "https://github.com/hiddify/hiddify-app/releases",
        description: "新一代跨平台多协议客户端，支持 sing-box 完整生态与全主流协议，支持直接粘贴任何格式的订阅链接，自动识别并优化连接。",
        isRecommended: true,
        configGuideTip: "对不同机场杂乱的订阅格式兼容性极强，支持一键连通，特别适合新手跨设备协同。"
    },
    {
        id: "shadowrocket",
        name: "Shadowrocket (小火箭)",
        os: ["iOS"],
        core: "自研多协议规则引擎",
        features: ["规则分流与策略组", "按域名与 IP 精细分流", "节点延迟测速与请求抓包", "全协议深度兼容"],
        downloadType: "App Store",
        downloadUrl: "https://apps.apple.com/us/app/shadowrocket/id932747118",
        description: "iOS 平台最普及的知名规则代理工具。生态成熟，几乎所有机场均直接提供一键导入 Shadowrocket 协议，配置直观，稳定性极高。",
        isRecommended: true,
        configGuideTip: "需使用海外 Apple ID 在 App Store 购买下载。全局路由推荐保持【配置】模式，自动实现国内直连、海外走机场专线。"
    },
    {
        id: "stash",
        name: "Stash",
        os: ["iOS", "macOS"],
        core: "Clash 内核 iOS 官方适配",
        features: ["完全兼容 Clash 规则与策略组", "覆写 (Override) 机制", "网络诊断与请求拓扑仪表盘", "Web 仪表盘联动"],
        downloadType: "App Store",
        downloadUrl: "https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349",
        description: "iOS 平台真正的“Clash for iOS”。原汁原味支持 Clash YAML 配置文件与策略组规则，UI 极为精致，与 macOS 端配置体验一脉相承。",
        isRecommended: true,
        configGuideTip: "适合习惯桌面端 Clash 策略组结构（如香港专线、新加坡流媒体、AI专用）并在 iPhone 上保持一致体验的高阶用户。"
    },
    {
        id: "v2rayng",
        name: "v2rayNG",
        os: ["Android"],
        core: "Xray 核心",
        features: ["VLESS/VMess/Trojan 完美支持", "分应用代理（按 App 分流）", "订阅更新与批量节点筛选", "极省电与后台保活"],
        downloadType: "GitHub",
        downloadUrl: "https://github.com/2dust/v2rayNG/releases",
        description: "安卓端装机必备的经典轻量代理客户端。无需多余权限，支持分应用代理设置（国内微信/银行直连，海外应用走专线），内存占用极低。",
        isRecommended: true,
        configGuideTip: "在左侧菜单开启【分应用代理】，勾选需要翻墙的 App（如 Chrome、YouTube、Telegram、ChatGPT），既省流量又能彻底避免国内银行软件风控。"
    },
    {
        id: "openclash",
        name: "OpenClash",
        os: ["OpenWrt"],
        core: "Mihomo (Clash.Meta) 内核",
        features: ["路由器全屋透明代理", "旁路由/主路由双模式", "TCP/UDP 智能分流", "防 DNS 污染与 Leak 保护"],
        downloadType: "GitHub",
        downloadUrl: "https://github.com/vernesong/OpenClash",
        description: "软路由与家庭 NAS 环境下的统治级透明代理插件。通过路由器全局接管全屋智能电视、游戏主机、手机与电脑，实现无感科学上网。",
        isRecommended: true,
        configGuideTip: "建议采用 Fake-IP (TUN 混合模式)，在 DNS 设置中指定国内阿里/腾讯公共 DNS 与海外专线防污染 DNS，确保全屋 4K 秒开。"
    }
];

export function getClientsByOs(osName: string): ClientSoftware[] {
    return CLIENT_DATA.filter(c => c.os.includes(osName));
}
