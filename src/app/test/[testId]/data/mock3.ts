import { QuestionType } from '../mockData';

const physicsQuestions_3: any[] = [
    { type: 'MCQ', textEn: "The position function of a particle is x = t³ - 3t² + 2t. What will be the acceleration at t = 1 s?", textHi: "एक कण का स्थिति फलन x = t³ - 3t² + 2t है। t = 1 s पर त्वरण क्या होगा?", options: [{en: "0", hi: "0"}, {en: "2", hi: "2"}, {en: "-2", hi: "-2"}, {en: "6", hi: "6"}], ans: 1 },
    { type: 'MCQ', textEn: "Two capacitors 3µF and 6µF are connected in parallel and then to a battery. What will be the equivalent capacitance?", textHi: "दो संधारित्र 3µF और 6µF समानांतर में जुड़े हैं और फिर एक बैटरी से जुड़े हैं। समतुल्य धारिता क्या होगी?", options: [{en: "2 µF", hi: "2 µF"}, {en: "9 µF", hi: "9 µF"}, {en: "18 µF", hi: "18 µF"}, {en: "1 µF", hi: "1 µF"}], ans: 2 },
    { type: 'MCQ', textEn: "A charged particle enters a uniform magnetic field with perpendicular velocity. What will be its path?", textHi: "एक आवेशित कण एकसमान चुंबकीय क्षेत्र में लंबवत वेग के साथ प्रवेश करता है। इसका पथ क्या होगा?", options: [{en: "Straight line", hi: "सीधी रेखा"}, {en: "Circular", hi: "वृत्ताकार"}, {en: "Parabolic", hi: "परवलयाकार"}, {en: "Elliptical", hi: "दीर्घवृत्ताकार"}], ans: 2 },
    { type: 'MCQ', textEn: "A gas is following an adiabatic process. What remains constant in this process?", textHi: "एक गैस रुद्धोष्म (adiabatic) प्रक्रिया का पालन कर रही है। इस प्रक्रिया में क्या स्थिर रहता है?", options: [{en: "Temperature", hi: "तापमान"}, {en: "Pressure", hi: "दबाव"}, {en: "PV^γ", hi: "PV^γ"}, {en: "Volume", hi: "आयतन"}], ans: 3 },
    { type: 'MCQ', textEn: "The power of a lens is -2D. What will be its focal length?", textHi: "एक लेंस की क्षमता -2D है। इसकी फोकस दूरी क्या होगी?", options: [{en: "-0.5 m", hi: "-0.5 m"}, {en: "0.5 m", hi: "0.5 m"}, {en: "-2 m", hi: "-2 m"}, {en: "2 m", hi: "2 m"}], ans: 1 },
    { type: 'MCQ', textEn: "A block is at rest on a rough surface. The applied force is gradually increased. When will the motion start?", textHi: "रुक्ष (rough) सतह पर एक ब्लॉक विराम में है। लगाया गया बल धीरे-धीरे बढ़ाया जाता है। गति कब शुरू होगी?", options: [{en: "When static friction becomes max", hi: "जब स्थैतिक घर्षण अधिकतम हो"}, {en: "When kinetic friction occurs", hi: "जब गतिज घर्षण हो"}, {en: "At zero friction", hi: "शून्य घर्षण पर"}, {en: "At constant friction", hi: "निरंतर घर्षण पर"}], ans: 1 },
    { type: 'MCQ', textEn: "An electron accelerates in the direction opposite to the electric field. What is the reason for this?", textHi: "एक इलेक्ट्रॉन विद्युत क्षेत्र की विपरीत दिशा में त्वरित होता है। इसका क्या कारण है?", options: [{en: "Negative charge", hi: "ऋणात्मक आवेश"}, {en: "Positive charge", hi: "धनात्मक आवेश"}, {en: "Zero charge", hi: "शून्य आवेश"}, {en: "Neutral", hi: "उदासीन"}], ans: 1 },
    { type: 'MCQ', textEn: "The wave equation is y = A sin(kx - ωt). What will be the phase velocity?", textHi: "तरंग समीकरण y = A sin(kx - ωt) है। कला वेग (phase velocity) क्या होगा?", options: [{en: "ω/k", hi: "ω/k"}, {en: "k/ω", hi: "k/ω"}, {en: "Aω", hi: "Aω"}, {en: "Ak", hi: "Ak"}], ans: 1 },
    { type: 'MCQ', textEn: "The angular momentum of an object is conserved. If its radius is halved, what will be its angular velocity?", textHi: "एक वस्तु का कोणीय संवेग संरक्षित है। यदि इसकी त्रिज्या आधी कर दी जाए, तो इसका कोणीय वेग क्या होगा?", options: [{en: "Same", hi: "समान"}, {en: "Double", hi: "दोगुना"}, {en: "4 times", hi: "4 गुना"}, {en: "Half", hi: "आधा"}], ans: 3 },
    { type: 'MCQ', textEn: "What is the SI unit of electric flux?", textHi: "विद्युत फ्लक्स की SI इकाई क्या है?", options: [{en: "N C/m²", hi: "N C/m²"}, {en: "N m²/C", hi: "N m²/C"}, {en: "V/m", hi: "V/m"}, {en: "J/C", hi: "J/C"}], ans: 2 },
    { type: 'MCQ', textEn: "The EMF of a battery is 12V and internal resistance is 2Ω. External resistance is 4Ω. What will be the current?", textHi: "एक बैटरी का EMF 12V है और आंतरिक प्रतिरोध 2Ω है। बाह्य प्रतिरोध 4Ω है। धारा क्या होगी?", options: [{en: "1 A", hi: "1 A"}, {en: "2 A", hi: "2 A"}, {en: "3 A", hi: "3 A"}, {en: "4 A", hi: "4 A"}], ans: 2 },
    { type: 'MCQ', textEn: "A body is in projectile motion. The maximum height depends on:", textHi: "एक पिंड प्रक्षेप्य गति में है। अधिकतम ऊंचाई किस पर निर्भर करती है?", options: [{en: "Horizontal velocity", hi: "क्षैतिज वेग"}, {en: "Vertical component of velocity", hi: "वेग का ऊर्ध्वाधर घटक"}, {en: "Total velocity", hi: "कुल वेग"}, {en: "Mass", hi: "द्रव्यमान"}], ans: 2 },
    { type: 'MCQ', textEn: "In a step-up transformer, what increases?", textHi: "एक उच्चायी (step-up) ट्रांसफार्मर में, क्या बढ़ता है?", options: [{en: "Current", hi: "धारा"}, {en: "Voltage", hi: "वोल्टेज"}, {en: "Power", hi: "शक्ति"}, {en: "Frequency", hi: "आवृत्ति"}], ans: 2 },
    { type: 'MCQ', textEn: "A metal rod expands upon heating. The expansion depends on:", textHi: "गर्म करने पर धातु की छड़ फैलती है। फैलाव (expansion) किस पर निर्भर करता है?", options: [{en: "Length", hi: "लंबाई"}, {en: "Temperature change", hi: "तापमान में परिवर्तन"}, {en: "Material", hi: "पदार्थ"}, {en: "All of the above", hi: "उपरोक्त सभी"}], ans: 4 },
    { type: 'MCQ', textEn: "Higher binding energy in a nucleus means that the nucleus is:", textHi: "किसी नाभिक में उच्च बंधन ऊर्जा होने का अर्थ है कि नाभिक है:", options: [{en: "Less stable", hi: "कम स्थिर"}, {en: "More stable", hi: "अधिक स्थिर"}, {en: "Neutral", hi: "उदासीन"}, {en: "Unstable", hi: "अस्थिर"}], ans: 2 },
    { type: 'MCQ', textEn: "On increasing inductance in a circuit, the rate of change of current:", textHi: "एक परिपथ में प्रेरकत्व बढ़ाने पर धारा के परिवर्तन की दर:", options: [{en: "Decreases", hi: "घटती है"}, {en: "Increases", hi: "बढ़ती है"}, {en: "Remains same", hi: "समान रहती है"}, {en: "Becomes infinite", hi: "अनंत हो जाती है"}], ans: 1 },
    { type: 'MCQ', textEn: "The momentum of a photon is given by:", textHi: "फोटॉन का संवेग किस सूत्र द्वारा दिया जाता है?", options: [{en: "hλ", hi: "hλ"}, {en: "h/λ", hi: "h/λ"}, {en: "λ/h", hi: "λ/h"}, {en: "hc/λ", hi: "hc/λ"}], ans: 2 },
    { type: 'MCQ', textEn: "A body is in uniform circular motion. The work done by the centripetal force is:", textHi: "एक पिंड एकसमान वृत्तीय गति में है। अभिकेंद्र बल द्वारा किया गया कार्य है:", options: [{en: "Maximum", hi: "अधिकतम"}, {en: "Minimum", hi: "न्यूनतम"}, {en: "Zero", hi: "शून्य"}, {en: "Negative", hi: "ऋणात्मक"}], ans: 3 },
    { type: 'MCQ', textEn: "The resistance of an ideal voltmeter is:", textHi: "एक आदर्श वोल्टमीटर का प्रतिरोध होता है:", options: [{en: "Zero", hi: "शून्य"}, {en: "1000 Ω", hi: "1000 Ω"}, {en: "Infinite", hi: "अनंत"}, {en: "Variable", hi: "परिवर्तनीय"}], ans: 3 },
    { type: 'MCQ', textEn: "The resistance of an ideal ammeter is:", textHi: "एक आदर्श ऐमीटर का प्रतिरोध होता है:", options: [{en: "Zero", hi: "शून्य"}, {en: "Infinite", hi: "अनंत"}, {en: "1 Ω", hi: "1 Ω"}, {en: "Unpredictable", hi: "अप्रत्याशित"}], ans: 1 },
    { type: 'Numerical', textEn: "If x = t² + 2t + 1, what will be the velocity at t = 2s?", textHi: "यदि x = t² + 2t + 1 है, तो t = 2s पर वेग क्या होगा?", ans: "6" },
    { type: 'Numerical', textEn: "A capacitor is 5µF and the voltage is 20V. What will be the charge (in microcoulombs)?", textHi: "एक संधारित्र की धारिता 5µF है और वोल्टेज 20V है। आवेश (माइक्रोकूलम्ब में) क्या होगा?", ans: "100" },
    { type: 'Numerical', textEn: "A body is thrown upwards with a velocity of 10 m/s. (Take g = 10 m/s²). What will be the maximum height?", textHi: "एक पिंड को 10 m/s के वेग से ऊपर की ओर फेंका गया। (g = 10 m/s² लें)। अधिकतम ऊंचाई (मीटर में) क्या होगी?", ans: "5" },
    { type: 'Numerical', textEn: "A current of 2A flows through a 10Ω resistor. What will be the power dissipated (in Watts)?", textHi: "10Ω के प्रतिरोधक से 2A की धारा बहती है। क्षयित शक्ति (वॉट में) क्या होगी?", ans: "40" },
    { type: 'Numerical', textEn: "The time period of a wave is 0.02 s. What will be its frequency (in Hz)?", textHi: "एक तरंग का आवर्तकाल 0.02 s है। इसकी आवृत्ति (Hz में) क्या होगी?", ans: "50" }
];

