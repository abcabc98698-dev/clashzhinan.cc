import fs from 'node:fs';

try {
    if (fs.existsSync('public/pagefind')) {
        fs.rmSync('public/pagefind', { recursive: true, force: true });
    }
    if (fs.existsSync('dist/pagefind')) {
        fs.cpSync('dist/pagefind', 'public/pagefind', { recursive: true });
        console.log('Successfully synced dist/pagefind to public/pagefind');
    }
} catch (err) {
    console.warn('postbuild warning:', err);
}
