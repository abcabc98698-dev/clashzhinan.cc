import React, { useState, useMemo } from 'react';
import type { AirportBrand } from '@/types/brand';
import {
    RiSpeedUpLine,
    RiShieldCheckLine,
    RiArrowRightUpLine,
    RiFileTextLine,
    RiFileCopyLine,
    RiCheckLine,
    RiSparklingLine,
    RiGlobalLine,
    RiTimeLine
} from '@remixicon/react';

interface BrandDirectoryProps {
    brands: AirportBrand[];
}

export default function BrandDirectory({ brands }: BrandDirectoryProps) {
    const [selectedFilter, setSelectedFilter] = useState<'all' | 'dedicated' | 'permanent' | 'ai' | 'novice'>('all');
    const [sortBy, setSortBy] = useState<'recommended' | 'price' | 'speed'>('recommended');
    const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

    const handleCopyCoupon = (code: string, slug: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(code);
        setCopiedSlug(slug);
        setTimeout(() => setCopiedSlug(null), 2000);
    };

    const filteredBrands = useMemo(() => {
        return brands.filter(brand => {
            if (selectedFilter === 'all') return true;
            if (selectedFilter === 'dedicated') {
                return brand.lines.some(l => l.includes('IPLC') || l.includes('IEPL'));
            }
            if (selectedFilter === 'permanent') {
                return brand.plans.some(p => p.billing.includes('一次性') || p.period.includes('不过期'));
            }
            if (selectedFilter === 'ai') {
                return brand.streamingAndAI.supported.includes('ChatGPT') || brand.streamingAndAI.supported.includes('Claude');
            }
            if (selectedFilter === 'novice') {
                return brand.clientMode.includes('自研') || brand.clientMode.includes('专属');
            }
            return true;
        });
    }, [brands, selectedFilter]);

    const sortedBrands = useMemo(() => {
        const list = [...filteredBrands];
        if (sortBy === 'recommended') {
            return list.sort((a, b) => a.tier - b.tier);
        }
        if (sortBy === 'price') {
            const extractPrice = (p: string) => {
                const match = p.match(/¥?(\d+(\.\d+)?)/);
                return match ? parseFloat(match[1]) : 999;
            };
            return list.sort((a, b) => extractPrice(a.entryPrice) - extractPrice(b.entryPrice));
        }
        if (sortBy === 'speed') {
            const extractSpeed = (b: AirportBrand) => {
                const top = b.speedTests[0];
                if (!top) return 0;
                const match = top.speed.match(/(\d+)Mbps/);
                return match ? parseInt(match[1]) : 0;
            };
            return list.sort((a, b) => extractSpeed(b) - extractSpeed(a));
        }
        return list;
    }, [filteredBrands, sortBy]);

    return (
        <div className="w-full space-y-8">
            {/* Filter & Sorting Toolset */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] backdrop-blur-md">
                {/* Category Filters */}
                <div className="flex items-center flex-wrap gap-2">
                    {[
                        { id: 'all', label: '全部品牌' },
                        { id: 'dedicated', label: 'IEPL/IPLC 专线' },
                        { id: 'permanent', label: '不限时不过期' },
                        { id: 'ai', label: 'AI/流媒体特化' },
                        { id: 'novice', label: '免配专属客户端' }
                    ].map(f => (
                        <button
                            key={f.id}
                            onClick={() => setSelectedFilter(f.id as any)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 ${
                                selectedFilter === f.id
                                    ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm font-semibold'
                                    : 'text-secondary-text hover:text-primary-text hover:bg-black/5 dark:hover:bg-white/5'
                            }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Sort Selector */}
                <div className="flex items-center gap-2 shrink-0 self-end md:self-auto text-xs font-mono text-secondary-text">
                    <span className="opacity-60">排序:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="bg-transparent border border-black/10 dark:border-white/10 rounded-lg px-2.5 py-1 text-primary-text dark:text-zinc-200 focus:outline-none cursor-pointer"
                    >
                        <option value="recommended">综合推荐权重</option>
                        <option value="price">门槛价格升序</option>
                        <option value="speed">实验室测速峰值</option>
                    </select>
                </div>
            </div>

            {/* Brand Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {sortedBrands.map((brand) => {
                    const topSpeed = brand.speedTests[0];
                    const isGuangsu = brand.slug === 'guangsu';

                    return (
                        <div
                            key={brand.slug}
                            className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border ${
                                isGuangsu
                                    ? 'bg-gradient-to-b from-blue-500/[0.03] to-purple-500/[0.03] dark:from-blue-500/[0.06] dark:to-purple-500/[0.06] border-blue-500/30 dark:border-blue-400/40 shadow-lg shadow-blue-500/5'
                                    : 'bg-black/[0.015] dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20'
                            }`}
                        >
                            {/* Card Top: Brand Meta & Badges */}
                            <div>
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-serif text-lg font-bold shrink-0 ${
                                            isGuangsu
                                                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                                                : 'bg-black/5 dark:bg-white/10 text-primary-text dark:text-white'
                                        }`}>
                                            {brand.name.substring(0, 1)}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h2 className="text-lg sm:text-xl font-bold tracking-tight text-primary-text dark:text-white">
                                                    {brand.name}
                                                </h2>
                                                {brand.isFeatured && (
                                                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                                                        <RiSparklingLine className="w-3 h-3" />
                                                        年度主推旗舰
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs font-mono text-secondary-text opacity-70 mt-0.5">
                                                {brand.foundedYear} 年运营 · {brand.lines.join(' / ')}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Entry Price Tag */}
                                    <div className="text-right shrink-0">
                                        <div className="text-sm sm:text-base font-mono font-bold text-primary-text dark:text-white">
                                            {brand.entryPrice}
                                        </div>
                                        <span className="text-[10px] font-mono text-secondary-text opacity-60">
                                            起步门槛
                                        </span>
                                    </div>
                                </div>

                                {/* Tagline & Summary */}
                                <p className="text-xs sm:text-sm text-secondary-text dark:text-zinc-300 leading-relaxed line-clamp-2 my-3">
                                    {brand.summary}
                                </p>

                                {/* Technical Telemetry Bar (Infrastructure Metric) */}
                                {topSpeed && (
                                    <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.05] grid grid-cols-3 gap-2 text-center my-4 font-mono">
                                        <div>
                                            <div className="text-[10px] uppercase text-secondary-text/70">实测最高带宽</div>
                                            <div className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                                                {topSpeed.speed}
                                            </div>
                                        </div>
                                        <div className="border-x border-black/5 dark:border-white/5">
                                            <div className="text-[10px] uppercase text-secondary-text/70">核心节点延迟</div>
                                            <div className="text-xs sm:text-sm font-semibold text-primary-text dark:text-zinc-200 mt-0.5">
                                                {topSpeed.latency}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase text-secondary-text/70">协议架构</div>
                                            <div className="text-xs sm:text-sm font-semibold text-primary-text dark:text-zinc-200 mt-0.5">
                                                {brand.protocols.join(', ')}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Streaming & AI Unlock Matrix Pills */}
                                <div className="space-y-1.5 my-3 text-[11px] font-mono">
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                        <span className="text-secondary-text/60">解锁支持:</span>
                                        {brand.streamingAndAI.supported.slice(0, 5).map(item => (
                                            <span key={item} className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px]">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Coupon Code Capsule */}
                                {brand.couponCode && (
                                    <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-amber-500/[0.08] dark:bg-amber-400/[0.08] border border-amber-500/20 text-xs font-mono my-3">
                                        <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-300">
                                            <span>优惠码:</span>
                                            <code className="font-bold tracking-wider">{brand.couponCode}</code>
                                        </div>
                                        <button
                                            onClick={(e) => handleCopyCoupon(brand.couponCode!, brand.slug, e)}
                                            className="flex items-center gap-1 text-[11px] text-amber-600 dark:text-amber-400 hover:opacity-80 transition-opacity"
                                        >
                                            {copiedSlug === brand.slug ? (
                                                <>
                                                    <RiCheckLine className="w-3.5 h-3.5" />
                                                    <span>已复制</span>
                                                </>
                                            ) : (
                                                <>
                                                    <RiFileCopyLine className="w-3.5 h-3.5" />
                                                    <span>复制</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Card Bottom: Two Action CTAs */}
                            <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center gap-3 mt-4">
                                <a
                                    href={`/brands/${brand.slug}`}
                                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-mono tracking-wider uppercase border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 text-primary-text dark:text-white transition-all duration-300 text-center"
                                >
                                    <RiFileTextLine className="w-4 h-4 opacity-60" />
                                    <span>全景实测报告</span>
                                </a>

                                <a
                                    href={brand.goRoute}
                                    target="_blank"
                                    rel="nofollow sponsored noopener"
                                    className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-mono tracking-wider uppercase font-semibold text-center transition-all duration-300 ${
                                        isGuangsu
                                            ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20'
                                            : 'bg-black text-white dark:bg-white dark:text-black hover:opacity-90'
                                    }`}
                                >
                                    <span>直达官网</span>
                                    <RiArrowRightUpLine className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Compliance & Testing Statement */}
            <div className="p-4 rounded-xl border border-black/5 dark:border-white/5 text-center text-xs font-mono text-secondary-text/70 leading-relaxed">
                💡 实验室提示：以上测速数据为非晚高峰基准与晚高峰抽样实测指标。部分注册按钮含有推广标识，收益用于支持网络观测台基础设施维护与节点实测开销，不影响客观评测结论。
            </div>
        </div>
    );
}