const chemistryQuestions_3: any[] = [
    { type: 'MCQ', textEn: "Solubility order of alkaline earth metal sulphates in water:", textHi: "क्षारीय मृदा धातु सल्फेटों की जल में विलेयता का क्रम है:", options: [{en: "BeSO₄ > MgSO₄ > CaSO₄ > SrSO₄ > BaSO₄", hi: "BeSO₄ > MgSO₄ > CaSO₄ > SrSO₄ > BaSO₄"}, {en: "BaSO₄ > SrSO₄ > CaSO₄ > MgSO₄ > BeSO₄", hi: "BaSO₄ > SrSO₄ > CaSO₄ > MgSO₄ > BeSO₄"}, {en: "MgSO₄ > BeSO₄ > CaSO₄ > SrSO₄ > BaSO₄", hi: "MgSO₄ > BeSO₄ > CaSO₄ > SrSO₄ > BaSO₄"}, {en: "CaSO₄ > SrSO₄ > BaSO₄ > MgSO₄ > BeSO₄", hi: "CaSO₄ > SrSO₄ > BaSO₄ > MgSO₄ > BeSO₄"}], ans: 1 },
    { type: 'MCQ', textEn: "For a real gas at high pressure and low temperature, the graph of Z vs P shows:", textHi: "एक वास्तविक गैस के लिए उच्च दाब और निम्न ताप पर, Z बनाम P का ग्राफ दर्शाता है:", options: [{en: "Z first decreases then increases", hi: "Z पहले घटता है फिर बढ़ता है"}, {en: "Z continuously increases", hi: "Z लगातार बढ़ता है"}, {en: "Z=1 always", hi: "Z=1 हमेशा"}, {en: "Z continuously decreases", hi: "Z लगातार घटता है"}], ans: 1 },
    { type: 'MCQ', textEn: "Which element forms an interstitial hydride?", textHi: "कौन सा तत्व अंतराकाशी (interstitial) हाइड्राइड बनाता है?", options: [{en: "Pd", hi: "Pd"}, {en: "He", hi: "He"}, {en: "Ne", hi: "Ne"}, {en: "Li", hi: "Li"}], ans: 1 },
    { type: 'MCQ', textEn: "Classical smog contains:", textHi: "पुराने (Classical) स्मॉग में होता है:", options: [{en: "SO₂/H₂SO₄ aerosol", hi: "SO₂/H₂SO₄ एरोसोल"}, {en: "NOx", hi: "NOx"}, {en: "O₃", hi: "O₃"}, {en: "PAN", hi: "PAN"}], ans: 1 },
    { type: 'MCQ', textEn: "Which carbocation is more stable: (CH₃)₂CH⁺ or CH₃CH₂CH₂⁺?", textHi: "कौन सा कार्बोकैटायन अधिक स्थिर है: (CH₃)₂CH⁺ या CH₃CH₂CH₂⁺?", options: [{en: "Isopropyl ((CH₃)₂CH⁺)", hi: "आइसोप्रोपाइल ((CH₃)₂CH⁺)"}, {en: "n-propyl (CH₃CH₂CH₂⁺)", hi: "n-प्रोपाइल (CH₃CH₂CH₂⁺)"}, {en: "Both are equally stable", hi: "दोनो समान रूप से स्थिर हैं"}, {en: "Cannot be determined", hi: "निर्धारित नहीं किया जा सकता"}], ans: 1 },
    { type: 'MCQ', textEn: "Ozonolysis of CH₃CH=CHCH₃ followed by Zn/H₂O gives:", textHi: "CH₃CH=CHCH₃ का ओजोनोलिसिस Zn/H₂O की उपस्थिति में करने पर क्या मिलता है?", options: [{en: "2 CH₃CHO", hi: "2 CH₃CHO"}, {en: "CH₃COCH₃", hi: "CH₃COCH₃"}, {en: "CH₃CH₂CHO", hi: "CH₃CH₂CHO"}, {en: "HCHO + CH₃COCH₃", hi: "HCHO + CH₃COCH₃"}], ans: 1 },
    { type: 'MCQ', textEn: "C₆H₅Cl + NaOH at 623K gives:", textHi: "623K ताप पर C₆H₅Cl + NaOH देता है:", options: [{en: "No reaction", hi: "कोई प्रतिक्रिया नहीं"}, {en: "C₆H₅OH (Phenol)", hi: "C₆H₅OH (फिनॉल)"}, {en: "C₆H₅ONa", hi: "C₆H₅ONa"}, {en: "C₆H₆ (Benzene)", hi: "C₆H₆ (बेंजीन)"}], ans: 2 },
    { type: 'MCQ', textEn: "(CH₃)₃COH + Lucas reagent → ?", textHi: "(CH₃)₃COH + लुकास अभिकर्मक → ?", options: [{en: "No reaction", hi: "कोई प्रतिक्रिया नहीं"}, {en: "Turbidity appears instantly", hi: "तुरंत धुंधलापन (Turbidity) आता है"}, {en: "Turbidity after 5 minutes", hi: "5 मिनट बाद धुंधलापन"}, {en: "Turbidity after 10 minutes", hi: "10 मिनट बाद धुंधलापन"}], ans: 2 },
    { type: 'MCQ', textEn: "CH₃CH₂Br + CH₃ONa → ? (Major Product)", textHi: "CH₃CH₂Br + CH₃ONa → ? (मुख्य उत्पाद)", options: [{en: "CH₃CH₂OCH₃", hi: "CH₃CH₂OCH₃"}, {en: "CH₃CH₂OCH₂CH₃", hi: "CH₃CH₂OCH₂CH₃"}, {en: "CH₃OCH₃", hi: "CH₃OCH₃"}, {en: "Elimination product", hi: "विलोपन उत्पाद"}], ans: 1 },
    { type: 'MCQ', textEn: "Self aldol condensation of CH₃CHO yields:", textHi: "CH₃CHO का स्व-एल्डोल संघनन क्या देता है?", options: [{en: "Aldol and crotonaldehyde (depending on temp)", hi: "एल्डोल और क्रोटोनलडिहाइड (तापमान पर निर्भर)"}, {en: "Only aldol", hi: "केवल एल्डोल"}, {en: "Only crotonaldehyde", hi: "केवल क्रोटोनलडिहाइड"}, {en: "No aldol formed", hi: "कोई एल्डोल नहीं बनता"}], ans: 1 },
    { type: 'MCQ', textEn: "C₆H₅NH₂ reacts with Hinsberg's reagent to form a product which is:", textHi: "C₆H₅NH₂ हिन्सबर्ग अभिकर्मक के साथ प्रतिक्रिया करके जो उत्पाद बनाता है, वह है:", options: [{en: "Soluble in alkali", hi: "क्षार में विलेय"}, {en: "Insoluble in both acid and alkali", hi: "अम्ल और क्षार दोनों में अविलेय"}, {en: "Soluble in both", hi: "दोनों में विलेय"}, {en: "Soluble in acid", hi: "अम्ल में विलेय"}], ans: 1 },
    { type: 'MCQ', textEn: "Invertase hydrolyzes:", textHi: "इनवर्टेस (Invertase) किसका जल-अपघटन करता है?", options: [{en: "Sucrose to glucose + fructose", hi: "सूक्रोज को ग्लूकोज + फ्रुक्टोज में"}, {en: "Maltose to glucose", hi: "माल्टोज़ को ग्लूकोज़ में"}, {en: "Lactose to glucose + galactose", hi: "लैक्टोज़ को ग्लूकोज़ + गैलेक्टोज़ में"}, {en: "Starch to maltose", hi: "स्टार्च को माल्टोज़ में"}], ans: 1 },
    { type: 'MCQ', textEn: "IUPAC name of CH₃CH(CH₃)CH₂CH(CH₂CH₃)CH₂CH₃:", textHi: "CH₃CH(CH₃)CH₂CH(CH₂CH₃)CH₂CH₃ का IUPAC नाम है:", options: [{en: "3-ethyl-2-methylhexane", hi: "3-एथिल-2-मिथाइलहेक्सेन"}, {en: "4-ethyl-5-methylhexane", hi: "4-एथिल-5-मिथाइलहेक्सेन"}, {en: "3-ethyl-4-methylhexane", hi: "3-एथिल-4-मिथाइलहेक्सेन"}, {en: "2-methyl-3-ethylhexane", hi: "2-मिथाइल-3-एथिलहेक्सेन"}], ans: 1 },
    { type: 'MCQ', textEn: "The number of unpaired electrons in [Fe(H₂O)₆]²⁺ is:", textHi: "[Fe(H₂O)₆]²⁺ में अयुग्मित इलेक्ट्रॉनों (unpaired electrons) की संख्या है:", options: [{en: "4", hi: "4"}, {en: "0", hi: "0"}, {en: "2", hi: "2"}, {en: "5", hi: "5"}], ans: 1 },
    { type: 'MCQ', textEn: "EDTA is a:", textHi: "EDTA एक है:", options: [{en: "Hexadentate ligand", hi: "षटदंतुक लिगैंड (Hexadentate)"}, {en: "Tetradentate ligand", hi: "चतुष्दंतुक लिगैंड (Tetradentate)"}, {en: "Bidentate ligand", hi: "द्विदंतुक लिगैंड (Bidentate)"}, {en: "Tridentate ligand", hi: "त्रिदंतुक लिगैंड (Tridentate)"}], ans: 1 },
    { type: 'MCQ', textEn: "Heating an ammonium salt with NaOH produces a gas with smell of:", textHi: "एक अमोनियम लवण को NaOH के साथ गर्म करने पर किस गंध वाली गैस उत्सर्जित होती है?", options: [{en: "Ammonia (NH₃)", hi: "अमोनिया (NH₃)"}, {en: "Hydrogen sulphide (H₂S)", hi: "हाइड्रोजन सल्फाइड (H₂S)"}, {en: "Carbon dioxide (CO₂)", hi: "कार्बन डाइऑक्साइड (CO₂)"}, {en: "No smell", hi: "कोई गंध नहीं"}], ans: 1 },
    { type: 'MCQ', textEn: "The geometry of IF₇ is:", textHi: "IF₇ की ज्यामिति है:", options: [{en: "Pentagonal bipyramidal", hi: "पंचकोणीय द्विपिरामिडीय"}, {en: "Square pyramidal", hi: "वर्ग पिरामिडीय"}, {en: "Trigonal bipyramidal", hi: "त्रिकोणीय द्विपिरामिडीय"}, {en: "Octahedral", hi: "अष्टफलकीय"}], ans: 1 },
    { type: 'MCQ', textEn: "In the decay series ²³⁸U → ²⁰⁶Pb, how many α particles are emitted?", textHi: "क्षय श्रृंखला ²³⁸U → ²⁰⁶Pb में, कितने α कण उत्सर्जित होते हैं?", options: [{en: "8", hi: "8"}, {en: "6", hi: "6"}, {en: "14", hi: "14"}, {en: "2", hi: "2"}], ans: 1 },
    { type: 'MCQ', textEn: "Schottky defect is generally found in:", textHi: "शॉटकी (Schottky) दोष सामान्यतः किसमें पाया जाता है?", options: [{en: "NaCl", hi: "NaCl"}, {en: "AgBr", hi: "AgBr"}, {en: "ZnS", hi: "ZnS"}, {en: "FeO", hi: "FeO"}], ans: 1 },
    { type: 'MCQ', textEn: "In Freundlich adsorption isotherm, the value of 1/n represents physical adsorption if it is:", textHi: "फ्रायंडलिच (Freundlich) अधिशोषण समतापी में, 1/n का मान भौतिक अधिशोषण को दर्शाता है यदि यह है:", options: [{en: "Between 0 and 1", hi: "0 और 1 के बीच"}, {en: "Greater than 1", hi: "1 से अधिक"}, {en: "Always 0", hi: "हमेशा 0"}, {en: "Negative", hi: "ऋणात्मक"}], ans: 1 },
    { type: 'Numerical', textEn: "If 0.1 mol of P₄ reacts with excess O₂ to form P₄O₁₀, what is the mass of P₄O₁₀ produced (in g)?", textHi: "यदि 0.1 मोल P₄ अतिरिक्त O₂ के साथ प्रतिक्रिया करके P₄O₁₀ बनाता है, तो उत्पादित P₄O₁₀ का द्रव्यमान (ग्राम में) क्या है?", ans: "28.4" },
    { type: 'Numerical', textEn: "Bond energies: C-H=414, Cl-Cl=243, C-Cl=328, H-Cl=431 (kJ/mol). Calculate magnitude of ΔH for CH₄ + Cl₂ → CH₃Cl + HCl.", textHi: "बंध ऊर्जा: C-H=414, Cl-Cl=243, C-Cl=328, H-Cl=431 (kJ/mol)। CH₄ + Cl₂ → CH₃Cl + HCl के लिए ΔH का परिमाण (magnitude) ज्ञात करें।", ans: "102" },
    { type: 'Numerical', textEn: "For 2A + B → products. Rate law is r = k[A]²[B]. If [A]=0.1M and [B]=0.2M gives rate 0.004, what is the rate logic? Enter 0.004", textHi: "2A + B → उत्पादों के लिए। दर नियम r = k[A]²[B] है। यदि [A]=0.1M और [B]=0.2M दर 0.004 देता है, तो मान दर्ज करें:", ans: "0.004" },
    { type: 'Numerical', textEn: "Ksp of AgCl is 2×10⁻¹⁰. The [Ag⁺] in saturated solution with xM NaCl is 2×10⁻⁴M. Find x (× 10⁶).", textHi: "AgCl का Ksp 2×10⁻¹⁰ है। xM NaCl वाले संतृप्त विलयन में [Ag⁺] 2×10⁻⁴M है। x का मान (× 10⁶) ज्ञात करें।", ans: "1" },
    { type: 'Numerical', textEn: "Calculate E°_cell for Mg|Mg²⁺||Fe²⁺|Fe, given E°Mg=-2.37V, E°Fe=-0.44V.", textHi: "Mg|Mg²⁺||Fe²⁺|Fe के लिए E°_cell की गणना करें, दिया गया है E°Mg=-2.37V, E°Fe=-0.44V.", ans: "1.93" }
];

