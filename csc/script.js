// Data extracted from CSC portal
const services = [
    { category: "Civic Services", name: "Ration Card Download", name_or: "ରାସନ କାର୍ଡ ଡାଉନଲୋଡ୍", url: "https://www.pdsodisha.gov.in/NFSA/DownloadRationCard/PublicRationCardDownload", icon: "https://img.icons8.com/color/512/ration-card.png" },
    { category: "Business & Tax", name: "PAN Service (UTIITSL)", name_or: "ପାନ ସେବା (UTIITSL)", url: "https://www.myutiitsl.com/panonlineservices/CSCLogin", icon: "https://img.icons8.com/color/512/identity-theft.png" },
    { category: "Central/Premium", name: "CSC Safar", name_or: "ସିଏସସି ସଫର", url: "https://cscsafar.in/", icon: "https://img.icons8.com/color/512/bus.png" },
    { category: "Central/Premium", name: "Ayushman Bharat", name_or: "ଆୟୁଷ୍ମାନ ଭାରତ", url: "https://beneficiary.nha.gov.in/", icon: "https://img.icons8.com/color/512/hospital.png" },
    { category: "Civic Services", name: "Voter Services", name_or: "ଭୋଟର ସେବା", url: "https://voters.eci.gov.in/", icon: "https://img.icons8.com/color/512/elections.png" },
    { category: "Utilities & Banking", name: "HDFC Bank Login", name_or: "HDFC ବ୍ୟାଙ୍କ ଲଗ୍ ଇନ୍", url: "https://agentapp.ddp.hdfcbank.com/ddp-agent-portal/ddp/login", icon: "https://img.icons8.com/color/512/bank.png" },
    { category: "Farmer & Labor", name: "PM Maandhan", name_or: "ପ୍ରଧାନମନ୍ତ୍ରୀ ମାନଧନ", url: "https://maandhan.in/maandhan/login", icon: "https://img.icons8.com/color/512/umbrella.png" },
    { category: "Business & Tax", name: "Income Tax", name_or: "ଆୟକର", url: "https://www.incometax.gov.in/iec/foportal/", icon: "https://img.icons8.com/color/512/tax.png" },
    { category: "Farmer & Labor", name: "CM Kisan Odisha", name_or: "ସିଏମ୍ କିଷାନ ଓଡିଶା", url: "https://cmkisan.odisha.gov.in/", icon: "https://img.icons8.com/color/512/sprout.png" },
    { category: "Business & Tax", name: "Udyam Registration", name_or: "ଉଦ୍ୟମ ପଞ୍ଜିକରଣ", url: "https://udyamregistration.gov.in/UdyamRegistration.aspx", icon: "https://img.icons8.com/color/512/factory-breakdown.png" },
    { category: "Central/Premium", name: "IRCTC Agent", name_or: "IRCTC ଏଜେଣ୍ଟ", url: "https://registration.csccloud.in/irctc/Default.aspx", icon: "https://img.icons8.com/color/512/train.png" },
    { category: "Civic Services", name: "Odisha Citizen Portal", name_or: "ଓଡିଶା ନାଗରିକ ପୋର୍ଟାଲ୍", url: "https://citizenportal-op.gov.in/Citizen/Login.aspx", icon: "https://img.icons8.com/color/512/user.png" },
    { category: "Central/Premium", name: "Parivahan Sewa", name_or: "ପରିବହନ ସେବା", url: "https://parivahansewas.com/", icon: "https://img.icons8.com/color/512/steering-wheel.png" },
    { category: "Education & Training", name: "National Scholarship", name_or: "ଜାତୀୟ ଛାତ୍ରବୃତ୍ତି", url: "https://scholarships.gov.in/", icon: "https://img.icons8.com/color/512/student-registration.png" },
    { category: "Farmer & Labor", name: "Nirman Shramik", name_or: "ନିର୍ମାଣ ଶ୍ରମିକ", url: "https://nirmanshramik.odisha.gov.in/website/welcome", icon: "https://img.icons8.com/color/512/worker-male.png" },
    { category: "Central/Premium", name: "Passport Seva", name_or: "ପାସପୋର୍ଟ ସେବା", url: "https://www.passportindia.gov.in/psp", icon: "https://img.icons8.com/color/512/passport.png" },
    { category: "Civic Services", name: "UIDAI (Aadhaar)", name_or: "ଆଧାର ସେବା (UIDAI)", url: "https://uidai.gov.in/en/", icon: "https://img.icons8.com/color/512/fingerprint.png" },
    { category: "Utilities & Banking", name: "NPCI", name_or: "NPCI", url: "https://www.npci.org.in/", icon: "https://img.icons8.com/color/512/transaction.png" },
    { category: "Utilities & Banking", name: "TPNODL", name_or: "TPNODL (ବିଦ୍ୟୁତ୍ ବିଲ୍)", url: "https://www.tpnodl.com/", icon: "https://img.icons8.com/color/512/light-on.png" },
    { category: "Farmer & Labor", name: "Agrisnet Farmer", name_or: "ଏଗ୍ରିସ୍ନେଟ୍ କୃଷକ", url: "https://agrisnetodisha.ori.nic.in/stock/farmer/FarmerInquiry.aspx", icon: "https://img.icons8.com/color/512/farmer.png" },
    { category: "Civic Services", name: "CEO Odisha Voter Search", name_or: "ଭୋଟର ତାଲିକାରେ ନିଜ ନାମ ଖୋଜନ୍ତୁ", url: "https://ceoodisha.nic.in/en/search-your-name-2002/", icon: "https://img.icons8.com/color/512/search-property.png" },
    { category: "Civic Services", name: "Birth & Death", name_or: "ଜନ୍ମ ଓ ମୃତ୍ୟୁ ପଞ୍ଜିକରଣ", url: "https://www.birthdeath.odisha.gov.in/#birth-death-details", icon: "https://img.icons8.com/color/512/baby.png" },
    { category: "Civic Services", name: "Jeevan Pramaan", name_or: "ଜୀବନ ପ୍ରମାଣ", url: "https://jeevanpramaan.gov.in/v1.0/ppouser/login", icon: "https://img.icons8.com/color/512/grandparents.png" },
    { category: "Business & Tax", name: "NSDL / e-Gov", name_or: "NSDL / ଇ-ଗଭର୍ଣ୍ଣାନ୍ସ", url: "https://egovcsc.csccloud.in/nsdl/", icon: "https://img.icons8.com/color/512/briefcase.png" },
    { category: "Utilities & Banking", name: "HDFC Ergo CSC", name_or: "HDFC ଏର୍ଗୋ CSC", url: "https://hepgw.hdfcergo.com/CSChdfcergo/cscconnect.aspx", icon: "https://img.icons8.com/color/512/shield.png" },
    { category: "Utilities & Banking", name: "SBI General", name_or: "SBI ଜେନେରାଲ୍ ଇନସୁରାନ୍ସ", url: "https://dip.sbigeneral.in/Dashboard?n=FziwMQ8Hj4EfTSSXEwd0dmbOoSyswaSdr5hhv%2bIk%2fLNg9JDOVLMR80WsoEXrp5HIZjdUp6uBLJi%2bQltHZgDbfdrE1%2bJuV5dPRKl7q%2fWGaIqzYlTuLpVk1OOaUA6wlNj5xjI5fYxSwLQITxD3oCqVPhborgMo7OK4E88TnLr4hWIWf14dP1%2f%2bz7WWUW2Ge%2bExDPUB%2b%2foWlXirKSsraLLIbH1W%2fg6jkq45N6c%2bwNN8F41cC1ORUp5emdPpOWhkRzFnn11JEIoaRgNE4329FGsd56uw%2ff2VpvlxldbWAfM12bMjaJPVIhpvexDp%2feP%2f19Y3%2bPh77UCYttxvC1DoGxgoHg%3d%3d", icon: "https://img.icons8.com/color/512/online-payment-with-a-credit-card.png" },
    { category: "Utilities & Banking", name: "IFFCO Tokio Motor", name_or: "ଇଫକୋ ଟୋକିଓ ବୀମା", url: "https://online.iffcotokio.co.in/itgicscportal/vehicle.do?code=2f76dd3a4bc93ce6aed3433ca04d8ba428bde17e&state=690709", icon: "https://img.icons8.com/color/512/car-insurance.png" },
    { category: "Utilities & Banking", name: "Bajaj Allianz", name_or: "ବଜାଜ୍ ଆଲିଆଞ୍ଜ୍", url: "https://webservices.bajajallianz.com/CSC/login.jsp", icon: "https://img.icons8.com/color/512/life-insurance.png" },
    { category: "Education & Training", name: "APAAR", name_or: "ଅପାର (APAAR)", url: "https://apaar.csccloud.in/", icon: "https://img.icons8.com/color/512/student-center.png" },
    { category: "Utilities & Banking", name: "CSC BC/BF Onboarding", name_or: "CSC BC/BF ଅନବୋର୍ଡିଂ", url: "https://onboarding-bcbf.cscacademy.org/?source=idp", icon: "https://img.icons8.com/color/512/businessman.png" },
    { category: "Civic Services", name: "Bhulekh Odisha", name_or: "ଭୁଲେଖ ଓଡିଶା", url: "https://bhulekh.ori.nic.in/RoRView.aspx", icon: "https://img.icons8.com/color/512/land-sales.png" },
    { category: "Civic Services", name: "e-District Odisha", name_or: "ଇ-ଡିଷ୍ଟ୍ରିକ୍ଟ ଓଡିଶା", url: "https://edistrict.odisha.gov.in/loginWindow.do", icon: "https://img.icons8.com/color/512/document.png" },
    { category: "Education & Training", name: "DigiPaathshala", name_or: "ଡିଜି ପାଠଶାଳା", url: "https://digipaathshala.cscacademy.org/", icon: "https://img.icons8.com/color/512/classroom.png" },
    { category: "Business & Tax", name: "CSC Bazaar", name_or: "CSC ବଜାର", url: "https://eseva.csccloud.in/cscbazaar/default.aspx", icon: "https://img.icons8.com/color/512/shop.png" },
    { category: "Education & Training", name: "CSC Olympiad", name_or: "CSC ଅଲିମ୍ପିଆଡ୍", url: "https://cscolympiad.org/", icon: "https://img.icons8.com/color/512/medal.png" },
    { category: "Civic Services", name: "Subhadra Yojana", name_or: "ସୁଭଦ୍ରା ଯୋଜନା", url: "https://subhadra.odisha.gov.in/", icon: "https://img.icons8.com/color/512/handshake.png" },
    { category: "Business & Tax", name: "DigiName", name_or: "ଡିଜି ନେମ୍", url: "https://www.diginame.in/", icon: "https://img.icons8.com/color/512/domain.png" },
    { category: "Business & Tax", name: "CSC Services MOP", name_or: "CSC ସେବା MOP", url: "https://services.csccloud.in/MOP/Default.aspx", icon: "https://img.icons8.com/color/512/services.png" },
    { category: "Central/Premium", name: "CSC Health", name_or: "CSC ସ୍ୱାସ୍ଥ୍ୟ", url: "https://connect.csc.gov.in/account/authorize?response_type=code&client_id=ca1b3b40-66f2-4069-d88e-a921bfcdec3c&redirect_uri=http://cschealth.in/Admin/vle_login&state=78570", icon: "https://img.icons8.com/color/512/stethoscope.png" },
    { category: "Farmer & Labor", name: "PM Kisan", name_or: "ପ୍ରଧାନମନ୍ତ୍ରୀ କିଷାନ", url: "https://pmkisan.gov.in/", icon: "https://img.icons8.com/color/512/tractor.png" },
    { category: "Farmer & Labor", name: "e-Shram", name_or: "ଇ-ଶ୍ରମ", url: "https://eshram.gov.in/", icon: "https://img.icons8.com/color/512/hardhat.png" },
    { category: "Civic Services", name: "IGR Odisha", name_or: "IGR ଓଡିଶା", url: "https://www.igrodisha.gov.in/", icon: "https://img.icons8.com/color/512/property.png" },
    { category: "Education & Training", name: "OSSSC", name_or: "OSSSC (କର୍ମଚାରୀ ଚୟନ)", url: "https://www.osssc.gov.in/Public/OSSSC/Default.aspx", icon: "https://img.icons8.com/color/512/test-passed.png" },
    { category: "Education & Training", name: "CHSE Odisha", name_or: "CHSE ଓଡିଶା", url: "https://chseodisha.nic.in/", icon: "https://img.icons8.com/color/512/student-center.png" },
    { category: "Education & Training", name: "BSE Odisha", name_or: "BSE ଓଡିଶା", url: "https://bseodisha.nic.in/", icon: "https://img.icons8.com/color/512/school.png" },
    { category: "Education & Training", name: "SAMS Odisha", name_or: "SAMS ଓଡିଶା", url: "https://www.samsodisha.gov.in/", icon: "https://img.icons8.com/color/512/university.png" },
    { category: "Education & Training", name: "Odisha Adarsha Vidyalaya", name_or: "ଓଡିଶା ଆଦର୍ଶ ବିଦ୍ୟାଳୟ", url: "https://oav.edu.in/", icon: "https://img.icons8.com/color/512/school-building.png" },
    { category: "Education & Training", name: "Navodaya Vidyalaya", name_or: "ନବୋଦୟ ବିଦ୍ୟାଳୟ", url: "https://navodaya.gov.in/nvs/nvs-school/Cuttack/en/admission/Admission-Notifications/", icon: "https://img.icons8.com/color/512/diploma.png" },
    { category: "Civic Services", name: "PMAY Urban", name_or: "PMAY ସହରାଞ୍ଚଳ", url: "https://pmay-urban.gov.in/", icon: "https://img.icons8.com/color/512/home.png" },
    { category: "Business & Tax", name: "PM MUDRA Yojana", name_or: "ପ୍ରଧାନମନ୍ତ୍ରୀ ମୁଦ୍ରା ଯୋଜନା", url: "https://www.mudra.org.in/", icon: "https://img.icons8.com/color/512/fund-accounting.png" },
    { category: "Central/Premium", name: "ABHA Card", name_or: "ଆଭା କାର୍ଡ (ABHA)", url: "https://abha.abdm.gov.in/abha/v3", icon: "https://img.icons8.com/color/512/medical-doctor.png" },
    { category: "Civic Services", name: "Gopabandhu Jan Arogya", name_or: "ଗୋପବନ୍ଧୁ ଜନ ଆରୋଗ୍ୟ", url: "https://gjay.odisha.gov.in/home", icon: "https://img.icons8.com/color/512/heart-health.png" },
    { category: "Central/Premium", name: "PMJAY Grievance", name_or: "PMJAY ଅଭିଯୋଗ", url: "https://cgrms.pmjay.gov.in/GRMS/loginnew.htm", icon: "https://img.icons8.com/color/512/complaint.png" },
    { category: "Civic Services", name: "Madhubabu Bardhakya Pention", name_or: "ମଧୁବାବୁ ବାର୍ଦ୍ଧକ୍ୟ ପେନସନ", url: "https://ssepd.gov.in:8443/swp/applyBeneficiaryApplication.htm?lang=en", icon: "https://img.icons8.com/color/512/assistive-technology.png" },
    { category: "Education & Training", name: "Banishree Scholarship", name_or: "ବାଣୀଶ୍ରୀ ଛାତ୍ରବୃତ୍ତି", url: "https://ssepd.gov.in:8443/swp/applyBanishreeScholarshipScheme.htm", icon: "https://img.icons8.com/color/512/graduation-cap.png" },
    { category: "Civic Services", name: "SSEPD Services", name_or: "SSEPD ସେବା", url: "https://ssepd.odisha.gov.in/or/ssedp-beneficiary-services", icon: "https://img.icons8.com/color/512/wheelchair.png" },
    { category: "Farmer & Labor", name: "NFDP (Fisheries)", name_or: "NFDP (ମତ୍ସ୍ୟ ପାଳନ)", url: "https://nfdp.dof.gov.in/nfdp/#/", icon: "https://img.icons8.com/color/512/fish.png" },
    { category: "Civic Services", name: "SUGAM Odisha", name_or: "ସୁଗମ ଓଡିଶା", url: "https://sugam.odisha.gov.in/website/home", icon: "https://img.icons8.com/color/512/ok.png" },
    { category: "Civic Services", name: "District Employment Registrar", name_or: "ନିୟୋଜନ ବିନିମୟ ଓଡିଶା", url: "https://empmission.odisha.gov.in/Exchange/employment.jsp", icon: "https://img.icons8.com/color/512/find-matching-job.png" },
    { category: "Central/Premium", name: "UMANG", name_or: "ଉମଙ୍ଗ (UMANG)", url: "https://web.umang.gov.in/landing/", icon: "https://img.icons8.com/color/512/government.png" },
    { category: "Central/Premium", name: "DIGI-LOCKER", name_or: "ଡିଜି-ଲକର (DigiLocker)", url: "https://www.digilocker.gov.in/", icon: "https://img.icons8.com/color/512/safe.png" },
    { category: "Business & Tax", name: "FOOD LICENCE", name_or: "ଖାଦ୍ୟ ଲାଇସେନ୍ସ", url: "https://foscos.fssai.gov.in/", icon: "https://img.icons8.com/color/512/restaurant.png" },
    { category: "Business & Tax", name: "GST Portal", name_or: "ଜିଏସଟି (GST)", url: "https://www.gst.gov.in/", icon: "https://freepngimg.com/save/34749-gst-photos/946x714" },
    { category: "Farmer & Labor", name: "MGNREGA", name_or: "ମନରେଗା (MGNREGA)", url: "https://nregastrep.nic.in/netnrega/loginframegp.aspx?page=C&state_code=24", icon: "https://www.google.com/s2/favicons?domain=nregastrep.nic.in&sz=128" }
];



