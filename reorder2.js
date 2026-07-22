const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /<article class="work-card[^>]*>[\s\S]*?<\/article>/g;
const articles = [];
let match;
while ((match = regex.exec(html)) !== null) {
  articles.push(match[0]);
}

if (articles.length === 9) {
  // 0: PRJ-01 (Sem&Friends)
  // 1: PRJ-02 (Thaicom)
  // 2: PRJ-03 (Pharmacy)
  // 3: PRJ-04 (Marketing)
  
  // New order:
  // 0: PRJ-01
  // 3: PRJ-04 (Now PRJ-02)
  // 1: PRJ-02 (Now PRJ-03)
  // 2: PRJ-03 (Now PRJ-04)
  // rest the same
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
  
  // update the PRJ-XX spans inside them
  for (let i = 0; i < newArticles.length; i++) {
    const id = String(i + 1).padStart(2, '0');
    newArticles[i] = newArticles[i].replace(/<span class="work-id">PRJ-\d{2}<\/span>/, `<span class="work-id">PRJ-${id}</span>`);
  }
  
  const gridStart = html.indexOf('<div class="work-grid">') + '<div class="work-grid">'.length;
  const gridEnd = html.indexOf('</div><!-- /work-grid -->');
  
  const newGrid = '\n' + newArticles.map(a => '        ' + a).join('\n\n') + '\n      ';
  
  html = html.substring(0, gridStart) + newGrid + html.substring(gridEnd);
  fs.writeFileSync('index.html', html);
  console.log('Reordered successfully.');
} else {
  console.log('Found ' + articles.length);
}
