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
    { type: 'MCQ', textEn: "For a solenoid, B = μ_0nI. If n = 1000 turns/m and I = 2 A, then B is approximately:", textHi: "एक परिनालिका के लिए, B = μ_0nI. यदि n = 1000 फेरे/मी और I = 2 A है, तो B लगभग है:", options: [{en: "2.5 mT", hi: "2.5 mT"}, {en: "0.25 mT", hi: "0.25 mT"}, {en: "25 mT", hi: "25 mT"}, {en: "0.025 mT", hi: "0.025 mT"}], ans: 1 },
    { type: 'MCQ', textEn: "If wave speed v = 50 m/s and frequency f = 20 Hz, what is the wavelength?", textHi: "यदि तरंग की गति v = 50 m/s और आवृत्ति f = 20 Hz है, तो तरंगदैर्ध्य क्या है?", options: [{en: "2.5 m", hi: "2.5 m"}, {en: "1000 m", hi: "1000 m"}, {en: "0.4 m", hi: "0.4 m"}, {en: "70 m", hi: "70 m"}], ans: 1 },
    { type: 'MCQ', textEn: "The electric field E on the axial line of an electric dipole (for r >> d) is:", textHi: "एक विद्युत द्विध्रुव की अक्षीय रेखा पर (r >> d के लिए) विद्युत क्षेत्र E होता है:", options: [{en: "2kp/r^3", hi: "2kp/r^3"}, {en: "kp/r^3", hi: "kp/r^3"}, {en: "kp/r^2", hi: "kp/r^2"}, {en: "2kp/r^2", hi: "2kp/r^2"}], ans: 1 },
    { type: 'MCQ', textEn: "In a pure AC capacitor circuit, the phase difference between current and voltage is:", textHi: "एक शुद्ध संधारित्र AC परिपथ में, धारा और वोल्टेज के बीच का कलांतर (phase difference) है:", options: [{en: "-90°", hi: "-90°"}, {en: "+90°", hi: "+90°"}, {en: "0°", hi: "0°"}, {en: "180°", hi: "180°"}], ans: 2 },
    { type: 'MCQ', textEn: "If an object starts from rest (u=0) with acceleration a=10 m/s^2 for t=2 s, its final velocity v is:", textHi: "यदि कोई वस्तु विराम (u=0) से त्वरण a=10 m/s^2 के साथ t=2 s के लिए चलना शुरू करती है, तो अंतिम वेग v है:", options: [{en: "20 m/s", hi: "20 m/s"}, {en: "10 m/s", hi: "10 m/s"}, {en: "40 m/s", hi: "40 m/s"}, {en: "5 m/s", hi: "5 m/s"}], ans: 1 },
    { type: 'MCQ', textEn: "A mass m=2 kg moving at u=5 m/s comes to rest. Work done by friction is:", textHi: "u=5 m/s की गति से चलने वाला 2 किलोग्राम का द्रव्यमान (m) विराम अवस्था में आता है। घर्षण द्वारा किया गया कार्य है:", options: [{en: "-25 J", hi: "-25 J"}, {en: "25 J", hi: "25 J"}, {en: "50 J", hi: "50 J"}, {en: "12.5 J", hi: "12.5 J"}], ans: 1 },
    { type: 'MCQ', textEn: "If moment of inertia I = 2 kg·m^2 and angular acceleration α = 3 rad/s^2, the torque is:", textHi: "यदि जड़त्व आघूर्ण I = 2 kg·m^2 और कोणीय त्वरण α = 3 rad/s^2 है, तो बल आघूर्ण (torque) है:", options: [{en: "6 N·m", hi: "6 N·m"}, {en: "2 N·m", hi: "2 N·m"}, {en: "3 N·m", hi: "3 N·m"}, {en: "1.5 N·m", hi: "1.5 N·m"}], ans: 1 },
    { type: 'MCQ', textEn: "A charge Q is inside a sphere. The electric flux through the sphere is:", textHi: "एक गोले के अंदर आवेश Q है। गोले के माध्यम से विद्युत फ्लक्स है:", options: [{en: "Q/ε_0", hi: "Q/ε_0"}, {en: "Qε_0", hi: "Qε_0"}, {en: "4πr^2Q", hi: "4πr^2Q"}, {en: "Q/4πε_0", hi: "Q/4πε_0"}], ans: 1 },
    { type: 'MCQ', textEn: "The de Broglie wavelength λ of an electron accelerated by 100V is approximately:", textHi: "100V से त्वरित इलेक्ट्रॉन की डी ब्रोगली तरंगदैर्ध्य λ है (लगभग):", options: [{en: "1.22 Å", hi: "1.22 Å"}, {en: "12.2 Å", hi: "12.2 Å"}, {en: "0.122 Å", hi: "0.122 Å"}, {en: "122 Å", hi: "122 Å"}], ans: 1 },
    { type: 'MCQ', textEn: "If Q = 100J, m = 0.1kg, and ΔT = 10°C, what is the specific heat?", textHi: "यदि Q = 100J, m = 0.1kg, और ΔT = 10°C है, तो विशिष्ट ऊष्मा क्या है?", options: [{en: "100 J/kg°C", hi: "100 J/kg°C"}, {en: "1000 J/kg°C", hi: "1000 J/kg°C"}, {en: "10 J/kg°C", hi: "10 J/kg°C"}, {en: "1 J/kg°C", hi: "1 J/kg°C"}], ans: 1 },
    { type: 'MCQ', textEn: "The typical frequency range for sky wave communication is:", textHi: "स्काई वेव (sky wave) संचार के लिए सामान्य आवृत्ति सीमा है:", options: [{en: "2-30 MHz", hi: "2-30 MHz"}, {en: "30-300 MHz", hi: "30-300 MHz"}, {en: "3-30 kHz", hi: "3-30 kHz"}, {en: "300 MHz-3 GHz", hi: "300 MHz-3 GHz"}], ans: 1 },
    { type: 'MCQ', textEn: "The dimensional formula [MLT^-¹] represents which quantity?", textHi: "विमीय सूत्र [MLT^-¹] किस भौतिक राशि को दर्शाता है?", options: [{en: "Work", hi: "कार्य"}, {en: "Power", hi: "शक्ति"}, {en: "Force", hi: "बल"}, {en: "Impulse", hi: "आवेग"}], ans: 4 },
    { type: 'Numerical', textEn: "3μF and 6μF capacitors are connected in parallel to a voltage V = 20V. What is the total stored energy (in μJ)?", textHi: "3μF और 6μF के संधारित्र समानांतर में V = 20V के वोल्टेज से जुड़े हैं। कुल संचित ऊर्जा (μJ में) क्या है?", ans: "1800" },
    { type: 'Numerical', textEn: "For a photon of wavelength λ = 600 nm, what is the energy in eV? (Use hc ≈ 1240 eV·nm)", textHi: "तरंगदैर्ध्य λ = 600 nm के फोटॉन के लिए, eV में ऊर्जा क्या है? (hc ≈ 1240 eV·nm लें)", ans: "2.07" },
    { type: 'Numerical', textEn: "10Ω and 20Ω resistors are connected in series. If the current is 5A, what is the power dissipated in the 20Ω resistor (in Watts)?", textHi: "10Ω और 20Ω के प्रतिरोधक श्रृंखला में जुड़े हैं। यदि वर्ग धारा 5A है, तो 20Ω प्रतिरोधक में क्षयित शक्ति (वाट में) क्या है?", ans: "500" },
    { type: 'Numerical', textEn: "A glass slab has refractive index μ = 1.5 and thickness 5 cm. What is the normal shift (apparent distance shift) in cm?", textHi: "एक कांच के स्लैब का अपवर्तनांक μ = 1.5 है और मोटाई 5 cm है। सामान्य विस्थापन (आभासी गहराई में शिफ्ट) cm में क्या है?", ans: "1.67" },
    { type: 'Numerical', textEn: "An inductor has L = 2 mH and the current changes at di/dt = 1000 A/s. What is the magnitude of induced emf (in Volts)?", textHi: "एक प्रेरकत्व L = 2 mH है और धारा di/dt = 1000 A/s पर बदलती है। प्रेरित emf का परिमाण (वोल्ट में) क्या है?", ans: "2" }
];

