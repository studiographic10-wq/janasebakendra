$srcDir = "C:\Users\studi\OneDrive\Desktop\VLE LOG"
$destDir = "C:\Users\studi\OneDrive\Desktop\MY NEW SIDE 02"
$htmlDir = Join-Path $destDir "All html file"
$assetsDir = Join-Path $destDir "Assets"

# Create directories
New-Item -ItemType Directory -Force -Path $destDir
New-Item -ItemType Directory -Force -Path $htmlDir
New-Item -ItemType Directory -Force -Path $assetsDir

# Get files
$allFiles = Get-ChildItem -Path $srcDir -File
$assetFiles = @()

foreach ($file in $allFiles) {
    if ($file.Extension -match "\.html?`$") {
        Copy-Item -Path $file.FullName -Destination $htmlDir -Force
    } else {
        Copy-Item -Path $file.FullName -Destination $assetsDir -Force
        if ($file.Name -ne "packager.ps1" -and $file.Name -ne "packager.js") {
            $assetFiles += $file.Name
        }
    }
}

# Update references in HTML files
$htmlFiles = Get-ChildItem -Path $htmlDir -Filter *.html
foreach ($hFile in $htmlFiles) {
    $content = Get-Content -Path $hFile.FullName -Raw
    
    foreach ($asset in $assetFiles) {
        $escapedAsset = [Regex]::Escape($asset)
        
        # Replace src="asset", src='asset', href="asset" etc
        $content = [Regex]::Replace($content, "([""'])" + $escapedAsset + "([""'])", "`$1../Assets/$asset`$2", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
        
        # Replace background images url('asset')
        $content = [Regex]::Replace($content, "url\(([""']?)" + $escapedAsset + "\1\)", "url(`$1../Assets/$asset`$1)", [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    }
    Set-Content -Path $hFile.FullName -Value $content -NoNewline
}

# Create index.html at root
$indexHtml = @"
<!DOCTYPE html>
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
</html>
"@
Set-Content -Path (Join-Path $destDir "index.html") -Value $indexHtml

Write-Host "Packaging Complete!"
