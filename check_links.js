const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const imgRegex = /<img[^>]+src=["'](https?:\/\/[^"']+)["']/gi;
const linkRegex = /<a[^>]+href=["'](https?:\/\/[^"']+)["']/gi;

let match;
const images = [];
const links = [];

while ((match = imgRegex.exec(html)) !== null) images.push(match[1]);
while ((match = linkRegex.exec(html)) !== null) links.push(match[1]);

console.log('--- External Images ---');
images.forEach(img => console.log(img));
console.log('--- External Links ---');
links.forEach(link => console.log(link));
