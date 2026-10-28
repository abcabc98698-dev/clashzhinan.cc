import fs from 'fs';

let content = fs.readFileSync('src/pages/traces/index.astro', 'utf8');
content = content.replace(
    /<h1[^>]*>[\s\S]*?Network Traces\.[\s\S]*?<\/h1>/,
    `<h1 class="font-serif text-2xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-primary-text">
                    2026 全球跨境 PoP 骨干网拓扑图志与晚高峰延迟雷达
                </h1>`
);
fs.writeFileSync('src/pages/traces/index.astro', content, 'utf8');
console.log('Successfully updated traces H1 to full SEO title');