let activeCategory = 'All';
const categories = ["Civic Services", "Business & Tax", "Central/Premium", "Utilities & Banking", "Farmer & Labor", "Education & Training"];

const catStyles = {
    "Civic Services": { tag: "tag-civic", col: "col-civic" },
    "Business & Tax": { tag: "tag-business", col: "col-business" },
    "Central/Premium": { tag: "tag-central", col: "col-central" },
    "Utilities & Banking": { tag: "tag-utilities", col: "col-utilities" },
    "Farmer & Labor": { tag: "tag-farmer", col: "col-farmer" },
    "Education & Training": { tag: "tag-education", col: "col-education" }
};

const uiTranslations = {
    "en": {
        "header-title": "ALL SERVICES IN A ONE PORTAL",
        "sidebar-title": "JANA SEBA KENDRA",
        "sidebar-home": "Home",
        "sidebar-all": "All Services",
        "sidebar-categories": "Categories",
        "sidebar-workspace": "CSC WORK SPACE",
        "btn-about-services": "About Services",
        "btn-about-us": "About Us",
        "btn-csc-register": "CSC Register",
        "btn-csc-locator": "CSC Locator",
        "btn-invite": "PDF FORM LIST",
        "home-tab-central": "Central Government Services",
        "home-tab-state": "State Government Services",
        "home-tab-other": "ONLINE JOB INQUARI",
        "cat-civic": "Civic Services",
        "cat-business": "Business & Tax",
        "cat-central": "Central/Premium",
        "cat-utilities": "Utilities & Banking",
        "cat-farmer": "Farmer & Labor",
        "cat-education": "Education & Training"
    },
    "or": {
        "header-title": "ଗୋଟିଏ ପୋର୍ଟାଲରେ ସମସ୍ତ ସେବା",
        "sidebar-title": "ଜନ ସେବା କେନ୍ଦ୍ର",
        "sidebar-home": "ମୂଳ ପୃଷ୍ଠା",
        "sidebar-all": "ସମସ୍ତ ସେବା",
        "sidebar-categories": "ବିଭାଗ",
        "sidebar-workspace": "CSC କାର୍ଯ୍ୟ କ୍ଷେତ୍ର",
        "btn-about-services": "ସେବା ବିଷୟରେ",
        "btn-about-us": "ଆମ ବିଷୟରେ",
        "btn-csc-register": "CSC ପଞ୍ଜିକରଣ",
        "btn-csc-locator": "VLE ଖୋଜନ୍ତୁ",
        "btn-invite": "ପିଡିଏଫ ଫର୍ମ ତାଲିକା",
        "home-tab-central": "କେନ୍ଦ୍ର ସରକାରଙ୍କ ସେବା",
        "home-tab-state": "ରାଜ୍ୟ ସରକାରଙ୍କ ସେବା",
        "home-tab-other": "ଅନଲାଇନ୍ ଜବ୍ ଇନକ୍ୱାରୀ",
        "cat-civic": "ନାଗରିକ ସେବା",
        "cat-business": "ବ୍ୟବସାୟ ଏବଂ ଟିକସ",
        "cat-central": "କେନ୍ଦ୍ରୀୟ / ପ୍ରିମିୟମ୍",
        "cat-utilities": "ୟୁଟିଲିଟି ଏବଂ ବ୍ୟାଙ୍କିଙ୍ଗ୍",
        "cat-farmer": "କୃଷକ ଏବଂ ଶ୍ରମିକ",
        "cat-education": "ଶିକ୍ଷା ଏବଂ ପ୍ରଶିକ୍ଷଣ"
    }
};