const mathQuestions_3: any[] = [
    { type: 'MCQ', textEn: "If A = [2  1; 1  3] and det(A-λI)=0, what are the eigenvalues?", textHi: "यदि A = [2  1; 1  3] और det(A-λI)=0 है, तो आइगन मान (eigenvalues) क्या हैं?", options: [{en: "1, 4", hi: "1, 4"}, {en: "0, 5", hi: "0, 5"}, {en: "2, 3", hi: "2, 3"}, {en: "-1, 6", hi: "-1, 6"}], ans: 1 },
    { type: 'MCQ', textEn: "lim(x→0) [sin⁻¹x / x] = ?", textHi: "lim(x→0) [sin⁻¹x / x] का मान है:", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "∞", hi: "∞"}, {en: "-1", hi: "-1"}], ans: 2 },
    { type: 'MCQ', textEn: "For the ellipse x²/25 + y²/16 = 1, its foci are:", textHi: "दीर्घवृत्त x²/25 + y²/16 = 1 के लिए, इसकी नाभियाँ (foci) हैं:", options: [{en: "(±3,0)", hi: "(±3,0)"}, {en: "(±4,0)", hi: "(±4,0)"}, {en: "(±5,0)", hi: "(±5,0)"}, {en: "(±9,0)", hi: "(±9,0)"}], ans: 1 },
    { type: 'MCQ', textEn: "In how many ways can 10 people sit in a circle if A never sits with B?", textHi: "10 लोग एक घेरे (circle) में कितने तरीकों से बैठ सकते हैं यदि A कभी भी B के साथ नहीं बैठता है?", options: [{en: "9! - 2×8!", hi: "9! - 2×8! (or ⁸P₈ × 7)"}, {en: "8! × 2", hi: "8! × 2"}, {en: "10!", hi: "10!"}, {en: "9!", hi: "9!"}], ans: 1 },
    { type: 'MCQ', textEn: "Are vectors A = î + 2ĵ + 3k̂ and B = 2î + 4ĵ + 6k̂ collinear?", textHi: "क्या सदिश A = î + 2ĵ + 3k̂ और B = 2î + 4ĵ + 6k̂ संरेख (collinear) हैं?", options: [{en: "Yes, they are scalar multiples", hi: "हाँ, वे अदिश गुणक हैं"}, {en: "No", hi: "नहीं"}, {en: "They are perpendicular", hi: "वे लंबवत हैं"}, {en: "Parallel but in opposite directions", hi: "समानांतर लेकिन विपरीत दिशाओं में"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the distance of point (1,1,1) from the plane x + 2y + 2z = 6?", textHi: "समतल x + 2y + 2z = 6 से बिंदु (1,1,1) की दूरी क्या है?", options: [{en: "1/3", hi: "1/3"}, {en: "2", hi: "2"}, {en: "√2", hi: "√2"}, {en: "0", hi: "0"}], ans: 1 },
    { type: 'MCQ', textEn: "The solution to sin³x + cos³x = 1 is:", textHi: "sin³x + cos³x = 1 का हल है:", options: [{en: "nπ", hi: "nπ"}, {en: "π/2 + 2nπ", hi: "π/2 + 2nπ"}, {en: "π/4 + nπ", hi: "π/4 + nπ"}, {en: "0", hi: "0"}], ans: 1 },
    { type: 'MCQ', textEn: "If P(A|B)=2/3, P(B|A)=3/5, and P(A)=1/2, find P(B).", textHi: "यदि P(A|B)=2/3, P(B|A)=3/5, और P(A)=1/2 है, तो P(B) ज्ञात करें।", options: [{en: "3/7", hi: "3/7"}, {en: "9/20", hi: "9/20"}, {en: "1/3", hi: "1/3"}, {en: "4/7", hi: "4/7"}], ans: 2 },
    { type: 'MCQ', textEn: "The coefficient of x⁵⁰ in the expansion of (1+x)¹⁰⁰ is:", textHi: "(1+x)¹⁰⁰ के प्रसार में x⁵⁰ का गुणांक है:", options: [{en: "C(100,50)", hi: "C(100,50)"}, {en: "C(99,49)", hi: "C(99,49)"}, {en: "C(100,51)", hi: "C(100,51)"}, {en: "100!", hi: "100!"}], ans: 1 },
    { type: 'MCQ', textEn: "If a_n = n² - n, what is the sum of the first 10 terms (S₁₀)?", textHi: "यदि a_n = n² - n है, तो पहले 10 पदों का योग (S₁₀) क्या है?", options: [{en: "235", hi: "235"}, {en: "330", hi: "330 (385-55)"}, {en: "505", hi: "505"}, {en: "285", hi: "285"}], ans: 2 },
    { type: 'MCQ', textEn: "The function f(x) = |x-1| + |x+1| is differentiable at:", textHi: "फलन f(x) = |x-1| + |x+1| कहाँ अवकलनीय है?", options: [{en: "x = 0", hi: "x = 0"}, {en: "x = 1", hi: "x = 1"}, {en: "x = -1", hi: "x = -1"}, {en: "Nowhere", hi: "कहीं नहीं"}], ans: 1 },
    { type: 'MCQ', textEn: "The value of ∫ x² e^x dx is:", textHi: "∫ x² e^x dx का मान है:", options: [{en: "e^x (x² - 2x + 2) + C", hi: "e^x (x² - 2x + 2) + C"}, {en: "e^x x² + C", hi: "e^x x² + C"}, {en: "x³e^x/3 + C", hi: "x³e^x/3 + C"}, {en: "e^x (x²+2) + C", hi: "e^x (x²+2) + C"}], ans: 1 },
    { type: 'MCQ', textEn: "The solution to the differential equation dy/dx = y/x is:", textHi: "अवकल समीकरण dy/dx = y/x का हल है:", options: [{en: "y = kx", hi: "y = kx"}, {en: "y = k/x", hi: "y = k/x"}, {en: "xy = k", hi: "xy = k"}, {en: "x = ky", hi: "x = ky"}], ans: 1 },
    { type: 'MCQ', textEn: "The line passing through (2,3) and perpendicular to x - 2y + 4 = 0 is:", textHi: "(2,3) से गुजरने वाली और रेखा x - 2y + 4 = 0 के लंबवत रेखा का समीकरण है:", options: [{en: "2x + y = 7", hi: "2x + y = 7"}, {en: "x + 2y = 8", hi: "x + 2y = 8"}, {en: "2x - y = 1", hi: "2x - y = 1"}, {en: "x - 2y = -4", hi: "x - 2y = -4"}], ans: 1 },
    { type: 'MCQ', textEn: "The center of the circle x² + y² - 4x - 6y + 9 = 0 is:", textHi: "वृत्त x² + y² - 4x - 6y + 9 = 0 का केंद्र है:", options: [{en: "(2, 3)", hi: "(2, 3)"}, {en: "(1, 2)", hi: "(1, 2)"}, {en: "(3, 2)", hi: "(3, 2)"}, {en: "(2, 2)", hi: "(2, 2)"}], ans: 1 },
    { type: 'MCQ', textEn: "The asymptotes of the hyperbola x²/9 - y²/4 = 1 are:", textHi: "अतिपरवलय x²/9 - y²/4 = 1 के अनंतस्पर्शी (asymptotes) हैं:", options: [{en: "y = ±(2/3)x", hi: "y = ±(2/3)x"}, {en: "y = ±(3/2)x", hi: "y = ±(3/2)x"}, {en: "y = ±2x", hi: "y = ±2x"}, {en: "y = ±x/2", hi: "y = ±x/2"}], ans: 1 },
    { type: 'MCQ', textEn: "The principal argument of [(-1 + i√3) / (-1 - i)] is:", textHi: "[(-1 + i√3) / (-1 - i)] का मुख्य कोणांक (principal argument) है:", options: [{en: "11π/12", hi: "11π/12"}, {en: "π/3", hi: "π/3"}, {en: "π", hi: "π"}, {en: "0", hi: "0"}], ans: 1 },
    { type: 'MCQ', textEn: "For a dataset of first 10 natural numbers, the variance is:", textHi: "प्रथम 10 प्राकृतिक संख्याओं वाले डेटा के लिए, प्रसरण (variance) है:", options: [{en: "8.25", hi: "8.25"}, {en: "9.17", hi: "9.17"}, {en: "55/6", hi: "55/6"}, {en: "99/12", hi: "99/12"}], ans: 1 },
    { type: 'MCQ', textEn: "lim(x→∞) [ln x / √x] =", textHi: "lim(x→∞) [ln x / √x] का मान है:", options: [{en: "0", hi: "0"}, {en: "∞", hi: "∞"}, {en: "1", hi: "1"}, {en: "-∞", hi: "-∞"}], ans: 1 },
    { type: 'MCQ', textEn: "The sum of the geometric progression 1 + 3 + 9 + ... + 3⁸ is:", textHi: "गुणोत्तर श्रेढ़ी 1 + 3 + 9 + ... + 3⁸ का योग है:", options: [{en: "(3⁹ - 1)/2", hi: "(3⁹ - 1)/2"}, {en: "3⁹ - 1", hi: "3⁹ - 1"}, {en: "(3⁹ - 1)/4", hi: "(3⁹ - 1)/4"}, {en: "3⁸", hi: "3⁸"}], ans: 1 },
    { type: 'Numerical', textEn: "Find the area of the triangle formed by points given by determinant |1 2 0|, |2 0 3|, |0 3 1|. (Half the magnitude).", textHi: "सारणिक |1 2 0|, |2 0 3|, |0 3 1| द्वारा दिए गए बिंदुओं से बने त्रिभुज का क्षेत्रफल ज्ञात करें।", ans: "11" },
    { type: 'Numerical', textEn: "Evaluate ∫₀^(π/2) sin³x dx.", textHi: "मान ज्ञात करें: ∫₀^(π/2) sin³x dx.", ans: "1.33" },
    { type: 'Numerical', textEn: "For matrix A = [1 1; 0 2], find the magnitude of A⁻¹(2,1) element × 10 (i.e., if 0.5 then 5). Element is 0, so 0?", textHi: "A = [1 1; 0 2] के लिए, व्युत्क्रम A⁻¹ का तत्व (2,1) क्या होगा? (शून्य है तो 0 दर्ज करें)", ans: "0" },
    { type: 'Numerical', textEn: "The distance from the vertex to the focus in the parabola y² = 8x is:", textHi: "परवलय y² = 8x में शीर्ष से नाभि (focus) तक की दूरी कितनी है?", ans: "2" },
    { type: 'Numerical', textEn: "A bag contains 3 red and 4 blue balls. If 3 balls are drawn, what is the probability (multiplied by 100) of getting exactly 2 red balls? (18/35 × 100 ≈ 51.4)", textHi: "एक थैले में 3 लाल और 4 नीली गेंदें हैं। यदि 3 गेंदें निकाली जाती हैं, तो ठीक 2 लाल गेंदें मिलने की प्रायिकता (× 100) क्या होगी? (लगभग 51.4)", ans: "51.4" }
];

export const mock3Questions: QuestionType[] = Array.from({ length: 75 }).map((_, i) => {
    let subject = 'Physics';
    if (i >= 25 && i < 50) subject = 'Chemistry';
    if (i >= 50) subject = 'Mathematics';
    
    const subjectIndex = i % 25;
    const type = subjectIndex < 20 ? 'MCQ' : 'Numerical';
    
    if (subject === 'Physics') {
        const physQ: any = physicsQuestions_3[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: physQ.type as 'MCQ' | 'Numerical',
            textEn: physQ.textEn || physQ.text || `[Mock 3] Physics Question ${subjectIndex + 1}`,
            textHi: physQ.textHi || physQ.text || `[Mock 3] Physics Question ${subjectIndex + 1} (Hi)`,
            options: physQ.type === 'MCQ' && physQ.options ? physQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 3 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 3 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: physQ.type === 'MCQ' ? physQ.ans as number : undefined,
            correctAnswer: physQ.type === 'Numerical' ? physQ.ans as string : undefined
        };
    }
    
    if (subject === 'Chemistry') {
        const chemQ: any = chemistryQuestions_3[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: chemQ.type as 'MCQ' | 'Numerical',
            textEn: chemQ.textEn || chemQ.text || `[Mock 3] Chemistry Question ${subjectIndex + 1}`,
            textHi: chemQ.textHi || chemQ.text || `[Mock 3] Chemistry Question ${subjectIndex + 1} (Hi)`,
            options: chemQ.type === 'MCQ' && chemQ.options ? chemQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 3 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 3 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: chemQ.type === 'MCQ' ? chemQ.ans as number : undefined,
            correctAnswer: chemQ.type === 'Numerical' ? chemQ.ans as string : undefined
        };
    }
    
    if (subject === 'Mathematics') {
        const mathQ: any = mathQuestions_3[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: mathQ.type as 'MCQ' | 'Numerical',
            textEn: mathQ.textEn || mathQ.text || `[Mock 3] Math Question ${subjectIndex + 1}`,
            textHi: mathQ.textHi || mathQ.text || `[Mock 3] Math Question ${subjectIndex + 1} (Hi)`,
            options: mathQ.type === 'MCQ' && mathQ.options ? mathQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 3 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 3 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: mathQ.type === 'MCQ' ? mathQ.ans as number : undefined,
            correctAnswer: mathQ.type === 'Numerical' ? mathQ.ans as string : undefined
        };
    }
    return {} as any;
});
