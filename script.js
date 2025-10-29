// نظام الترجمة ثنائي اللغة
const translations = {
    ar: {
        // العناوين
        siteTitle: "تقنية الهلال المائي",
        
        // التنقل
        home: "الرئيسية",
        calculator: "الآلة الحاسبة", 
        documentation: "التوثيق",
        
        // الهيرو
        heroTitle: "تقنية الهلال المائي",
        heroSubtitle: "نظام حصاد مياه الأمطار المستوحى من دراسة WOCAT في بنين",
        heroDesc: "تقنية مبتكرة لتحسين إنتاجية المحاصيل في المناطق الجافة وشبه الجافة بناءً على نجاحات غرب أفريقيا",
        getStarted: "ابدأ حساب أرضك",
        learnMore: "تعرف على التقنية",
        
        // المميزات
        featuresTitle: "مميزات التقنية",
        feature1Title: "معادلات مستندة لـ WOCAT",
        feature1Desc: "جميع الحسابات مبنية على دراسة حالة WOCAT في بنين وتجارب ناجحة في غرب أفريقيا",
        feature2Title: "مناسبة للمنطقة العربية", 
        feature2Desc: "مصممة خصيصاً لظروف المناطق الجافة وشبه الجافة المشابهة لغرب أفريقيا",
        feature3Title: "تحسين الإنتاجية",
        feature3Desc: "زيادة إنتاجية المحاصيل بنسبة 50-200% كما وثقت دراسات WOCAT",
        feature4Title: "بصريات كربونية",
        feature4Desc: "تحسين خصوبة التربة وتخزين الكربون بناءً على النتائج الميدانية",
        
        // كيفية العمل
        howItWorksTitle: "كيف تعمل التقنية",
        step1Title: "أدخل بيانات موقعك",
        step1Desc: "أدخل معدل الأمطار، نوع التربة، ومساحة الأرض",
        step2Title: "اختر المحصول المستهدف", 
        step2Desc: "اختر من بين المحاصيل المناسبة للتقنية",
        step3Title: "احصل على التصميم الأمثل",
        step3Desc: "استلم التصميم الكامل مع الرسوم البيانية والتفاصيل",
        
        // الإحصائيات
        stat1: "زيادة الإنتاجية",
        stat2: "تحسين رطوبة التربة", 
        stat3: "تقنية مجربة",
        stat4: "مستدامة",
        
        // الحث على الإجراء
        ctaTitle: "جاهز لتحسين إنتاجيتك؟",
        ctaDesc: "استخدم أداتنا لتصميم نظام الهلال المائي الخاص بك", 
        startDesign: "ابدأ التصميم الآن",
        
        // الفوتر
        footerDesc: "نظام حصاد مياه الأمطار المستوحى من نجاحات WOCAT في بنين",
        links: "روابط سريعة",
        resources: "مصادر", 
        faq: "الأسئلة الشائعة",
        tutorials: "الدروس التعليمية", 
        research: "الأبحاث",
        designedBy: "مستوحى من دراسة WOCAT - بنين",
        
        // الآلة الحاسبة
        calculatorTitle: "تقنية الهلال المائي",
        calculatorSubtitle: "تصميم نظام حصاد مياه الأمطار بناءً على نجاحات غرب أفريقيا",
        calculatorDesc: "أدخل بيانات موقعك للحصول على تصميم مثالي مستند إلى دراسة WOCAT",
        basicData: "البيانات الأساسية",
        rainfall: "معدل هطول الأمطار السنوي",
        rainfallHint: "يجب أن يكون بين 200 و 1200 مم/سنة", 
        soilType: "نوع التربة",
        selectSoil: "اختر نوع التربة",
        sandy: "رملية",
        loamySandy: "رملية طينية",
        loamy: "طميية", 
        landUse: "نظام استخدام الأرض",
        selectLandUse: "اختر نظام استخدام الأرض",
        cropland: "أراضي زراعية",
        rangeland: "مراعي",
        degradedLand: "أراضي متدهورة",
        areaData: "بيانات المساحة", 
        landArea: "مساحة الأرض",
        hectare: "هكتار",
        acre: "فدان",
        dunam: "دونم", 
        squareMeter: "متر مربع",
        cropType: "نوع المحصول",
        selectCrop: "اختر نوع المحصول",
        millet: "الدخن",
        sorghum: "الذرة الرفيعة",
        maize: "الذرة",
        cowpea: "اللوبيا",
        groundnut: "الفول السوداني",
        calculateDesign: "احسب التصميم",
        reset: "إعادة تعيين",
        
        // النتائج
        designResults: "نتائج التصميم",
        saveResults: "حفظ النتائج", 
        printResults: "طباعة النتائج",
        basicDimensions: "الأبعاد الأساسية",
        diameter: "قطر الهلال",
        depth: "عمق الهلال", 
        spacing: "المسافة بين الهلالات",
        catchmentArea: "مساحة منطقة التجميع",
        cultivationArea: "مساحة الزراعة",
        efficiency: "الكفاءة والإنتاجية",
        waterHarvestingEfficiency: "كفاءة حصاد المياه",
        yieldIncrease: "الزيادة المتوقعة في الإنتاج",
        soilMoistureIncrease: "تحسين رطوبة التربة",
        designIllustration: "الرسم التوضيحي للتصميم",
        spacingExplanation: "تفسير التصميم",
        whyDimensions: "لماذا هذه الأبعاد؟",
        spacingReason: "تم حساب الأبعاد بناءً على دراسة WOCAT التي أظهرت نجاحاً في تحسين إنتاجية المحاصيل بنسبة 50-200% في بنين.",
        howCalculated: "كيف تم حساب الأبعاد؟",
        calculationMethod: "القطر والعمق يحسنان احتباس المياه والمواد العضوية في التربة.",
        calculationMethod2: "المسافات تحقق التوازن الأمثل بين التجميع والزراعة.",
        sourcesTitle: "المصادر العلمية",
        visualResults: "النتائج المرئية",
        
        // المعادلات
        eqW1: "W-1",
        eqW2: "W-2", 
        eqW3: "W-3",
        eqW4: "W-4",
        eqW5: "W-5",

        // التوثيق
        docsDesc: "جميع المعادلات والمصادر المستندة إلى دراسة WOCAT في بنين",
        tableOfContents: "جدول المحتويات",
        introduction: "المقدمة",
        equations: "المعادلات الأساسية",
        sources: "المصادر",
        methodology: "منهجية العمل",
        results: "النتائج والتطبيقات",
        
        // New translations
        validationData: "بيانات التحقق",
        designCharts: "الرسوم البيانية",
        soilMoistureImprovement: "تحسين رطوبة التربة",
        yieldImprovement: "تحسين الإنتاجية",
        carbonSequestration: "تخزين الكربون"
    },
    en: {
        // Titles
        siteTitle: "Half-Moon Water Technique",
        
        // Navigation
        home: "Home",
        calculator: "Calculator",
        documentation: "Documentation",
        
        // Hero
        heroTitle: "Half-Moon Water Technique",
        heroSubtitle: "Rainwater harvesting system inspired by WOCAT case study in Benin",
        heroDesc: "Innovative technique for improving crop productivity in arid and semi-arid regions based on West African successes",
        getStarted: "Calculate Your Land",
        learnMore: "Learn About Technique",
        
        // Features
        featuresTitle: "Technique Features",
        feature1Title: "WOCAT-Based Equations",
        feature1Desc: "All calculations based on WOCAT case study in Benin and successful West African experiences",
        feature2Title: "Suitable for Arab Region",
        feature2Desc: "Specifically designed for arid and semi-arid conditions similar to West Africa",
        feature3Title: "Productivity Improvement",
        feature3Desc: "50-200% crop yield increase as documented by WOCAT studies",
        feature4Title: "Carbon Sequestration",
        feature4Desc: "Soil fertility improvement and carbon storage based on field results",
        
        // How it works
        howItWorksTitle: "How the Technique Works",
        step1Title: "Enter Your Site Data",
        step1Desc: "Enter rainfall rate, soil type, and land area",
        step2Title: "Choose Target Crop",
        step2Desc: "Select from suitable crops for the technique",
        step3Title: "Get Optimal Design",
        step3Desc: "Receive complete design with charts and details",
        
        // Statistics
        stat1: "Yield Increase",
        stat2: "Soil Moisture Improvement",
        stat3: "Proven Technique",
        stat4: "Sustainable",
        
        // Call to Action
        ctaTitle: "Ready to Improve Your Productivity?",
        ctaDesc: "Use our tool to design your half-moon water system",
        startDesign: "Start Designing Now",
        
        // Footer
        footerDesc: "Rainwater harvesting system inspired by WOCAT successes in Benin",
        links: "Quick Links",
        resources: "Resources",
        faq: "FAQ",
        tutorials: "Tutorials",
        research: "Research",
        designedBy: "Inspired by WOCAT Study - Benin",
        
        // Calculator
        calculatorTitle: "Half-Moon Water Technique",
        calculatorSubtitle: "Rainwater harvesting system design based on West African successes",
        calculatorDesc: "Enter your site data to get optimal design based on WOCAT study",
        basicData: "Basic Data",
        rainfall: "Annual Rainfall Rate",
        rainfallHint: "Should be between 200 and 1200 mm/year",
        soilType: "Soil Type",
        selectSoil: "Select Soil Type",
        sandy: "Sandy",
        loamySandy: "Loamy Sandy",
        loamy: "Loamy",
        landUse: "Land Use System",
        selectLandUse: "Select Land Use System",
        cropland: "Cropland",
        rangeland: "Rangeland",
        degradedLand: "Degraded Land",
        areaData: "Area Data",
        landArea: "Land Area",
        hectare: "Hectare",
        acre: "Acre",
        dunam: "Dunam",
        squareMeter: "Square Meter",
        cropType: "Crop Type",
        selectCrop: "Select Crop Type",
        millet: "Millet",
        sorghum: "Sorghum",
        maize: "Maize",
        cowpea: "Cowpea",
        groundnut: "Groundnut",
        calculateDesign: "Calculate Design",
        reset: "Reset",
        
        // Results
        designResults: "Design Results",
        saveResults: "Save Results",
        printResults: "Print Results",
        basicDimensions: "Basic Dimensions",
        diameter: "Half-moon Diameter",
        depth: "Half-moon Depth",
        spacing: "Spacing Between Half-moons",
        catchmentArea: "Catchment Area",
        cultivationArea: "Cultivation Area",
        efficiency: "Efficiency and Productivity",
        waterHarvestingEfficiency: "Water Harvesting Efficiency",
        yieldIncrease: "Expected Yield Increase",
        soilMoistureIncrease: "Soil Moisture Improvement",
        designIllustration: "Design Illustration",
        spacingExplanation: "Design Explanation",
        whyDimensions: "Why These Dimensions?",
        spacingReason: "Dimensions calculated based on WOCAT study showing 50-200% crop yield improvement in Benin.",
        howCalculated: "How Were Dimensions Calculated?",
        calculationMethod: "Diameter and depth improve water retention and organic matter in soil.",
        calculationMethod2: "Spacing achieves optimal balance between catchment and cultivation.",
        sourcesTitle: "Scientific Sources",
        visualResults: "Visual Results",
        
        // Equations
        eqW1: "W-1",
        eqW2: "W-2",
        eqW3: "W-3",
        eqW4: "W-4",
        eqW5: "W-5",

        // Documentation
        docsDesc: "All equations and sources based on WOCAT study in Benin",
        tableOfContents: "Table of Contents",
        introduction: "Introduction",
        equations: "Basic Equations",
        sources: "Sources",
        methodology: "Methodology",
        results: "Results and Applications",
        
        // New translations
        validationData: "Validation Data",
        designCharts: "Design Charts",
        soilMoistureImprovement: "Soil Moisture Improvement",
        yieldImprovement: "Yield Improvement",
        carbonSequestration: "Carbon Sequestration"
    }
};

