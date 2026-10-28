import React, { useState, useMemo } from 'react';
import type { ClientSoftware } from '@/data/clients';
import {
    RiWindowsLine,
    RiAppleLine,
    RiAndroidLine,
    RiTerminalBoxLine,
    RiRouterLine,
    RiArrowRightUpLine,
    RiShieldCheckLine,
    RiLightbulbLine,
    RiDownload2Line
} from '@remixicon/react';

interface ClientDirectoryProps {
    clients: ClientSoftware[];
}

export default function ClientDirectory({ clients }: ClientDirectoryProps) {
    const [selectedOs, setSelectedOs] = useState<string>('All');

    const osOptions = [
        { id: 'All', label: '全部平台' },
        { id: 'Windows', label: 'Windows 电脑' },
        { id: 'macOS', label: 'macOS 苹果电脑' },
        { id: 'iOS', label: 'iOS (iPhone / iPad)' },
        { id: 'Android', label: 'Android 安卓手机' },
        { id: 'Linux', label: 'Linux 桌面' },
        { id: 'OpenWrt', label: 'OpenWrt 软路由' }
    ];

    const filteredClients = useMemo(() => {
        if (selectedOs === 'All') return clients;
        return clients.filter(c => c.os.includes(selectedOs));
    }, [clients, selectedOs]);

    const getOsIcon = (os: string) => {
        if (os === 'Windows') return <RiWindowsLine className="w-3.5 h-3.5" />;
        if (os === 'macOS' || os === 'iOS') return <RiAppleLine className="w-3.5 h-3.5" />;
        if (os === 'Android') return <RiAndroidLine className="w-3.5 h-3.5" />;
        if (os === 'OpenWrt') return <RiRouterLine className="w-3.5 h-3.5" />;
        return <RiTerminalBoxLine className="w-3.5 h-3.5" />;
    };

    return (
        <div className="w-full space-y-8">
            {/* OS Tabs */}
            <div className="flex items-center flex-wrap gap-2 p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] backdrop-blur-md">
                {osOptions.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setSelectedOs(tab.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 ${
                            selectedOs === tab.id
                                ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm font-semibold'
                                : 'text-secondary-text hover:text-primary-text hover:bg-black/5 dark:hover:bg-white/5'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Clients Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {filteredClients.map(client => (
                    <div
                        key={client.id}
                        className="rounded-2xl p-6 sm:p-7 bg-black/[0.015] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div>
                            {/* Card Top: Name & Recommended Badge */}
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-primary-text dark:text-white">
                                            {client.name}
                                        </h2>
                                        {client.isRecommended && (
                                            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                                推荐客户端
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-xs font-mono text-secondary-text opacity-70 mt-1">
                                        核心内核：{client.core}
                                    </div>
                                </div>

                                <div className="text-xs font-mono px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10 text-secondary-text">
                                    {client.downloadType}
                                </div>
                            </div>

                            {/* Supported OS Badges */}
                            <div className="flex items-center gap-1.5 flex-wrap my-3">
                                {client.os.map(os => (
                                    <span key={os} className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05] text-secondary-text border border-black/[0.04] dark:border-white/[0.04]">
                                        {getOsIcon(os)}
                                        {os}
                                    </span>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-secondary-text dark:text-zinc-300 leading-relaxed my-3">
                                {client.description}
                            </p>

                            {/* Feature Pills */}
                            <div className="flex items-center gap-1.5 flex-wrap my-3 text-[11px] font-mono">
                                {client.features.map(f => (
                                    <span key={f} className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">
                                        {f}
                                    </span>
                                ))}
                            </div>

                            {/* Config Pro-tip */}
                            <div className="p-3 rounded-xl bg-amber-500/[0.06] dark:bg-amber-400/[0.06] border border-amber-500/20 text-xs font-mono text-amber-800 dark:text-amber-200/90 leading-relaxed my-3 flex items-start gap-2">
                                <RiLightbulbLine className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-semibold">使用秘籍：</span>
                                    <span>{client.configGuideTip}</span>
                                </div>
                            </div>
                        </div>

                        {/* Card Bottom CTA */}
                        <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between mt-4">
                            <span className="text-[11px] font-mono text-secondary-text/70">
                                官方开源安全分发
                            </span>
                            <a
                                href={client.downloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 py-2 px-4 rounded-xl text-xs font-mono font-semibold bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity"
                            >
                                <RiDownload2Line className="w-4 h-4" />
                                <span>前往官方下载</span>
                                <RiArrowRightUpLine className="w-3.5 h-3.5 opacity-60" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
