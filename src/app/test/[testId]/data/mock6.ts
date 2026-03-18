import { QuestionType } from '../mockData';

const physicsQuestions_6: any[] = [
    { type: 'MCQ', textEn: "Electric potential due to a point charge varies as?", textHi: "एक बिंदु आवेश के कारण विद्युत विभव (electric potential) कैसे परिवर्तित होता है?", options: [{en: "r", hi: "r"}, {en: "1/r", hi: "1/r"}, {en: "1/r²", hi: "1/r²"}, {en: "r²", hi: "r²"}], ans: 2 },
    { type: 'MCQ', textEn: "If dielectric constant k increases, what happens to capacitance?", textHi: "यदि परावैद्युतांक (dielectric constant) k बढ़ता है, तो धारिता (capacitance) का क्या होता है?", options: [{en: "Decrease", hi: "घटती है"}, {en: "Increase", hi: "बढ़ती है"}, {en: "Remain same", hi: "समान रहती है"}, {en: "Becomes zero", hi: "शून्य हो जाती है"}], ans: 2 },
    { type: 'MCQ', textEn: "Drift velocity is directly proportional to?", textHi: "अपवाह वेग (Drift velocity) किसके अनुक्रमानुपाती होता है?", options: [{en: "Temperature", hi: "तापमान"}, {en: "Electric field", hi: "विद्युत क्षेत्र"}, {en: "Resistance", hi: "प्रतिरोध"}, {en: "Cross-sectional area", hi: "अनुप्रस्थ काट का क्षेत्रफल"}], ans: 2 },
    { type: 'MCQ', textEn: "Force on a current carrying wire in a uniform magnetic field is:", textHi: "एकसमान चुंबकीय क्षेत्र में धारावाही चालक तार पर लगने वाला बल है:", options: [{en: "qvB", hi: "qvB"}, {en: "BIL (or IL×B)", hi: "BIL (या IL×B)"}, {en: "qE", hi: "qE"}, {en: "mv²/r", hi: "mv²/r"}], ans: 2 },
    { type: 'MCQ', textEn: "The dimensional formula of Planck's constant is same as:", textHi: "प्लांक नियतांक का विमीय सूत्र किसके समान है?", options: [{en: "Linear momentum", hi: "रेखीय संवेग"}, {en: "Angular momentum", hi: "कोणीय संवेग"}, {en: "Force", hi: "बल"}, {en: "Energy", hi: "ऊर्जा"}], ans: 2 },
    { type: 'MCQ', textEn: "The intensity of a wave is proportional to:", textHi: "एक तरंग की तीव्रता (Intensity) किसके अनुक्रमानुपाती होती है?", options: [{en: "Amplitude (A)", hi: "आयाम (A)"}, {en: "Amplitude squared (A²)", hi: "आयाम का वर्ग (A²)"}, {en: "1/A", hi: "1/A"}, {en: "Wavelength (λ)", hi: "तरंगदैर्ध्य (λ)"}], ans: 2 },
    { type: 'MCQ', textEn: "In an adiabatic process, the heat exchanged is:", textHi: "एक रुद्धोष्म (adiabatic) प्रक्रिया में, ऊष्मा का आदान-प्रदान होता है:", options: [{en: "Positive", hi: "धनात्मक"}, {en: "Negative", hi: "ऋणात्मक"}, {en: "Zero", hi: "शून्य"}, {en: "Infinite", hi: "अनंत"}], ans: 3 },
    { type: 'MCQ', textEn: "The SI unit of power of a lens is:", textHi: "लेंस की क्षमता की SI इकाई है:", options: [{en: "m", hi: "मीटर"}, {en: "Diopter (D)", hi: "डायोप्टर (D)"}, {en: "cm", hi: "सेंटीमीटर"}, {en: "rad", hi: "रेडियन"}], ans: 2 },
    { type: 'MCQ', textEn: "The formula for angular momentum is:", textHi: "कोणीय संवेग (Angular momentum) का सूत्र है:", options: [{en: "Iα", hi: "Iα"}, {en: "Iω", hi: "Iω"}, {en: "τ (Torque)", hi: "τ (बल आघूर्ण)"}, {en: "mv", hi: "mv"}], ans: 2 },
    { type: 'MCQ', textEn: "Lenz's law gives the:", textHi: "लेन्ज़ का नियम (Lenz's law) देता है:", options: [{en: "Magnitude of induced emf", hi: "प्रेरित emf का परिमाण"}, {en: "Direction of induced current", hi: "प्रेरित धारा की दिशा"}, {en: "Force on conductor", hi: "चालक पर बल"}, {en: "Conserved energy", hi: "संरक्षित ऊर्जा"}], ans: 2 },
    { type: 'MCQ', textEn: "Acceleration due to gravity (g) varies with distance R from the center of the earth (for R > Re) as:", textHi: "पृथ्वी के केंद्र से दूरी R के साथ गुरुत्वाकर्षण त्वरण (g) कैसे बदलता है (R > Re के लिए)?", options: [{en: "R", hi: "R"}, {en: "1/R²", hi: "1/R²"}, {en: "R²", hi: "R²"}, {en: "Constant", hi: "स्थिर"}], ans: 2 },
    { type: 'MCQ', textEn: "The time period of a spring-mass system is proportional to:", textHi: "स्प्रिंग-द्रव्यमान निकाय का आवर्तकाल (Time period) किसके अनुक्रमानुपाती होता है?", options: [{en: "√m", hi: "√m"}, {en: "m", hi: "m"}, {en: "1/m", hi: "1/m"}, {en: "m²", hi: "m²"}], ans: 1 },
    { type: 'MCQ', textEn: "The majority charge carriers in a p-type semiconductor are:", textHi: "p-प्रकार के अर्धचालक में बहुसंख्यक आवेश वाहक (majority carriers) होते हैं:", options: [{en: "Electrons", hi: "इलेक्ट्रॉन"}, {en: "Holes", hi: "छिद्र (Holes)"}, {en: "Protons", hi: "प्रोटॉन"}, {en: "Neutrons", hi: "न्यूट्रॉन"}], ans: 2 },
    { type: 'MCQ', textEn: "The SI unit of specific heat capacity is:", textHi: "विशिष्ट ऊष्मा धारिता की SI इकाई है:", options: [{en: "J/kg·K", hi: "J/kg·K"}, {en: "J", hi: "J"}, {en: "K", hi: "K"}, {en: "W", hi: "W"}], ans: 1 },
    { type: 'MCQ', textEn: "If the frequency of AC is 50 Hz, what is its time period?", textHi: "यदि AC की आवृत्ति 50 Hz है, तो इसका आवर्तकाल क्या है?", options: [{en: "0.02 s", hi: "0.02 s"}, {en: "0.2 s", hi: "0.2 s"}, {en: "2 s", hi: "2 s"}, {en: "20 s", hi: "20 s"}], ans: 1 },
    { type: 'MCQ', textEn: "The formula for Pressure is:", textHi: "दाब (Pressure) का सूत्र है:", options: [{en: "Force × Area", hi: "बल × क्षेत्रफल"}, {en: "Force / Area", hi: "बल / क्षेत्रफल"}, {en: "Area / Force", hi: "क्षेत्रफल / बल"}, {en: "Force + Area", hi: "बल + क्षेत्रफल"}], ans: 2 },
    { type: 'MCQ', textEn: "The SI unit of acceleration is:", textHi: "त्वरण (Acceleration) की SI इकाई है:", options: [{en: "m/s", hi: "m/s"}, {en: "m/s²", hi: "m/s²"}, {en: "m²/s", hi: "m²/s"}, {en: "km/h", hi: "km/h"}], ans: 2 },
    { type: 'MCQ', textEn: "The fundamental formula for Work done is:", textHi: "किए गए कार्य (Work done) का मूल सूत्र है:", options: [{en: "Mass × Velocity", hi: "द्रव्यमान × वेग"}, {en: "Force × Displacement", hi: "बल × विस्थापन"}, {en: "Power × Area", hi: "शक्ति × क्षेत्रफल"}, {en: "Force / Area", hi: "बल / क्षेत्रफल"}], ans: 2 },
    { type: 'MCQ', textEn: "What is the SI unit of Energy?", textHi: "ऊर्जा की SI इकाई क्या है?", options: [{en: "Newton", hi: "न्यूटन"}, {en: "Joule", hi: "जूल"}, {en: "Watt", hi: "वॉट"}, {en: "Pascal", hi: "पास्कल"}], ans: 2 },
    { type: 'MCQ', textEn: "The formula for linear momentum is:", textHi: "रेखीय संवेग (Linear momentum) का सूत्र है:", options: [{en: "mv²", hi: "mv²"}, {en: "mv", hi: "mv"}, {en: "ma", hi: "ma"}, {en: "m/v", hi: "m/v"}], ans: 2 },
    { type: 'Numerical', textEn: "If velocity v = 20 m/s and time t = 2 s, what is the distance covered (in meters)?", textHi: "यदि वेग v = 20 m/s और समय t = 2 s है, तो तय की गई दूरी (मीटर में) क्या है?", ans: "40" },
    { type: 'Numerical', textEn: "A capacitor has C = 5 µF and is connected to a voltage V = 10 V. What is the charge (in µC)?", textHi: "एक संधारित्र की धारिता C = 5 µF है और यह V = 10 V से जुड़ा है। आवेश (µC में) क्या है?", ans: "50" },
    { type: 'Numerical', textEn: "If the frequency f = 25 Hz, calculate the time period T (in seconds).", textHi: "यदि आवृत्ति f = 25 Hz है, तो आवर्तकाल T (सेकंड में) की गणना करें।", ans: "0.04" },
    { type: 'Numerical', textEn: "An object of mass m = 2 kg is moving with a velocity v = 3 m/s. What is its kinetic energy (in Joules)?", textHi: "m = 2 kg द्रव्यमान की एक वस्तु v = 3 m/s के वेग से गति कर रही है। इसकी गतिज ऊर्जा (जूल में) क्या है?", ans: "9" },
    { type: 'Numerical', textEn: "For a photon of wavelength λ = 400 nm, what is its energy (approximately in eV)? (Use hc ≈ 1240 eV nm)", textHi: "λ = 400 nm तरंगदैर्ध्य वाले फोटॉन के लिए, इसकी ऊर्जा (eV में लगभग) क्या है? (hc ≈ 1240 eV nm का प्रयोग करें)", ans: "3.1" }
];

