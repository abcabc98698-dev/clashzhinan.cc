export interface AirportPlan {
    name: string;
    billing: string; // "月付" | "年付" | "一次性付费"
    price: string;   // "¥25" | "¥99"
    traffic: string; // "168GB" | "69GB"
    period: string;  // "每月" | "一次性" | "不过期"
    notes?: string;
}

export interface SpeedTestPoint {
    node: string;
    latency: string;
    speed: string;
}

export interface AirportBrand {
    slug: string;
    name: string;
    affUrl: string;
    goRoute: string; // "/go/[slug]"
    foundedYear: string;
    entryPrice: string;
    couponCode?: string;
    discountDesc?: string;
    lines: string[];
    protocols: string[];
    clientMode: string;
    nodesSummary: string;
    speedTests: SpeedTestPoint[];
    streamingAndAI: {
        supported: string[];
        partial: string[];
    };
    highlights: string[];
    summary: string;
    plans: AirportPlan[];
    suitableFor: string[];
    unsuitableFor: string[];
    tier: number; // 1 (第一主推) ~ 10
    isFeatured?: boolean;
    tagline: string;
}