// حالة اللغة الحالية
let currentLang = 'ar';

// وظيفة تغيير اللغة
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    updateLanguage();
    updateDirection();
}

// وظيفة تحديث النصوص
function updateLanguage() {
    console.log('Updating language to:', currentLang);
    
    // تحديث جميع العناصر التي تحتوي على data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // تحديث نص زر اللغة
    const langText = document.getElementById('lang-text');
    if (langText) {
        langText.textContent = currentLang === 'ar' ? 'English' : 'العربية';
    }
    
    // تحديث اتجاه النماذج
    updateFormDirection();
    
    // تحديث عناوين الصفحة
    updatePageTitles();
    
    // تحديث خيارات المحاصيل
    updateCropOptions();
    
    // تحديث خيارات وحدات القياس
    updateUnitOptions();
    
    // تحديث خيارات نوع التربة
    updateSoilOptions();
    
    // تحديث خيارات استخدام الأرض
    updateLandUseOptions();
    
    // تحديث الرسوم البيانية إذا كانت موجودة
    updateChartsLanguage();
}

// تحديث خيارات المحاصيل
function updateCropOptions() {
    const cropSelect = document.getElementById('crop');
    if (!cropSelect) return;
    
    const currentValue = cropSelect.value;
    
    const defaultOption = cropSelect.querySelector('option[value=""]');
    if (defaultOption) {
        const selectCropText = translations[currentLang].selectCrop;
        defaultOption.innerHTML = `-- ${selectCropText} --`;
    }
    
    const options = cropSelect.querySelectorAll('option[value]');
    options.forEach(option => {
        const value = option.value;
        if (value === 'millet') {
            option.textContent = translations[currentLang].millet;
        } else if (value === 'sorghum') {
            option.textContent = translations[currentLang].sorghum;
        } else if (value === 'maize') {
            option.textContent = translations[currentLang].maize;
        } else if (value === 'cowpea') {
            option.textContent = translations[currentLang].cowpea;
        } else if (value === 'groundnut') {
            option.textContent = translations[currentLang].groundnut;
        }
    });
    
    cropSelect.value = currentValue;
}