let currentLang = 'en';
let currentView = 'home'; // 'home', 'kanban' or 'table'
let currentDisplayMode = 'kanban'; // Remembers if user prefers kanban or table when browsing categories

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('csc_language', lang);
    document.getElementById("lang-en").classList.toggle("active", lang === 'en');
    document.getElementById("lang-or").classList.toggle("active", lang === 'or');

    // Change font
    document.body.style.fontFamily = lang === 'or' ? "'Noto Sans Oriya', sans-serif" : "'Roboto', 'Inter', sans-serif";

    // Update UI Text
    const t = uiTranslations[lang];
    if (t) {
        // App Title
        const appTitle = document.getElementById("sidebarAppTitle");
        if (appTitle) appTitle.textContent = t["sidebar-title"];

        // Header Title - only update if NOT overridden by Admin Panel
        const headerTitle = document.getElementById("headerTitle");
        const adminSaved = JSON.parse(localStorage.getItem('cscAdminPopup') || '{}');
        if (headerTitle && !adminSaved.header) headerTitle.textContent = t["header-title"];

        // Sidebar items
        const homeSpan = document.querySelector("#btnSidebarHome span");
        const allSpan = document.querySelector("#btnSidebarAll span");
        const catSpan = document.querySelector("#btnCategoriesToggle span");
        const workspaceSpan = document.querySelector(".sidebar-menu a[href*='connect.csc.gov.in'] span");

        if (homeSpan) homeSpan.textContent = t["sidebar-home"];
        if (allSpan) allSpan.textContent = t["sidebar-all"];
        if (catSpan) catSpan.textContent = t["sidebar-categories"];
        if (workspaceSpan) workspaceSpan.textContent = t["sidebar-workspace"];

        // Side Footer buttons
        const footerBtns = document.querySelectorAll(".sidebar-footer .register-btn, .sidebar-footer .invite-btn");
        footerBtns.forEach(btn => {
            const span = btn.querySelector("span");
            if (span) {
                const icon = btn.querySelector("ion-icon");
                const iconName = icon ? icon.getAttribute("name") : "";

                if (iconName === "location") span.textContent = t["btn-csc-locator"];
                else if (iconName === "information-circle") span.textContent = t["btn-about-us"];
                else if (iconName === "list-circle-outline") span.textContent = t["btn-about-services"];
                else if (iconName === "document-text") span.textContent = t["btn-csc-register"];
            }
            if (btn.classList.contains("invite-btn")) {
                const pdfBtnText = document.getElementById("pdfBtnText");
                if (pdfBtnText) {
                    pdfBtnText.textContent = t["btn-invite"];
                }
            }
        });

        // Home Tabs
        const tabs = document.querySelectorAll("#homeTabs .hs-tab");
        tabs.forEach(tab => {
            const target = tab.getAttribute("data-target");
            if (target === "central") tab.textContent = t["home-tab-central"];
            else if (target === "state") tab.textContent = t["home-tab-state"];
            else if (target === "other") tab.textContent = t["home-tab-other"];
        });
    }

    const searchVal = document.getElementById("sidebarSearch")?.value || "";
    renderBoard(searchVal);
    renderSidebar(); // Refresh sidebar category icons/text if needed
}

