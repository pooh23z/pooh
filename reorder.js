const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The goal is to move PRJ-04 to be immediately after PRJ-01.
// 1. Extract all 9 articles.
const articleRegex = /<article class="work-card">[\s\S]*?<\/article>/g;
const articles = [];
let match;
while ((match = articleRegex.exec(html)) !== null) {
  articles.push(match[0]);
}

if (articles.length === 9) {
  // Reorder articles: 
  // Old order: 0(PRJ01), 1(PRJ02), 2(PRJ03), 3(PRJ04), 4(PRJ05), 5(PRJ06), 6(PRJ07), 7(PRJ08), 8(PRJ09)
  // New order: 0(PRJ01), 3(PRJ04), 1(PRJ02), 2(PRJ03), 4(PRJ05), 5(PRJ06), 6(PRJ07), 7(PRJ08), 8(PRJ09)
  const newArticles = [
    articles[0], 
    articles[3], 
    articles[1], 
    articles[2], 
    articles[4], 
    articles[5], 
    articles[6], 
    articles[7], 
    articles[8]
  ];
  
  // Replace the block of articles in html
  const gridStart = html.indexOf('<div class="work-grid">') + '<div class="work-grid">'.length;
  const gridEnd = html.indexOf('</div><!-- /work-grid -->');
  
  // To keep formatting, let's just replace each article one by one in the original string?
  // Easier: replace the whole grid content.
  let newGridContent = '\n';
  for (let i = 0; i < newArticles.length; i++) {
    let art = newArticles[i];
    
    // Update the PRJ-XX label inside the article
    const newIdNum = String(i + 1).padStart(2, '0');
    art = art.replace(/<span class="work-id">PRJ-\d{2}<\/span>/, `<span class="work-id">PRJ-${newIdNum}</span>`);
    
    // We ALSO need to update the data-i18n attributes so they map to the new PRJ-XX keys.
    // Wait, if we change data-i18n to prj02 for the old PRJ04, we must update the JS translations too!
    // Or, we DO NOT change the data-i18n keys! The data-i18n keys can remain "prj04-title" even if it's displayed as PRJ-02!
    // Yes! `data-i18n="prj04-title"` is just a variable name. It doesn't have to match the visual `PRJ-02`.
    // Let's just update the visual `<span class="work-id">PRJ-02</span>` and leave `data-i18n` as is.
    
    newGridContent += '        ' + art + '\n\n';
  }
  
  const newHtml = html.substring(0, gridStart) + newGridContent + '      ' + html.substring(gridEnd);
  fs.writeFileSync('index.html', newHtml);
  console.log('Successfully reordered and relabeled projects.');
} else {
  console.log('Error: Found ' + articles.length + ' articles, expected 9.');
}
