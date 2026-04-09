const fs = require('fs');
const path = require('path');

const srcDir = 'c:\\Users\\studi\\OneDrive\\Desktop\\VLE LOG';
const destDir = 'c:\\Users\\studi\\OneDrive\\Desktop\\MY NEW SIDE 02';
const htmlDir = path.join(destDir, 'All html file');
const assetsDir = path.join(destDir, 'Assets');

// Create directories
if (!fs.existsSync(destDir)) fs.mkdirSync(destDir);
if (!fs.existsSync(htmlDir)) fs.mkdirSync(htmlDir);
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir);

const files = fs.readdirSync(srcDir);
const assetFiles = [];

// Copy files
for (const file of files) {
  const srcPath = path.join(srcDir, file);
  if (fs.statSync(srcPath).isDirectory()) continue;
  
  if (file.toLowerCase().endsWith('.html') || file.toLowerCase().endsWith('.htm')) {
    fs.copyFileSync(srcPath, path.join(htmlDir, file));
  } else {
    fs.copyFileSync(srcPath, path.join(assetsDir, file));
    assetFiles.push(file);
  }
}

// Update references in HTML files
const htmlFiles = fs.readdirSync(htmlDir);
for (const hFile of htmlFiles) {
  const hPath = path.join(htmlDir, hFile);
  let content = fs.readFileSync(hPath, 'utf8');
  
  for (const asset of assetFiles) {
    // Escape regex characters in asset name
    const escapedAsset = asset.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    // Replace src="asset", src='asset', href="asset"
    const regex = new RegExp(`(["'])${escapedAsset}(["'])`, 'g');
    content = content.replace(regex, `$1../Assets/${asset}$2`);
    
    // Replace url(asset), url("asset"), url('asset')
    const urlRegex = new RegExp(`url\\((["']?)${escapedAsset}\\1\\)`, 'g');
    content = content.replace(urlRegex, `url($1../Assets/${asset}$1)`);
  }
  
  fs.writeFileSync(hPath, content);
}

// Create index.html at root acting as redirector
const indexHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=All html file/user_log.html">
    <title>Pro Official Portal</title>
</head>
<body style="background:#0f172a; color:#f8fafc; font-family:sans-serif; display:flex; align-items:center; justify-content:center; height:100vh; margin:0;">
    <div style="text-align:center;">
        <h2>Initializing Portal...</h2>
        <p>If you are not redirected automatically, <a href="All html file/user_log.html" style="color:#f59e0b;">click here</a>.</p>
    </div>
</body>
</html>`;

fs.writeFileSync(path.join(destDir, 'index.html'), indexHtmlContent);
console.log('Packaging complete! Successfully migrated everything into MY NEW SIDE 02.');