document.addEventListener("DOMContentLoaded", () => {
    renderSidebar();
    renderBoard();

    // Language Toggle
    const langEnBtn = document.getElementById("lang-en");
    const langOrBtn = document.getElementById("lang-or");

    if (langEnBtn) langEnBtn.addEventListener("click", () => setLang('en'));
    if (langOrBtn) langOrBtn.addEventListener("click", () => setLang('or'));

    // Apply initial lang
    setLang(currentLang);

    // Live Web Search Autocomplete via DuckDuckGo (Sidebar Search)
    let sidebarSearchTimeout;
    const sidebarSearch = document.getElementById("sidebarSearch");
    const sidebarSearchDropdown = document.getElementById("sidebarSearchDropdown");

    // JSONP callback for DuckDuckGo (Sidebar Search)
    window.ddgCallbackSidebar = function (data) {
        if (!sidebarSearchDropdown) return;
        sidebarSearchDropdown.innerHTML = "";

        if (data && data.length > 0) {
            data.forEach(item => {
                const li = document.createElement("li");
                li.innerHTML = `<ion-icon name="search-outline"></ion-icon> ${item.phrase}`;
                li.addEventListener("click", () => {
                    sidebarSearch.value = item.phrase;
                    sidebarSearchDropdown.style.display = "none";
                    window.open(`https://www.google.com/search?q=${encodeURIComponent(item.phrase)}`, '_blank');
                });
                sidebarSearchDropdown.appendChild(li);
            });
            sidebarSearchDropdown.style.display = "block";
        } else {
            sidebarSearchDropdown.style.display = "none";
        }
    };

    if (sidebarSearch && sidebarSearchDropdown) {
        sidebarSearch.addEventListener("input", (e) => {
            const query = e.target.value.trim();
            renderBoard(query);

            clearTimeout(sidebarSearchTimeout);

            if (query.length < 2) {
                sidebarSearchDropdown.style.display = "none";
                return;
            }

            sidebarSearchTimeout = setTimeout(() => {
                const oldScript = document.getElementById("ddg-jsonp-sidebar");
                if (oldScript) oldScript.remove();

                const script = document.createElement("script");
                script.id = "ddg-jsonp-sidebar";
                script.src = `https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}&callback=ddgCallbackSidebar`;
                document.head.appendChild(script);
            }, 300);
        });

        sidebarSearch.addEventListener("keypress", (e) => {
            if (e.key === 'Enter' && sidebarSearch.value.trim() !== '') {
                sidebarSearchDropdown.style.display = "none";
                window.open(`https://www.google.com/search?q=${encodeURIComponent(sidebarSearch.value.trim())}`, '_blank');
            }
        });

        document.addEventListener("click", (e) => {
            if (!sidebarSearch.contains(e.target) && !sidebarSearchDropdown.contains(e.target)) {
                sidebarSearchDropdown.style.display = "none";
            }
        });
    }

    const btnSidebarHome = document.getElementById("btnSidebarHome");

    function showHomeView() {
        currentView = 'home';
        document.getElementById("homeView").style.display = "block";
        document.getElementById("kanbanBoard").style.display = "none";
        document.getElementById("tableView").style.display = "none";
        document.getElementById("textBanner").style.display = "none";

        // Update active states
        document.querySelectorAll("#categoryList li").forEach(el => el.classList.remove('active'));
        if (btnSidebarHome) btnSidebarHome.classList.add('active');

        // Scroll the main content area to the top
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    const btnSidebarAll = document.getElementById("btnSidebarAll");
    const btnKanban = document.getElementById("btnKanbanView");
    const btnTable = document.getElementById("btnTableView");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const mobileSidebarToggle = document.getElementById("mobileSidebarToggle");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    const sidebar = document.querySelector(".sidebar");

    function showServicesView() {
        currentView = currentDisplayMode;
        document.getElementById("homeView").style.display = "none";
        document.getElementById("textBanner").style.display = "block";

        if (btnSidebarHome) btnSidebarHome.classList.remove('active');
        if (btnSidebarAll) btnSidebarAll.classList.add('active');

        if (currentDisplayMode === 'kanban') {
            document.getElementById("kanbanBoard").style.display = "flex";
            document.getElementById("tableView").style.display = "none";
        } else {
            document.getElementById("kanbanBoard").style.display = "none";
            document.getElementById("tableView").style.display = "block";
        }
        renderBoard(document.getElementById("sidebarSearch").value);
    }

    if (btnSidebarHome) {
        btnSidebarHome.addEventListener("click", (e) => {
            e.preventDefault();
            activeCategory = 'All'; // Reset category
            if (btnSidebarAll) btnSidebarAll.classList.remove('active');
            showHomeView();
        });
    }

    if (btnSidebarAll) {
        btnSidebarAll.addEventListener("click", (e) => {
            e.preventDefault();
            activeCategory = 'All';
            showServicesView();
        });
    }

    // Desktop minimize toggle
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener("click", () => {
            sidebar.classList.toggle("collapsed");
            const iconEl = sidebarToggle.querySelector("ion-icon");
            if (iconEl) {
                if (sidebar.classList.contains("collapsed")) {
                    iconEl.setAttribute("name", "chevron-forward-outline");
                } else {
                    iconEl.setAttribute("name", "menu-outline");
                }
            }
        });
    }

    // Mobile offcanvas toggle
    if (mobileSidebarToggle && sidebar && sidebarOverlay) {
        mobileSidebarToggle.addEventListener("click", () => {
            sidebar.classList.add("mobile-open");
            sidebarOverlay.classList.add("active");
        });

        // Close when clicking overlay
        sidebarOverlay.addEventListener("click", () => {
            sidebar.classList.remove("mobile-open");
            sidebarOverlay.classList.remove("active");
        });
    }

    const btnCategoriesToggle = document.getElementById("btnCategoriesToggle");
    const categoriesSectionWrapper = document.getElementById("categoriesSectionWrapper");

    if (btnCategoriesToggle && categoriesSectionWrapper) {
        btnCategoriesToggle.addEventListener("click", (e) => {
            e.preventDefault();
            const arrow = btnCategoriesToggle.querySelector(".toggle-arrow");
            if (categoriesSectionWrapper.style.display !== "none" && categoriesSectionWrapper.style.display !== "") {
                categoriesSectionWrapper.style.display = "none";
                arrow.style.transform = "rotate(0deg)";
            } else {
                categoriesSectionWrapper.style.display = "block";
                arrow.style.transform = "rotate(90deg)";
            }
        });
    }

    if (btnKanban && btnTable) {
        btnKanban.addEventListener("click", () => {
            currentDisplayMode = 'kanban';
            btnKanban.classList.add("active");
            btnTable.classList.remove("active");
            showServicesView();
        });

        btnTable.addEventListener("click", () => {
            currentDisplayMode = 'table';
            btnTable.classList.add("active");
            btnKanban.classList.remove("active");
            showServicesView();
        });
    }

    // Dropdown Logic for PDF Form List
    const pdfToggleBtn = document.getElementById("pdfToggleBtn");
    const pdfDropdownContainer = document.getElementById("pdfDropdownContainer");

    if (pdfToggleBtn) {
        pdfToggleBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent closing immediately
            if (pdfDropdownContainer) {
                pdfDropdownContainer.classList.toggle("active");
            }
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (pdfDropdownContainer && !pdfDropdownContainer.contains(e.target) && !e.target.closest('#pdfToggleBtn')) {
            pdfDropdownContainer.classList.remove("active");
        }
    });

    // Initial view
    showHomeView();
});