// تحديث خيارات وحدات القياس
function updateUnitOptions() {
    const unitSelect = document.getElementById('area-unit');
    if (!unitSelect) return;
    
    const currentValue = unitSelect.value;
    
    const options = unitSelect.querySelectorAll('option');
    options.forEach(option => {
        const value = option.value;
        if (value === 'hectare') {
            option.textContent = translations[currentLang].hectare;
        } else if (value === 'acre') {
            option.textContent = translations[currentLang].acre;
        } else if (value === 'dunam') {
            option.textContent = translations[currentLang].dunam;
        } else if (value === 'square-meter') {
            option.textContent = translations[currentLang].squareMeter;
        }
    });
    
    unitSelect.value = currentValue;
}

// تحديث خيارات نوع التربة
function updateSoilOptions() {
    const soilSelect = document.getElementById('soil-type');
    if (!soilSelect) return;
    
    const currentValue = soilSelect.value;
    
    const defaultOption = soilSelect.querySelector('option[value=""]');
    if (defaultOption) {
        const selectSoilText = translations[currentLang].selectSoil;
        defaultOption.innerHTML = `-- ${selectSoilText} --`;
    }
    
    const options = soilSelect.querySelectorAll('option[value]');
    options.forEach(option => {
        const value = option.value;
        if (value === 'sandy') {
            option.textContent = translations[currentLang].sandy;
        } else if (value === 'loamy-sandy') {
            option.textContent = translations[currentLang].loamySandy;
        } else if (value === 'loamy') {
            option.textContent = translations[currentLang].loamy;
        }
    });
    
    soilSelect.value = currentValue;
}

