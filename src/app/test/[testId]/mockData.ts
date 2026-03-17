export const jeeSubjectsList = ['Physics', 'Chemistry', 'Mathematics'];

export type QuestionType = {
    id: number;
    subject: string;
    type: 'MCQ' | 'Numerical';
    textEn: string;
    textHi: string;
    options?: { id: number; textEn: string; textHi: string }[];
    correctOption?: number;
    correctAnswer?: string;
};

const chemistryQuestions = [
    { type: 'MCQ', text: "The central atom in IF₅ has:", options: ["Square pyramidal shape, 1 lone pair", "Trigonal bipyramidal, 2 lone pairs", "Square pyramidal, 1 lone pair", "Octahedral, 0 lone pairs"], ans: 3 },
    { type: 'MCQ', text: "[Co(NH₃)₅Cl]SO₄ and [Co(NH₃)₅SO₄]Cl are:", options: ["Coordination isomers", "Ionization isomers", "Geometrical isomers", "Linkage isomers"], ans: 2 },
    { type: 'MCQ', text: "In white phosphorus, each P atom is linked with:", options: ["3 other P atoms", "4 other P atoms", "2 other P atoms", "1 other P atom"], ans: 1 },
    { type: 'MCQ', text: "Which is anti-aromatic?", options: ["Cyclobutadiene", "Benzene", "Cyclopropenyl cation", "Annulene"], ans: 1 },
    { type: 'MCQ', text: "For 2SO₂ + O₂ ⇌ 2SO₃, Kp/Kc =", options: ["RT^{-1/2}", "RT^{1/2}", "RT", "1"], ans: 1 },
    { type: 'MCQ', text: "Equivalent weight of KMnO₄ in acidic medium = M/", options: ["5", "3", "1", "6"], ans: 1 },
    { type: 'MCQ', text: "Benzene + CH₃Cl/AlCl₃ → Toluene. Next Cl₂/FeCl₃ → major product?", options: ["o/p-chlorotoluene", "m-chlorotoluene", "1,3-dichlorobenzene", "Benzyl chloride"], ans: 1 },
    { type: 'MCQ', text: "In [Ni(CN)₄]²⁻, Ni is:", options: ["sp³, paramagnetic", "dsp², diamagnetic", "dsp², paramagnetic", "sp³, diamagnetic"], ans: 2 },
    { type: 'MCQ', text: "For endothermic reaction, ΔH >0, ΔS>0, spontaneous at:", options: ["Low T", "High T", "All T", "No T"], ans: 2 },
    { type: 'MCQ', text: "Bond order in NO⁺:", options: ["2.5", "3", "2", "1.5"], ans: 2 },
    { type: 'MCQ', text: "CH₃CH₂Br + alc. KOH → major?", options: ["CH₂=CH₂", "CH₃CH₂OH", "CH₃CHO", "CH₃CH₃"], ans: 1 },
    { type: 'MCQ', text: "Which has highest +I effect?", options: ["-NH₂", "-OH", "-CH₃", "-OR"], ans: 3 },
    { type: 'MCQ', text: "E° cell >0 means:", options: ["Spontaneous", "Non-spontaneous", "ΔG=0", "Equilibrium"], ans: 1 },
    { type: 'MCQ', text: "Order of acidity: HF > H₂O > NH₃ > CH₄ Reason:", options: ["Bond strength", "Electronegativity", "Size", "Resonance"], ans: 1 },
    { type: 'MCQ', text: "α-amino acids exist as:", options: ["Zwitterions", "Cations", "Anions", "Neutral"], ans: 1 },
    { type: 'MCQ', text: "CCP packing efficiency:", options: ["74%", "68%", "52%", "34%"], ans: 1 },
    { type: 'MCQ', text: "For zero order, t½ ∝", options: ["[A]⁰", "[A]", "1/[A]", "1/[A]²"], ans: 1 },
    { type: 'MCQ', text: "Lyophilic sols are:", options: ["Reversible", "Irreversible", "Coagulating", "Hydrophobic"], ans: 1 },
    { type: 'MCQ', text: "Colour in KMnO₄ due to:", options: ["d-d transition", "Charge transfer", "f-f", "LMCT"], ans: 2 },
    { type: 'MCQ', text: "Nylon-6,6 from:", options: ["Hexamethylenediamine + Adipic acid", "Caprolactam", "Phenol + Formaldehyde", "Styrene"], ans: 1 },
    { type: 'Numerical', text: "6.023×10²³ molecules of N₂ occupy 11.2 L at STP. Volume of 34g NH₃ at STP?", ans: "44.8" },
    { type: 'Numerical', text: "For 2HI ⇌ H₂ + I₂, Kc=0.02 at 500K. If [HI]₀=4M, equilibrium [H₂]?", ans: "0.4" },
    { type: 'Numerical', text: "For Zn | Zn²⁺(0.1M) || Cu²⁺(1M) | Cu, E_cell if E°=1.1V. (RT/F=0.06)", ans: "1.14" },
    { type: 'Numerical', text: "18g glucose in 200g water, ΔT_b=0.52K. Molal elevation constant?", ans: "0.52" },
    { type: 'Numerical', text: "t½=10 min for first order. Time for 75% decomposition?", ans: "20" }
];

