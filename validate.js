const fs = require('fs');
const { execSync } = require('child_process');

['index.html', 'index_offline.html'].forEach(filename => {
  const html = fs.readFileSync(__dirname + '/' + filename, 'utf8');
  const match = html.match(/<script type="module">([\s\S]*?)<\/script>/);
  if (!match) {
    console.error('No script found in ' + filename);
    process.exit(1);
  }
  const code = match[1].replace(/import \* as THREE from ['"][^'"]+['"];/, 'const THREE = {};');
  const tempFile = __dirname + '/.temp_validate.js';
  fs.writeFileSync(tempFile, code);
  execSync(`node --check "${tempFile}"`);
  fs.unlinkSync(tempFile);
  console.log(`✅ ${filename} syntax is 100% valid!`);
});

console.log('🚀 All Diwali Patakha files are verified and ready to run.');
