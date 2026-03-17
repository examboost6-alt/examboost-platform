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
    { type: 'MCQ', text: "Photoelectric effect me stopping potential kis par depend karta hai?", options: ["Intensity", "Frequency", "Work function only", "Frequency aur work function"], ans: 4 },
    { type: 'MCQ', text: "Ek wire ki length double aur radius half kar diya jaye, resistance kya hoga?", options: ["Same", "Double", "8 times", "16 times"], ans: 4 },
    { type: 'MCQ', text: "Uniformly charged spherical shell ke andar electric field kya hota hai?", options: ["Zero", "Constant", "Linearly increase", "Infinite"], ans: 1 },
    { type: 'MCQ', text: "Velocity-time graph ka slope kya deta hai?", options: ["Velocity", "Displacement", "Acceleration", "Force"], ans: 3 },
    { type: 'MCQ', text: "Isothermal process me work done kya hota hai?", options: ["Zero", "Maximum", "Minimum", "Path par depend karta hai"], ans: 2 },
    { type: 'MCQ', text: "Moving charge magnetic field me kya experience karta hai?", options: ["Electric force", "Magnetic force", "Gravitational force", "No force"], ans: 2 },
    { type: 'MCQ', text: "Convex mirror me image kaisa hota hai?", options: ["Real aur inverted", "Virtual aur erect", "Real aur erect", "Virtual aur inverted"], ans: 2 },
    { type: 'MCQ', text: "Wave speed kis par depend karta hai?", options: ["Frequency", "Amplitude", "Medium", "Time"], ans: 3 },
    { type: 'MCQ', text: "SHM me restoring force kis par depend karta hai?", options: ["Constant", "Displacement ke proportional", "Inversely proportional", "Zero"], ans: 2 },
    { type: 'MCQ', text: "Force ka dimension kya hai?", options: ["MLT^-2", "ML^2T^-2", "MLT^-1", "ML^2T^-3"], ans: 1 },
    { type: 'MCQ', text: "Escape velocity kis par depend nahi karta?", options: ["Mass", "Radius", "Height", "Gravitational constant"], ans: 3 },
    { type: 'MCQ', text: "Parallel plate capacitor me dielectric daalne par capacitance kya hota hai?", options: ["Decrease", "Increase", "Same", "Zero"], ans: 2 },
    { type: 'MCQ', text: "Torque ka formula kya hai?", options: ["p x E", "r x F", "m x v", "F x r"], ans: 2 },
    { type: 'MCQ', text: "Diode ka main use kya hai?", options: ["Amplification", "Rectification", "Oscillation", "Storage"], ans: 2 },
    { type: 'MCQ', text: "Conduction me heat transfer kaise hota hai?", options: ["Mass transfer ke saath", "Without mass transfer", "Radiation se", "Convection se"], ans: 2 },
    { type: 'MCQ', text: "EM waves me kaun transverse hota hai?", options: ["Keval Electric field", "Keval Magnetic field", "Electric aur Magnetic field dono", "Koi field nahi"], ans: 3 },
    { type: 'MCQ', text: "Work-energy theorem kya hai?", options: ["Work = Change in momentum", "Work = Change in kinetic energy", "Work = Change in potential energy", "Work = Constant energy"], ans: 2 },
    { type: 'MCQ', text: "Centripetal force ki direction kya hoti hai?", options: ["Center se door", "Center ki taraf", "Velocity ke parallel", "Radius ke perpendicular"], ans: 2 },
    { type: 'MCQ', text: "Bernoulli principle kis par valid hai?", options: ["Compressible fluid", "Incompressible fluid", "Static fluid", "Non-viscous gas only"], ans: 2 },
    { type: 'MCQ', text: "Percentage error addition me kya rule hai?", options: ["Relative errors add hote hain", "Absolute errors add hote hain", "Errors cancel hote hain", "Errors multiply hote hain"], ans: 2 },
    { type: 'Numerical', text: "Work function = 4 eV aur photon energy = 6 eV, kinetic energy kya hogi (eV me)?", ans: "2" },
    { type: 'Numerical', text: "2 ohm aur 3 ohm parallel me ho to equivalent resistance kya hoga?", ans: "1.2" },
    { type: 'Numerical', text: "Acceleration = 2 m/s^2 aur time = 5 s, final velocity kya hogi?", ans: "10" },
    { type: 'Numerical', text: "2 microfarad aur 2 microfarad series me ho to equivalent capacitance kya hoga?", ans: "1" },
    { type: 'Numerical', text: "g = 10 m/s^2 aur height double ho jaye to new g kya hoga?", ans: "2.5" }
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
            textEn: physQ.text,
            textHi: physQ.text,
            options: physQ.type === 'MCQ' && physQ.options ? physQ.options.map((opt, idx) => ({ id: idx + 1, textEn: opt, textHi: opt })) : undefined,
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