// تحديث خيارات استخدام الأرض
function updateLandUseOptions() {
    const landUseSelect = document.getElementById('land-use');
    if (!landUseSelect) return;
    
    const currentValue = landUseSelect.value;
    
    const defaultOption = landUseSelect.querySelector('option[value=""]');
    if (defaultOption) {
        const selectLandUseText = translations[currentLang].selectLandUse;
        defaultOption.innerHTML = `-- ${selectLandUseText} --`;
    }
    
    const options = landUseSelect.querySelectorAll('option[value]');
    options.forEach(option => {
        const value = option.value;
        if (value === 'cropland') {
            option.textContent = translations[currentLang].cropland;
        } else if (value === 'rangeland') {
            option.textContent = translations[currentLang].rangeland;
        } else if (value === 'degraded-land') {
            option.textContent = translations[currentLang].degradedLand;
        }
    });
    
    landUseSelect.value = currentValue;
}

// تحديث الرسوم البيانية
function updateChartsLanguage() {
    if (window.designChart) {
        const labels = currentLang === 'ar' ? 
            ['القطر (م)', 'العمق (سم)', 'مساحة الزراعة (م²)', 'مساحة التجميع (م²)'] :
            ['Diameter (m)', 'Depth (cm)', 'Cultivation Area (m²)', 'Catchment Area (m²)'];
        
        window.designChart.data.labels = labels;
        window.designChart.options.plugins.title.text = currentLang === 'ar' ? 
            'ملخص قيم التصميم' : 'Design Values Summary';
        window.designChart.options.scales.y.title.text = currentLang === 'ar' ? 'القيمة' : 'Value';
        window.designChart.update();
    }
}