const mathQuestions = [
    { type: 'MCQ', text: "Let R be a relation on Z defined by xRy if x² - y² is divisible by 5. The relation R is:", options: ["Reflexive only", "Symmetric only", "Transitive only", "Equivalence"], ans: 4 },
    { type: 'MCQ', text: "If z + 1/z = 1, then the value of z²⁰²⁶ + 1/z²⁰²⁶ is:", options: ["1", "-1", "2", "-2"], ans: 2 },
    { type: 'MCQ', text: "If A = [1 2; 0 1], then Aⁿ is equal to:", options: ["[1 2ⁿ; 0 1]", "[1 2n; 0 1]", "[n 2n; 0 n]", "[1 n²; 0 1]"], ans: 2 },
    { type: 'MCQ', text: "If the system of equations x+y+z=6, x+2y+3z=10, x+2y+λz=μ has infinite solutions, then λ + μ is:", options: ["10", "11", "12", "13"], ans: 4 },
    { type: 'MCQ', text: "If α, β are roots of x² - 6x - 2 = 0 and aₙ = αⁿ - βⁿ, then (a₁₀ - 2a₈) / 2a₉ is:", options: ["1", "2", "3", "4"], ans: 3 },
    { type: 'MCQ', text: "The sum of the series 1 + (1+2)/2 + (1+2+3)/4 + ... up to infinity is:", options: ["2", "3", "4", "6"], ans: 3 },
    { type: 'MCQ', text: "lim(x→0) [cos(sin x) - 1] / x² is:", options: ["1", "-1", "-1/2", "1/2"], ans: 3 },
    { type: 'MCQ', text: "If f(x) = |x-1| + |x-2|, then f(x) is not differentiable at:", options: ["x=1 only", "x=2 only", "x=1 and x=2", "All x"], ans: 3 },
    { type: 'MCQ', text: "If y = tan⁻¹((√(1+x²) - 1)/x), then dy/dx at x=0 is:", options: ["1", "1/2", "0", "Does not exist"], ans: 2 },
    { type: 'MCQ', text: "∫ dx / (x(xⁿ+1)) is:", options: ["(1/n)ln|xⁿ+1| + C", "(1/n)ln|xⁿ/(xⁿ+1)| + C", "ln|xⁿ+1| + C", "None"], ans: 2 },
    { type: 'MCQ', text: "∫[0 to π/2] (sin¹⁰⁰x) / (sin¹⁰⁰x + cos¹⁰⁰x) dx is:", options: ["π", "π/2", "π/4", "0"], ans: 3 },
    { type: 'MCQ', text: "The solution of dy/dx + y/x = x² is:", options: ["xy = x³/3 + C", "xy = x⁴/4 + C", "y = x³ + C", "xy = x² + C"], ans: 2 },
    { type: 'MCQ', text: "The distance of the point (1, 2) from the line 3x+4y+9=0 is:", options: ["2", "3", "4", "5"], ans: 3 },
    { type: 'MCQ', text: "The number of common tangents to circles x²+y²=4 and x²+y²-6x-8y+24=0 is:", options: ["1", "2", "3", "4"], ans: 4 },
    { type: 'MCQ', text: "The length of latus rectum of y² - 4y - 8x + 12 = 0 is:", options: ["4", "8", "12", "2"], ans: 2 },
    { type: 'MCQ', text: "If a, b are unit vectors and |a+b| = 1, then angle between them is:", options: ["60°", "90°", "120°", "180°"], ans: 3 },
    { type: 'MCQ', text: "The distance between parallel planes 2x-y+2z+3=0 and 4x-2y+4z-6=0 is:", options: ["1", "2", "3", "4"], ans: 2 },
    { type: 'MCQ', text: "The variance of first 10 natural numbers is:", options: ["7.25", "8.25", "9.25", "10.25"], ans: 2 },
    { type: 'MCQ', text: "If P(A) = 0.4, P(B) = 0.6 and A, B are independent, then P(A ∪ B) is:", options: ["1", "0.24", "0.76", "0.8"], ans: 3 },
    { type: 'MCQ', text: "The principal value of sin⁻¹(sin 2π/3) is:", options: ["2π/3", "π/3", "-π/3", "π/6"], ans: 2 },
    { type: 'Numerical', text: "Find the coefficient of x⁷ in the expansion of (1+x)¹⁰.", ans: "120" },
    { type: 'Numerical', text: "Find the area bounded by y² = 4x and x=1.", ans: "2.67" },
    { type: 'Numerical', text: "Total number of 4-digit numbers that can be formed using digits {1, 2, 3, 4} without repetition.", ans: "24" },
    { type: 'Numerical', text: "Find the shortest distance between lines (x-1)/1 = (y-2)/1 = (z-3)/1 and (x-1)/2 = (y-2)/2 = (z-3)/2.", ans: "0" },
    { type: 'Numerical', text: "If a = i + j + k and b = i + 2j + 3k, then find the value of |a × b|².", ans: "6" }
];

