import { QuestionType } from '../mockData';

const physicsQuestions_1: any[] = [
    { type: 'MCQ', textEn: "On what does the stopping potential in the photoelectric effect depend?", textHi: "प्रकाश वैद्युत प्रभाव में निरोधी विभव किस पर निर्भर करता है?", options: [{en: "Intensity", hi: "तीव्रता"}, {en: "Frequency", hi: "आवृत्ति"}, {en: "Work function only", hi: "केवल कार्य फलन"}, {en: "Both frequency & work function", hi: "आवृत्ति और कार्य फलन दोनों"}], ans: 4 },
    { type: 'MCQ', textEn: "If the length of a wire is doubled and its radius is halved, the resistance becomes:", textHi: "यदि एक तार की लंबाई दोगुनी और त्रिज्या आधी कर दी जाए, तो इसका प्रतिरोध:", options: [{en: "Same", hi: "समान रहेगा"}, {en: "Double", hi: "दोगुना होगा"}, {en: "8 times", hi: "8 गुना होगा"}, {en: "16 times", hi: "16 गुना होगा"}], ans: 4 },
    { type: 'MCQ', textEn: "Electric field inside a uniformly charged spherical shell:", textHi: "एकसमान रूप से आवेशित गोलीय कोश के अंदर विद्युत क्षेत्र:", options: [{en: "Zero", hi: "शून्य"}, {en: "Constant", hi: "नियतांक"}, {en: "Increases linearly", hi: "रैखिक रूप से बढ़ता है"}, {en: "Infinite", hi: "अनंत"}], ans: 1 },
    { type: 'MCQ', textEn: "What does the slope of a velocity-time graph represent?", textHi: "वेग-समय ग्राफ का ढलान क्या दर्शाता है?", options: [{en: "Velocity", hi: "वेग"}, {en: "Displacement", hi: "विस्थापन"}, {en: "Acceleration", hi: "त्वरण"}, {en: "Force", hi: "बल"}], ans: 3 },
    { type: 'MCQ', textEn: "In an isothermal process, the work done is:", textHi: "समतापीय प्रक्रिया में किया गया कार्य:", options: [{en: "Zero", hi: "शून्य"}, {en: "Maximum", hi: "अधिकतम"}, {en: "Minimum", hi: "न्यूनतम"}, {en: "Depends on path", hi: "पथ पर निर्भर करता है"}], ans: 2 },
    { type: 'MCQ', textEn: "What does a moving charge experience in a magnetic field?", textHi: "एक गतिमान आवेश चुंबकीय क्षेत्र में क्या अनुभव करता है?", options: [{en: "Electric force", hi: "विद्युत बल"}, {en: "Magnetic force", hi: "चुंबकीय बल"}, {en: "Gravitational force", hi: "गुरुत्वाकर्षण बल"}, {en: "No force", hi: "कोई बल नहीं"}], ans: 2 },
    { type: 'MCQ', textEn: "The image formed by a convex mirror is:", textHi: "उत्तल दर्पण द्वारा बना प्रतिबिंब होता है:", options: [{en: "Real & inverted", hi: "वास्तविक और उल्टा"}, {en: "Virtual & erect", hi: "आभासी और सीधा"}, {en: "Real & erect", hi: "वास्तविक और सीधा"}, {en: "Virtual & inverted", hi: "आभासी और उल्टा"}], ans: 2 },
    { type: 'MCQ', textEn: "Wave speed depends on:", textHi: "तरंग गति निर्भर करती है:", options: [{en: "Frequency", hi: "आवृत्ति"}, {en: "Amplitude", hi: "आयाम"}, {en: "Medium", hi: "माध्यम"}, {en: "Time", hi: "समय"}], ans: 3 },
    { type: 'MCQ', textEn: "In SHM, the restoring force is:", textHi: "सरल आवर्त गति (SHM) में प्रत्यानयन बल होता है:", options: [{en: "Constant", hi: "नियतांक"}, {en: "Proportional to displacement", hi: "विस्थापन के अनुक्रमानुपाती"}, {en: "Inversely proportional", hi: "व्युत्क्रमानुपाती"}, {en: "Zero", hi: "शून्य"}], ans: 2 },
    { type: 'MCQ', textEn: "The dimensional formula of force is:", textHi: "बल का विमीय सूत्र है:", options: [{en: "MLT⁻¹", hi: "MLT⁻¹"}, {en: "ML²T⁻²", hi: "ML²T⁻²"}, {en: "MLT⁻²", hi: "MLT⁻²"}, {en: "MLT⁻³", hi: "MLT⁻³"}], ans: 3 },
    { type: 'MCQ', textEn: "Escape velocity does NOT depend on:", textHi: "पलायन वेग किस पर निर्भर नहीं करता है?", options: [{en: "Mass", hi: "द्रव्यमान"}, {en: "Radius", hi: "त्रिज्या"}, {en: "Height", hi: "ऊंचाई"}, {en: "Gravitational constant", hi: "गुरुत्वाकर्षण नियतांक"}], ans: 3 },
    { type: 'MCQ', textEn: "On inserting a dielectric in a parallel plate capacitor, its capacitance:", textHi: "समांतर पट्टिका संधारित्र में परावैद्युत डालने पर इसकी धारिता:", options: [{en: "Decrease", hi: "घटती है"}, {en: "Increase", hi: "बढ़ती है"}, {en: "Same", hi: "समान रहती है"}, {en: "Zero", hi: "शून्य हो जाती है"}], ans: 2 },
    { type: 'MCQ', textEn: "The formula for Torque is:", textHi: "बल आघूर्ण (Torque) का सूत्र है:", options: [{en: "F × r", hi: "F × r"}, {en: "r × F", hi: "r × F"}, {en: "p × E", hi: "p × E"}, {en: "m × v", hi: "m × v"}], ans: 2 },
    { type: 'MCQ', textEn: "A diode is primarily used for:", textHi: "डायोड का मुख्य रूप से उपयोग किया जाता है:", options: [{en: "Amplification", hi: "प्रवर्धन"}, {en: "Rectification", hi: "दिष्टकरण"}, {en: "Oscillation", hi: "दोलन"}, {en: "Storage", hi: "भंडारण"}], ans: 2 },
    { type: 'MCQ', textEn: "In conduction, heat transfer occurs:", textHi: "चालन (Conduction) में ऊष्मा का स्थानांतरण होता है:", options: [{en: "With mass transfer", hi: "द्रव्यमान स्थानांतरण के साथ"}, {en: "Without mass transfer", hi: "बिना द्रव्यमान स्थानांतरण के"}, {en: "By radiation", hi: "विकिरण द्वारा"}, {en: "By convection", hi: "संवहन द्वारा"}], ans: 2 },
    { type: 'MCQ', textEn: "Which field is transverse in Electromagnetic waves?", textHi: "विद्युत चुम्बकीय तरंगों में कौन सा क्षेत्र अनुप्रस्थ होता है?", options: [{en: "Only Electric field", hi: "केवल विद्युत क्षेत्र"}, {en: "Only Magnetic field", hi: "केवल चुंबकीय क्षेत्र"}, {en: "Both Electric and Magnetic", hi: "विद्युत और चुंबकीय दोनों"}, {en: "None", hi: "कोई नहीं"}], ans: 3 },
    { type: 'MCQ', textEn: "The Work-Energy theorem states:", textHi: "कार्य-ऊर्जा प्रमेय बताता है:", options: [{en: "Work = Change in momentum", hi: "कार्य = संवेग में परिवर्तन"}, {en: "Work = Change in kinetic energy", hi: "कार्य = गतिज ऊर्जा में परिवर्तन"}, {en: "Work = Change in potential energy", hi: "कार्य = स्थितिज ऊर्जा में परिवर्तन"}, {en: "Work = Constant energy", hi: "कार्य = नियत ऊर्जा"}], ans: 2 },
    { type: 'MCQ', textEn: "The direction of centripetal force is:", textHi: "अभिकेंद्र बल की दिशा होती है:", options: [{en: "Away from center", hi: "केंद्र से दूर"}, {en: "Towards the center", hi: "केंद्र की ओर"}, {en: "Tangential", hi: "स्पर्शरेखा की ओर"}, {en: "Perpendicular to radius", hi: "त्रिज्या के लंबवत"}], ans: 2 },
    { type: 'MCQ', textEn: "Bernoulli's principle is valid for:", textHi: "बर्नौली का सिद्धांत मान्य है:", options: [{en: "Compressible fluids", hi: "संपीड्य द्रव के लिए"}, {en: "Incompressible fluid", hi: "असंपीड्य द्रव के लिए"}, {en: "Static fluids", hi: "स्थिर द्रव के लिए"}, {en: "Viscous fluids", hi: "श्यान द्रव के लिए"}], ans: 2 },
    { type: 'MCQ', textEn: "The rule for percentage error in addition is:", textHi: "योग में प्रतिशत त्रुटि के लिए नियम है:", options: [{en: "Relative errors are added", hi: "सापेक्ष त्रुटियाँ जुड़ती हैं"}, {en: "Absolute errors are added", hi: "निरपेक्ष त्रुटियाँ जुड़ती हैं"}, {en: "Errors cancel each other", hi: "त्रुटियाँ रद्द होती हैं"}, {en: "Errors are multiplied", hi: "त्रुटियों का गुणा होता है"}], ans: 2 },
    { type: 'Numerical', textEn: "If the work function is 4 eV and photon energy is 6 eV, what will be the kinetic energy (in eV)?", textHi: "यदि कार्य फलन 4 eV है और आपतित फोटॉन की ऊर्जा 6 eV है, तो गतिज ऊर्जा (eV में) क्या होगी?", ans: "2" },
    { type: 'Numerical', textEn: "If 2Ω and 3Ω resistors are connected in parallel, the equivalent resistance is:", textHi: "यदि 2Ω और 3Ω के प्रतिरोधक समानांतर में जुड़े हैं, तो समतुल्य प्रतिरोध है:", ans: "1.2" },
    { type: 'Numerical', textEn: "If acceleration is 2 m/s² and time is 5s (starting from rest), what is the final velocity?", textHi: "यदि त्वरण 2 m/s² है और समय 5s है (विराम से शुरू), तो अंतिम वेग क्या है?", ans: "10" },
    { type: 'Numerical', textEn: "If two capacitors of 2µF each are in series, what is the equivalent capacitance?", textHi: "यदि 2µF के दो संधारित्र श्रेणीक्रम में हैं, तो समतुल्य धारिता क्या है?", ans: "1" },
    { type: 'Numerical', textEn: "If g = 10 m/s² at the surface, what is the value of g at a height equal to the radius of the Earth? (in m/s²)", textHi: "यदि पृथ्वी की सतह पर g = 10 m/s² है, तो पृथ्वी की त्रिज्या के बराबर ऊंचाई पर g का मान क्या है? (m/s² में)", ans: "2.5" }
];

