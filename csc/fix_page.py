import codecs

file_path = "c:/Users/Windows 11/Desktop/A NEW WEB SIDE DESINE/csc/farmar_id_form.html"

with codecs.open(file_path, "r", "utf-8") as f:
    text = f.read()

# We need everything up to the </table> that closes B. Family Member Details
# Then we will append the fixed Bank Details and the entire second page

split_marker = "</table>"
parts = text.split(split_marker)

if len(parts) >= 2:
    top_part = split_marker.join(parts[:-1]) + split_marker
    
    bottom_part = """

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
        </div>

        <div class="page" style="page-break-before: always; padding-top: 0;">
            <div class="section-title">Undertaking -</div>
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
            </div>

            <div class="nb-section">
                <strong>NB</strong> &nbsp;&nbsp; Please Attach the following documents along with this form
                <ul>
                    <li>1) Photo copy of Voter ID Card ( Head of Family )</li>
                    <li>2) Photocopy of Bank Passbook ( Front Page )</li>
                    <li>3) All the fields should be filled up in English</li>
                </ul>
            </div>

            <div class="office-use">
                <div style="font-style: italic; font-weight: bold; margin-bottom: 5px;">For Office use</div>
                <div class="office-content">
                    <div class="row" style="margin-bottom: 20px;">
                        <span class="label" style="width: 150px;">Application No.</span>
                        <div class="char-grid">
                            <script>for (let i = 0; i < 15; i++) document.write('<input type="text" class="char-box dashed" maxlength="1" style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;">');</script>
                            <input type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;"><input
                                type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;"><input
                                type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;"><input
                                type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;"><input
                                type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;"><input
                                type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;"><input
                                type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;"><input
                                type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;"><input
                                type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;"><input
                                type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;"><input
                                type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;"><input
                                type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;"><input
                                type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;"><input
                                type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;"><input
                                type="text" class="char-box dashed" maxlength="1"
                                style="width: 25px; height: 30px; font-weight: bold; font-size: 16px;">
                        </div>
                    </div>
                    <div class="row">
                        <span class="label" style="width: 150px;">Date of Receipt (DD/MM/YY)</span>
                        <div class="char-grid">
                            <input type="text" class="char-box dashed" maxlength="1" placeholder="D"
                                style="width: 25px; height: 30px;">
                            <input type="text" class="char-box dashed" maxlength="1" placeholder="D"
                                style="width: 25px; height: 30px;">
                            <input type="text" class="char-box dashed" maxlength="1" placeholder="M"
                                style="width: 25px; height: 30px; margin-left: 10px;">
                            <input type="text" class="char-box dashed" maxlength="1" placeholder="M"
                                style="width: 25px; height: 30px;">
                            <input type="text" class="char-box dashed" maxlength="1" placeholder="Y"
                                style="width: 25px; height: 30px; margin-left: 10px;">
                            <input type="text" class="char-box dashed" maxlength="1" placeholder="Y"
                                style="width: 25px; height: 30px;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // 1. Auto-jump to the next box when typing
        document.addEventListener('input', function (e) {
            if (e.target.classList.contains('char-box') && e.target.value.length === e.target.maxLength) {
                let next = e.target.nextElementSibling;
                while (next && next.tagName !== 'INPUT') { next = next.nextElementSibling; }
                if (next && next.classList.contains('char-box')) { next.focus(); }
            }
        });

        // 1.5 Auto-calculate age
        document.getElementById('dob-inputs').addEventListener('input', function () {
            const inputs = this.querySelectorAll('input');
            let dobString = '';
            inputs.forEach(input => dobString += input.value);

            if (dobString.length === 8) {
                const day = parseInt(dobString.substring(0, 2), 10);
                const month = parseInt(dobString.substring(2, 4), 10) - 1; // Months are 0-indexed in JS
                const year = parseInt(dobString.substring(4, 8), 10);

                const dob = new Date(year, month, day);
                const today = new Date();

                let age = today.getFullYear() - dob.getFullYear();
                const m = today.getMonth() - dob.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                    age--;
                }

                if (age >= 0 && age < 100) {
                    let ageStr = age.toString().padStart(2, '0');
                    const ageInputs = document.getElementById('age-inputs').querySelectorAll('input');
                    ageInputs[0].value = ageStr[0];
                    ageInputs[1].value = ageStr[1];
                }
            }
        });

        // 1.8 Populate GP and Village Dropdowns
        const locationData = {
            "BALASORE (SADAR)": {
                gps: [
                    "Bahabalpur", "Buanl", "Chhanua", "Genguti", "Gopinathpur", "Gudu",
                    "Hidigan", "Jayadeba Kasaba", "Kasipada", "Nagram", "Odangi",
                    "Padmapur", "Parikhi", "Patrapada", "Ranasahi", "Rasalpur"
                ],
                villages: [
                    "Balaramgadi", "Mirjapur", "Nuapalgadi", "Akinia", "Amara", "Angula",
                    "Astia", "Badagobra", "Baharda", "Baincha", "Balipal", "Bangara",
                    "Baradharia", "Barakhua", "Bardhanpur", "Baringia", "Basantapur",
                    "Bedeisana", "Bedhapanchaarada", "Belbaria", "Belda", "Bengati",
                    "Bhagirathipur", "Bhimdia", "Bhimpur", "Bisnupur", "Brahmaneula",
                    "Buanla", "Budhiamari", "Chakasindhia", "Chakbramhananda",
                    "Chakpanchurukhi", "Chakradharhati", "Chandipur", "Chasakhanda",
                    "Chaulachhada", "Chhachina", "Chheliapada", "Chhotokhannagar",
                    "Dalsusa", "Dandika", "Dhusuli", "Digida", "Dipapal", "Dobarai",
                    "Domuhanpatna", "Dumuria", "Garada", "Ghodapada", "Abdulapur",
                    "Ajodhyanagarpatana", "Ambua", "Ambulakuda", "Anantapani",
                    "Anantapur", "Bahadalpur", "Bahala", "Balichauria", "Balisuan",
                    "Banaparia", "Bankatira", "Barapada", "Bartana", "Barunsing",
                    "Basudevpur", "Baunsmuhan", "Bedipur", "Bhandeswar", "Bhuinpada",
                    "Bilaparia", "Biruhan", "Boita", "Chandatikiri", "Chhadachadia",
                    "Chilapada", "Dahapada", "Dahigadia"
                ]
            },
            "BALIAPAL": {
                gps: [
                    "Aladiha", "Asti", "Badas", "Bahiapal", "Balarampur", "Balikuti",
                    "Baniadiha", "Betagadia", "Bishnupur", "Bolang", "Chaumukh", "Dagara",
                    "Deula", "Debhog", "Ghantua", "Jagatipur", "Jambhirai", "Jamkunda",
                    "Kumbhari", "Kunduli", "Madhupura", "Nikhira", "Nuagan", "Panchupali",
                    "Pratappur", "Ratei", "Saudi", "Srirampur"
                ],
                villages: [
                    "Aladiha", "Asti", "Antichak", "Amachua", "Dagara", "Anadeula",
                    "Aruadam", "Balarampur", "Betagadia", "Bishnupur", "Chaumukha",
                    "Balikuti", "Baliapal", "Athabatia", "Badakachuapada", "Badakasaba",
                    "Badanpur", "Badasimulia", "Bagada", "Bahabalpur", "Balibil",
                    "Balichatara", "Barabatia", "Barakaurda", "Baramahisadi", "Baras",
                    "Basudebpur", "Bedhapal", "Bela", "Betana", "Bhagipentha",
                    "Bhagirathipur", "Bhanupur", "Bhelpura", "Bhikagaria", "Bhujajathia",
                    "Bilakumbhari", "Bindhabalikuti", "Bindhakalanda", "Biraparulia",
                    "Biridiha", "Biswanathpur", "Bramhanbaisada", "Chakabasugaria",
                    "Chakabrahma", "Chakaghantiari", "Chakanatipur", "Chakaraidanki",
                    "Chakbaliapal", "Chandamani", "Charabastakalaroi", "Chaudhurikuda",
                    "Chhada", "Chhotkhanpur", "Chirasungamuhan", "Dakhinapada", "Dalua-2",
                    "Dalua-I", "Dangapita", "Dantunida", "Demuria", "Dhananda", "Dumichak",
                    "Ghantiari", "Gokulanandapur", "Khagadapal", "Deula", "Jathia",
                    "Sunaruhi", "Kachuapada", "Pancharukhi", "Madhupura", "Jamkunda", "Ikarpal",
                    "Kudmansing", "Kusudiha", "Nachandiya", "Deula Basudebpur", "Hasimpur"
                ]
            }
        };

        const blockSelect = document.getElementById('block-select');
        const gpSelect = document.getElementById('gp-select');
        const villageSelect = document.getElementById('village-select');

        if (blockSelect && gpSelect && villageSelect) {
            blockSelect.addEventListener('change', function () {
                const selectedBlock = this.value;

                // Clear existing options, keep the empty first option
                gpSelect.innerHTML = '<option value=""></option>';
                villageSelect.innerHTML = '<option value=""></option>';

                if (selectedBlock && locationData[selectedBlock]) {
                    const blockData = locationData[selectedBlock];

                    // Populate GP dropdown
                    blockData.gps.sort().forEach(gp => {
                        let opt = document.createElement('option');
                        opt.value = gp.toUpperCase();
                        opt.textContent = gp.toUpperCase();
                        gpSelect.appendChild(opt);
                    });

                    // Populate Village dropdown
                    blockData.villages.sort().forEach(village => {
                        let opt = document.createElement('option');
                        opt.value = village.toUpperCase();
                        opt.textContent = village.toUpperCase();
                        villageSelect.appendChild(opt);
                    });
                }
            });
        }

        // 2. Custom Save PDF Logic
        function downloadPDF() {
            const btnPanel = document.getElementById('control-panel');
            btnPanel.style.display = 'none'; // Hide buttons during generation

            // Before converting to PDF, we must set the "value" attribute for all inputs 
            // so html2pdf captures the text you typed.
            const inputs = document.querySelectorAll('input[type="text"]');
            inputs.forEach(input => {
                input.setAttribute('value', input.value);
            });

            // Stamp the radio buttons (checkmarks)
            const radios = document.querySelectorAll('input[type="radio"]');
            radios.forEach(radio => {
                if (radio.checked) {
                    radio.setAttribute('checked', 'checked');
                } else {
                    radio.removeAttribute('checked');
                }
            });

            // Stamp the select dropdowns
            const selects = document.querySelectorAll('select');
            selects.forEach(select => {
                const options = select.querySelectorAll('option');
                options.forEach(opt => opt.removeAttribute('selected'));
                if (select.selectedIndex >= 0) {
                    options[select.selectedIndex].setAttribute('selected', 'selected');
                }
            });

            // Configuration for the downloaded PDF
            const element = document.getElementById('pdf-content');
            const opt = {
                margin: 0,
                filename: 'Farmer_Registration_Form.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 1.8, useCORS: true, letterRendering: true, windowWidth: 794 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
                pagebreak: { mode: ['css', 'legacy'] }
            };

            // Generate and Save
            html2pdf().set(opt).from(element).save().then(() => {
                btnPanel.style.display = 'flex'; // Bring the buttons back
            });
        }
    </script>



</body>

</html>
"""

    ans = top_part + bottom_part
    with codecs.open(file_path, "w", "utf-8") as f:
        f.write(ans)
    
    print("Fixed farmar_id_form.html layout issue.")
else:
    print("Could not find </table>")
