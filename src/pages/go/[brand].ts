import type { APIRoute, GetStaticPaths } from 'astro';
import { AIRPORT_BRANDS, getBrandBySlug } from '@/data/brands';

export const getStaticPaths: GetStaticPaths = () => {
    return AIRPORT_BRANDS.map(brand => ({
        params: { brand: brand.slug },
        props: { brand }
    }));
};

export const GET: APIRoute = ({ params, redirect }) => {
    const slug = params.brand;
    const brand = slug ? getBrandBySlug(slug) : undefined;

    if (!brand || !brand.affUrl) {
        return redirect('/brands', 302);
    }

    // Return HTML meta-refresh + 302 redirection for maximum crawler quarantine and browser compatibility
    const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex, nofollow, noarchive">
    <meta http-equiv="refresh" content="0; url=${brand.affUrl}">
    <title>正在安全前往 ${brand.name} 官网...</title>
</head>
<body style="background:#09090b;color:#a1a1aa;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
    <div style="text-align:center;">
        <p style="font-size:14px;letter-spacing:1px;text-transform:uppercase;">Network Gateway Redirect</p>
        <h1 style="color:#ffffff;font-size:20px;font-weight:500;margin:8px 0;">正在安全连接至 ${brand.name}...</h1>
        <p style="font-size:12px;opacity:0.6;">如果浏览器未自动跳转，请 <a href="${brand.affUrl}" rel="nofollow sponsored noopener" style="color:#38bdf8;text-decoration:underline;">点击此处手动前往</a></p>
    </div>
    <script>
        window.location.replace(${JSON.stringify(brand.affUrl)});
    </script>
</body>
</html>`;

    return new Response(html, {
        status: 200,
        headers: {
            'Content-Type': 'text/html; charset=utf-8',
            'X-Robots-Tag': 'noindex, nofollow, noarchive',
            'Cache-Control': 'no-store, no-cache, must-revalidate',
        }
    });
};