function renderSidebar() {
    const list = document.getElementById("categoryList");
    if (!list) return;
    list.innerHTML = "";

    const catIcons = {
        "Civic Services": "business-outline",
        "Business & Tax": "briefcase-outline",
        "Central/Premium": "star-outline",
        "Utilities & Banking": "card-outline",
        "Farmer & Labor": "leaf-outline",
        "Education & Training": "school-outline"
    };

    categories.forEach((cat) => {
        const li = document.createElement("li");
        const iconName = catIcons[cat] || "folder-outline";
        const t = uiTranslations[currentLang];
        const catKey = "cat-" + cat.toLowerCase().replace(/ & /g, "-").replace(/\//g, "-").replace(/ /g, "-");
        const displayCat = (t && t[catKey]) ? t[catKey] : cat;

        li.innerHTML = `<ion-icon name="${iconName}" style="font-size: 18px; color: var(--sidebar-active); margin-right: 4px;"></ion-icon> <span style="font-weight: 600; color: #ffffff;">${displayCat}</span>`;
        if (activeCategory === cat && currentView !== 'home') li.classList.add("active");

        li.addEventListener('click', () => {
            document.querySelectorAll("#categoryList li").forEach(el => el.classList.remove('active'));
            li.classList.add('active');
            activeCategory = cat;
            const btnSidebarHome = document.getElementById("btnSidebarHome");
            if (btnSidebarHome) btnSidebarHome.classList.remove('active');

            currentView = currentDisplayMode;
            document.getElementById("homeView").style.display = "none";
            document.getElementById("textBanner").style.display = "block";
            if (currentDisplayMode === 'kanban') {
                document.getElementById("kanbanBoard").style.display = "flex";
                document.getElementById("tableView").style.display = "none";
            } else {
                document.getElementById("kanbanBoard").style.display = "none";
                document.getElementById("tableView").style.display = "block";
            }

            const categoriesSectionWrapper = document.getElementById("categoriesSectionWrapper");
            if (categoriesSectionWrapper) {
                categoriesSectionWrapper.style.display = "none";
                const arrow = document.querySelector("#btnCategoriesToggle .toggle-arrow");
                if (arrow) arrow.style.transform = "rotate(0deg)";
            }

            // Close mobile sidebar if open
            const sidebar = document.querySelector(".sidebar");
            const sidebarOverlay = document.getElementById("sidebarOverlay");
            if (sidebar && sidebar.classList.contains("mobile-open")) {
                sidebar.classList.remove("mobile-open");
                if (sidebarOverlay) sidebarOverlay.classList.remove("active");
            }

            renderBoard(document.getElementById("sidebarSearch").value);
        });

        list.appendChild(li);
    });
}

function renderBoard(searchTerm = "") {
    const board = document.getElementById("kanbanBoard");
    if (!board) return;
    board.innerHTML = "";

    const term = searchTerm.toLowerCase();

    const tableBody = document.getElementById("tableBody");
    if (tableBody) tableBody.innerHTML = "";

    categories.forEach(cat => {
        if (activeCategory !== 'All' && activeCategory !== cat) return;

        const catServices = services.filter(s => s.category === cat &&
            (s.name.toLowerCase().includes(term) || (s.name_or && s.name_or.includes(term)))
        );

        if (catServices.length === 0 && term !== "") return; // hide column if empty during search

        const style = catStyles[cat];

        const catDesign = {
            "Civic Services": { circleBg: "#2185b5", boxBg: "#cbe3f2", textColor: "#15638a" },
            "Business & Tax": { circleBg: "#324e5e", boxBg: "#dae3e8", textColor: "#203440" },
            "Central/Premium": { circleBg: "#b34468", boxBg: "#f7cde0", textColor: "#8c324f" },
            "Utilities & Banking": { circleBg: "#d16c21", boxBg: "#fadecc", textColor: "#a35216" },
            "Farmer & Labor": { circleBg: "#439645", boxBg: "#d1ebd2", textColor: "#2f6e31" },
            "Education & Training": { circleBg: "#7e4a9e", boxBg: "#ebd8fa", textColor: "#5e3478" }
        };
        const design = catDesign[cat] || catDesign["Civic Services"];

        let cardsContainer = null;
        if (currentDisplayMode === 'kanban') {
            const row = document.createElement("div");
            row.className = `category-row`;
            row.id = `col-container-${cat.replace(/[^a-zA-Z]/g, '')}`;

            row.innerHTML = `
                <div class="dotted-connector" style="border-bottom-color: ${design.circleBg};"></div>
                <div class="category-circle" style="background-color: ${design.circleBg};">
                    ${cat}
                </div>
                <div class="category-box" style="background-color: ${design.boxBg};">
                    <div class="service-items-grid" id="col-${cat.replace(/[^a-zA-Z]/g, '')}"></div>
                </div>
            `;

            board.appendChild(row);
            cardsContainer = row.querySelector(".service-items-grid");
        }

        catServices.forEach(s => {
            const name = currentLang === 'en' ? s.name : (s.name_or || s.name);

            if (currentDisplayMode === 'kanban') {
                const card = document.createElement("a");
                card.href = s.url;
                card.target = "_blank";
                card.className = "service-doc-item";
                card.style.color = "#ffffff";

                card.innerHTML = `
                    <div class="service-doc-icon">
                        <img src="${s.icon}" alt="Icon" loading="lazy" onerror="this.src='https://img.icons8.com/color/512/external-link.png'">
                    </div>
                    <span class="service-doc-text" title="${name}">${name}</span>
                `;
                cardsContainer.appendChild(card);
            } else {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>
                        <div class="table-cell-name">
                            <img src="${s.icon}" alt="Icon" loading="lazy" onerror="this.src='https://img.icons8.com/color/512/external-link.png'">
                            ${name}
                        </div>
                    </td>
                    <td><span class="card-tag ${style.tag}">${cat}</span></td>
                    <td><span style="color: #10b981; font-weight: 500; font-size: 12px; display: flex; align-items: center; gap: 4px;"><ion-icon name="checkmark-circle"></ion-icon> Active</span></td>
                    <td><a href="${s.url}" target="_blank" class="table-cell-action">Open <ion-icon name="open-outline"></ion-icon></a></td>
                `;
                tableBody.appendChild(tr);
            }
        });
    });
}

// Home Tabs Logic
document.addEventListener('DOMContentLoaded', () => {
    const homeTabs = document.querySelectorAll('#homeTabs .hs-tab');
    const centralGrid = document.getElementById('centralServicesGrid');
    const stateGrid = document.getElementById('stateServicesGrid');
    const otherContainer = document.getElementById('otherServicesContainer');

    if (homeTabs.length > 0) {
        homeTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active from all
                homeTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // Hide all content blocks
                if (centralGrid) centralGrid.style.display = 'none';
                if (stateGrid) stateGrid.style.display = 'none';
                if (otherContainer) otherContainer.style.display = 'none';

                const target = tab.getAttribute('data-target');
                if (target === 'central') {
                    if (centralGrid) centralGrid.style.display = 'grid';
                } else if (target === 'state') {
                    if (stateGrid) stateGrid.style.display = 'grid';
                } else if (target === 'other') {
                    if (otherContainer) otherContainer.style.display = 'block';
                }
            });
        });
    }
});

// AI Assistant Logic
const aiAssistantBtn = document.getElementById('aiAssistantBtn');
const aiChatWindow = document.getElementById('aiChatWindow');
const aiCloseBtn = document.getElementById('aiCloseBtn');
const aiChatBody = document.getElementById('aiChatBody');
const aiChatInput = document.getElementById('aiChatInput');
const aiSendBtn = document.getElementById('aiSendBtn');
const aiBadge = document.querySelector('.ai-badge');

if (aiAssistantBtn && aiChatWindow) {
    aiAssistantBtn.addEventListener('click', () => {
        aiChatWindow.classList.add('active');
        if (aiBadge) aiBadge.style.display = 'none';

        // Scroll to bottom
        setTimeout(() => {
            aiChatBody.scrollTop = aiChatBody.scrollHeight;
        }, 100);
    });

    aiCloseBtn.addEventListener('click', () => {
        aiChatWindow.classList.remove('active');
    });

    const botResponses = [
        "I can help you with government services like Aadhaar, PAN, and Voter ID. What do you need?",
        "To apply for a new PAN card, please visit the PAN service section from the dashboard.",
        "You can check your PM-KISAN status using the link in the Central Government Services tab.",
        "The CSC locator can help you find your nearest physical center. Check the sidebar footer!",
        "For technical support, please raise a ticket in the main portal.",
        "I am always right here if you need any assistance navigating the portal. Just ask!"
    ];

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `ai-message ${sender}`;

        if (sender === 'bot') {
            msgDiv.innerHTML = `
                <img src="https://cdn-icons-png.flaticon.com/512/8649/8649605.png" class="msg-avatar" alt="Bot">
                <div class="msg-content">${text}</div>
            `;
        } else {
            msgDiv.innerHTML = `<div class="msg-content">${text}</div>`;
        }

        aiChatBody.appendChild(msgDiv);
        aiChatBody.scrollTop = aiChatBody.scrollHeight;
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'ai-message bot typing-msg';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <img src="https://cdn-icons-png.flaticon.com/512/8649/8649605.png" class="msg-avatar" alt="Bot">
            <div class="typing-indicator">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        aiChatBody.appendChild(typingDiv);
        aiChatBody.scrollTop = aiChatBody.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    function handleSend() {
        const text = aiChatInput.value.trim();
        if (text !== '') {
            addMessage(text, 'user');
            aiChatInput.value = '';

            showTypingIndicator();

            // Simulate AI response logic based on queries
            setTimeout(() => {
                removeTypingIndicator();
                let lowerText = text.toLowerCase();
                let reply = "";

                if (lowerText.includes('aadhaar') || lowerText.includes('aadhar')) {
                    reply = "I can take you to the Aadhaar services. Please wait...";
                    window.open('https://uidai.gov.in/en/', '_blank');
                } else if (lowerText.includes('pan')) {
                    reply = "Opening PAN card portal for you...";
                    window.open('https://www.myutiitsl.com/panonlineservices/CSCLogin', '_blank');
                } else if (lowerText.includes('pm-kisan') || lowerText.includes('kisan')) {
                    reply = "Sure! Taking you to the PM-KISAN portal.";
                    window.open('https://pmkisan.gov.in/', '_blank');
                } else if (lowerText.includes('ayushman')) {
                    reply = "Opening Ayushman Bharat services...";
                    window.open('https://beneficiary.nha.gov.in/', '_blank');
                } else if (lowerText.includes('home') || lowerText.includes('dashboard')) {
                    reply = "Navigating to Home Dashboard.";
                    document.getElementById('btnSidebarHome').click();
                } else if (lowerText.includes('all services') || lowerText.includes('services')) {
                    reply = "Opening all services section.";
                    document.getElementById('btnSidebarAll').click();
                } else if (lowerText.includes('hi') || lowerText.includes('hello')) {
                    reply = "Hello there! How can I assist you today? You can ask me to open services like Aadhaar, PAN, PM-Kisan, or navigate to other tabs!";
                } else if (lowerText.includes('order') || lowerText.includes('buy')) {
                    reply = "To manage your services or purchases, please go to the All Services tab or search for the specific service in the sidebar search.";
                } else {
                    reply = botResponses[Math.floor(Math.random() * botResponses.length)];
                }

                addMessage(reply, 'bot');
            }, 1500);
        }
    }

    aiSendBtn.addEventListener('click', handleSend);
    aiChatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
}