const chemistryQuestions_6: any[] = [
    { type: 'MCQ', textEn: "The energy of an electron in a hydrogen-like atom strictly depends on which quantum number?", textHi: "हाइड्रोजन-जैसे परमाणु में इलेक्ट्रॉन की ऊर्जा मुख्य रूप से किस क्वांटम संख्या पर निर्भर करती है?", options: [{en: "Principal quantum number (n)", hi: "मुख्य क्वांटम संख्या (n)"}, {en: "Azimuthal quantum number (l)", hi: "दिगंशी क्वांटम संख्या (l)"}, {en: "Magnetic quantum number (m)", hi: "चुंबकीय क्वांटम संख्या (m)"}, {en: "Spin quantum number (s)", hi: "चक्रण क्वांटम संख्या (s)"}], ans: 1 },
    { type: 'MCQ', textEn: "A sigma (σ) bond is formed by which type of orbital overlap?", textHi: "सिग्मा (σ) आबंध कक्षकों के किस प्रकार के अतिव्यापन से बनता है?", options: [{en: "Lateral / Side overlap", hi: "पार्श्व अतिव्यापन"}, {en: "End-to-end / Axial overlap", hi: "अक्षीय अतिव्यापन (End-to-End)"}, {en: "Hybrid orbital formation", hi: "संकर कक्षक निर्माण"}, {en: "None of the above", hi: "इनमें से कोई नहीं"}], ans: 2 },
    { type: 'MCQ', textEn: "A negative change in Gibbs free energy (ΔG < 0) means the reaction is:", textHi: "गिब्स मुक्त ऊर्जा में नकारात्मक परिवर्तन (ΔG < 0) का अर्थ है कि अभिक्रिया है:", options: [{en: "Spontaneous", hi: "स्वतः (Spontaneous)"}, {en: "Non-spontaneous", hi: "अस्वतः"}, {en: "In equilibrium (Zero)", hi: "साम्यावस्था में"}, {en: "Having infinite energy", hi: "अनंत ऊर्जा वाली"}], ans: 1 },
    { type: 'MCQ', textEn: "A very large value of equilibrium constant (Kc) implies that at equilibrium the reaction mixture consists mostly of:", textHi: "साम्य नियतांक (Kc) के बहुत बड़े मान का तात्पर्य है कि साम्यावस्था में प्रतिक्रिया मिश्रण में मुख्य रूप से शामिल हैं:", options: [{en: "Reactants", hi: "अभिकारक"}, {en: "Products", hi: "उत्पाद"}, {en: "Equal reactants and products", hi: "बराबर अभिकारक और उत्पाद"}, {en: "Neither reactants nor products", hi: "न अभिकारक और न ही उत्पाद"}], ans: 2 },
    { type: 'MCQ', textEn: "In electrochemical terms, oxidation refers to:", textHi: "विद्युतरासायनिक शब्दों में, ऑक्सीकरण का अर्थ है:", options: [{en: "Gain of electrons", hi: "इलेक्ट्रॉनों का लाभ"}, {en: "Loss of electrons", hi: "इलेक्ट्रॉनों की हानि"}, {en: "Gain of Hydrogen", hi: "हाइड्रोजन का लाभ"}, {en: "None of these", hi: "इनमें से कोई नहीं"}], ans: 2 },
    { type: 'MCQ', textEn: "An SN2 reaction is most favoured in which type of alkyl halide?", textHi: "एक SN2 अभिक्रिया किस प्रकार के एल्काइल हैलाइड में सबसे अधिक अनुकूल होती है?", options: [{en: "Primary (1°)", hi: "प्राथमिक (1°)"}, {en: "Secondary (2°)", hi: "द्वितीयक (2°)"}, {en: "Tertiary (3°)", hi: "तृतीयक (3°)"}, {en: "None of these", hi: "इनमें से कोई नहीं"}], ans: 1 },
    { type: 'MCQ', textEn: "The unusual stability of the benzene ring is mainly due to:", textHi: "बेंजीन रिंग की असामान्य स्थिरता मुख्यतः किसके कारण होती है?", options: [{en: "Resonance / Delocalization", hi: "अनुनाद (Resonance)"}, {en: "Rotation of bonds", hi: "आबंधों का घूर्णन"}, {en: "High bond enthalpy", hi: "उच्च आबंध एन्थैल्पी"}, {en: "None of these", hi: "इनमें से कोई नहीं"}], ans: 1 },
    { type: 'MCQ', textEn: "The dehydration of an alcohol generally produces which of the following?", textHi: "एल्कोहल के निर्जलीकरण (dehydration) से सामान्यतः क्या उत्पन्न होता है?", options: [{en: "Alkane", hi: "एल्केन"}, {en: "Alkene", hi: "एल्कीन"}, {en: "Alkyne", hi: "एल्काइन"}, {en: "Ether", hi: "ईथर"}], ans: 2 },
    { type: 'MCQ', textEn: "The oxidation of an aldehyde generally produces:", textHi: "एक एल्डिहाइड का ऑक्सीकरण सामान्यतः क्या उत्पन्न करता है?", options: [{en: "Carboxylic acid", hi: "कार्बोक्सिलिक अम्ल"}, {en: "Alcohol", hi: "एल्कोहल"}, {en: "Ether", hi: "ईथर"}, {en: "None of these", hi: "इनमें से कोई नहीं"}], ans: 1 },
    { type: 'MCQ', textEn: "In coordination chemistry, the Cyanide ion (CN⁻) acts as a:", textHi: "उपसहसंयोजन रसायन विज्ञान में, साइनाइड आयन (CN⁻) एक के रूप में कार्य करता है:", options: [{en: "Strong-field ligand", hi: "प्रबल क्षेत्र लिगैंड"}, {en: "Weak-field ligand", hi: "दुर्बल क्षेत्र लिगैंड"}, {en: "Neutral molecule", hi: "उदासीन अणु"}, {en: "None of these", hi: "इनमें से कोई नहीं"}], ans: 1 },
    { type: 'MCQ', textEn: "Ammonia (NH₃) acts as a Lewis base primarily due to the presence of:", textHi: "अमोनिया (NH₃) मुख्य रूप से किसकी उपस्थिति के कारण एक लुईस क्षार के रूप में कार्य करता है?", options: [{en: "A lone pair of electrons", hi: "इलेक्ट्रॉनों के एकाकी युग्म (lone pair)"}, {en: "Covalent bonds", hi: "सहसंयोजक आबंध"}, {en: "Partial positive charge", hi: "आंशिक धनात्मक आवेश"}, {en: "None of these", hi: "इनमें से कोई नहीं"}], ans: 1 },
    { type: 'MCQ', textEn: "Is the Fe²⁺ ion paramagnetic in nature?", textHi: "क्या Fe²⁺ आयन प्रकृति में अनुचुंबकीय है?", options: [{en: "Yes", hi: "हाँ"}, {en: "No (It is diamagnetic)", hi: "नहीं (प्रतिचुंबकीय है)"}, {en: "It is neutral", hi: "यह उदासीन है"}, {en: "None of these", hi: "इनमें से कोई नहीं"}], ans: 1 },
    { type: 'MCQ', textEn: "The standard unit of Molarity is:", textHi: "मोलरता (Molarity) की मानक इकाई है:", options: [{en: "mol/L", hi: "mol/L"}, {en: "mol/kg", hi: "mol/kg"}, {en: "g/L", hi: "g/L"}, {en: "kg/mol", hi: "kg/mol"}], ans: 1 },
    { type: 'MCQ', textEn: "The rate of a chemical reaction depends upon:", textHi: "रासायनिक प्रतिक्रिया की दर किस पर निर्भर करती है?", options: [{en: "Concentration", hi: "सांद्रता"}, {en: "Temperature", hi: "तापमान"}, {en: "Presence of a catalyst", hi: "उत्प्रेरक की उपस्थिति"}, {en: "All of the above", hi: "उपरोक्त सभी"}], ans: 4 },
    { type: 'MCQ', textEn: "From a chemical perspective, a protein is basically a:", textHi: "रासायनिक दृष्टिकोण से, प्रोटीन मूल रूप से एक होता है:", options: [{en: "Polymer (of amino acids)", hi: "बहुलक (अमीनो एसिड का)"}, {en: "Simple monomer", hi: "सरल मोनोमर"}, {en: "Inorganic ion", hi: "अकार्बनिक आयन"}, {en: "Gas", hi: "गैस"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the approximate value of Avogadro's number?", textHi: "अवोगाद्रो संख्या (Avogadro's number) का अनुमानित मान क्या है?", options: [{en: "6.022 × 10²³", hi: "6.022 × 10²³"}, {en: "6.022 × 10⁻²³", hi: "6.022 × 10⁻²³"}, {en: "1.602 × 10⁻¹⁹", hi: "1.602 × 10⁻¹⁹"}, {en: "9.11 × 10⁻³¹", hi: "9.11 × 10⁻³¹"}], ans: 1 },
    { type: 'MCQ', textEn: "The formula used to calculate pH is:", textHi: "pH की गणना करने के लिए प्रयुक्त सूत्र है:", options: [{en: "-log₁₀[H⁺]", hi: "-log₁₀[H⁺]"}, {en: "log₁₀[H⁺]", hi: "log₁₀[H⁺]"}, {en: "-ln[H⁺]", hi: "-ln[H⁺]"}, {en: "[H⁺]²", hi: "[H⁺]²"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the hybridization of the carbon atom in a methane (CH₄) molecule?", textHi: "मीथेन (CH₄) अणु में कार्बन परमाणु का संकरण क्या है?", options: [{en: "sp", hi: "sp"}, {en: "sp²", hi: "sp²"}, {en: "sp³", hi: "sp³"}, {en: "dsp²", hi: "dsp²"}], ans: 3 },
    { type: 'MCQ', textEn: "The expected H-C-H bond angle in a molecule of CH₄ is:", textHi: "CH₄ के एक अणु में अपेक्षित H-C-H आबंध कोण है:", options: [{en: "90°", hi: "90°"}, {en: "109.5°", hi: "109.5°"}, {en: "120°", hi: "120°"}, {en: "180°", hi: "180°"}], ans: 2 },
    { type: 'MCQ', textEn: "A common unit to express the rate of a chemical reaction is:", textHi: "रासायनिक प्रतिक्रिया की दर को व्यक्त करने के लिए एक सामान्य इकाई है:", options: [{en: "mol/L/s", hi: "mol/L/s"}, {en: "mol/kg", hi: "mol/kg"}, {en: "s/mol", hi: "s/mol"}, {en: "L/mol", hi: "L/mol"}], ans: 1 },
    { type: 'Numerical', textEn: "If you have 2 moles of an ideal gas, roughly how many molecules are there? (Use 6.022e23 * 2 = 1.204e24). Enter base number like 1.204", textHi: "यदि आपके पास एक आदर्श गैस के 2 मोल हैं, तो अणुओं की संख्या क्या होगी? (प्रारूप: 1.204e24 के लिए 1.204 दर्ज करें)", ans: "1.204" },
    { type: 'Numerical', textEn: "A 1M solution contains how many moles of solute in 1 Litre of the solution?", textHi: "एक 1M विलयन के 1 लीटर में विलेय के कितने मोल होते हैं?", ans: "1" },
    { type: 'Numerical', textEn: "If the pH of a solution is 3, what is the concentration of H⁺ ions in mol/L? (Enter 0.001 or 1e-3 format as 10^-3 coefficient -> 0.001)", textHi: "यदि किसी विलयन का pH 3 है, तो H⁺ आयनों की सांद्रता mol/L में क्या होगी? (दशमलव प्रारूप 0.001)", ans: "0.001" },
    { type: 'Numerical', textEn: "What is the maximum number of electrons that can be accommodated in the principal shell n = 3?", textHi: "मुख्य कोश n = 3 में अधिकतम कितने इलेक्ट्रॉन रखे जा सकते हैं?", ans: "18" },
    { type: 'Numerical', textEn: "What is the molar mass of Carbon Dioxide (CO₂) in g/mol?", textHi: "कार्बन डाइऑक्साइड (CO₂) का मोलर द्रव्यमान (g/mol में) क्या है?", ans: "44" }
];

const mathQuestions_6: any[] = [
    { type: 'MCQ', textEn: "The value of lim(x→0) (tanx / x) is:", textHi: "lim(x→0) (tanx / x) का मान है:", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "-1", hi: "-1"}, {en: "∞", hi: "∞"}], ans: 2 },
    { type: 'MCQ', textEn: "The derivative of cos(x) with respect to x is:", textHi: "x के सापेक्ष cos(x) का अवकलज (derivative) है:", options: [{en: "sin(x)", hi: "sin(x)"}, {en: "-sin(x)", hi: "-sin(x)"}, {en: "cos(x)", hi: "cos(x)"}, {en: "-cos(x)", hi: "-cos(x)"}], ans: 2 },
    { type: 'MCQ', textEn: "The indefinite integral ∫ eˣ dx is equal to:", textHi: "अनिश्चित समाकलन ∫ eˣ dx किसके बराबर है?", options: [{en: "eˣ + C", hi: "eˣ + C"}, {en: "ln(x) + C", hi: "ln(x) + C"}, {en: "x + C", hi: "x + C"}, {en: "1/x + C", hi: "1/x + C"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the determinant of the 2x2 identity matrix [[1, 0], [0, 1]]?", textHi: "2x2 तत्समक आव्यूह (identity matrix) [[1, 0], [0, 1]] का सारणिक (determinant) क्या है?", options: [{en: "1", hi: "1"}, {en: "0", hi: "0"}, {en: "-1", hi: "-1"}, {en: "2", hi: "2"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the modulus of the complex number i (i.e., |i|)?", textHi: "सम्मिश्र संख्या i का मापांक (modulus) क्या है (|i|)?", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "-1", hi: "-1"}, {en: "i", hi: "i"}], ans: 2 },
    { type: 'MCQ', textEn: "For any real number x, the value of sin²x + cos²x is:", textHi: "किसी भी वास्तविक संख्या x के लिए, sin²x + cos²x का मान है:", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "2", hi: "2"}, {en: "-1", hi: "-1"}], ans: 2 },
    { type: 'MCQ', textEn: "What is the slope of the straight line changing as y = 2x?", textHi: "सरल रेखा y = 2x की ढाल (slope) क्या है?", options: [{en: "1", hi: "1"}, {en: "2", hi: "2"}, {en: "3", hi: "3"}, {en: "0", hi: "0"}], ans: 2 },
    { type: 'MCQ', textEn: "The distance between the origin (0,0) and the point (3,4) is:", textHi: "मूल बिंदु (0,0) और बिंदु (3,4) के बीच की दूरी है:", options: [{en: "5", hi: "5"}, {en: "4", hi: "4"}, {en: "3", hi: "3"}, {en: "7", hi: "7"}], ans: 1 },
    { type: 'MCQ', textEn: "The value of 5! (5 factorial) is:", textHi: "5! (5 का क्रमगुणित) का मान है:", options: [{en: "120", hi: "120"}, {en: "60", hi: "60"}, {en: "20", hi: "20"}, {en: "100", hi: "100"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the arithmetic mean of the numbers 2, 4, and 6?", textHi: "संख्याओं 2, 4, और 6 का समांतर माध्य (mean) क्या है?", options: [{en: "4", hi: "4"}, {en: "3", hi: "3"}, {en: "5", hi: "5"}, {en: "2", hi: "2"}], ans: 1 },
    { type: 'MCQ', textEn: "The value of cos(0) is:", textHi: "cos(0) का मान है:", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "-1", hi: "-1"}, {en: "2", hi: "2"}], ans: 2 },
    { type: 'MCQ', textEn: "The value of log₁₀(10) is:", textHi: "log₁₀(10) का मान है:", options: [{en: "1", hi: "1"}, {en: "0", hi: "0"}, {en: "10", hi: "10"}, {en: "-1", hi: "-1"}], ans: 1 },
    { type: 'MCQ', textEn: "The magnitude of the vector 3i + 4j is:", textHi: "सदिश 3i + 4j का परिमाण (magnitude) है:", options: [{en: "5", hi: "5"}, {en: "4", hi: "4"}, {en: "3", hi: "3"}, {en: "7", hi: "7"}], ans: 1 },
    { type: 'MCQ', textEn: "The correct formula for combination nCr is:", textHi: "संचय (Combination) nCr का सही सूत्र है:", options: [{en: "n! / [r!(n-r)!]", hi: "n! / [r!(n-r)!]"}, {en: "n!", hi: "n!"}, {en: "r!", hi: "r!"}, {en: "n! / (n-r)!", hi: "n! / (n-r)!"}], ans: 1 },
    { type: 'MCQ', textEn: "The value of tan(45°) is:", textHi: "tan(45°) का मान है:", options: [{en: "1", hi: "1"}, {en: "0", hi: "0"}, {en: "-1", hi: "-1"}, {en: "2", hi: "2"}], ans: 1 },
    { type: 'MCQ', textEn: "The derivative of x² with respect to x is:", textHi: "x के सापेक्ष x² का अवकलज है:", options: [{en: "2x", hi: "2x"}, {en: "x", hi: "x"}, {en: "x²/2", hi: "x²/2"}, {en: "2", hi: "2"}], ans: 1 },
    { type: 'MCQ', textEn: "The indefinite integral ∫ 1 dx is:", textHi: "अनिश्चित समाकलन ∫ 1 dx है:", options: [{en: "x + C", hi: "x + C"}, {en: "1 + C", hi: "1 + C"}, {en: "x² + C", hi: "x² + C"}, {en: "0", hi: "0"}], ans: 1 },
    { type: 'MCQ', textEn: "The limit lim(x→∞) (1/x) evaluates to:", textHi: "सीमा lim(x→∞) (1/x) का मान क्या है?", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "∞", hi: "∞"}, {en: "Undefined", hi: "अपरिभाषित"}], ans: 1 },
    { type: 'MCQ', textEn: "The absolute value of -5 (i.e., |-5|) is:", textHi: "-5 का निरपेक्ष मान (absolute value) अर्थात |-5| है:", options: [{en: "5", hi: "5"}, {en: "-5", hi: "-5"}, {en: "0", hi: "0"}, {en: "Undefined", hi: "अपरिभाषित"}], ans: 1 },
    { type: 'MCQ', textEn: "The natural logarithm of 1 (ln 1) is equal to:", textHi: "1 का प्राकृतिक लघुगणक (ln 1) किसके बराबर है?", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "e", hi: "e"}, {en: "10", hi: "10"}], ans: 1 },
    { type: 'Numerical', textEn: "Evaluate the definite integral ∫₀¹ x² dx. (Enter the decimal value like 0.33)", textHi: "निश्चित समाकलन ∫₀¹ x² dx का मान ज्ञात करें। (दशमलव अंश दर्ज करें)", ans: "0.33" },
    { type: 'Numerical', textEn: "Find the value of the derivative d/dx(x³) at x = 1.", textHi: "x = 1 पर अवकलज d/dx(x³) का मान ज्ञात करें।", ans: "3" },
    { type: 'Numerical', textEn: "What is the probability of getting a head when flipping a fair coin? (Enter as decimal)", textHi: "एक निष्पक्ष सिक्के को उछालने पर चित (head) आने की प्रायिकता क्या है? (दशमलव में)", ans: "0.5" },
    { type: 'Numerical', textEn: "Calculate the determinant of the matrix [[2, 1], [1, 2]].", textHi: "आव्यूह [[2, 1], [1, 2]] का सारणिक ज्ञात करें।", ans: "3" },
    { type: 'Numerical', textEn: "What is the sum of the first four natural numbers: 1 + 2 + 3 + 4?", textHi: "प्रथम चार प्राकृतिक संख्याओं: 1 + 2 + 3 + 4 का योग क्या है?", ans: "10" }
];

