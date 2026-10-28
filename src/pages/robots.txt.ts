/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '@/config';

export const GET: APIRoute = () => {
    const site = (SITE_CONFIG.site || 'https://clashzhinan.cc').replace(/\/$/, '');
    const robotsTxt = `User-agent: *
Allow: /
Disallow: /go/
Disallow: /search/
Disallow: /404/

# Search Engine Crawlers Optimization
User-agent: Googlebot
Allow: /
Disallow: /go/
Disallow: /search/
Disallow: /404/

User-agent: bingbot
Allow: /
Disallow: /go/
Disallow: /search/
Disallow: /404/

User-agent: Baiduspider
Allow: /
Disallow: /go/
Disallow: /search/
Disallow: /404/

User-agent: yisouspider
Allow: /
Disallow: /go/
Disallow: /search/
Disallow: /404/

# Allow GEO & LLM engines to access raw markdown context
User-agent: GPTBot
Allow: /raw/

User-agent: ClaudeBot
Allow: /raw/

User-agent: PerplexityBot
Allow: /raw/

Sitemap: ${site}/sitemap.xml
# LLM Context: ${site}/llms.txt
`.trim();

    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};
