const siteUrl = (typeof process !== 'undefined' && process.env?.SITE) || "https://clashzhinan.cc";

export const SITE_CONFIG = {
    title: "Clash指南",
    logoSrc: "/favicon.svg",
    description: "Clash指南网 (clashzhinan.cc) - 专注于高速网络专线机场评测、全平台代理客户端指南与拓扑可观测性技术平台。",
    author: "ClashZhinan",
    authorPhonetic: "/klæʃ ʒiːnæn/",
    signature: "ClashZhinan",
    site: siteUrl,
    imageServer: ["https://images.pexels.com", "https://images.unsplash.com"],
    postsPerPage: 6,
    projectsPerPage: 12,
    verification: {
        google: (typeof process !== 'undefined' && process.env?.GOOGLE_SITE_VERIFICATION) || "",
        bing: (typeof process !== 'undefined' && process.env?.BING_SITE_VERIFICATION) || "",
        baidu: (typeof process !== 'undefined' && process.env?.BAIDU_SITE_VERIFICATION) || "",
        shenma: (typeof process !== 'undefined' && process.env?.SHENMA_SITE_VERIFICATION) || ""
    },
    defaultImage: "/blog-placeholder-1.png",
    nav: [
        { text: "机场推荐", href: "/jichang" },
        { text: "VPN专栏", href: "/vpn" },
        { text: "Clash教程", href: "/clash" },
        { text: "品牌库", href: "/brands" },
        { text: "网络图志", href: "/traces" },
        { text: "使用教程", href: "/tutorial" },
    ],
    homepage: {
        harmonicSystem: {
            seed: 2026,
            speed: 0.0042
        },
        links: [
            { text: "查阅机场品牌库", href: "/brands" },
            { text: "全平台客户端下载", href: "/clients" },
            { text: "观测全球节点图志", href: "/traces" }
        ]
    },
    footer: {
        social: [
            { text: "机场推荐", href: "/jichang" },
            { text: "VPN专栏", href: "/vpn" },
            { text: "Clash教程", href: "/clash" },
            { text: "使用教程", href: "/tutorial" },
            { text: "品牌库", href: "/brands" },
            { text: "客户端", href: "/clients" },
            { text: "网络图志", href: "/traces" },
            { text: "关于与声明", href: "/about" }
        ],
        copyright: "Clash指南网. 保留所有权利。"
    },
    elsewhere: [
        {
            name: "GitHub",
            handle: "clashzhinan",
            url: "https://github.com/clashzhinan",
        },
        {
            name: "Telegram",
            handle: "@clashzhinan",
            url: "https://t.me/clashzhinan",
        },
        {
            name: "RSS",
            handle: "feed.xml",
            url: "/rss.xml",
        },
        {
            name: "Mail",
            handle: "contact@clashzhinan.cc",
            url: "mailto:contact@clashzhinan.cc",
        }
    ],
    articleCopyright: {
        enabled: true,
        declaration: "本文采用 CC BY-NC-SA 4.0 国际许可协议。商业转载请获得书面授权，非商业转载请注明出处及原文链接。",
        proof: {
            enabled: true,
            linkText: "版权与评测说明",
            baseUrl: `${siteUrl}/about`,
            mode: "static"
        }
    }
};