const chemistryQuestions_1: any[] = [
    { type: 'MCQ', textEn: "The central atom in IF₅ has:", textHi: "IF₅ में केंद्रीय परमाणु में क्या होता है?", options: [{en: "Square pyramidal shape, 1 lone pair", hi: "वर्ग पिरामिडीय आकार, 1 एकाकी युग्म"}, {en: "Trigonal bipyramidal, 2 lone pairs", hi: "त्रिकोणीय द्विपिरामिडीय, 2 एकाकी युग्म"}, {en: "Square pyramidal, 1 lone pair", hi: "वर्ग पिरामिडीय, 1 एकाकी युग्म"}, {en: "Octahedral, 0 lone pairs", hi: "अष्टफलकीय, 0 एकाकी युग्म"}], ans: 3 },
    { type: 'MCQ', textEn: "[Co(NH₃)₅Cl]SO₄ and [Co(NH₃)₅SO₄]Cl are:", textHi: "[Co(NH₃)₅Cl]SO₄ और [Co(NH₃)₅SO₄]Cl क्या हैं?", options: [{en: "Coordination isomers", hi: "उपसहसंयोजन समावयवी"}, {en: "Ionization isomers", hi: "आयनन समावयवी"}, {en: "Geometrical isomers", hi: "ज्यामितीय समावयवी"}, {en: "Linkage isomers", hi: "बंधन समावयवी"}], ans: 2 },
    { type: 'MCQ', textEn: "In white phosphorus, each P atom is linked with:", textHi: "श्वेत फास्फोरस में, प्रत्येक P परमाणु किससे जुड़ा होता है?", options: [{en: "3 other P atoms", hi: "3 अन्य P परमाणुओं से"}, {en: "4 other P atoms", hi: "4 अन्य P परमाणुओं से"}, {en: "2 other P atoms", hi: "2 अन्य P परमाणुओं से"}, {en: "1 other P atom", hi: "1 अन्य P परमाणु से"}], ans: 1 },
    { type: 'MCQ', textEn: "Which is anti-aromatic?", textHi: "निम्नलिखित में से कौन प्रति-ऐरोमैटिक (anti-aromatic) है?", options: [{en: "Cyclobutadiene", hi: "साइक्लोब्यूटाडाईन"}, {en: "Benzene", hi: "बेंजीन"}, {en: "Cyclopropenyl cation", hi: "साइक्लोप्रोपीनाइल धनायन"}, {en: "Annulene", hi: "एनुलीन"}], ans: 1 },
    { type: 'MCQ', textEn: "For 2SO₂ + O₂ ⇌ 2SO₃, Kp/Kc =", textHi: "2SO₂ + O₂ ⇌ 2SO₃ के लिए, Kp/Kc =", options: [{en: "RT^{-1/2}", hi: "RT^{-1/2}"}, {en: "RT^{1/2}", hi: "RT^{1/2}"}, {en: "RT", hi: "RT"}, {en: "1", hi: "1"}], ans: 1 },
    { type: 'MCQ', textEn: "Equivalent weight of KMnO₄ in acidic medium = M/", textHi: "अम्लीय माध्यम में KMnO₄ का तुल्यांकी भार = M/", options: [{en: "5", hi: "5"}, {en: "3", hi: "3"}, {en: "1", hi: "1"}, {en: "6", hi: "6"}], ans: 1 },
    { type: 'MCQ', textEn: "Benzene + CH₃Cl/AlCl₃ → Toluene. Next Cl₂/FeCl₃ → major product?", textHi: "बेंजीन + CH₃Cl/AlCl₃ → टॉलूईन। इसके बाद Cl₂/FeCl₃ के साथ अभिक्रिया का मुख्य उत्पाद क्या होगा?", options: [{en: "o/p-chlorotoluene", hi: "ऑर्थो/पैरा-क्लोरोटॉलूईन"}, {en: "m-chlorotoluene", hi: "मेटा-क्लोरोटॉलूईन"}, {en: "1,3-dichlorobenzene", hi: "1,3-डाइक्लोरोबेंजीन"}, {en: "Benzyl chloride", hi: "बेंजाइल क्लोराइड"}], ans: 1 },
    { type: 'MCQ', textEn: "In [Ni(CN)₄]²⁻, Ni is:", textHi: "[Ni(CN)₄]²⁻ में, Ni कैसा है?", options: [{en: "sp³, paramagnetic", hi: "sp³, अनुचुंबकीय"}, {en: "dsp², diamagnetic", hi: "dsp², प्रतिचुंबकीय"}, {en: "dsp², paramagnetic", hi: "dsp², अनुचुंबकीय"}, {en: "sp³, diamagnetic", hi: "sp³, प्रतिचुंबकीय"}], ans: 2 },
    { type: 'MCQ', textEn: "For endothermic reaction, ΔH >0, ΔS>0, spontaneous at:", textHi: "ऊष्माशोषी अभिक्रिया के लिए, ΔH >0, ΔS>0, किस स्थिति में स्वतः (spontaneous) होगी?", options: [{en: "Low T", hi: "निम्न तापमान पर"}, {en: "High T", hi: "उच्च तापमान पर"}, {en: "All T", hi: "सभी तापमानों पर"}, {en: "No T", hi: "किसी भी तापमान पर नहीं"}], ans: 2 },
    { type: 'MCQ', textEn: "Bond order in NO⁺:", textHi: "NO⁺ में आबंध कोटि (Bond order) क्या है?", options: [{en: "2.5", hi: "2.5"}, {en: "3", hi: "3"}, {en: "2", hi: "2"}, {en: "1.5", hi: "1.5"}], ans: 2 },
    { type: 'MCQ', textEn: "CH₃CH₂Br + alc. KOH → major?", textHi: "CH₃CH₂Br + एल्कोहोलिक KOH → मुख्य उत्पाद?", options: [{en: "CH₂=CH₂", hi: "CH₂=CH₂"}, {en: "CH₃CH₂OH", hi: "CH₃CH₂OH"}, {en: "CH₃CHO", hi: "CH₃CHO"}, {en: "CH₃CH₃", hi: "CH₃CH₃"}], ans: 1 },
    { type: 'MCQ', textEn: "Which has highest +I effect?", textHi: "किसमें सर्वाधिक +I प्रभाव होता है?", options: [{en: "-NH₂", hi: "-NH₂"}, {en: "-OH", hi: "-OH"}, {en: "-CH₃", hi: "-CH₃"}, {en: "-OR", hi: "-OR"}], ans: 3 },
    { type: 'MCQ', textEn: "E° cell >0 means:", textHi: "E° cell > 0 का अर्थ क्या है?", options: [{en: "Spontaneous", hi: "स्वतः (spontaneous)"}, {en: "Non-spontaneous", hi: "अस्वतः"}, {en: "ΔG=0", hi: "ΔG=0"}, {en: "Equilibrium", hi: "साम्यावस्था"}], ans: 1 },
    { type: 'MCQ', textEn: "Order of acidity: HF > H₂O > NH₃ > CH₄ Reason:", textHi: "अम्लता का क्रम: HF > H₂O > NH₃ > CH₄ इसका कारण है:", options: [{en: "Bond strength", hi: "आबंध सामर्थ्य"}, {en: "Electronegativity", hi: "विद्युतऋणात्मकता"}, {en: "Size", hi: "आकार"}, {en: "Resonance", hi: "अनुनाद"}], ans: 1 },
    { type: 'MCQ', textEn: "α-amino acids exist as:", textHi: "α-एमीनो अम्ल किस रूप में मौजूद होते हैं?", options: [{en: "Zwitterions", hi: "ज्विटर आयन"}, {en: "Cations", hi: "धनायन"}, {en: "Anions", hi: "ऋणायन"}, {en: "Neutral", hi: "उदासीन"}], ans: 1 },
    { type: 'MCQ', textEn: "CCP packing efficiency:", textHi: "CCP की संकुलन क्षमता (packing efficiency) कितनी होती है?", options: [{en: "74%", hi: "74%"}, {en: "68%", hi: "68%"}, {en: "52%", hi: "52%"}, {en: "34%", hi: "34%"}], ans: 1 },
    { type: 'MCQ', textEn: "For zero order, t½ ∝", textHi: "शून्य कोटि (zero order) अभिक्रिया के लिए, t½ ∝", options: [{en: "[A]⁰", hi: "[A]⁰"}, {en: "[A]", hi: "[A]"}, {en: "1/[A]", hi: "1/[A]"}, {en: "1/[A]²", hi: "1/[A]²"}], ans: 1 },
    { type: 'MCQ', textEn: "Lyophilic sols are:", textHi: "द्रवरागी (Lyophilic) सॉल होते हैं:", options: [{en: "Reversible", hi: "उत्क्रमणीय"}, {en: "Irreversible", hi: "अनुत्क्रमणीय"}, {en: "Coagulating", hi: "स्कंदनशील"}, {en: "Hydrophobic", hi: "जलविरागी"}], ans: 1 },
    { type: 'MCQ', textEn: "Colour in KMnO₄ due to:", textHi: "KMnO₄ में रंग किसके कारण होता है?", options: [{en: "d-d transition", hi: "d-d संक्रमण"}, {en: "Charge transfer", hi: "आवेश स्थानांतरण"}, {en: "f-f", hi: "f-f संक्रमण"}, {en: "LMCT", hi: "LMCT"}], ans: 2 },
    { type: 'MCQ', textEn: "Nylon-6,6 from:", textHi: "नायलॉन-6,6 किससे बनता है?", options: [{en: "Hexamethylenediamine + Adipic acid", hi: "हेक्सामेथिलीनडाईएमीन + एडिपिक अम्ल"}, {en: "Caprolactam", hi: "कैप्रोलैक्टम"}, {en: "Phenol + Formaldehyde", hi: "फिनॉल + फॉर्मेल्डिहाइड"}, {en: "Styrene", hi: "स्टाइरीन"}], ans: 1 },
    { type: 'Numerical', textEn: "6.023×10²³ molecules of N₂ occupy 11.2 L at STP. Volume of 34g NH₃ at STP?", textHi: "N₂ के 6.023×10²³ अणु STP पर 11.2 L स्थान घेरते हैं। STP पर 34g NH₃ का आयतन क्या होगा?", ans: "44.8" },
    { type: 'Numerical', textEn: "For 2HI ⇌ H₂ + I₂, Kc=0.02 at 500K. If [HI]₀=4M, equilibrium [H₂]?", textHi: "500K पर 2HI ⇌ H₂ + I₂, Kc=0.02 के लिए। यदि [HI]₀=4M है, तो साम्यावस्था में [H₂] क्या होगा?", ans: "0.4" },
    { type: 'Numerical', textEn: "For Zn | Zn²⁺(0.1M) || Cu²⁺(1M) | Cu, E_cell if E°=1.1V. (RT/F=0.06)", textHi: "Zn | Zn²⁺(0.1M) || Cu²⁺(1M) | Cu के लिए, E_cell का मान यदि E°=1.1V है। (RT/F=0.06)", ans: "1.14" },
    { type: 'Numerical', textEn: "18g glucose in 200g water, ΔT_b=0.52K. Molal elevation constant?", textHi: "200g पानी में 18g ग्लूकोज, ΔT_b=0.52K। मोलल क्वथनांक उन्नयन स्थिरांक क्या होगा?", ans: "0.52" },
    { type: 'Numerical', textEn: "t½=10 min for first order. Time for 75% decomposition?", textHi: "प्रथम कोटि अभिक्रिया के लिए t½=10 मिनट। 75% वियोजन के लिए कितना समय लगेगा?", ans: "20" }
];

