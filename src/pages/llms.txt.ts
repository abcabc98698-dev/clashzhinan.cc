import { SITE_CONFIG } from '@/config';

export async function GET() {
    const site = SITE_CONFIG.site;
    const title = SITE_CONFIG.title;
    const description = SITE_CONFIG.description;

    const content = `\uFEFF# ${title}

> ${description}

## Core Resources

- [Homepage](${site}/)
- [Blog](${site}/blog)
- [Projects](${site}/projects)
- [Gallery](${site}/gallery)
- [Traces](${site}/traces)
- [About](${site}/about)

## LLM & AI Context Resources

- [LLMs Full Index](${site}/llms-full.txt) - Complete index of all documents with raw markdown links for LLM context ingestion.
- [Airport Brands Matrix](${site}/brands) - Technical comparison and network telemetry for 42 airport providers.
- [Clients Guide](${site}/clients) - Complete cross-platform proxy and bypass client matrix.
- [Traces Telemetry](${site}/traces) - Global cross-border PoP network telemetry and cable physics benchmarks.

`;

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8'
        }
    });
}