const physicsQuestions = [
    { type: 'MCQ', textEn: "On what does the stopping potential in the photoelectric effect depend?", textHi: "प्रकाश वैद्युत प्रभाव में निरोधी विभव किस पर निर्भर करता है?", options: [{en: "Intensity", hi: "तीव्रता"}, {en: "Frequency", hi: "आवृत्ति"}, {en: "Work function only", hi: "केवल कार्य फलन"}, {en: "Frequency and work function", hi: "आवृत्ति और कार्य फलन"}], ans: 4 },
    { type: 'MCQ', textEn: "If the length of a wire is doubled and its radius is halved, what will be its new resistance?", textHi: "यदि एक तार की लंबाई दोगुनी और त्रिज्या आधी कर दी जाए, तो उसका नया प्रतिरोध क्या होगा?", options: [{en: "Same", hi: "समान रहेगा"}, {en: "Double", hi: "दोगुना होगा"}, {en: "8 times", hi: "8 गुना होगा"}, {en: "16 times", hi: "16 गुना होगा"}], ans: 4 },
    { type: 'MCQ', textEn: "What is the electric field inside a uniformly charged spherical shell?", textHi: "एकसमान रूप से आवेशित गोलीय कोश के अंदर विद्युत क्षेत्र क्या होता है?", options: [{en: "Zero", hi: "शून्य"}, {en: "Constant", hi: "नियतांक"}, {en: "Linearly increasing", hi: "रैखिक रूप से बढ़ता हुआ"}, {en: "Infinite", hi: "अनंत"}], ans: 1 },
    { type: 'MCQ', textEn: "What does the slope of a velocity-time graph represent?", textHi: "वेग-समय ग्राफ का ढलान क्या दर्शाता है?", options: [{en: "Velocity", hi: "वेग"}, {en: "Displacement", hi: "विस्थापन"}, {en: "Acceleration", hi: "त्वरण"}, {en: "Force", hi: "बल"}], ans: 3 },
    { type: 'MCQ', textEn: "What is the work done in an isothermal process?", textHi: "समतापीय प्रक्रिया में किया गया कार्य क्या होता है?", options: [{en: "Zero", hi: "शून्य"}, {en: "Maximum", hi: "अधिकतम"}, {en: "Minimum", hi: "न्यूनतम"}, {en: "Depends on path", hi: "पथ पर निर्भर करता है"}], ans: 2 },
    { type: 'MCQ', textEn: "What does a moving charge experience in a magnetic field?", textHi: "एक गतिमान आवेश चुंबकीय क्षेत्र में क्या अनुभव करता है?", options: [{en: "Electric force", hi: "विद्युत बल"}, {en: "Magnetic force", hi: "चुंबकीय बल"}, {en: "Gravitational force", hi: "गुरुत्वाकर्षण बल"}, {en: "No force", hi: "कोई बल नहीं"}], ans: 2 },
    { type: 'MCQ', textEn: "How is the image formed in a convex mirror?", textHi: "उत्तल दर्पण में प्रतिबिंब कैसा होता है?", options: [{en: "Real and inverted", hi: "वास्तविक और उल्टा"}, {en: "Virtual and erect", hi: "आभासी और सीधा"}, {en: "Real and erect", hi: "वास्तविक और सीधा"}, {en: "Virtual and inverted", hi: "आभासी और उल्टा"}], ans: 2 },
    { type: 'MCQ', textEn: "On what does the wave speed depend?", textHi: "तरंग की गति किस पर निर्भर करती है?", options: [{en: "Frequency", hi: "आवृत्ति"}, {en: "Amplitude", hi: "आयाम"}, {en: "Medium", hi: "माध्यम"}, {en: "Time", hi: "समय"}], ans: 3 },
    { type: 'MCQ', textEn: "In SHM, on what does the restoring force depend?", textHi: "सरल आवर्त गति (SHM) में प्रत्यानयन बल किस पर निर्भर करता है?", options: [{en: "Constant", hi: "नियतांक"}, {en: "Proportional to displacement", hi: "विस्थापन के अनुक्रमानुपाती"}, {en: "Inversely proportional", hi: "व्युत्क्रमानुपाती"}, {en: "Zero", hi: "शून्य"}], ans: 2 },
    { type: 'MCQ', textEn: "What is the dimensional formula of force?", textHi: "बल का विमीय सूत्र क्या है?", options: [{en: "MLT^-2", hi: "MLT^-2"}, {en: "ML^2T^-2", hi: "ML^2T^-2"}, {en: "MLT^-1", hi: "MLT^-1"}, {en: "ML^2T^-3", hi: "ML^2T^-3"}], ans: 1 },
    { type: 'MCQ', textEn: "Upon which of the following does escape velocity NOT depend?", textHi: "पलायन वेग किस पर निर्भर नहीं करता है?", options: [{en: "Mass of planet", hi: "ग्रह का द्रव्यमान"}, {en: "Radius of planet", hi: "ग्रह की त्रिज्या"}, {en: "Mass of object", hi: "वस्तु का द्रव्यमान"}, {en: "Gravitational constant", hi: "गुरुत्वाकर्षण नियतांक"}], ans: 3 },
    { type: 'MCQ', textEn: "What happens to the capacitance when a dielectric is inserted in a parallel plate capacitor?", textHi: "समांतर पट्टिका संधारित्र में परावैद्युत डालने पर धारिता क्या होती है?", options: [{en: "Decreases", hi: "घटती है"}, {en: "Increases", hi: "बढ़ती है"}, {en: "Remains same", hi: "समान रहती है"}, {en: "Becomes zero", hi: "शून्य हो जाती है"}], ans: 2 },
    { type: 'MCQ', textEn: "What is the formula for Torque?", textHi: "बल आघूर्ण (Torque) का सूत्र क्या है?", options: [{en: "p x E", hi: "p x E"}, {en: "r x F", hi: "r x F"}, {en: "m x v", hi: "m x v"}, {en: "F x r", hi: "F x r"}], ans: 2 },
    { type: 'MCQ', textEn: "What is the primary use of a P-N junction diode?", textHi: "डायोड का मुख्य उपयोग क्या है?", options: [{en: "Amplification", hi: "प्रवर्धन"}, {en: "Rectification", hi: "दिष्टकरण"}, {en: "Oscillation", hi: "दोलन"}, {en: "Storage", hi: "भंडारण"}], ans: 2 },
    { type: 'MCQ', textEn: "How does heat transfer occur during conduction?", textHi: "चालन (Conduction) में ऊष्मा का स्थानांतरण कैसे होता है?", options: [{en: "With mass transfer", hi: "द्रव्यमान स्थानांतरण के साथ"}, {en: "Without mass transfer", hi: "द्रव्यमान स्थानांतरण के बिना"}, {en: "By radiation", hi: "विकिरण द्वारा"}, {en: "By convection", hi: "संवहन द्वारा"}], ans: 2 },
    { type: 'MCQ', textEn: "Which field is transverse in Electromagnetic waves?", textHi: "विद्युत चुम्बकीय तरंगों में कौन सा क्षेत्र अनुप्रस्थ होता है?", options: [{en: "Only Electric field", hi: "केवल विद्युत क्षेत्र"}, {en: "Only Magnetic field", hi: "केवल चुंबकीय क्षेत्र"}, {en: "Both Electric and Magnetic", hi: "विद्युत और चुंबकीय दोनों"}, {en: "None", hi: "कोई नहीं"}], ans: 3 },
    { type: 'MCQ', textEn: "What does the Work-Energy theorem state?", textHi: "कार्य-ऊर्जा प्रमेय क्या है?", options: [{en: "Work = Change in momentum", hi: "कार्य = संवेग में परिवर्तन"}, {en: "Work = Change in kinetic energy", hi: "कार्य = गतिज ऊर्जा में परिवर्तन"}, {en: "Work = Change in potential energy", hi: "कार्य = स्थितिज ऊर्जा में परिवर्तन"}, {en: "Work = Constant energy", hi: "कार्य = नियत ऊर्जा"}], ans: 2 },
    { type: 'MCQ', textEn: "What is the direction of centripetal force?", textHi: "अभिकेंद्र बल की दिशा क्या होती है?", options: [{en: "Away from center", hi: "केंद्र से दूर"}, {en: "Towards the center", hi: "केंद्र की ओर"}, {en: "Parallel to velocity", hi: "वेग के समानांतर"}, {en: "Perpendicular to radius", hi: "त्रिज्या के लंबवत"}], ans: 2 },
    { type: 'MCQ', textEn: "For which type of fluid is Bernoulli's principle valid?", textHi: "बर्नौली का सिद्धांत किस प्रकार के द्रव के लिए मान्य है?", options: [{en: "Compressible fluid", hi: "संपीड्य द्रव"}, {en: "Incompressible and non-viscous fluid", hi: "असंपीड्य और अश्यान द्रव"}, {en: "Static fluid", hi: "स्थिर द्रव"}, {en: "Viscous fluid only", hi: "केवल श्यान द्रव"}], ans: 2 },
    { type: 'MCQ', textEn: "What is the rule for percentage error in addition?", textHi: "योग में प्रतिशत त्रुटि का नियम क्या है?", options: [{en: "Relative errors are added", hi: "सापेक्ष त्रुटियाँ जुड़ती हैं"}, {en: "Absolute errors are added", hi: "निरपेक्ष त्रुटियाँ जुड़ती हैं"}, {en: "Errors cancel each other", hi: "त्रुटियाँ एक दूसरे को रद्द करती हैं"}, {en: "Errors are multiplied", hi: "त्रुटियों का गुणा होता है"}], ans: 2 },
    { type: 'Numerical', textEn: "If the work function is 4 eV and photon energy is 6 eV, what will be the kinetic energy (in eV)?", textHi: "यदि कार्य फलन 4 eV और फोटॉन की ऊर्जा 6 eV है, तो गतिज ऊर्जा (eV में) क्या होगी?", ans: "2" },
    { type: 'Numerical', textEn: "If a 2 ohm and a 3 ohm resistor are in parallel, what is the equivalent resistance?", textHi: "यदि 2 ओम और 3 ओम के प्रतिरोधक समानांतर क्रम में हों, तो तुल्य प्रतिरोध क्या होगा?", ans: "1.2" },
    { type: 'Numerical', textEn: "If acceleration is 2 m/s^2 and time is 5 s (starting from rest), what is the final velocity?", textHi: "यदि त्वरण 2 m/s^2 है और समय 5 s है (विराम से शुरू), तो अंतिम वेग क्या होगा?", ans: "10" },
    { type: 'Numerical', textEn: "If a 2 microfarad and another 2 microfarad capacitor are in series, what is the equivalent capacitance?", textHi: "यदि 2 माइक्रोफैराड और दूसरा 2 माइक्रोफैराड संधारित्र श्रेणीक्रम में हों, तो तुल्य धारिता क्या होगी?", ans: "1" },
    { type: 'Numerical', textEn: "If g = 10 m/s^2 at the surface, what will be the value of g at a height equal to the radius of the earth? (in m/s^2)", textHi: "यदि पृथ्वी की सतह पर g = 10 m/s^2 है, तो पृथ्वी की त्रिज्या के बराबर ऊंचाई पर g का मान क्या होगा? (m/s^2 में)", ans: "2.5" }
];