export const mock6Questions: QuestionType[] = Array.from({ length: 75 }).map((_, i) => {
    let subject = 'Physics';
    if (i >= 25 && i < 50) subject = 'Chemistry';
    if (i >= 50) subject = 'Mathematics';
    
    const subjectIndex = i % 25;
    const type = subjectIndex < 20 ? 'MCQ' : 'Numerical';
    
    if (subject === 'Physics') {
        const physQ: any = physicsQuestions_6[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: physQ.type as 'MCQ' | 'Numerical',
            textEn: physQ.textEn || physQ.text || `[Mock 6] Physics Question ${subjectIndex + 1}`,
            textHi: physQ.textHi || physQ.text || `[Mock 6] Physics Question ${subjectIndex + 1} (Hi)`,
            options: physQ.type === 'MCQ' && physQ.options ? physQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 6 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 6 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: physQ.type === 'MCQ' ? physQ.ans as number : undefined,
            correctAnswer: physQ.type === 'Numerical' ? physQ.ans as string : undefined
        };
    }
    
    if (subject === 'Chemistry') {
        const chemQ: any = chemistryQuestions_6[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: chemQ.type as 'MCQ' | 'Numerical',
            textEn: chemQ.textEn || chemQ.text || `[Mock 6] Chemistry Question ${subjectIndex + 1}`,
            textHi: chemQ.textHi || chemQ.text || `[Mock 6] Chemistry Question ${subjectIndex + 1} (Hi)`,
            options: chemQ.type === 'MCQ' && chemQ.options ? chemQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 6 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 6 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: chemQ.type === 'MCQ' ? chemQ.ans as number : undefined,
            correctAnswer: chemQ.type === 'Numerical' ? chemQ.ans as string : undefined
        };
    }
    
    if (subject === 'Mathematics') {
        const mathQ: any = mathQuestions_6[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: mathQ.type as 'MCQ' | 'Numerical',
            textEn: mathQ.textEn || mathQ.text || `[Mock 6] Math Question ${subjectIndex + 1}`,
            textHi: mathQ.textHi || mathQ.text || `[Mock 6] Math Question ${subjectIndex + 1} (Hi)`,
            options: mathQ.type === 'MCQ' && mathQ.options ? mathQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 6 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 6 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: mathQ.type === 'MCQ' ? mathQ.ans as number : undefined,
            correctAnswer: mathQ.type === 'Numerical' ? mathQ.ans as string : undefined
        };
    }
    return {} as any;
});