const mathQuestions_1: any[] = [
    { type: 'MCQ', textEn: "If A = [ [0, -1], [1, 0] ], then A^2026 is equal to:", textHi: "यदि A = [ [0, -1], [1, 0] ], तो A^2026 किसके बराबर है:", options: [{en: "A", hi: "A"}, {en: "-A", hi: "-A"}, {en: "-I", hi: "-I"}, {en: "I", hi: "I"}], ans: 3 },
    { type: 'MCQ', textEn: "The domain of f(x) = 1 / √(|x| - x) is:", textHi: "f(x) = 1 / √(|x| - x) का कार्यक्षेत्र (domain) है:", options: [{en: "(-∞, 0)", hi: "(-∞, 0)"}, {en: "(0, ∞)", hi: "(0, ∞)"}, {en: "R \\ {0}", hi: "R \\ {0}"}, {en: "∅", hi: "∅"}], ans: 1 },
    { type: 'MCQ', textEn: "If |z - 3 + 2i| = 4, then the difference between maximum and minimum value of |z| is:", textHi: "यदि |z - 3 + 2i| = 4, तो |z| के अधिकतम और न्यूनतम मान के बीच का अंतर है:", options: [{en: "4", hi: "4"}, {en: "√13", hi: "√13"}, {en: "8", hi: "8"}, {en: "2√13", hi: "2√13"}], ans: 4 },
    { type: 'MCQ', textEn: "If the roots of x² - px + q = 0 differ by unity, then p² - 4q is:", textHi: "यदि समीकरण x² - px + q = 0 के मूलों का अंतर 1 है, तो p² - 4q का मान है:", options: [{en: "1", hi: "1"}, {en: "2", hi: "2"}, {en: "p", hi: "p"}, {en: "q", hi: "q"}], ans: 1 },
    { type: 'MCQ', textEn: "If a, b, c are in G.P. and a^(1/x) = b^(1/y) = c^(1/z), then x, y, z are in:", textHi: "यदि a, b, c गुणोत्तर श्रेढ़ी (G.P.) में हैं और a^(1/x) = b^(1/y) = c^(1/z) है, तो x, y, z किसमें होंगे:", options: [{en: "A.P.", hi: "A.P."}, {en: "G.P.", hi: "G.P."}, {en: "A.G.P.", hi: "A.G.P."}, {en: "H.P.", hi: "H.P."}], ans: 1 },
    { type: 'MCQ', textEn: "lim(x→0) [1 - cos(2x)] / [x tan(3x)] =", textHi: "lim(x→0) [1 - cos(2x)] / [x tan(3x)] का मान है:", options: [{en: "1/3", hi: "1/3"}, {en: "2/3", hi: "2/3"}, {en: "1", hi: "1"}, {en: "3/2", hi: "3/2"}], ans: 2 },
    { type: 'MCQ', textEn: "If f(x) = k cosx / (π - 2x) is continuous at x = π/2 and f(π/2) = 3, then k is:", textHi: "यदि f(x) = k cosx / (π - 2x), x = π/2 पर सतत है और f(π/2) = 3 है, तो k का मान है:", options: [{en: "3", hi: "3"}, {en: "6", hi: "6"}, {en: "1.5", hi: "1.5"}, {en: "12", hi: "12"}], ans: 2 },
    { type: 'MCQ', textEn: "If x^y = e^(x - y), then dy/dx at x = 1 is:", textHi: "यदि x^y = e^(x - y) है, तो x = 1 पर dy/dx का मान है:", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "e", hi: "e"}, {en: "1/e", hi: "1/e"}], ans: 1 },
    { type: 'MCQ', textEn: "Minimum value of 2x + 3y subject to xy = 6 (x,y > 0):", textHi: "xy = 6 (x, y > 0) के आधार पर 2x + 3y का न्यूनतम मान है:", options: [{en: "10", hi: "10"}, {en: "12", hi: "12"}, {en: "15", hi: "15"}, {en: "6", hi: "6"}], ans: 2 },
    { type: 'MCQ', textEn: "∫ dx / [cos²x (1 + tanx)²] =", textHi: "∫ dx / [cos²x (1 + tanx)²] का मान है:", options: [{en: "-1/(1+tanx) + C", hi: "-1/(1+tanx) + C"}, {en: "ln|1+tanx| + C", hi: "ln|1+tanx| + C"}, {en: "1/(1+tanx) + C", hi: "1/(1+tanx) + C"}, {en: "tanx + C", hi: "tanx + C"}], ans: 1 },
    { type: 'MCQ', textEn: "∫(-1 to 1) |x| dx =", textHi: "∫(-1 से 1) |x| dx का मान है:", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "2", hi: "2"}, {en: "1/2", hi: "1/2"}], ans: 2 },
    { type: 'MCQ', textEn: "Degree of (1 + (dy/dx)²)^(3/2) = d²y/dx²:", textHi: "अवकल समीकरण (1 + (dy/dx)²)^(3/2) = d²y/dx² की घात (Degree) है:", options: [{en: "1", hi: "1"}, {en: "2", hi: "2"}, {en: "3", hi: "3"}, {en: "Not defined", hi: "परिभाषित नहीं"}], ans: 2 },
    { type: 'MCQ', textEn: "Image of point (1, 2) in line x - y = 0:", textHi: "रेखा x - y = 0 में बिंदु (1, 2) का प्रतिबिंब है:", options: [{en: "(1, 2)", hi: "(1, 2)"}, {en: "(2, 1)", hi: "(2, 1)"}, {en: "(-1, -2)", hi: "(-1, -2)"}, {en: "(-2, -1)", hi: "(-2, -1)"}], ans: 2 },
    { type: 'MCQ', textEn: "If line 3x + 4y = k touches circle x² + y² = 25, then k is:", textHi: "यदि रेखा 3x + 4y = k वृत्त x² + y² = 25 को स्पर्श करती है, तो k का मान है:", options: [{en: "5", hi: "5"}, {en: "10", hi: "10"}, {en: "±25", hi: "±25"}, {en: "±5", hi: "±5"}], ans: 3 },
    { type: 'MCQ', textEn: "Eccentricity of hyperbola x² - y² = 9:", textHi: "अतिपरवलय (hyperbola) x² - y² = 9 की उत्केंद्रता (Eccentricity) है:", options: [{en: "1", hi: "1"}, {en: "√2", hi: "√2"}, {en: "2", hi: "2"}, {en: "√3", hi: "√3"}], ans: 2 },
    { type: 'MCQ', textEn: "Projection of a = 2i + 3j + 2k on b = i + 2j + k:", textHi: "सदिश a = 2i + 3j + 2k का b = i + 2j + k पर प्रक्षेप (Projection) है:", options: [{en: "10/√6", hi: "10/√6"}, {en: "5√6/3", hi: "5√6/3"}, {en: "5/3", hi: "5/3"}, {en: "10", hi: "10"}], ans: 1 },
    { type: 'MCQ', textEn: "Angle between lines x/2 = y/2 = z/1 and x/1 = y/2 = z/2:", textHi: "रेखाओं x/2 = y/2 = z/1 और x/1 = y/2 = z/2 के बीच का कोण है:", options: [{en: "0°", hi: "0°"}, {en: "45°", hi: "45°"}, {en: "cos⁻¹(8/9)", hi: "cos⁻¹(8/9)"}, {en: "90°", hi: "90°"}], ans: 3 },
    { type: 'MCQ', textEn: "Mean of ax₁+b, ax₂+b,..., axₙ+b:", textHi: "अवलोकनों ax₁+b, ax₂+b,..., axₙ+b का माध्य है:", options: [{en: "a x̄ + b", hi: "a x̄ + b"}, {en: "x̄ + b", hi: "x̄ + b"}, {en: "a x̄", hi: "a x̄"}, {en: "x̄", hi: "x̄"}], ans: 1 },
    { type: 'MCQ', textEn: "Two dice thrown, probability sum is prime:", textHi: "दो पासे फेंके जाने पर, उनके योग के अभाज्य (prime) होने की प्रायिकता है:", options: [{en: "1/2", hi: "1/2"}, {en: "5/12", hi: "5/12"}, {en: "15/36", hi: "15/36"}, {en: "7/12", hi: "7/12"}], ans: 2 },
    { type: 'MCQ', textEn: "tan15° + cot15° =", textHi: "tan15° + cot15° का मान है:", options: [{en: "2", hi: "2"}, {en: "2√3", hi: "2√3"}, {en: "4", hi: "4"}, {en: "4√3", hi: "4√3"}], ans: 3 },
    { type: 'Numerical', textEn: "Term independent of x in (x² + 1/x)^6:", textHi: "(x² + 1/x)^6 के प्रसार में x से स्वतंत्र पद है:", ans: "15" },
    { type: 'Numerical', textEn: "Area between y = x² and y = x:", textHi: "वक्र y = x² और रेखा y = x द्वारा घिरे क्षेत्र का क्षेत्रफल है:", ans: "0.167" },
    { type: 'Numerical', textEn: "3-digit even numbers from {1,2,3,4,5} (repetition allowed):", textHi: "अंकों {1,2,3,4,5} से बनने वाली 3-अंकीय सम संख्याओं की संख्या (पुनरावृत्ति की अनुमति है):", ans: "50" },
    { type: 'Numerical', textEn: "If determinant is 0 for |x-1, 1, 1; 1, x-1, 1; 1, 1, x-1|, find positive x.", textHi: "सारणिक का मान शून्य है, तो धनात्मक x का मान ज्ञात करें:", ans: "2" },
    { type: 'Numerical', textEn: "f(x) = x³ - 3x² + 6x + 7. Number of local extrema:", textHi: "f(x) = x³ - 3x² + 6x + 7 के स्थानीय चरम बिंदुओं (local extrema) की संख्या है:", ans: "0" }
];