export const jeeMockQuestions: QuestionType[] = Array.from({ length: 75 }).map((_, i) => {
    let subject = 'Physics';
    if (i >= 25 && i < 50) subject = 'Chemistry';
    if (i >= 50) subject = 'Mathematics';
    
    const subjectIndex = i % 25;
    const type = subjectIndex < 20 ? 'MCQ' : 'Numerical';
    
    if (subject === 'Physics') {
        const physQ = physicsQuestions[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: physQ.type as 'MCQ' | 'Numerical',
            textEn: physQ.textEn,
            textHi: physQ.textHi,
            options: physQ.type === 'MCQ' && physQ.options ? physQ.options.map((opt, idx) => ({ 
                id: idx + 1, 
                textEn: opt.en, 
                textHi: opt.hi 
            })) : undefined,
            correctOption: physQ.type === 'MCQ' ? physQ.ans as number : undefined,
            correctAnswer: physQ.type === 'Numerical' ? physQ.ans as string : undefined
        };
    }
    
    if (subject === 'Chemistry') {
        const chemQ = chemistryQuestions[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: chemQ.type as 'MCQ' | 'Numerical',
            textEn: chemQ.text,
            textHi: chemQ.text,
            options: chemQ.type === 'MCQ' && chemQ.options ? chemQ.options.map((opt, idx) => ({ id: idx + 1, textEn: opt, textHi: opt })) : undefined,
            correctOption: chemQ.type === 'MCQ' ? chemQ.ans as number : undefined,
            correctAnswer: chemQ.type === 'Numerical' ? chemQ.ans as string : undefined
        };
    }
    
    if (subject === 'Mathematics') {
        const mathQ = mathQuestions[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: mathQ.type as 'MCQ' | 'Numerical',
            textEn: mathQ.text,
            textHi: mathQ.text,
            options: mathQ.type === 'MCQ' && mathQ.options ? mathQ.options.map((opt, idx) => ({ id: idx + 1, textEn: opt, textHi: opt })) : undefined,
            correctOption: mathQ.type === 'MCQ' ? mathQ.ans as number : undefined,
            correctAnswer: mathQ.type === 'Numerical' ? mathQ.ans as string : undefined
        };
    }
    
    return {
        id: i + 1,
        subject: subject,
        type: type,
        textEn: `This is a sample ${type} question number ${i + 1} for ${subject}. In this question, which of the following refers to the correct concept?`,
        textHi: `यह ${subject} के लिए एक नमूना ${type} प्रश्न संख्या ${i + 1} है। इस प्रश्न में, निम्नलिखित में से कौन सही अवधारणा को संदर्भित करता है?`,
        options: type === 'MCQ' ? [
            { id: 1, textEn: `Option 1 for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प 1` },
            { id: 2, textEn: `Option 2 for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प 2` },
            { id: 3, textEn: `Option 3 for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प 3` },
            { id: 4, textEn: `Option 4 for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प 4` }
        ] : undefined,
        correctOption: type === 'MCQ' ? (i % 4) + 1 : undefined,
        correctAnswer: type === 'Numerical' ? "0" : undefined
    };
});

