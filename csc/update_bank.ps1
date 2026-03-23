$files = @(
    "c:\Users\Windows 11\Desktop\A NEW WEB SIDE DESINE\csc\farmar_id_form.html",
    "c:\Users\Windows 11\Desktop\A NEW WEB SIDE DESINE\csc\Fillable Farmer Registration Form.html"
)

$newBankDetails = @"
            <div class="section-title">C. Bank Details</div>

            <div class="row">
                <span class="label" style="width: 180px;">17 Name of Account Holder</span>
                <input type="text" class="input-line">
            </div>
            <div class="row">
                <span class="label" style="width: 180px;">18 Account No</span>
                <input type="text" class="input-line">
            </div>
            <div class="row">
                <span class="label" style="width: 180px;">19 Bank Name</span>
                <input type="text" class="input-line">
            </div>
            <div class="row">
                <span class="label" style="width: 180px;">20 IFSC CODE</span>
                <div class="char-grid">
                    <input type="text" class="char-box" maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box" maxlength="1">
                </div>
            </div>
"@

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content -Path $file -Raw
        
        # We need to replace everything from "C. Bank Details</div>" to just before "Undertaking -"
        $startIndex = $content.IndexOf('<div class="section-title">C. Bank Details</div>')
        $endIndex = $content.IndexOf('<div class="section-title">Undertaking -</div>', $startIndex)
        
        if ($startIndex -ge 0 -and $endIndex -gt $startIndex) {
            # Find the start of the `<div class="page"...>` or similar that contains "Undertaking" or just the line break before it.
            # In farmar_id_form.html: Undertaking is in a new `<div class="page">` after `</div></div>`.
            # Actually, to be safe, find the last `</div>` before Undertaking.
            $sub = $content.Substring($startIndex, $endIndex - $startIndex)
            $lastRowEnd = $sub.LastIndexOf("</div>")
            
            # $lastRowEnd is the index of the `</div>` closing the last row "21 IFS Code"
            # It's actually closing the `div.row` of IFS Code.
            # Let's just find the exact string to replace using substring.
            $actualEnd = $startIndex + $lastRowEnd + 6 # Include "</div>"
            
            $part1 = $content.Substring(0, $startIndex)
            $part2 = $content.Substring($actualEnd)
            
            $newContent = $part1 + $newBankDetails + "`r`n" + $part2
            
            [IO.File]::WriteAllText($file, $newContent)
            Write-Host "Updated $file"
        } else {
            Write-Host "Could not find markers in $file"
        }
    }
}
