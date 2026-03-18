import { QuestionType } from '../mockData';

const physicsQuestions_2: any[] = [
    { type: 'MCQ', textEn: "A particle is in uniformly accelerated motion. If initial velocity is zero and displacement is proportional to the square of time, what is the motion?", textHi: "एक कण एकसमान त्वरित गति में है। यदि प्रारंभिक वेग शून्य हो और विस्थापन समय के वर्ग के अनुक्रमानुपाती हो, तो गति क्या होगी?", options: [{en: "Uniform velocity", hi: "एकसमान वेग"}, {en: "Uniform acceleration", hi: "एकसमान त्वरण"}, {en: "Non-uniform acceleration", hi: "असमान त्वरण"}, {en: "Zero acceleration", hi: "शून्य त्वरण"}], ans: 2 },
    { type: 'MCQ', textEn: "Two resistors R and 2R are in series. If the same resistors are connected in parallel, what is the ratio (Series/Parallel)?", textHi: "दो प्रतिरोधक R और 2R श्रेणीक्रम में हैं। समान प्रतिरोधकों को समानांतर में जोड़ा जाए, तो अनुपात (श्रेणी/समानांतर) क्या होगा?", options: [{en: "9", hi: "9"}, {en: "3", hi: "3"}, {en: "1", hi: "1"}, {en: "6", hi: "6"}], ans: 1 },
    { type: 'MCQ', textEn: "A charge q is placed in an electric field E. To double the force, what change should be made?", textHi: "एक आवेश q को विद्युत क्षेत्र E में रखा जाता है। बल को दोगुना करने के लिए क्या परिवर्तन करना चाहिए?", options: [{en: "q double", hi: "q दोगुना"}, {en: "E half", hi: "E आधा"}, {en: "q half", hi: "q आधा"}, {en: "E zero", hi: "E शून्य"}], ans: 1 },
    { type: 'MCQ', textEn: "A body is in circular motion. If the speed is doubled, what will be the centripetal force?", textHi: "एक पिंड वृत्ताकार गति में है। यदि गति दोगुनी हो जाए, तो अभिकेंद्र बल क्या होगा?", options: [{en: "Same", hi: "समान"}, {en: "Double", hi: "दोगुना"}, {en: "4 times", hi: "4 गुना"}, {en: "Half", hi: "आधा"}], ans: 3 },
    { type: 'MCQ', textEn: "In an ideal gas, internal energy depends on:", textHi: "आदर्श गैस में, आंतरिक ऊर्जा निर्भर करती है:", options: [{en: "Pressure", hi: "दबाव"}, {en: "Volume", hi: "आयतन"}, {en: "Temperature", hi: "तापमान"}, {en: "Density", hi: "घनत्व"}], ans: 3 },
    { type: 'MCQ', textEn: "A lens has a positive focal length. This lens will be:", textHi: "एक लेंस की फोकस दूरी धनात्मक होती है। वह लेंस होगा:", options: [{en: "Concave", hi: "अवतल"}, {en: "Convex", hi: "उत्तल"}, {en: "Plane", hi: "समतल"}, {en: "Cylindrical", hi: "बेलनाकार"}], ans: 2 },
    { type: 'MCQ', textEn: "What is the property of magnetic field lines?", textHi: "चुंबकीय क्षेत्र रेखाओं का गुण क्या है?", options: [{en: "Start and end freely", hi: "स्वतंत्र रूप से शुरू और समाप्त होती हैं"}, {en: "Are closed loops", hi: "बंद लूप होती हैं"}, {en: "Are parallel", hi: "समानांतर होती हैं"}, {en: "Can break", hi: "टूट सकती हैं"}], ans: 2 },
    { type: 'MCQ', textEn: "In SHM, when is the velocity maximum?", textHi: "सरल आवर्त गति (SHM) में, वेग अधिकतम कब होता है?", options: [{en: "Extreme position", hi: "चरम स्थिति"}, {en: "Mean position", hi: "माध्य स्थिति"}, {en: "Half displacement", hi: "आधा विस्थापन"}, {en: "Zero displacement", hi: "शून्य विस्थापन"}], ans: 2 },
    { type: 'MCQ', textEn: "A satellite is in a circular orbit around the earth. What is its total energy?", textHi: "एक उपग्रह पृथ्वी के चारों ओर वृत्ताकार कक्षा में है। उसकी कुल ऊर्जा क्या होती है?", options: [{en: "Positive", hi: "धनात्मक"}, {en: "Zero", hi: "शून्य"}, {en: "Negative", hi: "ऋणात्मक"}, {en: "Infinite", hi: "अनंत"}], ans: 3 },
    { type: 'MCQ', textEn: "What is the unit of current density J?", textHi: "धारा घनत्व J की इकाई क्या है?", options: [{en: "A/m²", hi: "A/m²"}, {en: "A/m", hi: "A/m"}, {en: "Am²", hi: "Am²"}, {en: "A/s", hi: "A/s"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the formula for stored energy in a capacitor?", textHi: "संधारित्र में संचित ऊर्जा का सूत्र क्या है?", options: [{en: "CV", hi: "CV"}, {en: "1/2 CV²", hi: "1/2 CV²"}, {en: "V/C", hi: "V/C"}, {en: "C/V", hi: "C/V"}], ans: 2 },
    { type: 'MCQ', textEn: "In Doppler effect, when does the frequency increase?", textHi: "डॉपलर प्रभाव में, आवृत्ति कब बढ़ती है?", options: [{en: "Source moving away", hi: "स्रोत दूर जा रहा हो"}, {en: "Observer moving away", hi: "प्रेक्षक दूर जा रहा हो"}, {en: "Source moving closer", hi: "स्रोत पास आ रहा हो"}, {en: "Medium changes", hi: "माध्यम बदलता हो"}], ans: 3 },
    { type: 'MCQ', textEn: "Work done by a conservative force in a closed path is:", textHi: "एक बंद पथ में संरक्षी बल द्वारा किया गया कार्य होता है:", options: [{en: "Maximum", hi: "अधिकतम"}, {en: "Minimum", hi: "न्यूनतम"}, {en: "Zero", hi: "शून्य"}, {en: "Infinite", hi: "अनंत"}], ans: 3 },
    { type: 'MCQ', textEn: "On stretching a wire, its resistance:", textHi: "एक तार को खींचने पर, उसका प्रतिरोध:", options: [{en: "Decreases", hi: "घटता है"}, {en: "Increases", hi: "बढ़ता है"}, {en: "Remains same", hi: "समान रहता है"}, {en: "Becomes zero", hi: "शून्य हो जाता है"}], ans: 2 },
    { type: 'MCQ', textEn: "Thermal conductivity defines which property?", textHi: "तापीय चालकता किस गुण को परिभाषित करती है?", options: [{en: "Heat storage", hi: "ऊष्मा भंडारण"}, {en: "Heat flow", hi: "ऊष्मा प्रवाह"}, {en: "Temperature", hi: "तापमान"}, {en: "Pressure", hi: "दबाव"}], ans: 2 },
    { type: 'MCQ', textEn: "What does the gradient of electric potential give?", textHi: "विद्युत विभव की प्रवणता (gradient) क्या देती है?", options: [{en: "Electric Work", hi: "विद्युत कार्य"}, {en: "Electric field", hi: "विद्युत क्षेत्र"}, {en: "Electric flux", hi: "विद्युत फ़्लक्स"}, {en: "Electric current", hi: "विद्युत धारा"}], ans: 2 },
    { type: 'MCQ', textEn: "What is the rest mass of a photon?", textHi: "फोटॉन का विराम द्रव्यमान (rest mass) क्या होता है?", options: [{en: "Zero", hi: "शून्य"}, {en: "Infinite", hi: "अनंत"}, {en: "9.1x10^-31 kg", hi: "9.1x10^-31 kg"}, {en: "1 amu", hi: "1 amu"}], ans: 1 },
    { type: 'MCQ', textEn: "A body is in free fall. Ignoring air resistance, what will be its acceleration?", textHi: "एक पिंड मुक्त पतन (free fall) में है। वायु प्रतिरोध को नजरअंदाज करें, तो इसका त्वरण क्या होगा?", options: [{en: "Zero", hi: "शून्य"}, {en: "g", hi: "g"}, {en: "g/2", hi: "g/2"}, {en: "Infinite", hi: "अनंत"}], ans: 2 },
    { type: 'MCQ', textEn: "The electric field inside a conductor is:", textHi: "एक चालक के अंदर विद्युत क्षेत्र है:", options: [{en: "Maximum", hi: "अधिकतम"}, {en: "Minimum", hi: "न्यूनतम"}, {en: "Zero", hi: "शून्य"}, {en: "Infinite", hi: "अनंत"}], ans: 3 },
    { type: 'MCQ', textEn: "The RMS value of AC current is equal to:", textHi: "प्रत्यावर्ती धारा (AC) का RMS मान किसके बराबर होता है?", options: [{en: "Peak value", hi: "शिखर मान (Peak value)"}, {en: "Peak/√2", hi: "Peak/√2"}, {en: "Peak/2", hi: "Peak/2"}, {en: "Zero", hi: "शून्य"}], ans: 2 },
    { type: 'Numerical', textEn: "A body starts from rest and moves with an acceleration of 4 m/s² for 5 sec. What will be the final velocity?", textHi: "एक पिंड विरामावस्था से शुरू होता है और 5 सेकंड के लिए 4 m/s² के त्वरण से गति करता है। अंतिम वेग क्या होगा?", ans: "20" },
    { type: 'Numerical', textEn: "A capacitor is charged at 10V and its capacitance is 2 µF. What will be the stored energy (in microjoules)?", textHi: "एक संधारित्र को 10V पर चार्ज किया जाता है और इसकी धारिता 2 µF है। संचित ऊर्जा (माइक्रोजूल में) क्या होगी?", ans: "100" },
    { type: 'Numerical', textEn: "The current in a resistor is 2A and the voltage is 10V. What will be the resistance? (in Ω)", textHi: "एक प्रतिरोधक में धारा 2A है और वोल्टेज 10V है। प्रतिरोध क्या होगा? (Ω में)", ans: "5" },
    { type: 'Numerical', textEn: "The frequency of a wave is 50 Hz and its wavelength is 2 m. What will be the speed?", textHi: "एक तरंग की आवृत्ति 50 Hz है और इसकी तरंगदैर्ध्य 2 मीटर है। गति क्या होगी?", ans: "100" },
    { type: 'Numerical', textEn: "An object has a mass of 2 kg and a velocity of 3 m/s. What will be its kinetic energy?", textHi: "एक वस्तु का द्रव्यमान 2 किलोग्राम है और वेग 3 m/s है। इसकी गतिज ऊर्जा क्या होगी?", ans: "9" }
];

const chemistryQuestions_2: any[] = [
    { type: 'MCQ', textEn: "2.016g H₂ + 32g O₂ → H₂O. Excess mass?", textHi: "2.016g H₂ + 32g O₂ → H₂O. शेष बचा द्रव्यमान (Excess mass) क्या है?", options: [{en: "14g O₂", hi: "14g O₂"}, {en: "2g H₂", hi: "2g H₂"}, {en: "0g", hi: "0g"}, {en: "16g O₂", hi: "16g O₂"}], ans: 4 },
    { type: 'MCQ', textEn: "For Zn|Zn²⁺(0.01M)||H⁺(1M)|H₂, E°=0.76V. E_cell= ?", textHi: "Zn|Zn²⁺(0.01M)||H⁺(1M)|H₂ के लिए, E°=0.76V. E_cell= ?", options: [{en: "0.92V", hi: "0.92V"}, {en: "0.76V", hi: "0.76V"}, {en: "0.60V", hi: "0.60V"}, {en: "1.0V", hi: "1.0V"}], ans: 1 },
    { type: 'MCQ', textEn: "[CoF₆]³⁻ is:", textHi: "[CoF₆]³⁻ है:", options: [{en: "sp³d², high spin", hi: "sp³d², उच्च चक्रण"}, {en: "d²sp³, low spin", hi: "d²sp³, निम्न चक्रण"}, {en: "sp³d², low spin", hi: "sp³d², निम्न चक्रण"}, {en: "d²sp³, high spin", hi: "d²sp³, उच्च चक्रण"}], ans: 1 },
    { type: 'MCQ', textEn: "C₆H₆ + CH₃COCl/AlCl₃ →? Major product", textHi: "C₆H₆ + CH₃COCl/AlCl₃ →? मुख्य उत्पाद", options: [{en: "Acetophenone", hi: "एसीटोफीनोन"}, {en: "Toluene", hi: "टॉलूईन"}, {en: "o/p methyl acetophenone", hi: "o/p मिथाइल एसीटोफीनोन"}, {en: "Chlorobenzene", hi: "क्लोरोबेंजीन"}], ans: 1 },
    { type: 'MCQ', textEn: "For ΔH=-ve, ΔS=-ve, process is spontaneous at:", textHi: "ΔH=-ve, ΔS=-ve के लिए, प्रक्रिया किस स्थिति में स्वतः (spontaneous) होगी:", options: [{en: "Low T", hi: "निम्न तापमान पर"}, {en: "High T", hi: "उच्च तापमान पर"}, {en: "All T", hi: "सभी तापमानों पर"}, {en: "Never", hi: "कभी नहीं"}], ans: 1 },
    { type: 'MCQ', textEn: "Bond order of O₂⁻:", textHi: "O₂⁻ की आबंध कोटि (Bond order):", options: [{en: "1.5", hi: "1.5"}, {en: "2", hi: "2"}, {en: "2.5", hi: "2.5"}, {en: "1", hi: "1"}], ans: 1 },
    { type: 'MCQ', textEn: "Most stable carbocation:", textHi: "सर्वाधिक स्थिर कार्बधनायन (carbocation):", options: [{en: "3° benzylic", hi: "3° बेंजाइलिक"}, {en: "2° allylic", hi: "2° एलिलिक"}, {en: "3° alkyl", hi: "3° एल्काइल"}, {en: "Vinyl", hi: "विनाइल"}], ans: 1 },
    { type: 'MCQ', textEn: "N₂O has structure:", textHi: "N₂O की संरचना है:", options: [{en: "N≡N-O", hi: "N≡N-O"}, {en: "N=N=O", hi: "N=N=O"}, {en: "N-N≡O", hi: "N-N≡O"}, {en: "N=N-O", hi: "N=N-O"}], ans: 1 },
    { type: 'MCQ', textEn: "For N₂ + 3H₂ ⇌ 2NH₃, Kp/Kc =", textHi: "N₂ + 3H₂ ⇌ 2NH₃ के लिए, Kp/Kc =", options: [{en: "RT^{-2}", hi: "RT^{-2}"}, {en: "RT²", hi: "RT²"}, {en: "RT^{-1}", hi: "RT^{-1}"}, {en: "1", hi: "1"}], ans: 1 },
    { type: 'MCQ', textEn: "n-factor for Cr₂O₇²⁻ to Cr³⁺?", textHi: "Cr₂O₇²⁻ से Cr³⁺ के लिए n-factor क्या है?", options: [{en: "6", hi: "6"}, {en: "3", hi: "3"}, {en: "12", hi: "12"}, {en: "1", hi: "1"}], ans: 1 },
    { type: 'MCQ', textEn: "Cannizzaro reaction is given by:", textHi: "कैनिज़ारो अभिक्रिया किसके द्वारा दी जाती है?", options: [{en: "HCHO", hi: "HCHO"}, {en: "CH₃CHO", hi: "CH₃CHO"}, {en: "C₆H₅CHO", hi: "C₆H₅CHO"}, {en: "HCHO and C₆H₅CHO both", hi: "HCHO और C₆H₅CHO दोनों"}], ans: 4 },
    { type: 'MCQ', textEn: "IE order: Li < Be > B Reason:", textHi: "आयनन ऊर्जा (IE) का क्रम: Li < Be > B कारण:", options: [{en: "Half-filled", hi: "अर्ध-पूरित"}, {en: "s² stable configuration", hi: "s² स्थिर विन्यास"}, {en: "Size", hi: "आकार"}, {en: "Shielding", hi: "परिरक्षण"}], ans: 2 },
    { type: 'MCQ', textEn: "Unit of rate constant (k) for second order reaction?", textHi: "द्वितीय कोटि की अभिक्रिया के लिए दर नियतांक (k) की इकाई क्या है?", options: [{en: "L mol⁻¹ s⁻¹", hi: "L mol⁻¹ s⁻¹"}, {en: "s⁻¹", hi: "s⁻¹"}, {en: "mol L⁻¹ s⁻¹", hi: "mol L⁻¹ s⁻¹"}, {en: "L² mol⁻² s⁻¹", hi: "L² mol⁻² s⁻¹"}], ans: 1 },
    { type: 'MCQ', textEn: "Violet colour of [Ti(H₂O)₆]³⁺ is due to:", textHi: "[Ti(H₂O)₆]³⁺ का बैंगनी रंग किसके कारण होता है?", options: [{en: "d-d transition", hi: "d-d संक्रमण"}, {en: "Charge Transfer", hi: "आवेश स्थानांतरण"}, {en: "f-f transition", hi: "f-f संक्रमण"}, {en: "π-π* transition", hi: "π-π* संक्रमण"}], ans: 1 },
    { type: 'MCQ', textEn: "Glucose ring forms what % of β-anomer in equilibrium?", textHi: "साम्यावस्था में ग्लूकोज वलय (ring) β-एनोमर का कितना % बनाता है?", options: [{en: "64%", hi: "64%"}, {en: "36%", hi: "36%"}, {en: "50%", hi: "50%"}, {en: "100%", hi: "100%"}], ans: 1 },
    { type: 'MCQ', textEn: "Radius ratio of CCP octahedral void is:", textHi: "CCP अष्टफलकीय रिक्ति (octahedral void) का त्रिज्या अनुपात (radius ratio) क्या है?", options: [{en: "0.414", hi: "0.414"}, {en: "0.225", hi: "0.225"}, {en: "0.732", hi: "0.732"}, {en: "0.155", hi: "0.155"}], ans: 1 },
    { type: 'MCQ', textEn: "Relative lowering of vapour pressure (ΔP/P°) for 0.1m non-electrolyte is approx:", textHi: "0.1m अ-विद्युत-अपघट्य (non-electrolyte) के लिए वाष्प दाब का आपेक्षिक अवनमन (Relative lowering) लगभग है:", options: [{en: "0.002", hi: "0.002"}, {en: "0.1", hi: "0.1"}, {en: "0.01", hi: "0.01"}, {en: "1", hi: "1"}], ans: 1 },
    { type: 'MCQ', textEn: "Mn²⁺ is very stable due to:", textHi: "Mn²⁺ बहुत स्थिर होता है, इसका कारण है:", options: [{en: "d⁵ half-filled stability", hi: "d⁵ अर्ध-पूरित स्थिरता"}, {en: "High IE", hi: "उच्च IE"}, {en: "Small size", hi: "छोटा आकार"}, {en: "Low hydration energy", hi: "कम जलयोजन ऊर्जा"}], ans: 1 },
    { type: 'MCQ', textEn: "Bakelite is formed from:", textHi: "बेकेलाइट किससे बनता है?", options: [{en: "Phenol + Formaldehyde (HCHO)", hi: "फिनॉल + फॉर्मेल्डिहाइड (HCHO)"}, {en: "Urea + HCHO", hi: "यूरिया + HCHO"}, {en: "Melamine + HCHO", hi: "मेलामाइन + HCHO"}, {en: "All of these", hi: "इनमें से सभी"}], ans: 1 },
    { type: 'MCQ', textEn: "de Broglie wavelength λ for an electron accelerated by 100V is approx:", textHi: "100V द्वारा त्वरित इलेक्ट्रॉन के लिए डी ब्रोगली तरंगदैर्ध्य λ लगभग है:", options: [{en: "1.22 nm", hi: "1.22 nm"}, {en: "1.22 Å", hi: "1.22 Å"}, {en: "0.122 Å", hi: "0.122 Å"}, {en: "10 Å", hi: "10 Å"}], ans: 2 },
    { type: 'Numerical', textEn: "% yield if theoretical yield of CO₂ is 44g and actual yield is 40g:", textHi: "यदि CO₂ की सैद्धांतिक उपज 44g है और वास्तविक उपज 40g है, तो % उपज (yield) है:", ans: "91" },
    { type: 'Numerical', textEn: "E for Cu²⁺(0.1M)|Cu || Ag⁺(0.01M)|Ag, E°=0.46V. E= ? (Use 0.059 in log term)", textHi: "Cu²⁺(0.1M)|Cu || Ag⁺(0.01M)|Ag के लिए E, E°=0.46V. E= ?", ans: "0.52" },
    { type: 'Numerical', textEn: "ΔU for CH₄ + 2O₂ → CO₂ + 2H₂O(g), ΔH=-890kJ (RT≈2.3kJ). ΔU = ?", textHi: "CH₄ + 2O₂ → CO₂ + 2H₂O(g) के लिए, ΔH=-890kJ (RT≈2.3kJ). ΔU = ? (kJ में)", ans: "-878" },
    { type: 'Numerical', textEn: "A first-order reaction has k=0.0693 min⁻¹. What is its t½ (in min)?", textHi: "प्रथम कोटि की अभिक्रिया के लिए k=0.0693 min⁻¹ है। इसका t½ (मिनट में) क्या है?", ans: "10" },
    { type: 'Numerical', textEn: "For HA ⇌ H⁺+A⁻, Ka=10⁻⁵, [HA]=0.1M. Degree of dissociation α in terms of x × 10⁻³. Find x.", textHi: "HA ⇌ H⁺+A⁻ के लिए, Ka=10⁻⁵, [HA]=0.1M. वियोजन की मात्रा α का मान x × 10⁻³ है। x ज्ञात करें।", ans: "10" }
];

const mathQuestions_2: any[] = [
    { type: 'MCQ', textEn: "The value of sin 15° is:", textHi: "sin 15° का मान है:", options: [{en: "(√3-1)/2√2", hi: "(√3-1)/2√2"}, {en: "(√3+1)/2√2", hi: "(√3+1)/2√2"}, {en: "1/2", hi: "1/2"}, {en: "1/√2", hi: "1/√2"}], ans: 1 },
    { type: 'MCQ', textEn: "If the roots of the equation x² + 2x + 3 = 0 are α and β, then α² + β² is:", textHi: "यदि समीकरण x² + 2x + 3 = 0 के मूल α और β हैं, तो α² + β² का मान है:", options: [{en: "-2", hi: "-2"}, {en: "2", hi: "2"}, {en: "4", hi: "4"}, {en: "-4", hi: "-4"}], ans: 1 },
    { type: 'MCQ', textEn: "The number of ways in which 5 people can sit around a circular table is:", textHi: "5 लोगों के एक गोल मेज के चारों ओर बैठने के तरीकों की संख्या है:", options: [{en: "120", hi: "120"}, {en: "24", hi: "24"}, {en: "60", hi: "60"}, {en: "12", hi: "12"}], ans: 2 },
    { type: 'MCQ', textEn: "What is the 10th term of the AP: 2, 5, 8, ...?", textHi: "समांतर श्रेढ़ी (AP) 2, 5, 8, ... का 10वां पद क्या है?", options: [{en: "27", hi: "27"}, {en: "29", hi: "29"}, {en: "28", hi: "28"}, {en: "26", hi: "26"}], ans: 2 },
    { type: 'MCQ', textEn: "The coordinates of the centroid of a triangle with vertices (1, 2), (3, 4), and (5, 0) are:", textHi: "शीर्षों (1, 2), (3, 4), और (5, 0) वाले त्रिभुज के केंद्रक के निर्देशांक हैं:", options: [{en: "(3, 2)", hi: "(3, 2)"}, {en: "(2, 3)", hi: "(2, 3)"}, {en: "(3, 3)", hi: "(3, 3)"}, {en: "(4, 2)", hi: "(4, 2)"}], ans: 1 },
    { type: 'MCQ', textEn: "The value of lim(x→0) (e^x - 1)/x is:", textHi: "lim(x→0) (e^x - 1)/x का मान है:", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "e", hi: "e"}, {en: "Not defined", hi: "परिभाषित नहीं"}], ans: 2 },
    { type: 'MCQ', textEn: "Which of the following functions is an even function?", textHi: "निम्नलिखित में से कौन सा फलन एक सम फलन (even function) है?", options: [{en: "sin(x)", hi: "sin(x)"}, {en: "x^3", hi: "x^3"}, {en: "cos(x)", hi: "cos(x)"}, {en: "tan(x)", hi: "tan(x)"}], ans: 3 },
    { type: 'MCQ', textEn: "The derivative of ln(sec x) is:", textHi: "ln(sec x) का अवकलज है:", options: [{en: "sec x tan x", hi: "sec x tan x"}, {en: "tan x", hi: "tan x"}, {en: "sec² x", hi: "sec² x"}, {en: "1/sec x", hi: "1/sec x"}], ans: 2 },
    { type: 'MCQ', textEn: "If y = x^4, then d²y/dx² at x = 1 is:", textHi: "यदि y = x^4 है, तो x = 1 पर d²y/dx² है:", options: [{en: "4", hi: "4"}, {en: "12", hi: "12"}, {en: "24", hi: "24"}, {en: "16", hi: "16"}], ans: 2 },
    { type: 'MCQ', textEn: "The value of ∫sec²x dx is:", textHi: "∫sec²x dx का मान है:", options: [{en: "cot x + C", hi: "cot x + C"}, {en: "tan x + C", hi: "tan x + C"}, {en: "sec x tan x + C", hi: "sec x tan x + C"}, {en: "sec³x + C", hi: "sec³x + C"}], ans: 2 },
    { type: 'MCQ', textEn: "What is the area of a circle with radius r?", textHi: "त्रिज्या r वाले वृत्त का क्षेत्रफल क्या है?", options: [{en: "2πr", hi: "2πr"}, {en: "πr²", hi: "πr²"}, {en: "4πr²", hi: "4πr²"}, {en: "π²r", hi: "π²r"}], ans: 2 },
    { type: 'MCQ', textEn: "The value of ∫₀^(π/2) cos x dx is:", textHi: "∫₀^(π/2) cos x dx का मान है:", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "-1", hi: "-1"}, {en: "π/2", hi: "π/2"}], ans: 2 },
    { type: 'MCQ', textEn: "The general solution of dy/dx = y is:", textHi: "अवकल समीकरण dy/dx = y का सामान्य हल है:", options: [{en: "y = Ce^x", hi: "y = Ce^x"}, {en: "y = e^x + C", hi: "y = e^x + C"}, {en: "y² = x + C", hi: "y² = x + C"}, {en: "y = Cx", hi: "y = Cx"}], ans: 1 },
    { type: 'MCQ', textEn: "If scalar product of two vectors is zero, the angle between them is:", textHi: "यदि दो सदिशों का अदिश गुणनफल शून्य है, तो उनके बीच का कोण है:", options: [{en: "0°", hi: "0°"}, {en: "45°", hi: "45°"}, {en: "90°", hi: "90°"}, {en: "180°", hi: "180°"}], ans: 3 },
    { type: 'MCQ', textEn: "The cross product of basic unit vectors: i × j equals:", textHi: "मूल एकक सदिशों का सदिश गुणनफल: i × j किसके बराबर है?", options: [{en: "0", hi: "0"}, {en: "k", hi: "k"}, {en: "-k", hi: "-k"}, {en: "1", hi: "1"}], ans: 2 },
    { type: 'MCQ', textEn: "Equation of a plane passing through origin is of form:", textHi: "मूल बिंदु से गुजरने वाले तल का समीकरण किस रूप का होता है?", options: [{en: "ax+by+cz=0", hi: "ax+by+cz=0"}, {en: "x=a", hi: "x=a"}, {en: "ax+by+cz=d", hi: "ax+by+cz=d"}, {en: "y=mx+c", hi: "y=mx+c"}], ans: 1 },
    { type: 'MCQ', textEn: "The radius of the sphere x² + y² + z² = 16 is:", textHi: "x² + y² + z² = 16 गोले की त्रिज्या है:", options: [{en: "16", hi: "16"}, {en: "8", hi: "8"}, {en: "4", hi: "4"}, {en: "2", hi: "2"}], ans: 3 },
    { type: 'MCQ', textEn: "The probability of an impossible event is:", textHi: "एक असंभव घटना की प्रायिकता है:", options: [{en: "1", hi: "1"}, {en: "-1", hi: "-1"}, {en: "0", hi: "0"}, {en: "Undefined", hi: "अपरिभाषित"}], ans: 3 },
    { type: 'MCQ', textEn: "For independent events A and B, P(A∩B) = ", textHi: "स्वतंत्र घटनाओं A और B के लिए, P(A∩B) =", options: [{en: "P(A) + P(B)", hi: "P(A) + P(B)"}, {en: "P(A) - P(B)", hi: "P(A) - P(B)"}, {en: "P(A) / P(B)", hi: "P(A) / P(B)"}, {en: "P(A) × P(B)", hi: "P(A) × P(B)"}], ans: 4 },
    { type: 'MCQ', textEn: "Value of loge(e) is:", textHi: "loge(e) का मान है:", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "e", hi: "e"}, {en: "10", hi: "10"}], ans: 2 },
    { type: 'Numerical', textEn: "Evaluate 5³ (5 raised to power 3).", textHi: "5³ का मान ज्ञात कीजिए।", ans: "125" },
    { type: 'Numerical', textEn: "Find the root of the linear equation 3x - 9 = 0.", textHi: "रैखिक समीकरण 3x - 9 = 0 का मूल ज्ञात कीजिए।", ans: "3" },
    { type: 'Numerical', textEn: "Find the median of the data: 2, 4, 6, 8, 10.", textHi: "डेटा: 2, 4, 6, 8, 10 की माध्यिका (median) ज्ञात कीजिए।", ans: "6" },
    { type: 'Numerical', textEn: "Calculate the exact variance of the set {1, 2, 3}. (Population variance)", textHi: "समुच्चय {1, 2, 3} का सटीक प्रसरण (Population variance) ज्ञात करें।", ans: "0.666" },
    { type: 'Numerical', textEn: "Evaluate the determinant of a 1x1 matrix containing only the number 7.", textHi: "केवल संख्या 7 वाले 1x1 आव्यूह का सारणिक मान ज्ञात करें।", ans: "7" }
];