// وظيفة تحديث اتجاه الصفحة
function updateDirection() {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
}

// وظيفة تحديث اتجاه النماذج
function updateFormDirection() {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.style.direction = currentLang === 'ar' ? 'rtl' : 'ltr';
        input.style.textAlign = currentLang === 'ar' ? 'right' : 'left';
    });
}

// وظيفة تحديث عناوين الصفحة
function updatePageTitles() {
    const path = window.location.pathname;
    
    if (path.includes('calculator.html')) {
        document.title = currentLang === 'ar' ? 
            "تقنية الهلال المائي - الآلة الحاسبة" : 
            "Half-Moon Water Technique - Calculator";
    } else if (path.includes('docs.html')) {
        document.title = currentLang === 'ar' ? 
            "تقنية الهلال المائي - التوثيق" : 
            "Half-Moon Water Technique - Documentation";
    } else {
        document.title = currentLang === 'ar' ? 
            "تقنية الهلال المائي - نظام حصاد مياه الأمطار" : 
            "Half-Moon Water Technique - Rainwater Harvesting System";
    }
}

// تهيئة القائمة المتنقلة
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // إغلاق القائمة عند النقر على رابط
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// تحويل الوحدات
const unitConversations = {
    hectare: 10000,
    acre: 4046.86,
    dunam: 1000,
    'square-meter': 1
};

