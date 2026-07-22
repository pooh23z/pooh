const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const svgs = {
  pdf: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: text-bottom;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  figma: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="margin-right: 6px; vertical-align: text-bottom;"><path d="M5.33 8a2.67 2.67 0 1 1 0-5.33h2.67V8H5.33zm5.34-5.33a2.67 2.67 0 1 1-2.67 2.66V2.67h2.67zm0 5.33a2.67 2.67 0 1 1-2.67 2.67V8h2.67zM8 10.67v2.66a2.67 2.67 0 1 1-2.67-2.66h2.67zm-2.67 2.66a2.67 2.67 0 1 1 0-5.33h2.67v5.33H5.33z" fill="currentColor"/></svg>`,
  web: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: text-bottom;"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  external: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: text-bottom;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`
};

const regex = /<a class="demo-btn" href="([^"]+)"(.*?)data-i18n="demo-link"[^>]*>↗ เปิดดูผลงาน<\/a>/g;

let newHtml = html.replace(regex, (match, href, middle) => {
  let icon = svgs.external;
  if (href.includes('drive.google.com')) icon = svgs.pdf;
  else if (href.includes('figma.com')) icon = svgs.figma;
  else if (href.includes('index.html')) icon = svgs.web;
  
  // Rebuild the a tag so the SVG is outside the span that gets translated
  // Wait, if it has target="_blank" etc., it's in `middle`.
  // original: <a class="demo-btn" href="..." target="_blank" rel="noopener" data-i18n="demo-link">↗ เปิดดูผลงาน</a>
  // we want: <a class="demo-btn" href="..." target="_blank" rel="noopener"> ICON <span data-i18n="demo-link">เปิดดูผลงาน</span></a>
  
  return `<a class="demo-btn" href="${href}"${middle}>${icon}<span data-i18n="demo-link">เปิดดูผลงาน</span></a>`;
});

fs.writeFileSync('index.html', newHtml);
console.log('Replaced demo-btn links with icons.');
