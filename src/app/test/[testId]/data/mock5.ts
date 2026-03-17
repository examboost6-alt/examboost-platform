import { QuestionType } from '../mockData';

const physicsQuestions_5: any[] = [
    { type: 'MCQ', textEn: "A point charge q is at the origin. What is the electric field at (2,0,0)?", textHi: "एक बिंदु आवेश q मूल बिंदु (origin) पर है। (2,0,0) पर विद्युत क्षेत्र क्या होगा?", options: [{en: "kq/4", hi: "kq/4"}, {en: "kq/2", hi: "kq/2"}, {en: "kq/8", hi: "kq/8"}, {en: "2kq", hi: "2kq"}], ans: 1 },
    { type: 'MCQ', textEn: "The work function is 2 eV and the incident wavelength is λ = 400 nm. What is K_max?", textHi: "कार्य फलन (Work function) 2 eV है और आपतित तरंगदैर्ध्य λ = 400 nm है। K_max क्या होगा?", options: [{en: "1.1 eV", hi: "1.1 eV"}, {en: "0 eV", hi: "0 eV"}, {en: "2.1 eV", hi: "2.1 eV"}, {en: "3.1 eV", hi: "3.1 eV"}], ans: 1 },
    { type: 'MCQ', textEn: "Three 2Ω resistors are connected in parallel. What is the equivalent resistance?", textHi: "तीन 2Ω प्रतिरोधक समानांतर में जुड़े हैं। समतुल्य प्रतिरोध क्या होगा?", options: [{en: "2/3 Ω", hi: "2/3 Ω"}, {en: "6 Ω", hi: "6 Ω"}, {en: "0.67 Ω", hi: "0.67 Ω"}, {en: "2 Ω", hi: "2 Ω"}], ans: 1 },
    { type: 'MCQ', textEn: "A capacitor has C = 4 μF and V = 50 V. The charge is:", textHi: "एक संधारित्र की धारिता C = 4 μF और V = 50 V है। आवेश (charge) है:", options: [{en: "200 μC", hi: "200 μC"}, {en: "2 μC", hi: "2 μC"}, {en: "200 C", hi: "200 C"}, {en: "0.2 mC", hi: "0.2 mC"}], ans: 1 },
    { type: 'MCQ', textEn: "The peak voltage is 220 V. What is its RMS value?", textHi: "शिखर वोल्टेज (Peak voltage) 220 V है। इसका RMS मान क्या होगा?", options: [{en: "155 V", hi: "155 V"}, {en: "220 V", hi: "220 V"}, {en: "311 V", hi: "311 V"}, {en: "110 V", hi: "110 V"}], ans: 1 },
    { type: 'MCQ', textEn: "For a convex lens, f = 25 cm and object distance u = -50 cm. What will be the image distance v?", textHi: "एक उत्तल लेंस के लिए, f = 25 cm और वस्तु की दूरी u = -50 cm है। छवि की दूरी v क्या होगी?", options: [{en: "50 cm", hi: "50 cm"}, {en: "-50 cm", hi: "-50 cm"}, {en: "25 cm", hi: "25 cm"}, {en: "∞", hi: "∞"}], ans: 1 },
    { type: 'MCQ', textEn: "The efficiency of a Carnot engine is 1/3 and T_hot = 300 K. What will be T_cold?", textHi: "एक कार्नोट इंजन की दक्षता 1/3 है और T_hot = 300 K है। T_cold क्या होगा?", options: [{en: "200 K", hi: "200 K"}, {en: "900 K", hi: "900 K"}, {en: "100 K", hi: "100 K"}, {en: "450 K", hi: "450 K"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the nature of current in a forward biased diode?", textHi: "अग्र दिशिक बायस (forward biased) डायोड में धारा की प्रकृति क्या है?", options: [{en: "Exponential increase", hi: "चरघातांकी (Exponential) वृद्धि"}, {en: "Linear", hi: "रैखिक"}, {en: "Decrease", hi: "कमी"}, {en: "Constant", hi: "स्थिर"}], ans: 1 },
    { type: 'MCQ', textEn: "For a solenoid, B = μ₀nI. If n = 1000 turns/m and I = 2 A, then B is approximately:", textHi: "एक परिनालिका के लिए, B = μ₀nI. यदि n = 1000 फेरे/मी और I = 2 A है, तो B लगभग है:", options: [{en: "2.5 mT", hi: "2.5 mT"}, {en: "0.25 mT", hi: "0.25 mT"}, {en: "25 mT", hi: "25 mT"}, {en: "0.025 mT", hi: "0.025 mT"}], ans: 1 },
    { type: 'MCQ', textEn: "If wave speed v = 50 m/s and frequency f = 20 Hz, what is the wavelength?", textHi: "यदि तरंग की गति v = 50 m/s और आवृत्ति f = 20 Hz है, तो तरंगदैर्ध्य क्या है?", options: [{en: "2.5 m", hi: "2.5 m"}, {en: "1000 m", hi: "1000 m"}, {en: "0.4 m", hi: "0.4 m"}, {en: "70 m", hi: "70 m"}], ans: 1 },
    { type: 'MCQ', textEn: "The electric field E on the axial line of an electric dipole (for r >> d) is:", textHi: "एक विद्युत द्विध्रुव की अक्षीय रेखा पर (r >> d के लिए) विद्युत क्षेत्र E होता है:", options: [{en: "2kp/r³", hi: "2kp/r³"}, {en: "kp/r³", hi: "kp/r³"}, {en: "kp/r²", hi: "kp/r²"}, {en: "2kp/r²", hi: "2kp/r²"}], ans: 1 },
    { type: 'MCQ', textEn: "In a pure AC capacitor circuit, the phase difference between current and voltage is:", textHi: "एक शुद्ध संधारित्र AC परिपथ में, धारा और वोल्टेज के बीच का कलांतर (phase difference) है:", options: [{en: "-90°", hi: "-90°"}, {en: "+90°", hi: "+90°"}, {en: "0°", hi: "0°"}, {en: "180°", hi: "180°"}], ans: 2 },
    { type: 'MCQ', textEn: "If an object starts from rest (u=0) with acceleration a=10 m/s² for t=2 s, its final velocity v is:", textHi: "यदि कोई वस्तु विराम (u=0) से त्वरण a=10 m/s² के साथ t=2 s के लिए चलना शुरू करती है, तो अंतिम वेग v है:", options: [{en: "20 m/s", hi: "20 m/s"}, {en: "10 m/s", hi: "10 m/s"}, {en: "40 m/s", hi: "40 m/s"}, {en: "5 m/s", hi: "5 m/s"}], ans: 1 },
    { type: 'MCQ', textEn: "A mass m=2 kg moving at u=5 m/s comes to rest. Work done by friction is:", textHi: "u=5 m/s की गति से चलने वाला 2 किलोग्राम का द्रव्यमान (m) विराम अवस्था में आता है। घर्षण द्वारा किया गया कार्य है:", options: [{en: "-25 J", hi: "-25 J"}, {en: "25 J", hi: "25 J"}, {en: "50 J", hi: "50 J"}, {en: "12.5 J", hi: "12.5 J"}], ans: 1 },
    { type: 'MCQ', textEn: "If moment of inertia I = 2 kg·m² and angular acceleration α = 3 rad/s², the torque is:", textHi: "यदि जड़त्व आघूर्ण I = 2 kg·m² और कोणीय त्वरण α = 3 rad/s² है, तो बल आघूर्ण (torque) है:", options: [{en: "6 N·m", hi: "6 N·m"}, {en: "2 N·m", hi: "2 N·m"}, {en: "3 N·m", hi: "3 N·m"}, {en: "1.5 N·m", hi: "1.5 N·m"}], ans: 1 },
    { type: 'MCQ', textEn: "A charge Q is inside a sphere. The electric flux through the sphere is:", textHi: "एक गोले के अंदर आवेश Q है। गोले के माध्यम से विद्युत फ्लक्स है:", options: [{en: "Q/ε₀", hi: "Q/ε₀"}, {en: "Qε₀", hi: "Qε₀"}, {en: "4πr²Q", hi: "4πr²Q"}, {en: "Q/4πε₀", hi: "Q/4πε₀"}], ans: 1 },
    { type: 'MCQ', textEn: "The de Broglie wavelength λ of an electron accelerated by 100V is approximately:", textHi: "100V से त्वरित इलेक्ट्रॉन की डी ब्रोगली तरंगदैर्ध्य λ है (लगभग):", options: [{en: "1.22 Å", hi: "1.22 Å"}, {en: "12.2 Å", hi: "12.2 Å"}, {en: "0.122 Å", hi: "0.122 Å"}, {en: "122 Å", hi: "122 Å"}], ans: 1 },
    { type: 'MCQ', textEn: "If Q = 100J, m = 0.1kg, and ΔT = 10°C, what is the specific heat?", textHi: "यदि Q = 100J, m = 0.1kg, और ΔT = 10°C है, तो विशिष्ट ऊष्मा क्या है?", options: [{en: "100 J/kg°C", hi: "100 J/kg°C"}, {en: "1000 J/kg°C", hi: "1000 J/kg°C"}, {en: "10 J/kg°C", hi: "10 J/kg°C"}, {en: "1 J/kg°C", hi: "1 J/kg°C"}], ans: 1 },
    { type: 'MCQ', textEn: "The typical frequency range for sky wave communication is:", textHi: "स्काई वेव (sky wave) संचार के लिए सामान्य आवृत्ति सीमा है:", options: [{en: "2–30 MHz", hi: "2–30 MHz"}, {en: "30–300 MHz", hi: "30–300 MHz"}, {en: "3–30 kHz", hi: "3–30 kHz"}, {en: "300 MHz–3 GHz", hi: "300 MHz–3 GHz"}], ans: 1 },
    { type: 'MCQ', textEn: "The dimensional formula [MLT⁻¹] represents which quantity?", textHi: "विमीय सूत्र [MLT⁻¹] किस भौतिक राशि को दर्शाता है?", options: [{en: "Work", hi: "कार्य"}, {en: "Power", hi: "शक्ति"}, {en: "Force", hi: "बल"}, {en: "Impulse", hi: "आवेग"}], ans: 4 },
    { type: 'Numerical', textEn: "3μF and 6μF capacitors are connected in parallel to a voltage V = 20V. What is the total stored energy (in μJ)?", textHi: "3μF और 6μF के संधारित्र समानांतर में V = 20V के वोल्टेज से जुड़े हैं। कुल संचित ऊर्जा (μJ में) क्या है?", ans: "1800" },
    { type: 'Numerical', textEn: "For a photon of wavelength λ = 600 nm, what is the energy in eV? (Use hc ≈ 1240 eV·nm)", textHi: "तरंगदैर्ध्य λ = 600 nm के फोटॉन के लिए, eV में ऊर्जा क्या है? (hc ≈ 1240 eV·nm लें)", ans: "2.07" },
    { type: 'Numerical', textEn: "10Ω and 20Ω resistors are connected in series. If the current is 5A, what is the power dissipated in the 20Ω resistor (in Watts)?", textHi: "10Ω और 20Ω के प्रतिरोधक श्रृंखला में जुड़े हैं। यदि वर्ग धारा 5A है, तो 20Ω प्रतिरोधक में क्षयित शक्ति (वाट में) क्या है?", ans: "500" },
    { type: 'Numerical', textEn: "A glass slab has refractive index μ = 1.5 and thickness 5 cm. What is the normal shift (apparent distance shift) in cm?", textHi: "एक कांच के स्लैब का अपवर्तनांक μ = 1.5 है और मोटाई 5 cm है। सामान्य विस्थापन (आभासी गहराई में शिफ्ट) cm में क्या है?", ans: "1.67" },
    { type: 'Numerical', textEn: "An inductor has L = 2 mH and the current changes at di/dt = 1000 A/s. What is the magnitude of induced emf (in Volts)?", textHi: "एक प्रेरकत्व L = 2 mH है और धारा di/dt = 1000 A/s पर बदलती है। प्रेरित emf का परिमाण (वोल्ट में) क्या है?", ans: "2" }
];

const chemistryQuestions_5: any[] = [
    { type: 'MCQ', textEn: "For an ideal gas, ΔU = 0 occurs in which process?", textHi: "एक आदर्श गैस के लिए, ΔU = 0 (आंतरिक ऊर्जा में परिवर्तन शून्य) किस प्रक्रिया में होता है?", options: [{en: "Isothermal", hi: "समतापीय"}, {en: "Adiabatic", hi: "रुद्धोष्म"}, {en: "Isochoric", hi: "समआयतनिक"}, {en: "Isobaric", hi: "समदाबीय"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the hybridization of [Fe(CN)₆]⁴⁻?", textHi: "[Fe(CN)₆]⁴⁻ का संकरण (hybridization) क्या है?", options: [{en: "sp³", hi: "sp³"}, {en: "dsp²", hi: "dsp²"}, {en: "d²sp³", hi: "d²sp³"}, {en: "sp³d²", hi: "sp³d²"}], ans: 3 },
    { type: 'MCQ', textEn: "Which group has the strongest +I (inductive) effect?", textHi: "किस समूह का सबसे मजबूत +I (प्रेरणिक) प्रभाव होता है?", options: [{en: "CH₃", hi: "CH₃"}, {en: "C₂H₅", hi: "C₂H₅"}, {en: "(CH₃)₃C–", hi: "(CH₃)₃C–"}, {en: "H", hi: "H"}], ans: 3 },
    { type: 'MCQ', textEn: "If E°_cell is positive, the reaction is:", textHi: "यदि E°_cell धनात्मक है, तो अभिक्रिया है:", options: [{en: "Non-spontaneous", hi: "अस्वतः (Non-spontaneous)"}, {en: "Spontaneous", hi: "स्वतः (Spontaneous)"}, {en: "No reaction", hi: "कोई प्रतिक्रिया नहीं"}, {en: "In Equilibrium", hi: "साम्यावस्था में"}], ans: 2 },
    { type: 'MCQ', textEn: "What is the shape of NH₃?", textHi: "NH₃ का आकार क्या है?", options: [{en: "Linear", hi: "रैखिक"}, {en: "Trigonal planar", hi: "त्रिकोणीय समतलीय"}, {en: "Trigonal pyramidal", hi: "त्रिकोणीय पिरामिडीय"}, {en: "Tetrahedral", hi: "चतुष्फलकीय"}], ans: 3 },
    { type: 'MCQ', textEn: "For which compound is Tollens' test positive?", textHi: "किस यौगिक के लिए टॉलेन परीक्षण (Tollens' test) सकारात्मक है?", options: [{en: "Ketone", hi: "केटोन"}, {en: "Aldehyde", hi: "एल्डिहाइड"}, {en: "Alcohol", hi: "एल्कोहल"}, {en: "Ether", hi: "ईथर"}], ans: 2 },
    { type: 'MCQ', textEn: "For a zero-order reaction, the [Reactant] vs time graph is:", textHi: "शून्य कोटि की अभिक्रिया के लिए, [अभिकारक] बनाम समय का ग्राफ कैसा होता है?", options: [{en: "Linear decrease", hi: "रैखिक कमी"}, {en: "Exponential", hi: "चरघातांकी"}, {en: "Parabolic", hi: "परवलयिक"}, {en: "Constant", hi: "स्थिर"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the magnetic nature of the Zn²⁺ ion?", textHi: "Zn²⁺ आयन की चुंबकीय प्रकृति क्या है?", options: [{en: "Paramagnetic", hi: "अनुचुंबकीय"}, {en: "Diamagnetic", hi: "प्रतिचुंबकीय"}, {en: "Ferromagnetic", hi: "लौहचुंबकीय"}, {en: "Antiferromagnetic", hi: "प्रतिलौहचुंबकीय"}], ans: 2 },
    { type: 'MCQ', textEn: "In Benzene, the C–C bond length is:", textHi: "बेंजीन में C–C बंध की लंबाई होती है:", options: [{en: "Like a single bond", hi: "कहरे (single) बंध जैसी"}, {en: "Like a double bond", hi: "दोहरे (double) बंध जैसी"}, {en: "Equal intermediate (partial double)", hi: "समान मध्यवर्ती (आंशिक दोहरा)"}, {en: "Varies", hi: "भिन्न होती है"}], ans: 3 },
    { type: 'MCQ', textEn: "Raoult’s law is strictly valid for which type of solution?", textHi: "राउल्ट का नियम मूलतः किस प्रकार के विलयन के लिए मान्य है?", options: [{en: "Ideal solution", hi: "आदर्श विलयन"}, {en: "Non-ideal solution", hi: "अनादर्श विलयन"}, {en: "Strong electrolytes", hi: "प्रबल इलेक्ट्रोलाइट्स"}, {en: "Colloidal solution", hi: "कोलॉइडी विलयन"}], ans: 1 },
    { type: 'MCQ', textEn: "The expected bond angle in ideal sp³ hybridization is:", textHi: "आदर्श sp³ संकरण में अपेक्षित बंध कोण (bond angle) क्या है?", options: [{en: "90°", hi: "90°"}, {en: "109.5°", hi: "109.5°"}, {en: "120°", hi: "120°"}, {en: "180°", hi: "180°"}], ans: 2 },
    { type: 'MCQ', textEn: "Which condition favours the SN1 reaction?", textHi: "SN1 प्रतिक्रिया के लिए कौन सी स्थिति अनुकूल होती है?", options: [{en: "Strong nucleophile", hi: "मजबूत न्यूक्लियोफाइल"}, {en: "Weak nucleophile", hi: "कमजोर न्यूक्लियोफाइल"}, {en: "Primary carbon substrate", hi: "प्राथमिक कार्बन"}, {en: "High temperature only", hi: "केवल उच्च तापमान"}], ans: 2 },
    { type: 'MCQ', textEn: "The de Broglie wavelength primarily depends on:", textHi: "डी ब्रोगली तरंगदैर्ध्य मुख्य रूप से किस पर निर्भर करती है?", options: [{en: "Velocity only", hi: "केवल वेग"}, {en: "Mass only", hi: "केवल द्रव्यमान"}, {en: "Momentum", hi: "संवेग"}, {en: "Energy", hi: "ऊर्जा"}], ans: 3 },
    { type: 'MCQ', textEn: "How does Ionization energy generally change in the periodic table?", textHi: "आवर्त सारणी में आयनन ऊर्जा सामान्यतः कैसे बदलती है?", options: [{en: "Increases down the group", hi: "समूह में नीचे जाने पर बढ़ती है"}, {en: "Increases across the period", hi: "आवर्त में बायें से दायें जाने पर बढ़ती है"}, {en: "Random behavior", hi: "यादृच्छिक व्यवहार"}, {en: "Remains constant", hi: "स्थिर रहती है"}], ans: 2 },
    { type: 'MCQ', textEn: "The oxidation of a primary alcohol generally produces:", textHi: "प्राथमिक शराब (alcohol) के ऑक्सीकरण से सामान्यतः क्या बनता है?", options: [{en: "Ketone", hi: "केटोन"}, {en: "Aldehyde", hi: "एल्डिहाइड"}, {en: "Acid anhydrides", hi: "अम्ल एनहाइड्राइड"}, {en: "Ether", hi: "ईथर"}], ans: 2 },
    { type: 'MCQ', textEn: "If the equilibrium constant Kc > 1, it means:", textHi: "यदि साम्य नियतांक Kc > 1 है, तो इसका अर्थ है:", options: [{en: "Products are favoured at equilibrium", hi: "साम्यावस्था में उत्पादों का पक्ष लिया जाता है"}, {en: "Reactants are favoured", hi: "अभिकारकों का पक्ष लिया जाता है"}, {en: "Reaction is endothermic", hi: "अभिक्रिया ऊष्माशोषी है"}, {en: "Reaction stops", hi: "अभिक्रिया रुक जाती है"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the molecular structure (shape) of Ozone (O₃)?", textHi: "ओजोन (O₃) की आणविक संरचना (आकार) क्या है?", options: [{en: "Linear", hi: "रैखिक"}, {en: "Bent / V-shaped", hi: "मुड़ा हुआ (Bent) / V-आकार"}, {en: "Trigonal planar", hi: "त्रिकोणीय समतलीय"}, {en: "Tetrahedral", hi: "चतुष्फलकीय"}], ans: 2 },
    { type: 'MCQ', textEn: "What type of carbohydrate is Glucose?", textHi: "ग्लूकोज किस प्रकार का कार्बोहाइड्रेट है?", options: [{en: "Monosaccharide", hi: "मोनोसैकेराइड"}, {en: "Disaccharide", hi: "डाइसैकेराइड"}, {en: "Polysaccharide", hi: "पॉलीसैकेराइड"}, {en: "Oligosaccharide", hi: "ओलिगोसैकेराइड"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the SI unit of Enthalpy?", textHi: "एन्थैल्पी (Enthalpy) की SI इकाई क्या है?", options: [{en: "Joule (J)", hi: "जूल (J)"}, {en: "Kelvin (K)", hi: "केल्विन (K)"}, {en: "Watt (W)", hi: "वॉट (W)"}, {en: "Pascal (Pa)", hi: "पास्कल (Pa)"}], ans: 1 },
    { type: 'MCQ', textEn: "In coordination chemistry, a ligand is generally an:", textHi: "उपसहसंयोजन रसायन विज्ञान में, लिगैंड सामान्यतः क्या होता है?", options: [{en: "Electron pair donor", hi: "इलेक्ट्रॉन युग्म दाता (Electron pair donor)"}, {en: "Electron pair acceptor", hi: "इलेक्ट्रॉन युग्म ग्राही"}, {en: "Proton donor", hi: "प्रोटॉन दाता"}, {en: "Proton acceptor", hi: "प्रोटॉन ग्राही"}], ans: 1 },
    { type: 'Numerical', textEn: "How many moles are there in 22 g of CO₂? (Molar mass of CO₂ = 44 g/mol)", textHi: "22 ग्राम CO₂ में कितने मोल होंगे? (CO₂ का मोलर द्रव्यमान = 44 g/mol)", ans: "0.5" },
    { type: 'Numerical', textEn: "The charge of 1 Faraday is equivalent to how many Coulombs?", textHi: "1 फैराडे का आवेश कितने कूलम्ब (Coulombs) के बराबर होता है?", ans: "96500" },
    { type: 'Numerical', textEn: "If 1 mol of solute is dissolved in 1 kg of solvent, what is the molality of the solution?", textHi: "यदि 1 मोल विलेय को 1 kg विलायक में घोला जाता है, तो विलयन की मोललता (molality) क्या होगी?", ans: "1" },
    { type: 'Numerical', textEn: "Rate of reaction is independent of reactant concentration in which order kinetics?", textHi: "किस कोटि (order) की अभिक्रिया में प्रतिक्रिया की दर अभिकारक की सांद्रता से स्वतंत्र होती है?", ans: "0" },
    { type: 'Numerical', textEn: "What is the maximum number of electrons that can be accommodated in the n = 2 shell?", textHi: "n=2 कोश (shell) में अधिकतम कितने इलेक्ट्रॉन रह सकते हैं?", ans: "8" }
];

const mathQuestions_5: any[] = [
    { type: 'MCQ', textEn: "Physics (Modern): Threshold wavelength = 400 nm, incident wavelength = 300 nm. Stopping potential is?", textHi: "(भौतिकी - आधुनिक) देहली तरंगदैर्ध्य = 400 nm, आपतित तरंगदैर्ध्य = 300 nm है। निरोधी विभव (Stopping potential) क्या होगा?", options: [{en: "1.1 V", hi: "1.1 V"}, {en: "0.41 V", hi: "0.41 V"}, {en: "2.07 V", hi: "2.07 V"}, {en: "0 V", hi: "0 V"}], ans: 1 },
    { type: 'MCQ', textEn: "Chemistry (Coordination): What is the geometry and magnetic nature of [NiCl₄]²⁻?", textHi: "(रसायन विज्ञान - उपसहसंयोजन) [NiCl₄]²⁻ की ज्यामिति और चुंबकीय प्रकृति क्या है?", options: [{en: "Tetrahedral, paramagnetic", hi: "चतुष्फलकीय, अनुचुंबकीय"}, {en: "Square planar, diamagnetic", hi: "वर्ग समतलीय, प्रतिचुंबकीय"}, {en: "Tetrahedral, diamagnetic", hi: "चतुष्फलकीय, प्रतिचुंबकीय"}, {en: "Square planar, paramagnetic", hi: "वर्ग समतलीय, अनुचुंबकीय"}], ans: 1 },
    { type: 'MCQ', textEn: "Maths: The value of the definite integral ∫₀^(π/2) sin⁴x dx is:", textHi: "गणित: निश्चित समाकलन ∫₀^(π/2) sin⁴x dx का मान है:", options: [{en: "π/8", hi: "π/8"}, {en: "3π/16", hi: "3π/16"}, {en: "π/4", hi: "π/4"}, {en: "π/16", hi: "π/16"}], ans: 2 },
    { type: 'MCQ', textEn: "Physics (Electrostatics): A capacitor C = 2 μF is charged to V = 100 V. The stored energy is:", textHi: "(भौतिकी - स्थिरवैद्युतिकी) एक संधारित्र C = 2 μF को V = 100 V पर चार्ज किया गया है। संचित ऊर्जा है:", options: [{en: "0.01 J", hi: "0.01 J"}, {en: "0.02 J", hi: "0.02 J"}, {en: "200 J", hi: "200 J"}, {en: "10 J", hi: "10 J"}], ans: 1 },
    { type: 'MCQ', textEn: "Chemistry: What is the bond order of the NO molecule?", textHi: "रसायन विज्ञान: NO अणु की आबंध कोटि (Bond order) क्या है?", options: [{en: "2.5", hi: "2.5"}, {en: "3", hi: "3"}, {en: "2", hi: "2"}, {en: "1.5", hi: "1.5"}], ans: 1 },
    { type: 'MCQ', textEn: "Maths (Complex Numbers): The locus represented by |z − 1| = |z − i| is:", textHi: "गणित: सम्मिश्र संख्या में |z − 1| = |z − i| द्वारा दर्शायी गई बिंदु-पथ (locus) है:", options: [{en: "x = y", hi: "रेखा x = y"}, {en: "x = 1/2", hi: "रेखा x = 1/2"}, {en: "y = 1/2", hi: "रेखा y = 1/2"}, {en: "A Circle", hi: "एक वृत्त"}], ans: 1 },
    { type: 'MCQ', textEn: "Physics: Equivalent resistance of 2Ω and 3Ω connected in parallel is:", textHi: "(भौतिकी) समानांतर में जुड़े 2Ω और 3Ω का समतुल्य प्रतिरोध है:", options: [{en: "1.2 Ω", hi: "1.2 Ω"}, {en: "5 Ω", hi: "5 Ω"}, {en: "6/5 Ω (1.2)", hi: "6/5 Ω (1.2)"}, {en: "1 Ω", hi: "1 Ω"}], ans: 1 },
    { type: 'MCQ', textEn: "Chemistry: What product is formed by the reaction of CH₃CH₂CHO with HCN?", textHi: "रसायन विज्ञान: CH₃CH₂CHO की HCN के साथ अभिक्रिया से क्या उत्पाद बनता है?", options: [{en: "CH₃CH(OH)CNCH₂CHO", hi: "CH₃CH(OH)CNCH₂CHO"}, {en: "CH₃CH₂CH(OH)CN", hi: "CH₃CH₂CH(OH)CN"}, {en: "CH₃CH(CN)CHO", hi: "CH₃CH(CN)CHO"}, {en: "No reaction", hi: "कोई प्रतिक्रिया नहीं"}], ans: 2 },
    { type: 'MCQ', textEn: "Maths (Probability): 3 fair coins are tossed. What is the probability of getting exactly 2 heads?", textHi: "गणित: 3 निष्पक्ष सिक्के उछाले जाते हैं। ठीक 2 चित (heads) आने की प्रायिकता क्या है?", options: [{en: "3/8", hi: "3/8"}, {en: "1/2", hi: "1/2"}, {en: "1/8", hi: "1/8"}, {en: "7/8", hi: "7/8"}], ans: 1 },
    { type: 'MCQ', textEn: "Physics (Thermo): A Carnot engine has 50% efficiency. If T_hot = 1000 K, what is T_cold?", textHi: "(भौतिकी) एक कार्नोट इंजन की दक्षता 50% है। यदि T_hot = 1000 K है, तो T_cold क्या होगा?", options: [{en: "500 K", hi: "500 K"}, {en: "273 K", hi: "273 K"}, {en: "400 K", hi: "400 K"}, {en: "600 K", hi: "600 K"}], ans: 1 },
    { type: 'MCQ', textEn: "Chemistry (p-Block): What is the nature of PCl₅ in the solid state?", textHi: "रसायन विज्ञान: ठोस अवस्था में PCl₅ की प्रकृति क्या होती है?", options: [{en: "Ionic", hi: "आयनिक"}, {en: "Covalent", hi: "सहसंयोजक"}, {en: "Metallic", hi: "धात्विक"}, {en: "Neutral molecule", hi: "उदासीन अणु"}], ans: 1 },
    { type: 'MCQ', textEn: "Maths (Matrices): If |A| = 4 for a 2×2 matrix A, then |adj A| is equal to:", textHi: "गणित: यदि एक 2×2 आव्यूह A के लिए |A| = 4 है, तो |adj A| का मान होगा:", options: [{en: "4", hi: "4"}, {en: "16", hi: "16"}, {en: "1/4", hi: "1/4"}, {en: "2", hi: "2"}], ans: 1 },
    { type: 'MCQ', textEn: "Physics (Optics): For a convex lens, f = 20 cm and u = -30 cm. What is the image distance v?", textHi: "(भौतिकी) उत्तल लेंस के लिए f = 20 cm और वस्तु दूरी u = -30 cm है। छवि की दूरी v क्या होगी?", options: [{en: "60 cm", hi: "60 cm"}, {en: "-60 cm", hi: "-60 cm"}, {en: "12 cm", hi: "12 cm"}, {en: "∞", hi: "∞"}], ans: 1 },
    { type: 'MCQ', textEn: "Chemistry: How many moles are there in 44 g of CO₂?", textHi: "रसायन विज्ञान: 44 ग्राम CO₂ में कितने मोल होते हैं?", options: [{en: "1", hi: "1"}, {en: "2", hi: "2"}, {en: "22.4", hi: "22.4"}, {en: "44", hi: "44"}], ans: 1 },
    { type: 'MCQ', textEn: "Maths (Conic): The eccentricity of the ellipse x²/9 + y²/4 = 1 is:", textHi: "गणित: दीर्घवृत्त x²/9 + y²/4 = 1 की उत्केंद्रता (eccentricity) है:", options: [{en: "√5/3", hi: "√5/3"}, {en: "1/3", hi: "1/3"}, {en: "√3/2", hi: "√3/2"}, {en: "0", hi: "0"}], ans: 1 },
    { type: 'MCQ', textEn: "Physics (AC): If the peak voltage is 100 V, what is its RMS value?", textHi: "(भौतिकी) यदि शिखर (peak) वोल्टेज 100 V है, तो इसका RMS मान क्या होगा?", options: [{en: "100 V", hi: "100 V"}, {en: "50 V", hi: "50 V"}, {en: "70.7 V", hi: "70.7 V"}, {en: "141 V", hi: "141 V"}], ans: 3 },
    { type: 'MCQ', textEn: "Chemistry: For N₂ + 3H₂ ⇌ 2NH₃, Kc = 0.5. What is the expression for Kp?", textHi: "रसायन विज्ञान: अभिक्रिया N₂ + 3H₂ ⇌ 2NH₃ के लिए Kc = 0.5 है। Kp क्या होगा?", options: [{en: "0.5 (RT)⁻²", hi: "0.5 (RT)⁻²"}, {en: "0.5 RT²", hi: "0.5 RT²"}, {en: "0.5", hi: "0.5"}, {en: "0.5 RT", hi: "0.5 RT"}], ans: 1 },
    { type: 'MCQ', textEn: "Maths (Trig): The value of sin(π/3 + θ) − sin(π/3 − θ) is equal to:", textHi: "गणित: sin(π/3 + θ) − sin(π/3 − θ) का मान किसके बराबर है?", options: [{en: "sinθ", hi: "sinθ"}, {en: "cosθ", hi: "cosθ"}, {en: "2sinθ", hi: "2sinθ"}, {en: "tanθ", hi: "tanθ"}], ans: 1 },
    { type: 'MCQ', textEn: "Physics (Kinematics): If initial velocity u = 10 m/s, acceleration a = 2 m/s², and t = 3 s. What is the displacement?", textHi: "(भौतिकी) यदि प्रारंभिक वेग u = 10 m/s, त्वरण a = 2 m/s², और t = 3 s है। विस्थापन (displacement) क्या होगा?", options: [{en: "30 m", hi: "30 m"}, {en: "39 m", hi: "39 m"}, {en: "36 m", hi: "36 m"}, {en: "33 m", hi: "33 m"}], ans: 2 },
    { type: 'MCQ', textEn: "Chemistry (Redox): What is the n-factor of KMnO₄ in an acidic medium?", textHi: "रसायन विज्ञान: अम्लीय माध्यम में KMnO₄ का n-factor क्या होता है?", options: [{en: "5", hi: "5"}, {en: "3", hi: "3"}, {en: "1", hi: "1"}, {en: "6", hi: "6"}], ans: 1 },
    { type: 'Numerical', textEn: "Physics (Capacitance): 2µF and 3µF capacitors are connected in series to a 100 V source. What is the charge (in µC) on them?", textHi: "(भौतिकी) 2µF और 3µF के संधारित्र 100 V स्रोत से श्रृंखला (series) में जुड़े हैं। उन पर आवेश (µC में) क्या है?", ans: "120" },
    { type: 'Numerical', textEn: "Chemistry: How many moles of oxygen atoms are there in 16 g of oxygen (O)?", textHi: "रसायन विज्ञान: 16 ग्राम ऑक्सीजन (O परमाणु) में मोल्स कितने होंगे?", ans: "1" },
    { type: 'Numerical', textEn: "Maths (Limit): Evaluate lim (x→∞) (ln x)² / x.", textHi: "गणित: lim (x→∞) (ln x)² / x का मान ज्ञात करें।", ans: "0" },
    { type: 'Numerical', textEn: "Physics: For wavelength λ = 500 nm, what is the energy in eV? (Use hc = 1240 eV·nm)", textHi: "(भौतिकी) λ = 500 nm के लिए, ऊर्जा eV में क्या होगी? (hc = 1240 eV·nm)", ans: "2.48" },
    { type: 'Numerical', textEn: "Maths (Derivative): If f(x) = eˣ sinx. What is the value of f'(0)?", textHi: "गणित: यदि f(x) = eˣ sinx है। f'(0) का मान क्या होगा?", ans: "1" }
];

export const mock5Questions: QuestionType[] = Array.from({ length: 75 }).map((_, i) => {
    let subject = 'Physics';
    if (i >= 25 && i < 50) subject = 'Chemistry';
    if (i >= 50) subject = 'Mathematics';
    
    const subjectIndex = i % 25;
    const type = subjectIndex < 20 ? 'MCQ' : 'Numerical';
    
    if (subject === 'Physics') {
        const physQ: any = physicsQuestions_5[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: physQ.type as 'MCQ' | 'Numerical',
            textEn: physQ.textEn || physQ.text || `[Mock 5] Physics Question ${subjectIndex + 1}`,
            textHi: physQ.textHi || physQ.text || `[Mock 5] Physics Question ${subjectIndex + 1} (Hi)`,
            options: physQ.type === 'MCQ' && physQ.options ? physQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 5 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 5 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: physQ.type === 'MCQ' ? physQ.ans as number : undefined,
            correctAnswer: physQ.type === 'Numerical' ? physQ.ans as string : undefined
        };
    }
    
    if (subject === 'Chemistry') {
        const chemQ: any = chemistryQuestions_5[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: chemQ.type as 'MCQ' | 'Numerical',
            textEn: chemQ.textEn || chemQ.text || `[Mock 5] Chemistry Question ${subjectIndex + 1}`,
            textHi: chemQ.textHi || chemQ.text || `[Mock 5] Chemistry Question ${subjectIndex + 1} (Hi)`,
            options: chemQ.type === 'MCQ' && chemQ.options ? chemQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 5 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 5 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: chemQ.type === 'MCQ' ? chemQ.ans as number : undefined,
            correctAnswer: chemQ.type === 'Numerical' ? chemQ.ans as string : undefined
        };
    }
    
    if (subject === 'Mathematics') {
        const mathQ: any = mathQuestions_5[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: mathQ.type as 'MCQ' | 'Numerical',
            textEn: mathQ.textEn || mathQ.text || `[Mock 5] Math Question ${subjectIndex + 1}`,
            textHi: mathQ.textHi || mathQ.text || `[Mock 5] Math Question ${subjectIndex + 1} (Hi)`,
            options: mathQ.type === 'MCQ' && mathQ.options ? mathQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 5 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 5 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: mathQ.type === 'MCQ' ? mathQ.ans as number : undefined,
            correctAnswer: mathQ.type === 'Numerical' ? mathQ.ans as string : undefined
        };
    }
    return {} as any;
});
