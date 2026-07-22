const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The articles are neatly separated by blank lines and <article class="work-card">
// We know exactly where PRJ-02, PRJ-03, PRJ-04 are.
let prj02_start = html.indexOf('        <article class="work-card">\n          <div class="work-media">\n            <span class="work-id">PRJ-02</span>');
let prj03_start = html.indexOf('        <article class="work-card">\n          <div class="work-media">\n            <span class="work-id">PRJ-03</span>');
let prj04_start = html.indexOf('        <article class="work-card">\n          <div class="work-media">\n            <span class="work-id">PRJ-04</span>');
let prj05_start = html.indexOf('        <article class="work-card">\n          <div class="work-media">\n            <span class="work-id">PRJ-05</span>');

if (prj02_start > -1 && prj03_start > -1 && prj04_start > -1 && prj05_start > -1) {
  let part2 = html.substring(prj02_start, prj03_start);
  let part3 = html.substring(prj03_start, prj04_start);
  let part4 = html.substring(prj04_start, prj05_start);
  
  // Reassign spans
  part4 = part4.replace('<span class="work-id">PRJ-04</span>', '<span class="work-id">PRJ-02</span>');
  part2 = part2.replace('<span class="work-id">PRJ-02</span>', '<span class="work-id">PRJ-03</span>');
  part3 = part3.replace('<span class="work-id">PRJ-03</span>', '<span class="work-id">PRJ-04</span>');
  
  let newHtml = html.substring(0, prj02_start) + part4 + part2 + part3 + html.substring(prj05_start);
  fs.writeFileSync('index.html', newHtml);
  console.log('Reordered safely!');
} else {
  console.log('Could not find all blocks', prj02_start, prj03_start, prj04_start, prj05_start);
}