export const neetSubjectsList = ['Physics', 'Chemistry', 'Botany', 'Zoology'];

export const neetMockQuestions: QuestionType[] = Array.from({ length: 200 }).map((_, i) => {
    let subject = 'Physics';
    if (i >= 50 && i < 100) subject = 'Chemistry';
    if (i >= 100 && i < 150) subject = 'Botany';
    if (i >= 150) subject = 'Zoology';
    
    return {
        id: i + 1,
        subject: subject,
        type: 'MCQ' as const,
        textEn: `This is a sample MCQ question number ${i + 1} for ${subject} in NEET. In this question, which of the following refers to the correct concept?`,
        textHi: `यह ${subject} के लिए एक नमूना MCQ प्रश्न संख्या ${i + 1} NEET है। इस प्रश्न में, निम्नलिखित में से कौन सही अवधारणा को संदर्भित करता है?`,
        options: [
            { id: 1, textEn: `Option 1 for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प 1` },
            { id: 2, textEn: `Option 2 for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प 2` },
            { id: 3, textEn: `Option 3 for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प 3` },
            { id: 4, textEn: `Option 4 for Question ${i + 1}`, textHi: `प्रश्न ${i + 1} के लिए विकल्प 4` }
        ],
        correctOption: (i % 4) + 1
    };
});