// حساب تصميم حصاد مياه الأمطار بناءً على دراسة WOCAT في بنين
function calculateHalfMoonDesign(P, soilType, landUse, cropType, area, areaUnit) {
    console.log('Input values:', { P, soilType, landUse, cropType, area, areaUnit });
    
    // W-1: حساب القطر بناءً على معدل الأمطار ونوع التربة (WOCAT Benin)
    let baseDiameter;
    if (P <= 400) {
        baseDiameter = 1.5;
    } else if (P <= 600) {
        baseDiameter = 2.0;
    } else if (P <= 800) {
        baseDiameter = 2.5;
    } else {
        baseDiameter = 3.0;
    }
    
    // تعديل القطر بناءً على نوع التربة
    let soilFactor = 1.0;
    if (soilType === 'sandy') soilFactor = 1.2;
    if (soilType === 'loamy-sandy') soilFactor = 1.0;
    if (soilType === 'loamy') soilFactor = 0.8;
    
    let D = baseDiameter * soilFactor;
    D = Math.max(1.0, Math.min(4.0, D));
    
    // W-2: حساب العمق بناءً على القطر ونوع التربة (WOCAT)
    let H = 20 + (D * 10);
    H = Math.max(20, Math.min(60, H));
    
    // W-3: حساب المسافة بين الهلالات بناءً على القطر
    let S = D * 1.5;
    
    // W-4: حساب مساحة الزراعة (نصف دائرة)
    const A_cult = (Math.PI * Math.pow(D/2, 2)) / 2;
    
    // W-5: حساب مساحة التجميع بناءً على استخدام الأرض
    let catchmentRatio;
    if (landUse === 'degraded-land') catchmentRatio = 3.0;
    else if (landUse === 'rangeland') catchmentRatio = 2.0;
    else catchmentRatio = 1.5;
    
    const A_catch = A_cult * catchmentRatio;
    
    // حساب عدد الهلالات في الهكتار
    const pitsPerHectare = 10000 / (S * S);
    
    // تحويل المساحة إلى متر مربع
    const areaSqM = area * unitConversations[areaUnit];
    
    // حساب إجمالي عدد الهلالات للمساحة المحددة
    const totalPits = Math.round((pitsPerHectare / 10000) * areaSqM);
    
    // حساب التحسينات المتوقعة بناءً على دراسة WOCAT
    const yieldIncrease = calculateYieldIncrease(P, soilType, cropType);
    const soilMoistureIncrease = calculateSoilMoistureIncrease(soilType, landUse);
    const waterEfficiency = calculateWaterEfficiency(P, soilType);
    
    return {
        diameter: D,
        depth: H,
        spacing: S,
        cultArea: A_cult,
        catchArea: A_catch,
        catchmentRatio: catchmentRatio,
        pitsPerHectare: Math.round(pitsPerHectare),
        totalPits: totalPits,
        yieldIncrease: yieldIncrease,
        soilMoistureIncrease: soilMoistureIncrease,
        waterEfficiency: waterEfficiency,
        areaSqM: areaSqM
    };
}

// حساب الزيادة المتوقعة في الإنتاج بناءً على WOCAT
function calculateYieldIncrease(rainfall, soilType, cropType) {
    let baseIncrease = 50; // 50% زيادة أساسية
    
    // تأثير الأمطار
    if (rainfall > 600) baseIncrease += 30;
    else if (rainfall > 400) baseIncrease += 20;
    
    // تأثير نوع التربة
    if (soilType === 'loamy') baseIncrease += 20;
    else if (soilType === 'loamy-sandy') baseIncrease += 10;
    
    // تأثير نوع المحصول
    if (cropType === 'millet') baseIncrease += 10;
    if (cropType === 'sorghum') baseIncrease += 15;
    
    return Math.min(baseIncrease, 200); // حد أقصى 200%
}

// حساب تحسين رطوبة التربة
function calculateSoilMoistureIncrease(soilType, landUse) {
    let increase = 30; // 30% زيادة أساسية
    
    if (soilType === 'sandy') increase += 20;
    if (landUse === 'degraded-land') increase += 25;
    
    return Math.min(increase, 80);
}

// حساب كفاءة استخدام المياه
function calculateWaterEfficiency(rainfall, soilType) {
    let efficiency = 60; // 60% كفاءة أساسية
    
    if (rainfall > 600) efficiency += 10;
    if (soilType === 'loamy') efficiency += 15;
    
    return Math.min(efficiency, 85);
}

