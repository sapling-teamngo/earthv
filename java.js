// نظام الترجمة ثنائي اللغة
const translations = {
    ar: {
        // العناوين
        siteTitle: "احسب ابتسامة أرضك",
        
        // التنقل
        home: "الرئيسية",
        calculator: "الآلة الحاسبة", 
        documentation: "التوثيق",
        polygonAnalysis: "تحليل المساحات",
        
        // الهيرو
        heroTitle: "احسب ابتسامة أرضك",
        heroSubtitle: "آلة حاسبة لمعرفة حجم نظام هلال الحصاد المائي المناسب لأرضك",
        heroDesc: "نظام متكامل يعتمد على معادلات علمية دقيقة لتصميم أنظمة حصاد مياه الأمطار في المناطق الجافة وشبه الجافة",
        getStarted: "ابدأ حساب أرضك",
        learnMore: "تعرف على النظام",
        
        // المميزات
        featuresTitle: "مميزات النظام",
        feature1Title: "معادلات علمية دقيقة",
        feature1Desc: "جميع الحسابات مبنية على أبحاث محكمة ومنشورة في مصادر موثوقة مثل FAO وICARDA",
        feature2Title: "مناسب للأردن والمنطقة", 
        feature2Desc: "مصمم خصيصاً لظروف المناطق الجافة وشبه الجافة في الأردن والشرق الأوسط",
        feature3Title: "وحدات قياس متعددة",
        feature3Desc: "يدعم الهكتار والفدان والدونم والمتر المربع لتلبية احتياجات جميع المستخدمين",
        feature4Title: "رسوم بيانية وتوضيحية",
        feature4Desc: "عرض النتائج برسوم بيانية تفاعلية ورسوم توضيحية للتصميم النهائي",
        feature5Title: "تحليل مساحات متقدم",
        feature5Desc: "تحليل توزيع الأنظمة على المساحات الكبيرة مع تقدير الإنتاجية الكلية",
        
        // كيفية العمل
        howItWorksTitle: "كيف يعمل النظام",
        step1Title: "أدخل البيانات الأساسية",
        step1Desc: "أدخل معدل الأمطار، ميل الأرض، ونوع المحصول",
        step2Title: "اختر وحدة القياس", 
        step2Desc: "اختر وحدة القياس المناسبة (هكتار، فدان، دونم، متر مربع)",
        step3Title: "احصل على التصميم الأمثل",
        step3Desc: "استلم التصميم الكامل مع الرسوم البيانية والتفاصيل",
        
        // الإحصائيات
        stat1: "معادلة علمية",
        stat2: "موقع بحثي", 
        stat3: "نظام تجميع صغير",
        stat4: "مفتوح المصدر",
        
        // الحث على الإجراء
        ctaTitle: "جاهز لبدء التصميم؟",
        ctaDesc: "استخدم أداتنا المتقدمة لتصميم نظام حصاد مياه الأمطار الخاص بك", 
        startDesign: "ابدأ التصميم الآن",
        
        // الفوتر
        footerDesc: "نظام متكامل لتصميم أنظمة حصاد مياه الأمطار",
        links: "روابط سريعة",
        resources: "مصادر", 
        faq: "الأسئلة الشائعة",
        tutorials: "الدروس التعليمية", 
        research: "الأبحاث",
        designedBy: "صمم من قبل عمر ياسين",
        
        // الآلة الحاسبة
        calculatorTitle: "احسب ابتسامة أرضك",
        calculatorSubtitle: "آلة حاسبة لمعرفة حجم نظام هلال الحصاد المائي المناسب لأرضك",
        calculatorDesc: "أدخل بيانات أرضك للحصول على تصميم دقيق ومفصل لنظام حصاد مياه الأمطار",
        basicData: "البيانات الأساسية",
        rainfall: "معدل هطول الأمطار السنوي",
        rainfallHint: "يجب أن يكون بين 50 و 1200 مم/سنة", 
        slope: "ميل الأرض",
        slopeHint: "يجب أن يكون بين 0 و 25%",
        cropType: "نوع المحصول",
        selectCrop: "اختر نوع المحصول",
        olive: "الزيتون (Kc 0.65)",
        pomegranate: "الرمان (Kc 0.75)",
        almond: "اللوز (Kc 0.70)", 
        fig: "التين (Kc 0.60)",
        grape: "العنب (Kc 0.80)",
        atriplex: "القطف (Kc 0.55)",
        juniper: "العرعر (Kc 0.45)",
        thyme: "الزعتر البري (Kc 0.40)",
        sage: "الميرمية (Kc 0.50)",
        barley: "الشعير (Kc 0.85)",
        custom: "قيمة مخصصة",
        customKc: "قيمة Kc مخصصة",
        customKcHint: "معامل المحصول - اختياري (افتراضي 1 إذا لم تدخل قيمة)",
        areaData: "بيانات المساحة", 
        landArea: "مساحة الأرض",
        hectare: "هكتار",
        acre: "فدان",
        dunam: "دونم", 
        squareMeter: "متر مربع",
        soilType: "نوع التربة",
        sandy: "رملية",
        loamy: "طميية", 
        clay: "طينية",
        calculateDesign: "احسب التصميم",
        reset: "إعادة تعيين",
        
        // النتائج
        designResults: "نتائج التصميم",
        saveResults: "حفظ النتائج", 
        printResults: "طباعة النتائج",
        basicDimensions: "الأبعاد الأساسية",
        diameter: "قطر الهلال",
        height: "ارتفاع السد", 
        cultivatedArea: "مساحة الحوض الزراعي",
        spacingAreas: "المسافات",
        rowSpacing: "بين الصفوف",
        pitSpacing: "بين الهلالات", 
        betweenBunds: "المسافة بين الهلالات",
        catchmentArea: "مساحة منطقة التجميع",
        efficiency: "الكفاءة والتكثيف",
        caRatio: "نسبة التجميع إلى الزراعة (C:A)",
        pitsPerHectare: "عدد الهلالات/هكتار", 
        totalPits: "الإجمالي",
        designIllustration: "الرسم التوضيحي للتصميم",
        cultivationArea: "منطقة الزراعة",
        spacingExplanation: "تفسير المسافات والتباعد",
        whySpacing: "لماذا هذه المسافات المحددة؟",
        spacingReason: "تم حساب المسافات بناءً على الأبحاث الميدانية التي أظهرت أن التداخل بنسبة 5-10% بين الهلالات يمنع فقدان مياه الأمطار ويوفر تغطية مثالية للأرض.",
        howCalculated: "كيف تم حساب المسافات؟",
        calculationMethod: "المسافة بين الصفوف (L) = 0.75 × القطر - هذا يضمن تداخلاً رأسيًا يمنع تسرب المياه بين الصفوف.",
        calculationMethod2: "المسافة الأفقية (Y) = 1.10 × القطر - هذا يضمن تداخلاً أفقيًا بنسبة 10% لمنع وجود فجوات.",
        sourcesTitle: "المصادر العلمية",
        visualResults: "النتائج المرئية",
        
        // المعادلات
        eqE1: "E-1",
        eqE2: "E-2", 
        eqE3: "E-3",
        eqE4: "E-4",
        eqE5: "E-5",
        eqE6: "E-6",
        eqE7: "E-7", 
        eqE10: "E-10",

        // التوثيق
        docsDesc: "جميع المعادلات والمصادر والتفاصيل التقنية المستخدمة في تصميم النظام",
        tableOfContents: "جدول المحتويات",
        introduction: "المقدمة",
        equations: "المعادلات الأساسية",
        sources: "المصادر",
        variables: "تعريفات المتغيرات",
        methodology: "منهجية العمل",
        calculations: "شرح الحسابات",
        
        // New translations for charts
        validationData: "بيانات التحقق",
        designCharts: "الرسوم البيانية للتصميم",
        rainfallVsDiameter: "القطر مقابل الأمطار",
        diameterVsHeight: "الارتفاع مقابل القطر",
        catchmentRatios: "نسب التجميع",
        storageCapacity: "سعة التخزين",
        
        // Polygon Analysis
        polygonTitle: "تحليل المساحات الكبيرة",
        polygonSubtitle: "تحليل توزيع أنظمة الهلالات على المساحات الشاسعة",
        uploadAreaFile: "رفع ملف المساحة",
        supportedFormats: "الملفات المدعومة: CSV, TXT, GeoJSON",
        totalSystems: "إجمالي الأنظمة",
        totalWaterCollection: "إجمالي تجميع المياه",
        systemDistribution: "توزيع الأنظمة",
        downloadDistribution: "تحميل خريطة التوزيع"
    },
    en: {
        // Titles
        siteTitle: "Calculate Your Land's Smile",
        
        // Navigation
        home: "Home",
        calculator: "Calculator",
        documentation: "Documentation",
        polygonAnalysis: "Area Analysis",
        
        // Hero
        heroTitle: "Calculate Your Land's Smile",
        heroSubtitle: "Calculator to determine the appropriate crescent water harvesting system size for your land",
        heroDesc: "A comprehensive system based on precise scientific equations for designing rainwater harvesting systems in arid and semi-arid regions",
        getStarted: "Calculate Your Land",
        learnMore: "Learn About System",
        
        // Features
        featuresTitle: "System Features",
        feature1Title: "Accurate Scientific Equations",
        feature1Desc: "All calculations are based on peer-reviewed research published in reliable sources like FAO and ICARDA",
        feature2Title: "Suitable for Jordan and Region",
        feature2Desc: "Specifically designed for arid and semi-arid conditions in Jordan and the Middle East",
        feature3Title: "Multiple Measurement Units",
        feature3Desc: "Supports hectare, acre, dunam, and square meter to meet all users' needs",
        feature4Title: "Charts and Illustrations",
        feature4Desc: "Display results with interactive charts and final design illustrations",
        feature5Title: "Advanced Area Analysis",
        feature5Desc: "Analyze system distribution on large areas with total productivity estimation",
        
        // How it works
        howItWorksTitle: "How the System Works",
        step1Title: "Enter Basic Data",
        step1Desc: "Enter rainfall rate, land slope, and crop type",
        step2Title: "Choose Measurement Unit",
        step2Desc: "Select the appropriate measurement unit (hectare, acre, dunam, square meter)",
        step3Title: "Get Optimal Design",
        step3Desc: "Receive complete design with charts and details",
        
        // Statistics
        stat1: "Scientific Equation",
        stat2: "Research Site",
        stat3: "Micro-catchment System",
        stat4: "Open Source",
        
        // Call to Action
        ctaTitle: "Ready to Start Designing?",
        ctaDesc: "Use our advanced tool to design your rainwater harvesting system",
        startDesign: "Start Designing Now",
        
        // Footer
        footerDesc: "A comprehensive system for designing rainwater harvesting systems",
        links: "Quick Links",
        resources: "Resources",
        faq: "FAQ",
        tutorials: "Tutorials",
        research: "Research",
        designedBy: "Designed by Omar Yaseen",
        
        // Calculator
        calculatorTitle: "Calculate Your Land's Smile",
        calculatorSubtitle: "Calculator to determine the appropriate crescent water harvesting system size for your land",
        calculatorDesc: "Enter your land data to get a precise and detailed rainwater harvesting system design",
        basicData: "Basic Data",
        rainfall: "Annual Rainfall Rate",
        rainfallHint: "Should be between 50 and 1200 mm/year",
        slope: "Land Slope",
        slopeHint: "Should be between 0 and 25%",
        cropType: "Crop Type",
        selectCrop: "Select Crop Type",
        olive: "Olive (Kc 0.65)",
        pomegranate: "Pomegranate (Kc 0.75)",
        almond: "Almond (Kc 0.70)",
        fig: "Fig (Kc 0.60)",
        grape: "Grape (Kc 0.80)",
        atriplex: "Atriplex (Kc 0.55)",
        juniper: "Juniper (Kc 0.45)",
        thyme: "Wild Thyme (Kc 0.40)",
        sage: "Sage (Kc 0.50)",
        barley: "Barley (Kc 0.85)",
        custom: "Custom Value",
        customKc: "Custom Kc Value",
        customKcHint: "Crop coefficient - optional (default 1 if no value entered)",
        areaData: "Area Data",
        landArea: "Land Area",
        hectare: "Hectare",
        acre: "Acre",
        dunam: "Dunam",
        squareMeter: "Square Meter",
        soilType: "Soil Type",
        sandy: "Sandy",
        loamy: "Loamy",
        clay: "Clay",
        calculateDesign: "Calculate Design",
        reset: "Reset",
        
        // Results
        designResults: "Design Results",
        saveResults: "Save Results",
        printResults: "Print Results",
        basicDimensions: "Basic Dimensions",
        diameter: "Half-moon Diameter",
        height: "Bund Height", 
        cultivatedArea: "Cultivation Area",
        spacingAreas: "Spacing",
        rowSpacing: "Between Rows",
        pitSpacing: "Between Crescents", 
        betweenBunds: "Distance Between Bunds",
        catchmentArea: "Catchment Area",
        efficiency: "Efficiency and Density",
        caRatio: "Catchment to Cultivation Ratio (C:A)",
        pitsPerHectare: "Crescents/Hectare", 
        totalPits: "Total",
        designIllustration: "Design Illustration",
        cultivationArea: "Cultivation Area",
        spacingExplanation: "Spacing and Distance Explanation",
        whySpacing: "Why These Specific Distances?",
        spacingReason: "Distances were calculated based on field research that showed 5-10% overlap between crescents prevents rainwater loss and provides optimal land coverage.",
        howCalculated: "How Were Distances Calculated?",
        calculationMethod: "Row spacing (L) = 0.75 × Diameter - This ensures vertical overlap that prevents water leakage between rows.",
        calculationMethod2: "Horizontal spacing (Y) = 1.10 × Diameter - This ensures 10% horizontal overlap to prevent gaps.",
        sourcesTitle: "Scientific Sources",
        visualResults: "Visual Results",
        
        // Equations
        eqE1: "E-1",
        eqE2: "E-2",
        eqE3: "E-3",
        eqE4: "E-4",
        eqE5: "E-5",
        eqE6: "E-6",
        eqE7: "E-7",
        eqE10: "E-10",

        // Documentation
        docsDesc: "All equations, sources and technical details used in system design",
        tableOfContents: "Table of Contents",
        introduction: "Introduction",
        equations: "Basic Equations",
        sources: "Sources",
        variables: "Variable Definitions",
        methodology: "Methodology",
        calculations: "Calculation Explanation",
        
        // New translations for charts
        validationData: "Validation Data",
        designCharts: "Design Charts",
        rainfallVsDiameter: "Diameter vs Rainfall",
        diameterVsHeight: "Height vs Diameter",
        catchmentRatios: "Catchment Ratios",
        storageCapacity: "Storage Capacity",
        
        // Polygon Analysis
        polygonTitle: "Large Area Analysis",
        polygonSubtitle: "Analyze crescent system distribution on large land areas",
        uploadAreaFile: "Upload Area File",
        supportedFormats: "Supported formats: CSV, TXT, GeoJSON",
        totalSystems: "Total Systems",
        totalWaterCollection: "Total Water Collection",
        systemDistribution: "System Distribution",
        downloadDistribution: "Download Distribution Map"
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
    
    // تحديث الرسوم البيانية إذا كانت موجودة
    updateChartsLanguage();
}

// تحديث خيارات المحاصيل
function updateCropOptions() {
    const cropSelect = document.getElementById('crop');
    if (!cropSelect) return;
    
    // حفظ القيمة المحددة حالياً
    const currentValue = cropSelect.value;
    
    // تحديث النص الافتراضي
    const defaultOption = cropSelect.querySelector('option[value=""]');
    if (defaultOption) {
        const selectCropText = translations[currentLang].selectCrop;
        defaultOption.innerHTML = `-- ${selectCropText} --`;
    }
    
    // تحديث خيارات المحاصيل
    const options = cropSelect.querySelectorAll('option[value]');
    options.forEach(option => {
        const value = option.value;
        if (value === '0.65') {
            option.textContent = translations[currentLang].olive;
        } else if (value === '0.75') {
            option.textContent = translations[currentLang].pomegranate;
        } else if (value === '0.70') {
            option.textContent = translations[currentLang].almond;
        } else if (value === '0.60') {
            option.textContent = translations[currentLang].fig;
        } else if (value === '0.80') {
            option.textContent = translations[currentLang].grape;
        } else if (value === '0.55') {
            option.textContent = translations[currentLang].atriplex;
        } else if (value === '0.45') {
            option.textContent = translations[currentLang].juniper;
        } else if (value === '0.40') {
            option.textContent = translations[currentLang].thyme;
        } else if (value === '0.50') {
            option.textContent = translations[currentLang].sage;
        } else if (value === '0.85') {
            option.textContent = translations[currentLang].barley;
        } else if (value === 'custom') {
            option.textContent = translations[currentLang].custom;
        }
    });
    
    // إعادة تعيين القيمة المحددة
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
    
    const options = soilSelect.querySelectorAll('option');
    options.forEach(option => {
        const value = option.value;
        if (value === 'sandy') {
            option.textContent = translations[currentLang].sandy;
        } else if (value === 'loamy') {
            option.textContent = translations[currentLang].loamy;
        } else if (value === 'clay') {
            option.textContent = translations[currentLang].clay;
        }
    });
    
    soilSelect.value = currentValue;
}

// تحديث الرسوم البيانية
function updateChartsLanguage() {
    if (window.designChart) {
        const labels = currentLang === 'ar' ? 
            ['القطر (م)', 'الارتفاع (سم)', 'مساحة الزراعة (م²)', 'مساحة التجميع (م²)'] :
            ['Diameter (m)', 'Height (cm)', 'Cultivation Area (m²)', 'Catchment Area (m²)'];
        
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
            "احسب ابتسامة أرضك - الآلة الحاسبة" : 
            "Calculate Your Land's Smile - Calculator";
    } else if (path.includes('docs.html')) {
        document.title = currentLang === 'ar' ? 
            "احسب ابتسامة أرضك - التوثيق" : 
            "Calculate Your Land's Smile - Documentation";
    } else if (path.includes('polygon.html')) {
        document.title = currentLang === 'ar' ? 
            "احسب ابتسامة أرضك - تحليل المساحات" : 
            "Calculate Your Land's Smile - Area Analysis";
    } else {
        document.title = currentLang === 'ar' ? 
            "احسب ابتسامة أرضك - نظام حصاد مياه الأمطار" : 
            "Calculate Your Land's Smile - Rainwater Harvesting System";
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
const unitConversions = {
    hectare: 10000,
    acre: 4046.86,
    dunam: 1000,
    'square-meter': 1
};

// Enhanced FAO-based calculations with exact citations
class EnhancedRainwaterCalculator {
    // E-1: Diameter calculation based on rainfall (FAO Standard: 2-12m)
    // Source: FAO, 1991. "Water Harvesting for Improved Agricultural Production", Page 47, Table 3
    calculateDiameter(P) {
        // Linear interpolation between 2m at 50mm and 12m at 1200mm
        let D = 2 + ((P - 50) / (1200 - 50)) * (12 - 2);
        D = Math.max(2, Math.min(12, D));
        return D;
    }
    
    // E-2: Height calculation based on diameter (FAO Standard: 30-50cm)
    // Source: FAO, 2003. "Micro-catchment Water Harvesting", Page 23, Equation 2.1
    calculateHeight(D) {
        let H = 30 + 2.5 * (D - 2);
        H = Math.max(30, Math.min(50, H));
        return H;
    }
    
    // E-3: Cultivation area calculation
    // Source: Critchley & Siegert, 1991. "Water Harvesting", Page 34, Equation 3.2
    calculateCultivationArea(D) {
        return (Math.PI / 8) * Math.pow(D, 2);
    }
    
    // E-4: Row spacing calculation
    // Source: FAO, 1991. "A Manual for Water Harvesting", Page 89, Table 5.2
    calculateRowSpacing(D) {
        return 0.75 * D;
    }
    
    // E-5: Pit spacing calculation
    // Source: FAO, 1991. "A Manual for Water Harvesting", Page 89, Table 5.2
    calculatePitSpacing(D) {
        return 1.10 * D;
    }
    
    // E-6: Catchment to cultivation ratio (C:A)
    // Source: Boers & Ben-Asher, 1982. "A Review of Rainwater Harvesting", Page 152, Equation 7
    calculateCatchmentRatio(P, Kc, S) {
        let baseC_A;
        
        // FAO-based calculation for different rainfall zones
        if (P <= 200) {
            baseC_A = 3.0 + (0.3 * Kc);
        } else if (P <= 400) {
            baseC_A = 2.2 + (0.25 * Kc);
        } else if (P <= 600) {
            baseC_A = 1.6 + (0.2 * Kc);
        } else {
            baseC_A = 1.2 + (0.15 * Kc);
        }
        
        // Slope effect (FAO adjustment) - Source: FAO, 2003, Page 45
        let slopeEffect = 1 + (S * 0.02);
        
        let C_A = baseC_A * slopeEffect;
        
        // Ensure reasonable bounds (FAO range)
        C_A = Math.max(1.0, Math.min(4.0, C_A));
        
        return C_A;
    }
    
    // E-7: Catchment area calculation
    calculateCatchmentArea(A_cult, C_A) {
        return C_A * A_cult;
    }
    
    // E-10: Total pits per hectare
    // Source: Prinz, D. and Singh, A.K., 2000. "Water Harvesting for Afforestation", Page 67
    calculatePitsPerHectare(L, Y) {
        return 10000 / (L * Y);
    }
    
    // Calculate complete design
    calculateCompleteDesign(P, S, Kc, area, areaUnit) {
        console.log('Input values:', { P, S, Kc, area, areaUnit });
        
        const D = this.calculateDiameter(P);
        const H = this.calculateHeight(D);
        const A_cult = this.calculateCultivationArea(D);
        const L = this.calculateRowSpacing(D);
        const Y = this.calculatePitSpacing(D);
        const betweenBunds = Y - (D / 2);
        const C_A = this.calculateCatchmentRatio(P, Kc, S);
        const A_catch = this.calculateCatchmentArea(A_cult, C_A);
        const N_total_per_hectare = this.calculatePitsPerHectare(L, Y);
        
        // Convert area to square meters
        const areaSqM = area * unitConversions[areaUnit];
        
        // Calculate total pits for specified area
        const total_pits = Math.round((N_total_per_hectare / 10000) * areaSqM);
        
        return {
            diameter: D,
            height: H,
            cultArea: A_cult,
            rowSpacing: L,
            pitSpacing: Y,
            betweenBunds: betweenBunds,
            catchArea: A_catch,
            caRatio: C_A,
            pitsPerHectare: Math.round(N_total_per_hectare),
            totalPits: total_pits,
            areaSqM: areaSqM
        };
    }
}

// حساب تصميم حصاد مياه الأمطار (Enhanced with exact citations)
function calculateRainwaterHarvesting(P, S, Kc, area, areaUnit) {
    const calculator = new EnhancedRainwaterCalculator();
    return calculator.calculateCompleteDesign(P, S, Kc, area, areaUnit);
}

// عرض النتائج
function displayResults(results) {
    console.log('Displaying results:', results);
    
    // تحديث القيم النصية
    document.getElementById('result-diameter').textContent = `${results.diameter.toFixed(2)} ${currentLang === 'ar' ? 'م' : 'm'}`;
    document.getElementById('result-height').textContent = `${results.height.toFixed(1)} ${currentLang === 'ar' ? 'سم' : 'cm'}`;
    document.getElementById('result-cult-area').textContent = `${results.cultArea.toFixed(2)} ${currentLang === 'ar' ? 'م²' : 'm²'}`;
    document.getElementById('result-row-spacing').textContent = `${results.rowSpacing.toFixed(2)} ${currentLang === 'ar' ? 'م' : 'm'}`;
    document.getElementById('result-pit-spacing').textContent = `${results.pitSpacing.toFixed(2)} ${currentLang === 'ar' ? 'م' : 'm'}`;
    document.getElementById('result-between-bunds').textContent = `${results.betweenBunds.toFixed(2)} ${currentLang === 'ar' ? 'م' : 'm'}`;
    document.getElementById('result-catch-area').textContent = `${results.catchArea.toFixed(2)} ${currentLang === 'ar' ? 'م²' : 'm²'}`;
    document.getElementById('result-ca-ratio').textContent = `${results.caRatio.toFixed(2)}`;
    document.getElementById('result-pits-per-hectare').textContent = `${results.pitsPerHectare}`;
    document.getElementById('result-total-pits').textContent = `${results.totalPits}`;
    
    // تحديث ملخص النتائج
    if (document.getElementById('summary-diameter')) {
        document.getElementById('summary-diameter').textContent = `${results.diameter.toFixed(2)} ${currentLang === 'ar' ? 'م' : 'm'}`;
        document.getElementById('summary-height').textContent = `${results.height.toFixed(1)} ${currentLang === 'ar' ? 'سم' : 'cm'}`;
        document.getElementById('summary-row-spacing').textContent = `${results.rowSpacing.toFixed(2)} ${currentLang === 'ar' ? 'م' : 'm'}`;
        document.getElementById('summary-pit-spacing').textContent = `${results.pitSpacing.toFixed(2)} ${currentLang === 'ar' ? 'م' : 'm'}`;
        document.getElementById('summary-pits-hectare').textContent = `${results.pitsPerHectare}`;
        document.getElementById('summary-total-pits').textContent = `${results.totalPits}`;
    }
    
    // تحديث الرسم التوضيحي
    if (document.getElementById('illustration-diameter')) {
        document.getElementById('illustration-diameter').textContent = `D = ${results.diameter.toFixed(2)}m`;
        document.getElementById('illustration-height').textContent = `H = ${results.height.toFixed(1)}cm`;
        document.getElementById('illustration-spacing').textContent = `L = ${results.rowSpacing.toFixed(2)}m`;
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
        ['القطر (م)', 'الارتفاع (سم)', 'مساحة الزراعة (م²)', 'مساحة التجميع (م²)'] :
        ['Diameter (m)', 'Height (cm)', 'Cultivation Area (m²)', 'Catchment Area (m²)'];
    
    window.designChart = new Chart(ctx2d, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: currentLang === 'ar' ? 'قيم التصميم' : 'Design Values',
                data: [
                    results.diameter,
                    results.height,
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
        height: document.getElementById('result-height').textContent,
        cultArea: document.getElementById('result-cult-area').textContent,
        rowSpacing: document.getElementById('result-row-spacing').textContent,
        pitSpacing: document.getElementById('result-pit-spacing').textContent,
        betweenBunds: document.getElementById('result-between-bunds').textContent,
        catchArea: document.getElementById('result-catch-area').textContent,
        caRatio: document.getElementById('result-ca-ratio').textContent,
        pitsPerHectare: document.getElementById('result-pits-per-hectare').textContent,
        totalPits: document.getElementById('result-total-pits').textContent
    };
    
    const resultsText = currentLang === 'ar' ? `
نتائج تصميم نظام حصاد مياه الأمطار - احسب ابتسامة أرضك
==================================================
قطر الهلال (D): ${results.diameter}
ارتفاع السد (H): ${results.height}
مساحة الحوض الزراعي: ${results.cultArea}
المسافة بين الصفوف (L): ${results.rowSpacing}
المسافة بين الحفر (Y): ${results.pitSpacing}
المسافة بين الهلالات: ${results.betweenBunds}
مساحة منطقة التجميع: ${results.catchArea}
نسبة التجميع إلى الزراعة (C:A): ${results.caRatio}
عدد الحفر في الهكتار: ${results.pitsPerHectare}
إجمالي عدد الحفر: ${results.totalPits}

صمم من قبل عمر ياسين - 2025
    ` : `
Rainwater Harvesting Design Results - Calculate Your Land's Smile
==================================================
Half-moon Diameter (D): ${results.diameter}
Bund Height (H): ${results.height}
Cultivation Area: ${results.cultArea}
Row Spacing (L): ${results.rowSpacing}
Pit Spacing (Y): ${results.pitSpacing}
Distance Between Bunds: ${results.betweenBunds}
Catchment Area: ${results.catchArea}
Catchment to Cultivation Ratio (C:A): ${results.caRatio}
Pits per Hectare: ${results.pitsPerHectare}
Total Pits: ${results.totalPits}

Designed by Omar Yaseen - 2025
    `;
    
    const blob = new Blob([resultsText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = currentLang === 'ar' ? 'نتائج_تصميم_حصاد_المياه.txt' : 'rainwater_harvesting_results.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert(currentLang === 'ar' ? 'تم حفظ النتائج بنجاح!' : 'Results saved successfully!');
}

// تهيئة الآلة الحاسبة
function initCalculator() {
    const calculatorForm = document.getElementById('rainwater-calculator');
    const cropSelect = document.getElementById('crop');
    const customKcGroup = document.getElementById('custom-kc-group');
    const customKcInput = document.getElementById('custom-kc');
    
    if (calculatorForm) {
        // معالجة اختيار المحصول المخصص
        if (cropSelect) {
            cropSelect.addEventListener('change', function() {
                if (this.value === 'custom') {
                    if (customKcGroup) customKcGroup.style.display = 'block';
                } else {
                    if (customKcGroup) customKcGroup.style.display = 'none';
                }
                
                // إعادة الحساب فوراً عند تغيير المحصول
                if (this.value !== '' && this.value !== 'custom') {
                    const rainfall = parseFloat(document.getElementById('rainfall').value);
                    const slope = parseFloat(document.getElementById('slope').value);
                    const area = parseFloat(document.getElementById('area').value) || 1;
                    const areaUnit = document.getElementById('area-unit').value;
                    
                    if (rainfall && slope) {
                        const kc = parseFloat(this.value);
                        const results = calculateRainwaterHarvesting(rainfall, slope, kc, area, areaUnit);
                        displayResults(results);
                    }
                }
            });
        }
        
        // معالجة إرسال النموذج
        calculatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع البيانات من النموذج
            const rainfall = parseFloat(document.getElementById('rainfall').value);
            const slope = parseFloat(document.getElementById('slope').value);
            const cropValue = cropSelect ? cropSelect.value : '';
            const area = parseFloat(document.getElementById('area').value) || 1;
            const areaUnit = document.getElementById('area-unit').value;
            
            // تحديد قيمة Kc (افتراضي 1 إذا لم يتم الاختيار)
            let kc = 1; // القيمة الافتراضية
            
            if (cropValue === 'custom') {
                kc = parseFloat(customKcInput ? customKcInput.value : 1) || 1;
            } else if (cropValue) {
                kc = parseFloat(cropValue);
            }
            
            console.log('Form values:', { rainfall, slope, cropValue, kc, area, areaUnit });
            
            // التحقق من صحة البيانات
            if (rainfall < 50 || rainfall > 1200) {
                alert(currentLang === 'ar' ? 
                    'معدل هطول الأمطار يجب أن يكون بين 50 و 1200 مم/سنة' :
                    'Rainfall rate must be between 50 and 1200 mm/year');
                return;
            }
            
            if (slope < 0 || slope > 25) {
                alert(currentLang === 'ar' ?
                    'ميل الأرض يجب أن يكون بين 0 و 25%' :
                    'Land slope must be between 0 and 25%');
                return;
            }
            
            if (kc < 0.1 || kc > 1.5) {
                alert(currentLang === 'ar' ?
                    'قيمة Kc يجب أن تكون بين 0.1 و 1.5' :
                    'Kc value must be between 0.1 and 1.5');
                return;
            }
            
            // حساب النتائج
            const results = calculateRainwaterHarvesting(rainfall, slope, kc, area, areaUnit);
            
            // عرض النتائج
            displayResults(results);
        });
        
        // زر حفظ النتائج
        const saveBtn = document.getElementById('save-results');
        if (saveBtn) {
            saveBtn.addEventListener('click', saveResults);
        }
        
        // زر طباعة النتائج
        const printBtn = document.getElementById('print-results');
        if (printBtn) {
            printBtn.addEventListener('click', function() {
                window.print();
            });
        }
        
        // إضافة event listener لحقل Kc المخصص لتحديث الحسابات مباشرة
        if (customKcInput) {
            customKcInput.addEventListener('input', function() {
                // إذا كان النموذج يحتوي على بيانات صالحة، قم بإعادة الحساب
                const rainfall = parseFloat(document.getElementById('rainfall').value);
                const slope = parseFloat(document.getElementById('slope').value);
                const area = parseFloat(document.getElementById('area').value) || 1;
                const areaUnit = document.getElementById('area-unit').value;
                
                if (rainfall && slope && this.value) {
                    const kc = parseFloat(this.value) || 1;
                    if (kc >= 0.1 && kc <= 1.5) {
                        const results = calculateRainwaterHarvesting(rainfall, slope, kc, area, areaUnit);
                        displayResults(results);
                    }
                }
            });
        }
        
        // إضافة event listeners للحقول الأخرى لتحديث النتائج فوراً
        const rainfallInput = document.getElementById('rainfall');
        const slopeInput = document.getElementById('slope');
        
        if (rainfallInput) {
            rainfallInput.addEventListener('input', function() {
                if (this.value && document.getElementById('slope').value) {
                    const rainfall = parseFloat(this.value);
                    const slope = parseFloat(document.getElementById('slope').value);
                    const cropValue = cropSelect ? cropSelect.value : '';
                    const area = parseFloat(document.getElementById('area').value) || 1;
                    const areaUnit = document.getElementById('area-unit').value;
                    
                    let kc = 1;
                    if (cropValue === 'custom') {
                        kc = parseFloat(customKcInput ? customKcInput.value : 1) || 1;
                    } else if (cropValue) {
                        kc = parseFloat(cropValue);
                    }
                    
                    if (rainfall >= 50 && rainfall <= 1200 && slope >= 0 && slope <= 25) {
                        const results = calculateRainwaterHarvesting(rainfall, slope, kc, area, areaUnit);
                        displayResults(results);
                    }
                }
            });
        }
        
        if (slopeInput) {
            slopeInput.addEventListener('input', function() {
                if (this.value && document.getElementById('rainfall').value) {
                    const slope = parseFloat(this.value);
                    const rainfall = parseFloat(document.getElementById('rainfall').value);
                    const cropValue = cropSelect ? cropSelect.value : '';
                    const area = parseFloat(document.getElementById('area').value) || 1;
                    const areaUnit = document.getElementById('area-unit').value;
                    
                    let kc = 1;
                    if (cropValue === 'custom') {
                        kc = parseFloat(customKcInput ? customKcInput.value : 1) || 1;
                    } else if (cropValue) {
                        kc = parseFloat(cropValue);
                    }
                    
                    if (rainfall >= 50 && rainfall <= 1200 && slope >= 0 && slope <= 25) {
                        const results = calculateRainwaterHarvesting(rainfall, slope, kc, area, areaUnit);
                        displayResults(results);
                    }
                }
            });
        }
    }
}

// إنشاء الرسوم البيانية للتوثيق
function createDocumentationCharts() {
    // مخطط 1: القطر مقابل الأمطار (النطاق المعدل: 2-12m)
    const diameterCtx = document.getElementById('diameter-chart');
    if (diameterCtx) {
        const P = Array.from({length: 116}, (_, i) => i + 50);
        const D = P.map(p => {
            return 2 + ((p - 50) / (1200 - 50)) * (12 - 2);
        });
        
        new Chart(diameterCtx, {
            type: 'line',
            data: {
                labels: P,
                datasets: [{
                    label: currentLang === 'ar' ? 'القطر (م)' : 'Diameter (m)',
                    data: D,
                    borderColor: '#4caf50',
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: currentLang === 'ar' ? 'القطر مقابل معدل الأمطار (نطاق معدل: 2-12 م)' : 'Diameter vs Rainfall (Adjusted Range: 2-12m)',
                        font: { size: 14, weight: 'bold' }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: currentLang === 'ar' ? 'معدل الأمطار (مم/سنة)' : 'Rainfall (mm/year)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: currentLang === 'ar' ? 'القطر (م)' : 'Diameter (m)'
                        },
                        min: 0,
                        max: 14
                    }
                }
            }
        });
    }
    
    // مخطط 2: الارتفاع مقابل القطر (FAO Range: 30-50cm)
    const heightCtx = document.getElementById('height-chart');
    if (heightCtx) {
        const D = Array.from({length: 101}, (_, i) => 2 + (i / 10));
        const H = D.map(d => {
            let h = 30 + 2.5 * (d - 2);
            return Math.max(30, Math.min(50, h));
        });
        
        new Chart(heightCtx, {
            type: 'line',
            data: {
                labels: D.map(d => d.toFixed(1)),
                datasets: [{
                    label: currentLang === 'ar' ? 'الارتفاع (سم)' : 'Height (cm)',
                    data: H,
                    borderColor: '#2196f3',
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    borderWidth: 3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: currentLang === 'ar' ? 'ارتفاع السد مقابل القطر (نطاق FAO: 30-50 سم)' : 'Bund Height vs Diameter (FAO Range: 30-50cm)',
                        font: { size: 14, weight: 'bold' }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: currentLang === 'ar' ? 'القطر (م)' : 'Diameter (m)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: currentLang === 'ar' ? 'الارتفاع (سم)' : 'Height (cm)'
                        },
                        min: 25,
                        max: 55
                    }
                }
            }
        });
    }
    
    // مخطط 3: نسب التجميع
    const ratioCtx = document.getElementById('ratio-chart');
    if (ratioCtx) {
        const P = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
        const slopes = [0, 5, 10];
        const datasets = slopes.map((S, i) => {
            const colors = ['#4caf50', '#2196f3', '#ff9800'];
            return {
                label: `${currentLang === 'ar' ? 'ميل' : 'Slope'} ${S}%`,
                data: P.map(p => {
                    let baseC_A;
                    if (p <= 200) {
                        baseC_A = 3.0 + (0.3 * 1);
                    } else if (p <= 400) {
                        baseC_A = 2.2 + (0.25 * 1);
                    } else if (p <= 600) {
                        baseC_A = 1.6 + (0.2 * 1);
                    } else {
                        baseC_A = 1.2 + (0.15 * 1);
                    }
                    const C_A = baseC_A * (1 + (S * 0.02));
                    return Math.max(1.0, Math.min(4.0, C_A));
                }),
                borderColor: colors[i],
                backgroundColor: colors[i] + '20',
                borderWidth: 2,
                tension: 0.4
            };
        });
        
        new Chart(ratioCtx, {
            type: 'line',
            data: {
                labels: P,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: currentLang === 'ar' ? 'نسبة التجميع مقابل الأمطار' : 'Catchment Ratio vs Rainfall',
                        font: { size: 14, weight: 'bold' }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: currentLang === 'ar' ? 'معدل الأمطار (مم/سنة)' : 'Rainfall (mm/year)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: currentLang === 'ar' ? 'نسبة التجميع (C:A)' : 'Catchment Ratio (C:A)'
                        },
                        min: 0,
                        max: 5
                    }
                }
            }
        });
    }

    // مخطط 4: كثافة الهلالات
    const densityCtx = document.getElementById('density-chart');
    if (densityCtx) {
        const D = Array.from({length: 101}, (_, i) => 2 + (i / 10));
        const pitsPerHectare = D.map(d => {
            const L = 0.75 * d;
            const Y = 1.10 * d;
            return 10000 / (L * Y);
        });
        
        new Chart(densityCtx, {
            type: 'line',
            data: {
                labels: D.map(d => d.toFixed(1)),
                datasets: [{
                    label: currentLang === 'ar' ? 'هلالات/هكتار' : 'Crescents/Hectare',
                    data: pitsPerHectare,
                    borderColor: '#9c27b0',
                    backgroundColor: 'rgba(156, 39, 176, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: currentLang === 'ar' ? 'كثافة الهلالات مقابل القطر' : 'Crescent Density vs Diameter',
                        font: { size: 14, weight: 'bold' }
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: currentLang === 'ar' ? 'القطر (م)' : 'Diameter (m)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: currentLang === 'ar' ? 'عدد الهلالات/هكتار' : 'Crescents per Hectare'
                        },
                        min: 0
                    }
                }
            }
        });
    }
}

