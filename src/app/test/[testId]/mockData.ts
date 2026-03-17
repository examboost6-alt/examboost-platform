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

const mathQuestions = [
    { type: 'MCQ', textEn: "Let R be a relation on Z defined by xRy if x² - y² is divisible by 5. The relation R is:", textHi: "मान लीजिए कि Z पर एक संबंध R इस प्रकार परिभाषित है: xRy यदि x² - y², 5 से विभाज्य है। संबंध R है:", options: [{en: "Reflexive only", hi: "केवल स्वतुल्य"}, {en: "Symmetric only", hi: "केवल सममित"}, {en: "Transitive only", hi: "केवल संक्रामक"}, {en: "Equivalence", hi: "तुल्यता संबंध"}], ans: 4 },
    { type: 'MCQ', textEn: "If z + 1/z = 1, then the value of z²⁰²⁶ + 1/z²⁰²⁶ is:", textHi: "यदि z + 1/z = 1, तो z²⁰²⁶ + 1/z²⁰²⁶ का मान है:", options: [{en: "1", hi: "1"}, {en: "-1", hi: "-1"}, {en: "2", hi: "2"}, {en: "-2", hi: "-2"}], ans: 2 },
    { type: 'MCQ', textEn: "If A = [1 2; 0 1], then Aⁿ is equal to:", textHi: "यदि A = [1 2; 0 1], तो Aⁿ किसके बराबर है?", options: [{en: "[1 2ⁿ; 0 1]", hi: "[1 2ⁿ; 0 1]"}, {en: "[1 2n; 0 1]", hi: "[1 2n; 0 1]"}, {en: "[n 2n; 0 n]", hi: "[n 2n; 0 n]"}, {en: "[1 n²; 0 1]", hi: "[1 n²; 0 1]"}], ans: 2 },
    { type: 'MCQ', textEn: "If the system of equations x+y+z=6, x+2y+3z=10, x+2y+λz=μ has infinite solutions, then λ + μ is:", textHi: "यदि समीकरण प्रणाली x+y+z=6, x+2y+3z=10, x+2y+λz=μ के अनंत हल हैं, तो λ + μ का मान है:", options: [{en: "10", hi: "10"}, {en: "11", hi: "11"}, {en: "12", hi: "12"}, {en: "13", hi: "13"}], ans: 4 },
    { type: 'MCQ', textEn: "If α, β are roots of x² - 6x - 2 = 0 and aₙ = αⁿ - βⁿ, then (a₁₀ - 2a₈) / 2a₉ is:", textHi: "यदि α, β समीकरण x² - 6x - 2 = 0 के मूल हैं और aₙ = αⁿ - βⁿ, तो (a₁₀ - 2a₈) / 2a₉ का मान है:", options: [{en: "1", hi: "1"}, {en: "2", hi: "2"}, {en: "3", hi: "3"}, {en: "4", hi: "4"}], ans: 3 },
    { type: 'MCQ', textEn: "The sum of the series 1 + (1+2)/2 + (1+2+3)/4 + ... up to infinity is:", textHi: "श्रेणी 1 + (1+2)/2 + (1+2+3)/4 + ... का अनंत तक योग है:", options: [{en: "2", hi: "2"}, {en: "3", hi: "3"}, {en: "4", hi: "4"}, {en: "6", hi: "6"}], ans: 3 },
    { type: 'MCQ', textEn: "lim(x→0) [cos(sin x) - 1] / x² is:", textHi: "lim(x→0) [cos(sin x) - 1] / x² का मान है:", options: [{en: "1", hi: "1"}, {en: "-1", hi: "-1"}, {en: "-1/2", hi: "-1/2"}, {en: "1/2", hi: "1/2"}], ans: 3 },
    { type: 'MCQ', textEn: "If f(x) = |x-1| + |x-2|, then f(x) is not differentiable at:", textHi: "यदि f(x) = |x-1| + |x-2|, तो f(x) कहाँ अवकलनीय नहीं है?", options: [{en: "x=1 only", hi: "केवल x=1 पर"}, {en: "x=2 only", hi: "केवल x=2 पर"}, {en: "x=1 and x=2", hi: "x=1 और x=2 पर"}, {en: "All x", hi: "सभी x पर"}], ans: 3 },
    { type: 'MCQ', textEn: "If y = tan⁻¹((√(1+x²) - 1)/x), then dy/dx at x=0 is:", textHi: "यदि y = tan⁻¹((√(1+x²) - 1)/x), तो x=0 पर dy/dx का मान है:", options: [{en: "1", hi: "1"}, {en: "1/2", hi: "1/2"}, {en: "0", hi: "0"}, {en: "Does not exist", hi: "विद्यमान नहीं है"}], ans: 2 },
    { type: 'MCQ', textEn: "∫ dx / (x(xⁿ+1)) is:", textHi: "∫ dx / (x(xⁿ+1)) का मान है:", options: [{en: "(1/n)ln|xⁿ+1| + C", hi: "(1/n)ln|xⁿ+1| + C"}, {en: "(1/n)ln|xⁿ/(xⁿ+1)| + C", hi: "(1/n)ln|xⁿ/(xⁿ+1)| + C"}, {en: "ln|xⁿ+1| + C", hi: "ln|xⁿ+1| + C"}, {en: "None", hi: "कोई नहीं"}], ans: 2 },
    { type: 'MCQ', textEn: "∫[0 to π/2] (sin¹⁰⁰x) / (sin¹⁰⁰x + cos¹⁰⁰x) dx is:", textHi: "∫[0 से π/2] (sin¹⁰⁰x) / (sin¹⁰⁰x + cos¹⁰⁰x) dx का मान है:", options: [{en: "π", hi: "π"}, {en: "π/2", hi: "π/2"}, {en: "π/4", hi: "π/4"}, {en: "0", hi: "0"}], ans: 3 },
    { type: 'MCQ', textEn: "The solution of dy/dx + y/x = x² is:", textHi: "अवकल समीकरण dy/dx + y/x = x² का हल है:", options: [{en: "xy = x³/3 + C", hi: "xy = x³/3 + C"}, {en: "xy = x⁴/4 + C", hi: "xy = x⁴/4 + C"}, {en: "y = x³ + C", hi: "y = x³ + C"}, {en: "xy = x² + C", hi: "xy = x² + C"}], ans: 2 },
    { type: 'MCQ', textEn: "The distance of the point (1, 2) from the line 3x+4y+9=0 is:", textHi: "बिंदु (1, 2) की रेखा 3x+4y+9=0 से दूरी है:", options: [{en: "2", hi: "2"}, {en: "3", hi: "3"}, {en: "4", hi: "4"}, {en: "5", hi: "5"}], ans: 3 },
    { type: 'MCQ', textEn: "The number of common tangents to circles x²+y²=4 and x²+y²-6x-8y+24=0 is:", textHi: "वृत्तों x²+y²=4 और x²+y²-6x-8y+24=0 की उभयनिष्ठ स्पर्श रेखाओं की संख्या है:", options: [{en: "1", hi: "1"}, {en: "2", hi: "2"}, {en: "3", hi: "3"}, {en: "4", hi: "4"}], ans: 4 },
    { type: 'MCQ', textEn: "The length of latus rectum of y² - 4y - 8x + 12 = 0 is:", textHi: "परवलय y² - 4y - 8x + 12 = 0 के नाभिलंब (latus rectum) की लंबाई है:", options: [{en: "4", hi: "4"}, {en: "8", hi: "8"}, {en: "12", hi: "12"}, {en: "2", hi: "2"}], ans: 2 },
    { type: 'MCQ', textEn: "If a, b are unit vectors and |a+b| = 1, then angle between them is:", textHi: "यदि a, b इकाई सदिश हैं और |a+b| = 1, तो उनके बीच का कोण है:", options: [{en: "60°", hi: "60°"}, {en: "90°", hi: "90°"}, {en: "120°", hi: "120°"}, {en: "180°", hi: "180°"}], ans: 3 },
    { type: 'MCQ', textEn: "The distance between parallel planes 2x-y+2z+3=0 and 4x-2y+4z-6=0 is:", textHi: "समानांतर तलों 2x-y+2z+3=0 और 4x-2y+4z-6=0 के बीच की दूरी है:", options: [{en: "1", hi: "1"}, {en: "2", hi: "2"}, {en: "3", hi: "3"}, {en: "4", hi: "4"}], ans: 2 },
    { type: 'MCQ', textEn: "The variance of first 10 natural numbers is:", textHi: "प्रथम 10 प्राकृतिक संख्याओं का प्रसरण (variance) है:", options: [{en: "7.25", hi: "7.25"}, {en: "8.25", hi: "8.25"}, {en: "9.25", hi: "9.25"}, {en: "10.25", hi: "10.25"}], ans: 2 },
    { type: 'MCQ', textEn: "If P(A) = 0.4, P(B) = 0.6 and A, B are independent, then P(A ∪ B) is:", textHi: "यदि P(A) = 0.4, P(B) = 0.6 और A, B स्वतंत्र घटनाएं हैं, तो P(A ∪ B) का मान है:", options: [{en: "1", hi: "1"}, {en: "0.24", hi: "0.24"}, {en: "0.76", hi: "0.76"}, {en: "0.8", hi: "0.8"}], ans: 3 },
    { type: 'MCQ', textEn: "The principal value of sin⁻¹(sin 2π/3) is:", textHi: "sin⁻¹(sin 2π/3) का मुख्य मान है:", options: [{en: "2π/3", hi: "2π/3"}, {en: "π/3", hi: "π/3"}, {en: "-π/3", hi: "-π/3"}, {en: "π/6", hi: "π/6"}], ans: 2 },
    { type: 'Numerical', textEn: "Find the coefficient of x⁷ in the expansion of (1+x)¹⁰.", textHi: "(1+x)¹⁰ के प्रसार में x⁷ का गुणांक ज्ञात कीजिए।", ans: "120" },
    { type: 'Numerical', textEn: "Find the area bounded by y² = 4x and x=1.", textHi: "वक्र y² = 4x और रेखा x=1 द्वारा घिरे क्षेत्र का क्षेत्रफल ज्ञात कीजिए।", ans: "2.67" },
    { type: 'Numerical', textEn: "Total number of 4-digit numbers that can be formed using digits {1, 2, 3, 4} without repetition.", textHi: "अंकों {1, 2, 3, 4} का उपयोग करके बिना पुनरावृत्ति के बनाई जा सकने वाली 4-अंकीय संख्याओं की कुल संख्या है:", ans: "24" },
    { type: 'Numerical', textEn: "Find the shortest distance between lines (x-1)/1 = (y-2)/1 = (z-3)/1 and (x-1)/2 = (y-2)/2 = (z-3)/2.", textHi: "रेखाओं (x-1)/1 = (y-2)/1 = (z-3)/1 और (x-1)/2 = (y-2)/2 = (z-3)/2 के बीच की न्यूनतम दूरी ज्ञात कीजिए।", ans: "0" },
    { type: 'Numerical', textEn: "If a = i + j + k and b = i + 2j + 3k, then find the value of |a × b|².", textHi: "यदि a = i + j + k और b = i + 2j + 3k है, तो |a × b|² का मान ज्ञात कीजिए।", ans: "6" }
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
            textEn: chemQ.textEn,
            textHi: chemQ.textHi,
            options: chemQ.type === 'MCQ' && chemQ.options ? chemQ.options.map((opt, idx) => ({ 
                id: idx + 1, 
                textEn: opt.en, 
                textHi: opt.hi 
            })) : undefined,
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
            textEn: mathQ.textEn,
            textHi: mathQ.textHi,
            options: mathQ.type === 'MCQ' && mathQ.options ? mathQ.options.map((opt, idx) => ({ 
                id: idx + 1, 
                textEn: opt.en, 
                textHi: opt.hi 
            })) : undefined,
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
