const siteUrl = (typeof process !== 'undefined' && process.env?.SITE) || "https://clashzhinan.cc";

export const SITE_CONFIG = {
    title: "Clash指南",
    logoSrc: "/favicon.svg",
    description: "数字漫游、网络拓扑与技术探索指南。以极简美学呈现的现代技术博文与数字画廊。",
    author: "ClashZhinan",
    authorPhonetic: "/klæʃ ʒiːnæn/",
    signature: "ClashZhinan",
    site: siteUrl,
    imageServer: ["https://images.pexels.com", "https://images.unsplash.com"],
    postsPerPage: 6,
    projectsPerPage: 12,
    defaultImage: "/blog-placeholder-1.png",
    nav: [
        { text: "Blog", href: "/blog" },
        {
            text: "Gallery",
            href: "/gallery",
            children: [
                { text: "2025", href: "/gallery/2025/shinjukugyoencherryblossoms" }
            ]
        },
        { text: "Traces", href: "/traces" },
    ],
    homepage: {
        harmonicSystem: {
            seed: 2026,
            speed: 0.0042
        },
        links: [
            { text: "阅读博客", href: "/blog" },
            { text: "探索足迹", href: "/traces" }
        ]
    },
    footer: {
        social: [
            { text: "项目库", href: "/projects" },
            { text: "网络坐标", href: "/elsewhere" }
        ],
        copyright: "Clash指南. 保留所有权利。"
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
            linkText: "版权说明",
            baseUrl: `${siteUrl}/about`,
            mode: "static"
        }
    }
};