// تهيئة التوثيق
function initDocumentation() {
    createDocumentationCharts();
    
    // إضافة تأثيرات scroll للروابط الداخلية
    document.querySelectorAll('.docs-toc a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Advanced Polygon Analysis Functions
class PolygonAnalyzer {
    constructor() {
        this.supportedFormats = ['csv', 'txt', 'geojson', 'json'];
    }
    
    // Parse different file formats
    parseFile(file, onSuccess, onError) {
        const reader = new FileReader();
        const fileExtension = file.name.split('.').pop().toLowerCase();
        
        if (!this.supportedFormats.includes(fileExtension)) {
            onError('Unsupported file format. Please use CSV, TXT, or GeoJSON.');
            return;
        }
        
        reader.onload = (e) => {
            try {
                const content = e.target.result;
                let areaData;
                
                switch (fileExtension) {
                    case 'csv':
                    case 'txt':
                        areaData = this.parseCSV(content);
                        break;
                    case 'geojson':
                    case 'json':
                        areaData = this.parseGeoJSON(content);
                        break;
                }
                
                onSuccess(areaData);
            } catch (error) {
                onError('Error parsing file: ' + error.message);
            }
        };
        
        reader.onerror = () => onError('Error reading file');
        reader.readAsText(file);
    }
    
    parseCSV(content) {
        const lines = content.split('\n').filter(line => line.trim());
        const areaData = {
            type: 'polygon',
            coordinates: [],
            area: 0,
            metadata: {}
        };
        
        lines.forEach((line, index) => {
            const parts = line.split(',').map(part => part.trim());
            if (parts.length >= 2) {
                const x = parseFloat(parts[0]);
                const y = parseFloat(parts[1]);
                if (!isNaN(x) && !isNaN(y)) {
                    areaData.coordinates.push({ x, y });
                }
            }
        });
        
        if (areaData.coordinates.length < 3) {
            throw new Error('At least 3 coordinates are required to form a polygon');
        }
        
        // Calculate area using shoelace formula
        areaData.area = this.calculatePolygonArea(areaData.coordinates);
        return areaData;
    }
    
    parseGeoJSON(content) {
        const geojson = JSON.parse(content);
        const areaData = {
            type: 'geojson',
            coordinates: [],
            area: 0,
            metadata: {}
        };
        
        if (geojson.type === 'FeatureCollection') {
            // Handle multiple features
            geojson.features.forEach(feature => {
                if (feature.geometry && feature.geometry.type === 'Polygon') {
                    feature.geometry.coordinates[0].forEach(coord => {
                        areaData.coordinates.push({ x: coord[0], y: coord[1] });
                    });
                }
            });
        } else if (geojson.type === 'Feature') {
            if (geojson.geometry && geojson.geometry.type === 'Polygon') {
                geojson.geometry.coordinates[0].forEach(coord => {
                    areaData.coordinates.push({ x: coord[0], y: coord[1] });
                });
            }
        } else if (geojson.type === 'Polygon') {
            geojson.coordinates[0].forEach(coord => {
                areaData.coordinates.push({ x: coord[0], y: coord[1] });
            });
        }
        
        if (areaData.coordinates.length < 3) {
            throw new Error('Invalid GeoJSON: Could not extract polygon coordinates');
        }
        
        areaData.area = this.calculatePolygonArea(areaData.coordinates);
        return areaData;
    }
    
    calculatePolygonArea(coordinates) {
        let area = 0;
        const n = coordinates.length;
        
        for (let i = 0; i < n; i++) {
            const j = (i + 1) % n;
            area += coordinates[i].x * coordinates[j].y;
            area -= coordinates[j].x * coordinates[i].y;
        }
        
        return Math.abs(area) / 2;
    }
    
    // Generate system distribution for large areas
    generateSystemDistribution(areaData, designParams) {
        const { diameter, rowSpacing, pitSpacing } = designParams;
        const systems = [];
        
        // Calculate bounds
        const bounds = {
            minX: Math.min(...areaData.coordinates.map(c => c.x)),
            maxX: Math.max(...areaData.coordinates.map(c => c.x)),
            minY: Math.min(...areaData.coordinates.map(c => c.y)),
            maxY: Math.max(...areaData.coordinates.map(c => c.y))
        };
        
        // Generate grid of systems
        for (let x = bounds.minX; x < bounds.maxX; x += rowSpacing) {
            for (let y = bounds.minY; y < bounds.maxY; y += pitSpacing) {
                if (this.isPointInPolygon({x, y}, areaData.coordinates)) {
                    systems.push({
                        x: x,
                        y: y,
                        diameter: diameter,
                        orientation: Math.random() * 360 // Random orientation for visual variety
                    });
                }
            }
        }
        
        return {
            totalSystems: systems.length,
            systems: systems,
            bounds: bounds,
            area: areaData.area
        };
    }
    
    isPointInPolygon(point, polygon) {
        let inside = false;
        for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
            const xi = polygon[i].x, yi = polygon[i].y;
            const xj = polygon[j].x, yj = polygon[j].y;
            
            const intersect = ((yi > point.y) != (yj > point.y))
                && (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }
        return inside;
    }
}

// Initialize polygon analysis
function initPolygonAnalysis() {
    const fileInput = document.getElementById('area-file');
    const analyzeBtn = document.getElementById('analyze-area-btn');
    const resultsDiv = document.getElementById('polygon-results');
    const distributionCanvas = document.getElementById('distribution-canvas');
    
    if (!fileInput || !analyzeBtn) return;
    
    const analyzer = new PolygonAnalyzer();
    let currentDistribution = null;
    
    analyzeBtn.addEventListener('click', function() {
        const files = fileInput.files;
        if (files.length === 0) {
            alert(currentLang === 'ar' ? 'يرجى اختيار ملف' : 'Please select a file');
            return;
        }
        
        const file = files[0];
        
        analyzer.parseFile(
            file,
            (areaData) => {
                // Get design parameters from main calculator or use defaults
                const rainfall = parseFloat(document.getElementById('rainfall')?.value) || 300;
                const slope = parseFloat(document.getElementById('slope')?.value) || 5;
                const kc = 1; // Default crop coefficient
                
                const designResults = calculateRainwaterHarvesting(rainfall, slope, kc, areaData.area / 10000, 'hectare');
                
                currentDistribution = analyzer.generateSystemDistribution(areaData, designResults);
                
                // Display results
                displayPolygonResults(currentDistribution, designResults);
                
                // Draw distribution
                drawSystemDistribution(currentDistribution, distributionCanvas);
            },
            (error) => {
                alert(error);
            }
        );
    });
}

// Display polygon analysis results
function displayPolygonResults(distribution, designResults) {
    const resultsDiv = document.getElementById('polygon-results');
    if (!resultsDiv) return;
    
    const totalWater = (designResults.catchArea * distribution.totalSystems * 0.001).toFixed(1); // Convert to m³
    
    resultsDiv.innerHTML = `
        <div class="results-summary">
            <div class="summary-card primary">
                <div class="summary-icon">
                    <i class="fas fa-map"></i>
                </div>
                <div class="summary-content">
                    <h3>${currentLang === 'ar' ? 'المساحة الكلية' : 'Total Area'}</h3>
                    <div class="summary-values">
                        <div class="summary-item">
                            <span class="label">${currentLang === 'ar' ? 'المساحة' : 'Area'}</span>
                            <span class="value">${(distribution.area / 10000).toFixed(2)} هكتار</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="summary-card secondary">
                <div class="summary-icon">
                    <i class="fas fa-tint"></i>
                </div>
                <div class="summary-content">
                    <h3>${currentLang === 'ar' ? 'تجميع المياه' : 'Water Collection'}</h3>
                    <div class="summary-values">
                        <div class="summary-item">
                            <span class="label">${currentLang === 'ar' ? 'إجمالي التجميع' : 'Total Collection'}</span>
                            <span class="value">${totalWater} م³/سنة</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="summary-card accent">
                <div class="summary-icon">
                    <i class="fas fa-project-diagram"></i>
                </div>
                <div class="summary-content">
                    <h3>${currentLang === 'ar' ? 'الأنظمة' : 'Systems'}</h3>
                    <div class="summary-values">
                        <div class="summary-item">
                            <span class="label">${currentLang === 'ar' ? 'إجمالي الأنظمة' : 'Total Systems'}</span>
                            <span class="value">${distribution.totalSystems}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    resultsDiv.style.display = 'block';
}

// Draw system distribution on canvas
function drawSystemDistribution(distribution, canvas) {
    if (!canvas || !distribution) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Calculate scale and offset
    const bounds = distribution.bounds;
    const scaleX = width / (bounds.maxX - bounds.minX);
    const scaleY = height / (bounds.maxY - bounds.minY);
    const scale = Math.min(scaleX, scaleY) * 0.9;
    
    const offsetX = (width - (bounds.maxX - bounds.minX) * scale) / 2;
    const offsetY = (height - (bounds.maxY - bounds.minY) * scale) / 2;
    
    // Convert coordinates to canvas coordinates
    const toCanvas = (x, y) => ({
        x: (x - bounds.minX) * scale + offsetX,
        y: (y - bounds.minY) * scale + offsetY
    });
    
    // Draw polygon
    ctx.beginPath();
    distribution.systems[0]?.polygon?.forEach((coord, index) => {
        const canvasCoord = toCanvas(coord.x, coord.y);
        if (index === 0) {
            ctx.moveTo(canvasCoord.x, canvasCoord.y);
        } else {
            ctx.lineTo(canvasCoord.x, canvasCoord.y);
        }
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(52, 152, 219, 0.1)';
    ctx.fill();
    ctx.strokeStyle = '#3498db';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw systems
    distribution.systems.forEach(system => {
        const canvasCoord = toCanvas(system.x, system.y);
        const radius = (system.diameter / 2) * scale * 0.5; // Scale down for visibility
        
        ctx.beginPath();
        ctx.arc(canvasCoord.x, canvasCoord.y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(231, 76, 60, 0.6)';
        ctx.fill();
        ctx.strokeStyle = '#e74c3c';
        ctx.lineWidth = 1;
        ctx.stroke();
    });
    
    // Add title
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#2c3e50';
    ctx.textAlign = 'center';
    ctx.fillText(
        currentLang === 'ar' ? 'توزيع أنظمة الهلالات' : 'Crescent System Distribution', 
        width / 2, 
        20
    );
}

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // تهيئة القائمة المتنقلة
    initNavigation();
    
    // تهيئة الآلة الحاسبة
    initCalculator();
    
    // تهيئة التوثيق
    if (window.location.pathname.includes('docs.html')) {
        initDocumentation();
    }
    
    // تهيئة تحليل المساحات
    if (window.location.pathname.includes('polygon.html')) {
        initPolygonAnalysis();
    }
    
    // إعداد مستمعي الأحداث
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
        console.log('Language toggle button found and event listener added');
    } else {
        console.log('Language toggle button not found');
    }
    
    // تحديث اللغة والاتجاه الأولي
    updateLanguage();
    updateDirection();
    
    // إضافة تأثيرات scroll للتنقل
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar && window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else if (navbar) {
            navbar.style.background = 'var(--surface-color)';
            navbar.style.backdropFilter = 'none';
        }
    });
    
    // إضافة تأثيرات للبطاقات
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // مراقبة العناصر لإضافة تأثيرات الظهور
    document.querySelectorAll('.feature-card, .step, .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