export const mock2Questions: QuestionType[] = Array.from({ length: 75 }).map((_, i) => {
    let subject = 'Physics';
    if (i >= 25 && i < 50) subject = 'Chemistry';
    if (i >= 50) subject = 'Mathematics';
    
    const subjectIndex = i % 25;
    const type = subjectIndex < 20 ? 'MCQ' : 'Numerical';
    
    if (subject === 'Physics') {
        const physQ: any = physicsQuestions_2[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: physQ.type as 'MCQ' | 'Numerical',
            textEn: physQ.textEn || physQ.text || `[Mock 2] Physics Question ${subjectIndex + 1}`,
            textHi: physQ.textHi || physQ.text || `[Mock 2] Physics Question ${subjectIndex + 1} (Hi)`,
            options: physQ.type === 'MCQ' && physQ.options ? physQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 2 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 2 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: physQ.type === 'MCQ' ? physQ.ans as number : undefined,
            correctAnswer: physQ.type === 'Numerical' ? physQ.ans as string : undefined
        };
    }
    
    if (subject === 'Chemistry') {
        const chemQ: any = chemistryQuestions_2[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: chemQ.type as 'MCQ' | 'Numerical',
            textEn: chemQ.textEn || chemQ.text || `[Mock 2] Chemistry Question ${subjectIndex + 1}`,
            textHi: chemQ.textHi || chemQ.text || `[Mock 2] Chemistry Question ${subjectIndex + 1} (Hi)`,
            options: chemQ.type === 'MCQ' && chemQ.options ? chemQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 2 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 2 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: chemQ.type === 'MCQ' ? chemQ.ans as number : undefined,
            correctAnswer: chemQ.type === 'Numerical' ? chemQ.ans as string : undefined
        };
    }
    
    if (subject === 'Mathematics') {
        const mathQ: any = mathQuestions_2[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: mathQ.type as 'MCQ' | 'Numerical',
            textEn: mathQ.textEn || mathQ.text || `[Mock 2] Math Question ${subjectIndex + 1}`,
            textHi: mathQ.textHi || mathQ.text || `[Mock 2] Math Question ${subjectIndex + 1} (Hi)`,
            options: mathQ.type === 'MCQ' && mathQ.options ? mathQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 2 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 2 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: mathQ.type === 'MCQ' ? mathQ.ans as number : undefined,
            correctAnswer: mathQ.type === 'Numerical' ? mathQ.ans as string : undefined
        };
    }
    return {} as any;
});
