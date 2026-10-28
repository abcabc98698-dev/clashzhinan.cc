import { getCollection } from 'astro:content';
import { SITE_CONFIG } from '@/config';
import { AIRPORT_BRANDS } from '@/data/brands';

export async function GET() {
    const site = SITE_CONFIG.site;
    const blogs = await getCollection('blog');
    const pages = await getCollection('pages');
    const projects = await getCollection('projects');
    const traces = await getCollection('traces');

    const content = `\uFEFF# ${SITE_CONFIG.title} Full Content Index

> This manifest provides a comprehensive index of all content on ${SITE_CONFIG.title}, with links to both the web version and the raw markdown version for optimized AI consumption.

## Blog Posts (Deep Technical Guides)

${blogs.map(entry => `- [${entry.data.title}](${site}/blog/${entry.id}) ([Raw Markdown](${site}/raw/blog/${entry.id}.md))`).join('\n')}

## Core Pages & Architecture Whitepapers

${pages.map(entry => `- [${entry.data.title}](${site}/${entry.id}) ([Raw Markdown](${site}/raw/pages/${entry.id}.md))`).join('\n')}

## Top Network Brands Telemetry & Benchmarks

${AIRPORT_BRANDS.filter(b => b.tier <= 12).map(b => `- [${b.name} 2026 深度实测](${site}/brands/${b.slug}) - 架构: ${b.lines.join(' / ')} | 协议: ${b.protocols.join(', ')} | 起步: ${b.entryPrice}`).join('\n')}

## Projects

${projects.map(entry => `- [${entry.data.title}](${site}/projects#${entry.id}) ([Raw Markdown](${site}/raw/projects/${entry.id}.md)) - ${entry.data.description || ''}`).join('\n')}

## Traces (Global PoP Network & Submarine Cables)

${traces.map(entry => `- [Trace: ${entry.data.title.replace(/^SYS_TRACE:\s*/i, '')}](${site}/traces/${entry.id}) ([Raw Markdown](${site}/raw/traces/${entry.id}.md))`).join('\n')}

## Elsewhere (Verified Coordinates)

${(SITE_CONFIG.elsewhere || []).map(entry => `- [${entry.name}${entry.handle ? ` (${entry.handle})` : ''}](${entry.url})`).join('\n')}
`;

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8'
        }
    });
}
