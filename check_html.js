const fs = require('fs');
function checkDivs(file) {
  const html = fs.readFileSync(file, 'utf8');
  let divOpens = (html.match(/<div/gi) || []).length;
  let divCloses = (html.match(/<\/div>/gi) || []).length;
  let secOpens = (html.match(/<section/gi) || []).length;
  let secCloses = (html.match(/<\/section>/gi) || []).length;
  console.log(`${file}: <div/> ${divOpens}/${divCloses}, <section/> ${secOpens}/${secCloses}`);
}
checkDivs('index.html');
checkDivs('resume.html');
checkDivs('resume-th.html');
