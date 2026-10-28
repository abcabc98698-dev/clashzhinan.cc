import fs from 'fs';

let content = fs.readFileSync('src/components/ui/TextReveal.tsx', 'utf8');
content = content.replace('<motion.h1', '<motion.div aria-hidden="true"');
content = content.replace('</motion.h1>', '</motion.div>');
fs.writeFileSync('src/components/ui/TextReveal.tsx', content, 'utf8');
console.log('Successfully updated TextReveal.tsx to use motion.div');