// عرض النتائج
function displayResults(results) {
    console.log('Displaying results:', results);
    
    // تحديث القيم النصية
    document.getElementById('result-diameter').textContent = `${results.diameter.toFixed(1)} ${currentLang === 'ar' ? 'م' : 'm'}`;
    document.getElementById('result-depth').textContent = `${results.depth.toFixed(0)} ${currentLang === 'ar' ? 'سم' : 'cm'}`;
    document.getElementById('result-spacing').textContent = `${results.spacing.toFixed(1)} ${currentLang === 'ar' ? 'م' : 'm'}`;
    document.getElementById('result-cult-area').textContent = `${results.cultArea.toFixed(1)} ${currentLang === 'ar' ? 'م²' : 'm²'}`;
    document.getElementById('result-catch-area').textContent = `${results.catchArea.toFixed(1)} ${currentLang === 'ar' ? 'م²' : 'm²'}`;
    document.getElementById('result-water-efficiency').textContent = `${results.waterEfficiency}%`;
    document.getElementById('result-yield-increase').textContent = `${results.yieldIncrease}%`;
    document.getElementById('result-soil-moisture').textContent = `${results.soilMoistureIncrease}%`;
    document.getElementById('result-pits-per-hectare').textContent = `${results.pitsPerHectare}`;
    document.getElementById('result-total-pits').textContent = `${results.totalPits}`;
    
    // تحديث ملخص النتائج
    if (document.getElementById('summary-diameter')) {
        document.getElementById('summary-diameter').textContent = `${results.diameter.toFixed(1)} ${currentLang === 'ar' ? 'م' : 'm'}`;
        document.getElementById('summary-depth').textContent = `${results.depth.toFixed(0)} ${currentLang === 'ar' ? 'سم' : 'cm'}`;
        document.getElementById('summary-spacing').textContent = `${results.spacing.toFixed(1)} ${currentLang === 'ar' ? 'م' : 'm'}`;
        document.getElementById('summary-yield-increase').textContent = `${results.yieldIncrease}%`;
        document.getElementById('summary-total-pits').textContent = `${results.totalPits}`;
    }
    
    // تحديث الرسم التوضيحي
    if (document.getElementById('illustration-diameter')) {
        document.getElementById('illustration-diameter').textContent = `D = ${results.diameter.toFixed(1)}m`;
        document.getElementById('illustration-depth').textContent = `H = ${results.depth.toFixed(0)}cm`;
        document.getElementById('illustration-spacing').textContent = `S = ${results.spacing.toFixed(1)}m`;
    }
    
    // إنشاء الرسوم البيانية
    createCharts(results);
    
    // إظهار لوحة النتائج
    document.getElementById('results-panel').style.display = 'block';
    
    // التمرير إلى النتائج على الهواتف
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            document.getElementById('results-panel').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 300);
    }
}

// إنشاء الرسوم البيانية
function createCharts(results) {
    const ctx = document.getElementById('design-chart');
    if (!ctx) return;
    
    const ctx2d = ctx.getContext('2d');
    
    // تدمير الرسم البياني السابق إذا كان موجوداً
    if (window.designChart) {
        window.designChart.destroy();
    }
    
    const labels = currentLang === 'ar' ? 
        ['القطر (م)', 'العمق (سم)', 'مساحة الزراعة (م²)', 'مساحة التجميع (م²)'] :
        ['Diameter (m)', 'Depth (cm)', 'Cultivation Area (m²)', 'Catchment Area (m²)'];
    
    window.designChart = new Chart(ctx2d, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: currentLang === 'ar' ? 'قيم التصميم' : 'Design Values',
                data: [
                    results.diameter,
                    results.depth,
                    results.cultArea,
                    results.catchArea
                ],
                backgroundColor: [
                    '#4caf50',
                    '#2196f3',
                    '#ff9800',
                    '#9c27b0'
                ],
                borderColor: [
                    '#388e3c',
                    '#1976d2',
                    '#f57c00',
                    '#7b1fa2'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: currentLang === 'ar' ? 'القيمة' : 'Value',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: currentLang === 'ar' ? 'ملخص قيم التصميم' : 'Design Values Summary',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            }
        }
    });
}