const chemistryQuestions_5: any[] = [
    { type: 'MCQ', textEn: "For an ideal gas, ΔU = 0 occurs in which process?", textHi: "एक आदर्श गैस के लिए, ΔU = 0 (आंतरिक ऊर्जा में परिवर्तन शून्य) किस प्रक्रिया में होता है?", options: [{en: "Isothermal", hi: "समतापीय"}, {en: "Adiabatic", hi: "रुद्धोष्म"}, {en: "Isochoric", hi: "समआयतनिक"}, {en: "Isobaric", hi: "समदाबीय"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the hybridization of [Fe(CN)_6]⁴^-?", textHi: "[Fe(CN)_6]⁴^- का संकरण (hybridization) क्या है?", options: [{en: "sp^3", hi: "sp^3"}, {en: "dsp^2", hi: "dsp^2"}, {en: "d^2sp^3", hi: "d^2sp^3"}, {en: "sp^3d^2", hi: "sp^3d^2"}], ans: 3 },
    { type: 'MCQ', textEn: "Which group has the strongest +I (inductive) effect?", textHi: "किस समूह का सबसे मजबूत +I (प्रेरणिक) प्रभाव होता है?", options: [{en: "CH_3", hi: "CH_3"}, {en: "C_2H_5", hi: "C_2H_5"}, {en: "(CH_3)_3C-", hi: "(CH_3)_3C-"}, {en: "H", hi: "H"}], ans: 3 },
    { type: 'MCQ', textEn: "If E°_cell is positive, the reaction is:", textHi: "यदि E°_cell धनात्मक है, तो अभिक्रिया है:", options: [{en: "Non-spontaneous", hi: "अस्वतः (Non-spontaneous)"}, {en: "Spontaneous", hi: "स्वतः (Spontaneous)"}, {en: "No reaction", hi: "कोई प्रतिक्रिया नहीं"}, {en: "In Equilibrium", hi: "साम्यावस्था में"}], ans: 2 },
    { type: 'MCQ', textEn: "What is the shape of NH_3?", textHi: "NH_3 का आकार क्या है?", options: [{en: "Linear", hi: "रैखिक"}, {en: "Trigonal planar", hi: "त्रिकोणीय समतलीय"}, {en: "Trigonal pyramidal", hi: "त्रिकोणीय पिरामिडीय"}, {en: "Tetrahedral", hi: "चतुष्फलकीय"}], ans: 3 },
    { type: 'MCQ', textEn: "For which compound is Tollens' test positive?", textHi: "किस यौगिक के लिए टॉलेन परीक्षण (Tollens' test) सकारात्मक है?", options: [{en: "Ketone", hi: "केटोन"}, {en: "Aldehyde", hi: "एल्डिहाइड"}, {en: "Alcohol", hi: "एल्कोहल"}, {en: "Ether", hi: "ईथर"}], ans: 2 },
    { type: 'MCQ', textEn: "For a zero-order reaction, the [Reactant] vs time graph is:", textHi: "शून्य कोटि की अभिक्रिया के लिए, [अभिकारक] बनाम समय का ग्राफ कैसा होता है?", options: [{en: "Linear decrease", hi: "रैखिक कमी"}, {en: "Exponential", hi: "चरघातांकी"}, {en: "Parabolic", hi: "परवलयिक"}, {en: "Constant", hi: "स्थिर"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the magnetic nature of the Zn^2^+ ion?", textHi: "Zn^2^+ आयन की चुंबकीय प्रकृति क्या है?", options: [{en: "Paramagnetic", hi: "अनुचुंबकीय"}, {en: "Diamagnetic", hi: "प्रतिचुंबकीय"}, {en: "Ferromagnetic", hi: "लौहचुंबकीय"}, {en: "Antiferromagnetic", hi: "प्रतिलौहचुंबकीय"}], ans: 2 },
    { type: 'MCQ', textEn: "In Benzene, the C-C bond length is:", textHi: "बेंजीन में C-C बंध की लंबाई होती है:", options: [{en: "Like a single bond", hi: "कहरे (single) बंध जैसी"}, {en: "Like a double bond", hi: "दोहरे (double) बंध जैसी"}, {en: "Equal intermediate (partial double)", hi: "समान मध्यवर्ती (आंशिक दोहरा)"}, {en: "Varies", hi: "भिन्न होती है"}], ans: 3 },
    { type: 'MCQ', textEn: "Raoult's law is strictly valid for which type of solution?", textHi: "राउल्ट का नियम मूलतः किस प्रकार के विलयन के लिए मान्य है?", options: [{en: "Ideal solution", hi: "आदर्श विलयन"}, {en: "Non-ideal solution", hi: "अनादर्श विलयन"}, {en: "Strong electrolytes", hi: "प्रबल इलेक्ट्रोलाइट्स"}, {en: "Colloidal solution", hi: "कोलॉइडी विलयन"}], ans: 1 },
    { type: 'MCQ', textEn: "The expected bond angle in ideal sp^3 hybridization is:", textHi: "आदर्श sp^3 संकरण में अपेक्षित बंध कोण (bond angle) क्या है?", options: [{en: "90°", hi: "90°"}, {en: "109.5°", hi: "109.5°"}, {en: "120°", hi: "120°"}, {en: "180°", hi: "180°"}], ans: 2 },
    { type: 'MCQ', textEn: "Which condition favours the SN1 reaction?", textHi: "SN1 प्रतिक्रिया के लिए कौन सी स्थिति अनुकूल होती है?", options: [{en: "Strong nucleophile", hi: "मजबूत न्यूक्लियोफाइल"}, {en: "Weak nucleophile", hi: "कमजोर न्यूक्लियोफाइल"}, {en: "Primary carbon substrate", hi: "प्राथमिक कार्बन"}, {en: "High temperature only", hi: "केवल उच्च तापमान"}], ans: 2 },
    { type: 'MCQ', textEn: "The de Broglie wavelength primarily depends on:", textHi: "डी ब्रोगली तरंगदैर्ध्य मुख्य रूप से किस पर निर्भर करती है?", options: [{en: "Velocity only", hi: "केवल वेग"}, {en: "Mass only", hi: "केवल द्रव्यमान"}, {en: "Momentum", hi: "संवेग"}, {en: "Energy", hi: "ऊर्जा"}], ans: 3 },
    { type: 'MCQ', textEn: "How does Ionization energy generally change in the periodic table?", textHi: "आवर्त सारणी में आयनन ऊर्जा सामान्यतः कैसे बदलती है?", options: [{en: "Increases down the group", hi: "समूह में नीचे जाने पर बढ़ती है"}, {en: "Increases across the period", hi: "आवर्त में बायें से दायें जाने पर बढ़ती है"}, {en: "Random behavior", hi: "यादृच्छिक व्यवहार"}, {en: "Remains constant", hi: "स्थिर रहती है"}], ans: 2 },
    { type: 'MCQ', textEn: "The oxidation of a primary alcohol generally produces:", textHi: "प्राथमिक शराब (alcohol) के ऑक्सीकरण से सामान्यतः क्या बनता है?", options: [{en: "Ketone", hi: "केटोन"}, {en: "Aldehyde", hi: "एल्डिहाइड"}, {en: "Acid anhydrides", hi: "अम्ल एनहाइड्राइड"}, {en: "Ether", hi: "ईथर"}], ans: 2 },
    { type: 'MCQ', textEn: "If the equilibrium constant Kc > 1, it means:", textHi: "यदि साम्य नियतांक Kc > 1 है, तो इसका अर्थ है:", options: [{en: "Products are favoured at equilibrium", hi: "साम्यावस्था में उत्पादों का पक्ष लिया जाता है"}, {en: "Reactants are favoured", hi: "अभिकारकों का पक्ष लिया जाता है"}, {en: "Reaction is endothermic", hi: "अभिक्रिया ऊष्माशोषी है"}, {en: "Reaction stops", hi: "अभिक्रिया रुक जाती है"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the molecular structure (shape) of Ozone (O_3)?", textHi: "ओजोन (O_3) की आणविक संरचना (आकार) क्या है?", options: [{en: "Linear", hi: "रैखिक"}, {en: "Bent / V-shaped", hi: "मुड़ा हुआ (Bent) / V-आकार"}, {en: "Trigonal planar", hi: "त्रिकोणीय समतलीय"}, {en: "Tetrahedral", hi: "चतुष्फलकीय"}], ans: 2 },
    { type: 'MCQ', textEn: "What type of carbohydrate is Glucose?", textHi: "ग्लूकोज किस प्रकार का कार्बोहाइड्रेट है?", options: [{en: "Monosaccharide", hi: "मोनोसैकेराइड"}, {en: "Disaccharide", hi: "डाइसैकेराइड"}, {en: "Polysaccharide", hi: "पॉलीसैकेराइड"}, {en: "Oligosaccharide", hi: "ओलिगोसैकेराइड"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the SI unit of Enthalpy?", textHi: "एन्थैल्पी (Enthalpy) की SI इकाई क्या है?", options: [{en: "Joule (J)", hi: "जूल (J)"}, {en: "Kelvin (K)", hi: "केल्विन (K)"}, {en: "Watt (W)", hi: "वॉट (W)"}, {en: "Pascal (Pa)", hi: "पास्कल (Pa)"}], ans: 1 },
    { type: 'MCQ', textEn: "In coordination chemistry, a ligand is generally an:", textHi: "उपसहसंयोजन रसायन विज्ञान में, लिगैंड सामान्यतः क्या होता है?", options: [{en: "Electron pair donor", hi: "इलेक्ट्रॉन युग्म दाता (Electron pair donor)"}, {en: "Electron pair acceptor", hi: "इलेक्ट्रॉन युग्म ग्राही"}, {en: "Proton donor", hi: "प्रोटॉन दाता"}, {en: "Proton acceptor", hi: "प्रोटॉन ग्राही"}], ans: 1 },
    { type: 'Numerical', textEn: "How many moles are there in 22 g of CO_2? (Molar mass of CO_2 = 44 g/mol)", textHi: "22 ग्राम CO_2 में कितने मोल होंगे? (CO_2 का मोलर द्रव्यमान = 44 g/mol)", ans: "0.5" },
    { type: 'Numerical', textEn: "The charge of 1 Faraday is equivalent to how many Coulombs?", textHi: "1 फैराडे का आवेश कितने कूलम्ब (Coulombs) के बराबर होता है?", ans: "96500" },
    { type: 'Numerical', textEn: "If 1 mol of solute is dissolved in 1 kg of solvent, what is the molality of the solution?", textHi: "यदि 1 मोल विलेय को 1 kg विलायक में घोला जाता है, तो विलयन की मोललता (molality) क्या होगी?", ans: "1" },
    { type: 'Numerical', textEn: "Rate of reaction is independent of reactant concentration in which order kinetics?", textHi: "किस कोटि (order) की अभिक्रिया में प्रतिक्रिया की दर अभिकारक की सांद्रता से स्वतंत्र होती है?", ans: "0" },
    { type: 'Numerical', textEn: "What is the maximum number of electrons that can be accommodated in the n = 2 shell?", textHi: "n=2 कोश (shell) में अधिकतम कितने इलेक्ट्रॉन रह सकते हैं?", ans: "8" }
];

const mathQuestions_5: any[] = [
    { type: 'MCQ', textEn: "lim(x→0) [(sinx - x)/x^3] = ?", textHi: "lim(x→0) [(sinx - x)/x^3] = ?", options: [{en: "0", hi: "0"}, {en: "-1/6", hi: "-1/6"}, {en: "1/6", hi: "1/6"}, {en: "-1/3", hi: "-1/3"}], ans: 2 },
    { type: 'MCQ', textEn: "f(x) = (x^2 - 1)/(x - 1), x != 1; f(1) = k. For continuity at x = 1, what is k?", textHi: "f(x) = (x^2 - 1)/(x - 1), x != 1; f(1) = k. x = 1 पर सांतत्य (continuity) के लिए k क्या है?", options: [{en: "1", hi: "1"}, {en: "2", hi: "2"}, {en: "-2", hi: "-2"}, {en: "0", hi: "0"}], ans: 2 },
    { type: 'MCQ', textEn: "d/dx (x^x) = ?", textHi: "d/dx (x^x) = ?", options: [{en: "x^x", hi: "x^x"}, {en: "x^x (1 + ln x)", hi: "x^x (1 + ln x)"}, {en: "ln x", hi: "ln x"}, {en: "x ln x", hi: "x ln x"}], ans: 2 },
    { type: 'MCQ', textEn: "Find the local maxima point of f(x) = x^3 - 3x^2 + 2.", textHi: "f(x) = x^3 - 3x^2 + 2 का स्थानीय उच्चिष्ठ (local maxima) बिंदु ज्ञात करें।", options: [{en: "x = 0", hi: "x = 0"}, {en: "x = 2", hi: "x = 2"}, {en: "x = 1", hi: "x = 1"}, {en: "x = 3", hi: "x = 3"}], ans: 1 },
    { type: 'MCQ', textEn: "∫ (1/(1+x^2)) dx = ?", textHi: "∫ (1/(1+x^2)) dx = ?", options: [{en: "ln x + C", hi: "ln x + C"}, {en: "tan^-¹x + C", hi: "tan^-¹x + C"}, {en: "e^x + C", hi: "e^x + C"}, {en: "sin^-¹x + C", hi: "sin^-¹x + C"}], ans: 2 },
    { type: 'MCQ', textEn: "∫_0^π sinx dx = ?", textHi: "∫_0^π sinx dx = ?", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "2", hi: "2"}, {en: "π", hi: "π"}], ans: 3 },
    { type: 'MCQ', textEn: "The solution to the differential equation dy/dx = y is:", textHi: "अवकल समीकरण dy/dx = y का हल है:", options: [{en: "y = x + C", hi: "y = x + C"}, {en: "y = C e^x", hi: "y = C e^x"}, {en: "y = ln x + C", hi: "y = ln x + C"}, {en: "y = x^2 + C", hi: "y = x^2 + C"}], ans: 2 },
    { type: 'MCQ', textEn: "If A = [[1, 2], [3, 4]], what is det(A)?", textHi: "यदि A = [[1, 2], [3, 4]] है, तो det(A) क्या है?", options: [{en: "-2", hi: "-2"}, {en: "2", hi: "2"}, {en: "5", hi: "5"}, {en: "-5", hi: "-5"}], ans: 1 },
    { type: 'MCQ', textEn: "The dot product of two perpendicular non-zero vectors is:", textHi: "दो लंबवत अशून्य सदिशों का बिंदु गुणनफल (dot product) है:", options: [{en: "1", hi: "1"}, {en: "0", hi: "0"}, {en: "-1", hi: "-1"}, {en: "Undefined", hi: "अपरिभाषित"}], ans: 2 },
    { type: 'MCQ', textEn: "The distance between the points (1, 2, 3) and (4, 6, 3) is:", textHi: "बिंदुओं (1, 2, 3) और (4, 6, 3) के बीच की दूरी है:", options: [{en: "5", hi: "5"}, {en: "4", hi: "4"}, {en: "3", hi: "3"}, {en: "6", hi: "6"}], ans: 1 },
    { type: 'MCQ', textEn: "If P(A) = 1/2, P(B) = 1/3, and A and B are independent events, then P(A ∩ B) = ?", textHi: "यदि P(A) = 1/2, P(B) = 1/3, और A तथा B स्वतंत्र घटनाएँ हैं, तो P(A ∩ B) = ?", options: [{en: "1/6", hi: "1/6"}, {en: "1/5", hi: "1/5"}, {en: "2/3", hi: "2/3"}, {en: "1/2", hi: "1/2"}], ans: 1 },
    { type: 'MCQ', textEn: "i⁵ + i⁷ = ?", textHi: "i⁵ + i⁷ = ?", options: [{en: "0", hi: "0"}, {en: "i", hi: "i"}, {en: "-i", hi: "-i"}, {en: "1", hi: "1"}], ans: 1 },
    { type: 'MCQ', textEn: "For an AP with first term a = 2 and common difference d = 3, what is the 10th term?", textHi: "एक समांतर श्रेढ़ी (AP) के लिए जिसका पहला पद a = 2 और सार्व अंतर d = 3 है, 10वां पद क्या है?", options: [{en: "29", hi: "29"}, {en: "30", hi: "30"}, {en: "32", hi: "32"}, {en: "35", hi: "35"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the coefficient of x^2 in the expansion of (1 + x)⁵?", textHi: "(1 + x)⁵ के प्रसार में x^2 का गुणांक क्या है?", options: [{en: "5", hi: "5"}, {en: "10", hi: "10"}, {en: "20", hi: "20"}, {en: "15", hi: "15"}], ans: 2 },
    { type: 'MCQ', textEn: "In how many ways can 5 distinct objects be arranged?", textHi: "5 विभिन्न वस्तुओं को कितने तरीकों से व्यवस्थित किया जा सकता है?", options: [{en: "60", hi: "60"}, {en: "120", hi: "120"}, {en: "25", hi: "25"}, {en: "10", hi: "10"}], ans: 2 },
    { type: 'MCQ', textEn: "The slope of the line 2x + 3y = 6 is:", textHi: "रेखा 2x + 3y = 6 की ढाल (slope) है:", options: [{en: "2/3", hi: "2/3"}, {en: "-2/3", hi: "-2/3"}, {en: "3/2", hi: "3/2"}, {en: "-3/2", hi: "-3/2"}], ans: 2 },
    { type: 'MCQ', textEn: "The radius of the circle x^2 + y^2 = 9 is:", textHi: "वृत्त x^2 + y^2 = 9 की त्रिज्या है:", options: [{en: "9", hi: "9"}, {en: "3", hi: "3"}, {en: "81", hi: "81"}, {en: "√3", hi: "√3"}], ans: 2 },
    { type: 'MCQ', textEn: "sin^2x + cos^2x = ?", textHi: "sin^2x + cos^2x = ?", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "-1", hi: "-1"}, {en: "2", hi: "2"}], ans: 2 },
    { type: 'MCQ', textEn: "The principal value of tan^-¹(1) is:", textHi: "tan^-¹(1) का मुख्य मान (principal value) है:", options: [{en: "π/2", hi: "π/2"}, {en: "π/3", hi: "π/3"}, {en: "π/4", hi: "π/4"}, {en: "π/6", hi: "π/6"}], ans: 3 },
    { type: 'MCQ', textEn: "log_1_0(1000) = ?", textHi: "log_1_0(1000) = ?", options: [{en: "10", hi: "10"}, {en: "100", hi: "100"}, {en: "3", hi: "3"}, {en: "1", hi: "1"}], ans: 3 },
    { type: 'Numerical', textEn: "lim(x→∞) (x/(x+1)) = ?", textHi: "lim(x→∞) (x/(x+1)) = ?", ans: "1" },
    { type: 'Numerical', textEn: "The value of ∫_0¹ x dx is: (in decimals)", textHi: "∫_0¹ x dx का मान है: (दशमलव में)", ans: "0.5" },
    { type: 'Numerical', textEn: "The value of d/dx (sinx) at x = 0 is:", textHi: "x = 0 पर d/dx (sinx) का मान है:", ans: "1" },
    { type: 'Numerical', textEn: "The determinant of the matrix [[2, 0], [0, 3]] is:", textHi: "आव्यूह [[2, 0], [0, 3]] का सारणिक है:", ans: "6" },
    { type: 'Numerical', textEn: "What is the total number of outcomes when tossing 2 fair coins?", textHi: "2 निष्पक्ष सिक्के उछालने पर संभावित परिणामों (outcomes) की कुल संख्या क्या है?", ans: "4" }
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
