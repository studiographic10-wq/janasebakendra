file_path = r'c:\Users\Windows 11\Desktop\A NEW WEB SIDE DESINE\csc\farmar_id_form.html'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = lines[:622] + [
    '            <div class="row">\n',
    '                <span class="label" style="width: 180px;">18 Account No</span>\n',
    '                <input type="text" class="input-line">\n',
    '                <input type="text" class="char-box" maxlength="1" style="width:25px;">\n',
    '                <input type="text" class="char-box" maxlength="1" style="width:25px;">\n',
    '            </div>\n',
    '            <div class="row">\n',
    '                <span class="label" style="width: 180px;">19 Bank Name</span>\n',
    '                <input type="text" class="input-line">\n',
    '            </div>\n',
    '            <div class="row">\n',
    '                <span class="label" style="width: 180px;">20 IFSC CODE</span>\n',
    '                <div class="char-grid">\n',
    '                    <input type="text" class="char-box" maxlength="1"><input type="text" class="char-box"\n',
    '                        maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box"\n',
    '                        maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box"\n',
    '                        maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box"\n',
    '                        maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box"\n',
    '                        maxlength="1"><input type="text" class="char-box" maxlength="1"><input type="text" class="char-box"\n',
    '                        maxlength="1">\n',
    '                </div>\n',
    '            </div>\n',
    '        </div>\n'
] + lines[831:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
