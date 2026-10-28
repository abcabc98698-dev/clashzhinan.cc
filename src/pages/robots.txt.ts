/// <reference types="astro/client" />
import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '@/config';

export const GET: APIRoute = () => {
    const site = (SITE_CONFIG.site || 'https://clashzhinan.cc').replace(/\/$/, '');
    const robotsTxt = `User-agent: *
Allow: /
Disallow: /go/
Disallow: /raw/

Sitemap: ${site}/sitemap.xml
# LLM Context: ${site}/llms.txt
`.trim();

    return new Response(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
};