export const mock1Questions: QuestionType[] = Array.from({ length: 75 }).map((_, i) => {
    let subject = 'Physics';
    if (i >= 25 && i < 50) subject = 'Chemistry';
    if (i >= 50) subject = 'Mathematics';
    
    const subjectIndex = i % 25;
    const type = subjectIndex < 20 ? 'MCQ' : 'Numerical';
    
    if (subject === 'Physics') {
        const physQ: any = physicsQuestions_1[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: physQ.type as 'MCQ' | 'Numerical',
            textEn: physQ.textEn || physQ.text || `[Mock 1] Physics Question ${subjectIndex + 1}`,
            textHi: physQ.textHi || physQ.text || `[Mock 1] Physics Question ${subjectIndex + 1} (Hi)`,
            options: physQ.type === 'MCQ' && physQ.options ? physQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 1 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 1 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: physQ.type === 'MCQ' ? physQ.ans as number : undefined,
            correctAnswer: physQ.type === 'Numerical' ? physQ.ans as string : undefined
        };
    }
    
    if (subject === 'Chemistry') {
        const chemQ: any = chemistryQuestions_1[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: chemQ.type as 'MCQ' | 'Numerical',
            textEn: chemQ.textEn || chemQ.text || `[Mock 1] Chemistry Question ${subjectIndex + 1}`,
            textHi: chemQ.textHi || chemQ.text || `[Mock 1] Chemistry Question ${subjectIndex + 1} (Hi)`,
            options: chemQ.type === 'MCQ' && chemQ.options ? chemQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 1 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 1 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: chemQ.type === 'MCQ' ? chemQ.ans as number : undefined,
            correctAnswer: chemQ.type === 'Numerical' ? chemQ.ans as string : undefined
        };
    }
    
    if (subject === 'Mathematics') {
        const mathQ: any = mathQuestions_1[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: mathQ.type as 'MCQ' | 'Numerical',
            textEn: mathQ.textEn || mathQ.text || `[Mock 1] Math Question ${subjectIndex + 1}`,
            textHi: mathQ.textHi || mathQ.text || `[Mock 1] Math Question ${subjectIndex + 1} (Hi)`,
            options: mathQ.type === 'MCQ' && mathQ.options ? mathQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 1 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 1 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: mathQ.type === 'MCQ' ? mathQ.ans as number : undefined,
            correctAnswer: mathQ.type === 'Numerical' ? mathQ.ans as string : undefined
        };
    }
    return {} as any;
});
