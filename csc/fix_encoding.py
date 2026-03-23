import codecs
import re

files = [
    "c:/Users/Windows 11/Desktop/A NEW WEB SIDE DESINE/csc/farmar_id_form.html",
    "c:/Users/Windows 11/Desktop/A NEW WEB SIDE DESINE/csc/Fillable Farmer Registration Form.html"
]

undertaking_replacement = """            <div class="section-title">Undertaking -</div>
            <div class="odia-text">
                1. ମୁଁ ଏତଦ୍ବାରା ଘୋଷଣା କରୁଛି କି, ମୁଁ ଜଣେ ଚାଷୀ ଏବଂ ଉପରେ ଦିଆଯାଇଥିବା ସମସ୍ତ ତଥ୍ୟ ମୋ ଜାଣିବାରେ ସମ୍ପୂର୍ଣ୍ଣ ସତ୍ୟ
                ଅଟେ। ଯଦି ପରବର୍ତ୍ତୀ କାଳରେ କୌଣସି ଭୁଲ୍ ତଥ୍ୟ ଦିଆଯାଇଥିବା ଜଣାପଡେ, ତେବେ ମୁଁ ଏଥି ପାଇଁ ସମ୍ପୂର୍ଣ୍ଣ ଦାୟୀ ରହିବି ଏବଂ
                ଏଥିପାଇଁ ମୋ ବିରୁଦ୍ଧରେ ଆଇନ୍ ଅନୁଯାୟୀ କାର୍ଯ୍ୟାନୁଷ୍ଠାନ ଗ୍ରହଣ କରାଯିବ।<br><br>
                2. ମୁଁ କିମ୍ବା ମୋର ଉପର ବର୍ଣ୍ଣିତ କୌଣସି ଜଣେ ପ୍ରାଧିକୃତ ପ୍ରତିନିଧି ବିହନ ବା ଅନ୍ୟ କୌଣସି ସାମଗ୍ରୀ ଗ୍ରହଣ କରେ, ତେବେ
                ଯଦି କିଛି ରିହାତି ପାଇବାର ଥାଏ, ତାହା ଉପର ବର୍ଣ୍ଣିତ ବ୍ୟାଙ୍କ ସଞ୍ଚୟ ଖାତାରେ ଜମା ହେବ।<br><br>
                3. ମୁଁ ସରକାରଙ୍କ ଦ୍ବାରା ନିର୍ଦ୍ଧାରିତ ସମସ୍ତ ନୀତି ଓ ନିୟମକୁ ମାନିବି।<br><br>
                4. ମୁଁ ଏହି ଅଙ୍ଗୀକାର ସହିତ ଏକମତ।
            </div>

            <div class="signature-section">
                ଚାଷୀଙ୍କର ଟିପ ଚିହ୍ନ ବା ସ୍ବାକ୍ଷର<br><span style="font-weight: normal; color: #666;">(Signature/Thumb
                    Impression)</span>
            </div>"""

for fpath in files:
    try:
        with codecs.open(fpath, 'r', encoding='utf-8') as f:
            text = f.read()
        
        text = re.sub(r'<button class="btn" onclick="window\.print\(\)">.*?</button>',
                      '<button class="btn" onclick="window.print()">🖨️ Print PDF</button>', text)
        text = re.sub(r'<button class="btn btn-save" onclick="downloadPDF\(\)">.*?</button>',
                      '<button class="btn btn-save" onclick="downloadPDF()">💾 Save PDF</button>', text)
        
        text = re.sub(r'            <div class="section-title">Undertaking -</div>.*?Impression\)</span>\s*</div>', 
                      undertaking_replacement, text, flags=re.DOTALL)
                      
        with codecs.open(fpath, 'w', encoding='utf-8') as f:
            f.write(text)
        print("Fixed " + fpath)
    except Exception as e:
        print("Error on " + fpath + ": " + str(e))