// حفظ النتائج
function saveResults() {
    const results = {
        diameter: document.getElementById('result-diameter').textContent,
        depth: document.getElementById('result-depth').textContent,
        spacing: document.getElementById('result-spacing').textContent,
        cultArea: document.getElementById('result-cult-area').textContent,
        catchArea: document.getElementById('result-catch-area').textContent,
        waterEfficiency: document.getElementById('result-water-efficiency').textContent,
        yieldIncrease: document.getElementById('result-yield-increase').textContent,
        soilMoisture: document.getElementById('result-soil-moisture').textContent,
        pitsPerHectare: document.getElementById('result-pits-per-hectare').textContent,
        totalPits: document.getElementById('result-total-pits').textContent
    };
    
    const resultsText = currentLang === 'ar' ? `
نتائج تصميم تقنية الهلال المائي - مستوحى من دراسة WOCAT في بنين
==================================================
قطر الهلال: ${results.diameter}
عمق الهلال: ${results.depth}
المسافة بين الهلالات: ${results.spacing}
مساحة الزراعة: ${results.cultArea}
مساحة التجميع: ${results.catchArea}
كفاءة حصاد المياه: ${results.waterEfficiency}
الزيادة المتوقعة في الإنتاج: ${results.yieldIncrease}
تحسين رطوبة التربة: ${results.soilMoisture}
عدد الهلالات في الهكتار: ${results.pitsPerHectare}
إجمالي عدد الهلالات: ${results.totalPits}

مستوحى من دراسة WOCAT - بنين
    ` : `
Half-Moon Water Technique Design Results - Inspired by WOCAT Benin Study
==================================================
Half-moon Diameter: ${results.diameter}
Half-moon Depth: ${results.depth}
Spacing Between Half-moons: ${results.spacing}
Cultivation Area: ${results.cultArea}
Catchment Area: ${results.catchArea}
Water Harvesting Efficiency: ${results.waterEfficiency}
Expected Yield Increase: ${results.yieldIncrease}
Soil Moisture Improvement: ${results.soilMoisture}
Half-moons per Hectare: ${results.pitsPerHectare}
Total Half-moons: ${results.totalPits}

Inspired by WOCAT Study - Benin
    `;
    
    const blob = new Blob([resultsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentLang === 'ar' ? 'نتائج_تقنية_الهلال_المائي.txt' : 'half_moon_technique_results.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert(currentLang === 'ar' ? 'تم حفظ النتائج بنجاح!' : 'Results saved successfully!');
}

// تهيئة الآلة الحاسبة
function initCalculator() {
    const calculatorForm = document.getElementById('rainwater-calculator');
    
    if (calculatorForm) {
        // معالجة إرسال النموذج
        calculatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع البيانات من النموذج
            const rainfall = parseFloat(document.getElementById('rainfall').value);
            const soilType = document.getElementById('soil-type').value;
            const landUse = document.getElementById('land-use').value;
            const cropType = document.getElementById('crop').value;
            const area = parseFloat(document.getElementById('area').value) || 1;
            const areaUnit = document.getElementById('area-unit').value;
            
            console.log('Form values:', { rainfall, soilType, landUse, cropType, area, areaUnit });
            
            // التحقق من صحة البيانات
            if (rainfall < 200 || rainfall > 1200) {
                alert(currentLang === 'ar' ? 
                    'معدل هطول الأمطار يجب أن يكون بين 200 و 1200 مم/سنة' :
                    'Rainfall rate must be between 200 and 1200 mm/year');
                return;
            }
            
            if (!soilType || !landUse || !cropType) {
                alert(currentLang === 'ar' ? 
                    'يرجى اختيار جميع الخيارات المطلوبة' :
                    'Please select all required options');
                return;
            }
            
            // حساب التصميم
            const results = calculateHalfMoonDesign(rainfall, soilType, landUse, cropType, area, areaUnit);
            
            // عرض النتائج
            displayResults(results);
        });
        
        // إعادة تعيين النموذج
        const resetButton = document.getElementById('reset-calculator');
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                calculatorForm.reset();
                document.getElementById('results-panel').style.display = 'none';
                if (window.designChart) {
                    window.designChart.destroy();
                    window.designChart = null;
                }
            });
        }
        
        // زر حفظ النتائج
        const saveButton = document.getElementById('save-results');
        if (saveButton) {
            saveButton.addEventListener('click', saveResults);
        }
        
        // زر الطباعة
        const printButton = document.getElementById('print-results');
        if (printButton) {
            printButton.addEventListener('click', function() {
                window.print();
            });
        }
    }
}

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // تهيئة اللغة
    updateLanguage();
    updateDirection();
    
    // تهيئة القائمة المتنقلة
    initNavigation();
    
    // تهيئة الآلة الحاسبة إذا كانت موجودة
    initCalculator();
    
    // تهيئة زر تغيير اللغة
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    
    // إضافة تأثيرات تفاعلية للبطاقات
    const cards = document.querySelectorAll('.feature-card, .step-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // إضافة تأثيرات للشعار
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        });
    }
    
    console.log('Initialization complete');
});
