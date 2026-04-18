import { QuestionType } from '../mockData';

const physicsQuestions_4: any[] = [
    { type: 'MCQ', textEn: "The velocity of a particle is given by v = 3t^2 - 6t + 2. What is its acceleration at t = 2 s?", textHi: "एक कण का वेग v = 3t^2 - 6t + 2 है। t = 2 s पर त्वरण क्या होगा?", options: [{en: "0 m/s^2", hi: "0 m/s^2"}, {en: "6 m/s^2", hi: "6 m/s^2"}, {en: "12 m/s^2", hi: "12 m/s^2"}, {en: "-6 m/s^2", hi: "-6 m/s^2"}], ans: 2 },
    { type: 'MCQ', textEn: "Two charges +q and +4q are at a distance r. The net electric field at the midpoint is:", textHi: "दो आवेश +q और +4q एक दूसरे से r दूरी पर हैं। मध्य बिंदु पर शुद्ध विद्युत क्षेत्र (net electric field) होगा:", options: [{en: "Zero", hi: "शून्य"}, {en: "Towards +q", hi: "+q की ओर"}, {en: "Towards +4q", hi: "+4q की ओर"}, {en: "Infinite", hi: "अनंत"}], ans: 2 },
    { type: 'MCQ', textEn: "What happens when a charged conductor is earthed?", textHi: "जब एक आवेशित चालक को भू-सम्पर्कित (earth) किया जाता है तो क्या होता है?", options: [{en: "Charge increases", hi: "आवेश बढ़ता है"}, {en: "Charge neutralizes (Potential becomes zero)", hi: "आवेश उदासीन हो जाता है (विभव शून्य हो जाता है)"}, {en: "Potential becomes infinite", hi: "विभव अनंत हो जाता है"}, {en: "Current stops forever", hi: "धारा हमेशा के लिए रुक जाती है"}], ans: 2 },
    { type: 'MCQ', textEn: "In Simple Harmonic Motion (SHM), when is the acceleration maximum?", textHi: "सरल आवर्त गति (SHM) में, त्वरण अधिकतम कब होता है?", options: [{en: "Mean position", hi: "माध्य स्थिति"}, {en: "Extreme position", hi: "चरम स्थिति"}, {en: "Half displacement", hi: "आधा विस्थापन"}, {en: "Zero displacement", hi: "शून्य विस्थापन"}], ans: 2 },
    { type: 'MCQ', textEn: "An ideal gas is heated in an isobaric process. Which quantity must increase?", textHi: "एक आदर्श गैस को समदाबीय (isobaric) प्रक्रिया में गर्म किया जाता है। किस परिमाण में वृद्धि होनी चाहिए?", options: [{en: "Volume", hi: "आयतन"}, {en: "Pressure", hi: "दबाव"}, {en: "Temperature only", hi: "केवल तापमान"}, {en: "None", hi: "कोई नहीं"}], ans: 1 },
    { type: 'MCQ', textEn: "A wire of resistance R is cut into 3 equal parts and connected in parallel. The new resistance will be:", textHi: "R प्रतिरोध वाले एक तार को 3 बराबर भागों में काटा जाता है और समानांतर में जोड़ा जाता है। नया प्रतिरोध क्या होगा?", options: [{en: "R/3", hi: "R/3"}, {en: "R/9", hi: "R/9"}, {en: "3R", hi: "3R"}, {en: "R", hi: "R"}], ans: 2 },
    { type: 'MCQ', textEn: "An electron is moving in a circular orbit in a magnetic field. Its time period depends on:", textHi: "एक इलेक्ट्रॉन चुंबकीय क्षेत्र में वृत्ताकार कक्षा में घूम रहा है। इसका आवर्तकाल निर्भर करता है:", options: [{en: "Velocity", hi: "वेग"}, {en: "Radius", hi: "त्रिज्या"}, {en: "Magnetic field", hi: "चुंबकीय क्षेत्र"}, {en: "Work done", hi: "किए गए कार्य"}], ans: 3 },
    { type: 'MCQ', textEn: "A convex lens is forming a real image. The object position could be:", textHi: "एक उत्तल लेंस वास्तविक प्रतिबिंब बना रहा है। वस्तु की स्थिति हो सकती है:", options: [{en: "Between F and O", hi: "F और O के बीच"}, {en: "Beyond F", hi: "F से परे (आगे)"}, {en: "At infinity only", hi: "केवल अनंत पर"}, {en: "At focus C only", hi: "केवल C पर"}], ans: 2 },
    { type: 'MCQ', textEn: "The orbital speed of a satellite depends heavily on:", textHi: "उपग्रह की कक्षीय गति किस पर अत्यधिक निर्भर करती है?", options: [{en: "Mass of satellite", hi: "उपग्रह का द्रव्यमान"}, {en: "Radius of orbit", hi: "कक्षा की त्रिज्या"}, {en: "Time", hi: "समय"}, {en: "Its internal velocity mechanism", hi: "इसकी आंतरिक वेग प्रणाली"}], ans: 2 },
    { type: 'MCQ', textEn: "What is the SI unit of magnetic flux?", textHi: "चुंबकीय प्रवाह (Magnetic flux) की SI इकाई क्या है?", options: [{en: "Tesla", hi: "टेस्ला"}, {en: "Weber", hi: "वेबर"}, {en: "Gauss", hi: "गौस"}, {en: "Henry", hi: "हेनरी"}], ans: 2 },
    { type: 'MCQ', textEn: "A body is rolling without slipping. Its total kinetic energy is:", textHi: "एक पिंड बिना फिसले लुढ़क रहा है (rolling)। इसकी कुल गतिज ऊर्जा है:", options: [{en: "Only translational", hi: "केवल स्थानांतरीय"}, {en: "Only rotational", hi: "केवल घूर्णी"}, {en: "Sum of translational and rotational", hi: "स्थानांतरीय और घूर्णी दोनों का योग"}, {en: "Zero", hi: "शून्य"}], ans: 3 },
    { type: 'MCQ', textEn: "If the energy of a photon is doubled, its wavelength becomes:", textHi: "यदि एक फोटॉन की ऊर्जा दोगुनी हो जाती है, तो इसकी तरंगदैर्ध्य (wavelength) हो जाती है:", options: [{en: "Double", hi: "दोगुनी"}, {en: "Half", hi: "आधी"}, {en: "Same", hi: "समान"}, {en: "Zero", hi: "शून्य"}], ans: 2 },
    { type: 'MCQ', textEn: "In an AC circuit with a purely inductive load, the phase difference between voltage and current is:", textHi: "शुद्ध प्रेरणिक (purely inductive) भार वाले AC परिपथ में, वोल्टेज और धारा के बीच का कलांतर (phase difference) है:", options: [{en: "0°", hi: "0°"}, {en: "90°", hi: "90°"}, {en: "180°", hi: "180°"}, {en: "45°", hi: "45°"}], ans: 2 },
    { type: 'MCQ', textEn: "A body falling in a fluid achieves terminal velocity when:", textHi: "तरल पदार्थ में गिरने वाला पिंड सीमांत वेग (terminal velocity) कब प्राप्त करता है?", options: [{en: "Weight > drag", hi: "वजन > ड्रैग बल"}, {en: "Weight = Drag + Buoyant force", hi: "वजन = ड्रैग बल + उत्प्लावन बल"}, {en: "Drag force is zero", hi: "ड्रैग बल शून्य हो"}, {en: "Velocity becomes zero", hi: "वेग शून्य हो जाए"}], ans: 2 },
    { type: 'MCQ', textEn: "In a nucleus, if mass number is A and proton number is Z, the number of neutrons is:", textHi: "एक नाभिक में, यदि द्रव्यमान संख्या A है और प्रोटॉन संख्या Z है, तो न्यूट्रॉन की संख्या है:", options: [{en: "Z", hi: "Z"}, {en: "A - Z", hi: "A - Z"}, {en: "A + Z", hi: "A + Z"}, {en: "A/Z", hi: "A/Z"}], ans: 2 },
    { type: 'MCQ', textEn: "The formula for power loss in a transmission circuit is mostly given by:", textHi: "संचरण परिपथ में शक्ति हानि (Power loss) का सूत्र मुख्य रूप से किसके द्वारा दिया जाता है?", options: [{en: "V^2R", hi: "V^2R"}, {en: "I^2R", hi: "I^2R"}, {en: "IR", hi: "IR"}, {en: "V/I", hi: "V/I"}], ans: 2 },
    { type: 'MCQ', textEn: "The distance between two consecutive nodes in a standing wave is:", textHi: "एक अप्रगामी तरंग (standing wave) में दो लगातार निस्पंदों (nodes) के बीच की दूरी होती है:", options: [{en: "λ", hi: "λ"}, {en: "λ/2", hi: "λ/2"}, {en: "λ/4", hi: "λ/4"}, {en: "2λ", hi: "2λ"}], ans: 2 },
    { type: 'MCQ', textEn: "A charged particle will accelerate in the direction of the electric field if it is a:", textHi: "एक आवेशित कण विद्युत क्षेत्र की दिशा में त्वरित होगा यदि यह एक:", options: [{en: "Positive charge", hi: "धनात्मक आवेश हो"}, {en: "Negative charge", hi: "ऋणात्मक आवेश हो"}, {en: "Neutral particle", hi: "उदासीन कण हो"}, {en: "Photon", hi: "फोटॉन हो"}], ans: 1 },
    { type: 'MCQ', textEn: "For an ideal gas, Cp - Cv is equal to:", textHi: "एक आदर्श गैस के लिए, Cp - Cv किसके बराबर होता है?", options: [{en: "R/2", hi: "R/2"}, {en: "R", hi: "R"}, {en: "2R", hi: "2R"}, {en: "Zero", hi: "शून्य"}], ans: 2 },
    { type: 'MCQ', textEn: "If the momentum of an object is doubled, its kinetic energy becomes:", textHi: "यदि किसी वस्तु का संवेग दोगुना हो जाए, तो उसकी गतिज ऊर्जा हो जाती है:", options: [{en: "Same", hi: "समान"}, {en: "Double", hi: "दोगुनी"}, {en: "4 times", hi: "4 गुना"}, {en: "Half", hi: "आधी"}], ans: 3 },
    { type: 'Numerical', textEn: "A body has an initial velocity of 2 m/s and an acceleration of 5 m/s^2. What will be its velocity after 4 seconds?", textHi: "एक पिंड का प्रारंभिक वेग 2 m/s और त्वरण 5 m/s^2 है। 4 सेकंड बाद इसका वेग क्या होगा?", ans: "22" },
    { type: 'Numerical', textEn: "A 4µF capacitor is charged to 5V. What is the charge (in µC)?", textHi: "एक 4µF संधारित्र को 5V तक आवेशित किया जाता है। आवेश (µC में) क्या है?", ans: "20" },
    { type: 'Numerical', textEn: "A voltage of 16V is applied across an 8Ω resistor. What will be the current in Amperes?", textHi: "8Ω के प्रतिरोधक पर 16V का वोल्टेज लगाया गया है। एम्पीयर में धारा क्या होगी?", ans: "2" },
    { type: 'Numerical', textEn: "An object is thrown vertically upwards with a velocity of 20 m/s. (Take g=10). What is its total time of flight?", textHi: "एक वस्तु को 20 m/s के वेग से लंबवत ऊपर की ओर फेंका जाता है। (g=10 लें)। इसका कुल उड्डयन काल (Time of flight) क्या है?", ans: "4" },
    { type: 'Numerical', textEn: "A wave has a wavelength of 4 m and a frequency of 25 Hz. What is its speed (in m/s)?", textHi: "एक तरंग की तरंगदैर्ध्य 4 मीटर है और आवृत्ति 25 हर्ट्ज़ है। इसकी गति (m/s में) क्या है?", ans: "100" }
];

const chemistryQuestions_4: any[] = [
    { type: 'MCQ', textEn: "RCOOH + SOCl_2 → RCOCl. Further reaction of this product with NH_3 yields:", textHi: "RCOOH + SOCl_2 → RCOCl. इस उत्पाद की NH_3 के साथ आगे की प्रतिक्रिया से क्या प्राप्त होता है?", options: [{en: "RCONH_2 + HCl (Amide)", hi: "RCONH_2 + HCl (एमाइड)"}, {en: "RCOONH_4", hi: "RCOONH_4"}, {en: "RCONH_2 + SO_2", hi: "RCONH_2 + SO_2"}, {en: "No reaction", hi: "कोई प्रतिक्रिया नहीं"}], ans: 1 },
    { type: 'MCQ', textEn: "Which ligand order of stability is correct according to spectrochemical series?", textHi: "स्पेक्ट्रोकेमिकल श्रृंखला के अनुसार स्थिरता का कौन सा लिगैंड क्रम सही है?", options: [{en: "CN^- > NH_3 > H_2O > OH^-", hi: "CN^- > NH_3 > H_2O > OH^-"}, {en: "NH_3 > CN^- > H_2O", hi: "NH_3 > CN^- > H_2O"}, {en: "H_2O > NH_3 > OH^-", hi: "H_2O > NH_3 > OH^-"}, {en: "OH^- > CN^- > NH_3", hi: "OH^- > CN^- > NH_3"}], ans: 1 },
    { type: 'MCQ', textEn: "Geometry of XeF_6 is:", textHi: "XeF_6 की ज्यामिति है:", options: [{en: "Distorted octahedral", hi: "विकृत अष्टफलकीय"}, {en: "Pentagonal bipyramidal", hi: "पंचकोणीय द्विपिरामिडीय"}, {en: "Trigonal bipyramidal", hi: "त्रिकोणीय द्विपिरामिडीय"}, {en: "Square pyramidal", hi: "वर्ग पिरामिडीय"}], ans: 1 },
    { type: 'MCQ', textEn: "For a reversible cyclic process where q = 100J, the work done w is:", textHi: "एक उत्क्रमणीय चक्रीय प्रक्रिया के लिए जहां q = 100J है, किया गया कार्य w है:", options: [{en: "-100J", hi: "-100J"}, {en: "+100J", hi: "+100J"}, {en: "0J", hi: "0J"}, {en: "Cannot determine", hi: "तय नहीं कर सकते"}], ans: 1 },
    { type: 'MCQ', textEn: "Rate constant k doubles for every 10°C rise. The ratio of k at 47°C to k at 27°C is:", textHi: "दर नियतांक (k) प्रत्येक 10°C वृद्धि के लिए दोगुना हो जाता है। 47°C पर k और 27°C पर k का अनुपात क्या है?", options: [{en: "4", hi: "4"}, {en: "2", hi: "2"}, {en: "8", hi: "8"}, {en: "16", hi: "16"}], ans: 1 },
    { type: 'MCQ', textEn: "For H_2-O_2 fuel cell, E°=1.23V. What is ΔG°? (n=4)", textHi: "H_2-O_2 ईंधन सेल के लिए, E°=1.23V है। ΔG° क्या है? (n=4)", options: [{en: "-474.7 kJ/mol", hi: "-474.7 kJ/mol"}, {en: "-237.3 kJ/mol", hi: "-237.3 kJ/mol"}, {en: "474.7 kJ/mol", hi: "474.7 kJ/mol"}, {en: "-948 kJ/mol", hi: "-948 kJ/mol"}], ans: 1 },
    { type: 'MCQ', textEn: "CH_3CH_2COCH_3 + I_2/NaOH yields majorly:", textHi: "CH_3CH_2COCH_3 + I_2/NaOH मुख्य रूप से देता है:", options: [{en: "CH_3CH_2COONa + CHI_3", hi: "CH_3CH_2COONa + CHI_3"}, {en: "CH_3COCH_2CH_3 + CHI_3", hi: "CH_3COCH_2CH_3 + CHI_3"}, {en: "No reaction", hi: "कोई प्रतिक्रिया नहीं"}, {en: "CH_3CH_2CHI_2 + HCOONa", hi: "CH_3CH_2CHI_2 + HCOONa"}], ans: 1 },
    { type: 'MCQ', textEn: "The width of the major groove in B-DNA is approximately:", textHi: "B-DNA में प्रमुख खांचे (major groove) की चौड़ाई लगभग होती है:", options: [{en: "22 Å", hi: "22 Å"}, {en: "12 Å", hi: "12 Å"}, {en: "6 Å", hi: "6 Å"}, {en: "34 Å", hi: "34 Å"}], ans: 1 },
    { type: 'MCQ', textEn: "Copolymerization of styrene + maleic anhydride gives:", textHi: "स्टाइरीन + मेलिक एनहाइड्राइड का सहबहुलीकरण (Copolymerization) देता है:", options: [{en: "Alternating copolymer", hi: "एकांतर सहबहुलक (Alternating copolymer)"}, {en: "Random copolymer", hi: "यादृच्छिक सहबहुलक"}, {en: "Block copolymer", hi: "ब्लॉक सहबहुलक"}, {en: "Graft copolymer", hi: "ग्राफ्ट सहबहुलक"}], ans: 1 },
    { type: 'MCQ', textEn: "A 2nd group cation's precipitate dissolves in NH_4OH to form soluble [H_3N-Zn-NH_3]^2^+ like complex. This cation acts amphoteric?", textHi: "2nd समूह के धनायन का अवक्षेप NH_4OH में घुलकर घुलनशील संकुल बनाता है:", options: [{en: "Zn^2^+ (Wait, Zn is group IV)", hi: "Zn^2^+ (Zn समूह IV है)"}, {en: "Cu^2^+ forming deep blue solution", hi: "Cu^2^+ गहरा नीला विलयन बनाता है"}, {en: "PbS insoluble", hi: "PbS अघुलनशील"}, {en: "HgS black", hi: "HgS काला"}], ans: 2 },
    { type: 'MCQ', textEn: "Which of the following compounds has the transition metal in +7 oxidation state?", textHi: "निम्नलिखित में से किस यौगिक में संक्रमण धातु +7 ऑक्सीकरण अवस्था में है?", options: [{en: "KMnO_4", hi: "KMnO_4"}, {en: "K_2Cr_2O_7", hi: "K_2Cr_2O_7"}, {en: "K_2FeO_4", hi: "K_2FeO_4"}, {en: "MnO_2", hi: "MnO_2"}], ans: 1 },
    { type: 'MCQ', textEn: "Correct order of +R effect (resonance donating):", textHi: "+R प्रभाव (अनुनाद दान) का सही क्रम:", options: [{en: "-NH_2 > -OH > -OR", hi: "-NH_2 > -OH > -OR"}, {en: "-OR > -OH > -NH_2", hi: "-OR > -OH > -NH_2"}, {en: "-OH > -NH_2 > -OR", hi: "-OH > -NH_2 > -OR"}, {en: "-NH_2 > -OR > -OH", hi: "-NH_2 > -OR > -OH"}], ans: 1 },
    { type: 'MCQ', textEn: "The van't Hoff factor (i) for fully dissociated 0.1m Na_3PO_4 is:", textHi: "पूरी तरह से विघटित 0.1m Na_3PO_4 के लिए वान्ट हॉफ गुणक (i) क्या है?", options: [{en: "4", hi: "4"}, {en: "3", hi: "3"}, {en: "2", hi: "2"}, {en: "1", hi: "1"}], ans: 1 },
    { type: 'MCQ', textEn: "Fraction of ¹⁴C remaining after 11520 years (t1/2 = 5760 yr) is:", textHi: "11520 वर्षों के बाद (t1/2 = 5760 वर्ष) बचे हुए ¹⁴C का अंश (Fraction) होगा:", options: [{en: "1/4", hi: "1/4"}, {en: "1/2", hi: "1/2"}, {en: "1/8", hi: "1/8"}, {en: "3/4", hi: "3/4"}], ans: 1 },
    { type: 'MCQ', textEn: "H_2 effuses 4 times faster than a gas X. The identity of X is:", textHi: "H_2 गैस X की तुलना में 4 गुना तेजी से निःसरित (effuse) होती है। X की पहचान क्या है?", options: [{en: "O_2", hi: "O_2"}, {en: "CH_4", hi: "CH_4"}, {en: "CO_2", hi: "CO_2"}, {en: "N_2", hi: "N_2"}], ans: 1 },
    { type: 'MCQ', textEn: "The correct order of acidic strength is:", textHi: "अम्लीय सामर्थ्य (acidic strength) का सही क्रम है:", options: [{en: "H_2O < HF < HCl < HBr < HI", hi: "H_2O < HF < HCl < HBr < HI"}, {en: "HI < HBr < HCl < HF < H_2O", hi: "HI < HBr < HCl < HF < H_2O"}, {en: "H_2O < HI < HBr < HCl < HF", hi: "H_2O < HI < HBr < HCl < HF"}, {en: "HF < H_2O < HCl < HBr < HI", hi: "HF < H_2O < HCl < HBr < HI"}], ans: 1 },
    { type: 'MCQ', textEn: "The IUPAC name of [Cr(en)_2Cl_2]^+ is:", textHi: "[Cr(en)_2Cl_2]^+ का IUPAC नाम है:", options: [{en: "Dichlorobis(ethylenediamine)chromium(III) ion", hi: "डाइक्लोरोबिस(एथिलीनडायमाइन)क्रोमियम(III) आयन"}, {en: "Bis(ethylenediamine)dichlorochromium(III) ion", hi: "बिस(एथिलीनडायमाइन)डाइक्लोरोक्रोमियम(III) आयन"}, {en: "Ethylenediaminedichlorochromium(III) ion", hi: "एथिलीनडायमाइनडाइक्लोरोक्रोमियम(III) आयन"}, {en: "Chromiumdichlorobis(ethylenediamine) ion", hi: "क्रोमियमडाइक्लोरोबिस(एथिलीनडायमाइन) आयन"}], ans: 1 },
    { type: 'MCQ', textEn: "CH_3CH_2CHBrCH_3 reacts with alcoholic KOH. The major product is:", textHi: "CH_3CH_2CHBrCH_3 एल्कोहॉलिक KOH के साथ प्रतिक्रिया करता है। मुख्य उत्पाद है:", options: [{en: "2-butene (Zaitsev product)", hi: "2-ब्यूटीन (ज़ैतसेव उत्पाद)"}, {en: "1-butene", hi: "1-ब्यूटीन"}, {en: "Both 1-butene and 2-butene equally", hi: "1-ब्यूटीन और 2-ब्यूटीन दोनों बराबर"}, {en: "No reaction", hi: "कोई प्रतिक्रिया नहीं"}], ans: 1 },
    { type: 'MCQ', textEn: "Which ion undergoes disproportionation in aqueous solution?", textHi: "जलीय विलयन में कौन सा आयन असमानुपातन (disproportionation) से गुजरता है?", options: [{en: "Cu^+ → Cu + Cu^2^+", hi: "Cu^+ → Cu + Cu^2^+"}, {en: "Fe^2^+", hi: "Fe^2^+"}, {en: "Mn^2^+", hi: "Mn^2^+"}, {en: "Cr^3^+", hi: "Cr^3^+"}], ans: 1 },
    { type: 'MCQ', textEn: "Enzyme catalysis is generally an example of:", textHi: "एंजाइम उत्प्रेरण सामान्यतः किसका उदाहरण है?", options: [{en: "Homogeneous catalysis", hi: "समांगी उत्प्रेरण (Homogeneous catalysis)"}, {en: "Heterogeneous catalysis", hi: "विषमांगी उत्प्रेरण"}, {en: "Auto-catalysis", hi: "स्व-उत्प्रेरण"}, {en: "Negative catalysis", hi: "ऋणात्मक उत्प्रेरण"}], ans: 1 },
    { type: 'Numerical', textEn: "If Δ_o for a high-spin complex [CoF_6]^3^- is 12000 cm^-¹, the pairing energy P should be roughly greater than ___ cm^-¹. (Assume options around 15000). What is a possible integer boundary? Leave empty or type 12000.", textHi: "यदि एक उच्च-चक्रण संकुल के लिए Δ_o = 12000 cm^-¹ है, तो युग्मन ऊर्जा (Pairing energy) P का न्यूनतम मान क्या होना चाहिए जिससे वह उच्च चक्रण रहे?", ans: "12000" },
    { type: 'Numerical', textEn: "Benzene → nitrobenzene (60% yield) → aniline (80% yield). What is the overall % yield?", textHi: "बेंजीन → नाइट्रोबेंजीन (60% उपज) → एनिलीन (80% उपज)। कुल % उपज क्या है?", ans: "48" },
    { type: 'Numerical', textEn: "Specific conductance κ = 0.005 S/cm, Concentration C = 0.2 M. Find Molar conductance Λm in S cm^2/mol.", textHi: "विशिष्ट चालकता κ = 0.005 S/cm, सांद्रता C = 0.2 M है। मोलर चालकता Λm (S cm^2/mol में) ज्ञात करें।", ans: "25" },
    { type: 'Numerical', textEn: "For a reaction at 298K, ΔH = -50 kJ/mol, ΔCp = 20 J/mol.K. Find ΔH (in kJ/mol) at 398K.", textHi: "298K पर एक अभिक्रिया के लिए, ΔH = -50 kJ/mol, ΔCp = 20 J/mol.K है। 398K पर ΔH (kJ/mol में) ज्ञात करें।", ans: "-48" },
    { type: 'Numerical', textEn: "For a second-order reaction, [A]_0 = 0.5M, k = 0.2 L/mol.min. Find time t (in min) when [A] = 0.1M. (1/[A] - 1/[A]_0 = kt)", textHi: "एक द्वितीय-कोटि अभिक्रिया के लिए, [A]_0 = 0.5M, k = 0.2 L/mol.min है। वह समय t (मिनट में) ज्ञात करें जब [A] = 0.1M हो।", ans: "40" }
];

const mathQuestions_4: any[] = [
    { type: 'MCQ', textEn: "If ∫_0ᵃ f(x)dx = ∫_0ᵃ f(a-x)dx, then what is ∫_0ᵃ x f(x)dx equal to?", textHi: "यदि ∫_0ᵃ f(x)dx = ∫_0ᵃ f(a-x)dx है, तो ∫_0ᵃ x f(x)dx किसके बराबर है?", options: [{en: "(a/2) ∫_0ᵃ f(x)dx", hi: "(a/2) ∫_0ᵃ f(x)dx"}, {en: "a ∫_0ᵃ f(x)dx", hi: "a ∫_0ᵃ f(x)dx"}, {en: "(a^2/2) f(a/2)", hi: "(a^2/2) f(a/2)"}, {en: "None of these", hi: "इनमें से कोई नहीं"}], ans: 1 },
    { type: 'MCQ', textEn: "The equation of the tangent to the parabola y^2 = 4ax at the point (at^2, 2at) is:", textHi: "बिंदु (at^2, 2at) पर परवलय y^2 = 4ax की स्पर्शरेखा का समीकरण है:", options: [{en: "ty = x + at^2", hi: "ty = x + at^2"}, {en: "tx = y + at^2", hi: "tx = y + at^2"}, {en: "y = tx + a/t", hi: "y = tx + a/t"}, {en: "x = ty + 2at", hi: "x = ty + 2at"}], ans: 1 },
    { type: 'MCQ', textEn: "Are the vectors a = 2i+j-k, b = i+3j+2k, c = 3i+j+k coplanar?", textHi: "क्या सदिश a = 2i+j-k, b = i+3j+2k, c = 3i+j+k समतलीय (coplanar) हैं?", options: [{en: "Yes, [a b c] = 0", hi: "हाँ, [a b c] = 0"}, {en: "No", hi: "नहीं"}, {en: "They are perpendicular to each other", hi: "वे एक दूसरे के लंबवत हैं"}, {en: "They are all parallel", hi: "वे सभी समानांतर हैं"}], ans: 1 },
    { type: 'MCQ', textEn: "For f(x) = x(x-1)(x-2), Rolle's Theorem is applicable in the interval(s):", textHi: "f(x) = x(x-1)(x-2) के लिए, रोले का प्रमेय (Rolle's Theorem) किन अंतरालों में लागू होता है?", options: [{en: "[0, 1] and [1, 2]", hi: "[0, 1] और [1, 2]"}, {en: "[0, 2] only", hi: "केवल [0, 2]"}, {en: "[-1, 1]", hi: "[-1, 1]"}, {en: "Not applicable anywhere", hi: "कहीं भी लागू नहीं"}], ans: 1 },
    { type: 'MCQ', textEn: "The local maximum of f(x) = x^3 - 3x occurs at:", textHi: "f(x) = x^3 - 3x का स्थानीय उच्चतम (local maximum) किस पर होता है?", options: [{en: "x = -1", hi: "x = -1"}, {en: "x = 1", hi: "x = 1"}, {en: "x = 0", hi: "x = 0"}, {en: "Both x = 1 and x = -1", hi: "x = 1 और x = -1 दोनों"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the equation of the director circle of the ellipse x^2/16 + y^2/9 = 1?", textHi: "दीर्घवृत्त x^2/16 + y^2/9 = 1 के नियामक वृत्त (director circle) का समीकरण क्या है?", options: [{en: "x^2 + y^2 = 25", hi: "x^2 + y^2 = 25"}, {en: "x^2 + y^2 = 7", hi: "x^2 + y^2 = 7"}, {en: "x^2 + y^2 = 144", hi: "x^2 + y^2 = 144"}, {en: "No director circle exists", hi: "कोई नियामक वृत्त नहीं होता"}], ans: 1 },
    { type: 'MCQ', textEn: "The asymptotes of the rectangular hyperbola x^2/4 - y^2/4 = 1 are:", textHi: "समकोणीय अतिपरवलय (rectangular hyperbola) x^2/4 - y^2/4 = 1 के अनंतस्पर्शी (asymptotes) हैं:", options: [{en: "y = ±x", hi: "y = ±x"}, {en: "y = ±2x", hi: "y = ±2x"}, {en: "y = ±x/2", hi: "y = ±x/2"}, {en: "y = ±√2 x", hi: "y = ±√2 x"}], ans: 1 },
    { type: 'MCQ', textEn: "The angle between the line having direction vector i+j+k and the plane having normal vector i-j is:", textHi: "दिशिक सदिश i+j+k वाली रेखा और अभिलंब सदिश i-j वाले समतल के बीच का कोण है:", options: [{en: "0° (Line is parallel to plane)", hi: "0° (रेखा समतल के समानांतर है)"}, {en: "90° (Line is perpendicular)", hi: "90° (रेखा लंबवत है)"}, {en: "45°", hi: "45°"}, {en: "60°", hi: "60°"}], ans: 1 },
    { type: 'MCQ', textEn: "lim(x→0) (e^x - 1 - x) / x^2 = ?", textHi: "lim(x→0) (e^x - 1 - x) / x^2 = ?", options: [{en: "1/2", hi: "1/2"}, {en: "1", hi: "1"}, {en: "0", hi: "0"}, {en: "∞", hi: "∞"}], ans: 1 },
    { type: 'MCQ', textEn: "If in a 3x3 matrix, the third row is the sum of the first two rows, its rank is at most:", textHi: "यदि एक 3x3 आव्यूह में, तीसरी पंक्ति पहली दो पंक्तियों का योग है, तो इसकी कोटि (rank) अधिकतम हो सकती है:", options: [{en: "2", hi: "2"}, {en: "1", hi: "1"}, {en: "3", hi: "3"}, {en: "0", hi: "0"}], ans: 1 },
    { type: 'MCQ', textEn: "If P(A ∩ B) = P(A)P(B), then events A and B are:", textHi: "यदि P(A ∩ B) = P(A)P(B) है, तो घटनाएँ A और B हैं:", options: [{en: "Independent", hi: "स्वतंत्र"}, {en: "Dependent", hi: "आश्रित"}, {en: "Mutually exclusive", hi: "परस्पर अपवर्जी"}, {en: "Exhaustive", hi: "निःशेष (Exhaustive)"}], ans: 1 },
    { type: 'MCQ', textEn: "In an A.P., the 3rd term is 9 and the 8th term is 24. What is the common difference?", textHi: "एक समांतर श्रेढ़ी (A.P.) में, तीसरा पद 9 है और 8वां पद 24 है। सार्व अंतर (common difference) क्या है?", options: [{en: "3", hi: "3"}, {en: "2", hi: "2"}, {en: "1", hi: "1"}, {en: "4", hi: "4"}], ans: 1 },
    { type: 'MCQ', textEn: "Which of the following is a true trigonometric identity?", textHi: "निम्नलिखित में से कौन सी त्रिकोणमितीय सर्वसमिका सत्य है?", options: [{en: "cos(3θ) = 4cos^3θ - 3cosθ", hi: "cos(3θ) = 4cos^3θ - 3cosθ"}, {en: "cos(3θ) = 3cosθ - 4cos^3θ", hi: "cos(3θ) = 3cosθ - 4cos^3θ"}, {en: "sin(3θ) = 4sin^3θ - 3sinθ", hi: "sin(3θ) = 4sin^3θ - 3sinθ"}, {en: "Both A and C", hi: "A और C दोनों"}], ans: 1 },
    { type: 'MCQ', textEn: "If two circles intersect, the common chord is ALWAYS perpendicular to the line of centres.", textHi: "यदि दो वृत्त प्रतिच्छेद करते हैं, तो उभयनिष्ठ जीवा (common chord) हमेशा केंद्रों को मिलाने वाली रेखा के लंबवत होती है। यह कथन है:", options: [{en: "True", hi: "सत्य (True)"}, {en: "False", hi: "असत्य (False)"}, {en: "True only for equal radii", hi: "केवल समान त्रिज्याओं के लिए सत्य"}, {en: "True only for different radii", hi: "केवल भिन्न त्रिज्याओं के लिए सत्य"}], ans: 1 },
    { type: 'MCQ', textEn: "The number of ways n distinct beads can be arranged to form a necklace (assuming clockwise and anti-clockwise are same) is:", textHi: "n विभिन्न मोतियों को एक कंठहार (necklace) बनाने के लिए कितने तरीकों से व्यवस्थित किया जा सकता है (यह मानते हुए कि दक्षिणावर्त और वामावर्त समान हैं)?", options: [{en: "(n-1)! / 2", hi: "(n-1)! / 2"}, {en: "(n-1)!", hi: "(n-1)!"}, {en: "n!", hi: "n!"}, {en: "n! / 2", hi: "n! / 2"}], ans: 1 },
    { type: 'MCQ', textEn: "If ω is a complex cube root of unity, then 1 + ω + ω^2 = ?", textHi: "यदि ω इकाई का एक सम्मिश्र घनमूल (cube root of unity) है, तो 1 + ω + ω^2 = ?", options: [{en: "0", hi: "0"}, {en: "1", hi: "1"}, {en: "-1", hi: "-1"}, {en: "3", hi: "3"}], ans: 1 },
    { type: 'MCQ', textEn: "If roots α, β satisfy α + β = 3 and αβ = 2, find the value of α^2 + β^2.", textHi: "यदि मूल α, β शर्त α + β = 3 और αβ = 2 को संतुष्ट करते हैं, तो α^2 + β^2 का मान ज्ञात करें।", options: [{en: "5", hi: "5"}, {en: "7", hi: "7"}, {en: "1", hi: "1"}, {en: "6", hi: "6"}], ans: 1 },
    { type: 'MCQ', textEn: "Since 0 <= sinx <= x for x > 0, by Squeeze theorem, lim(x→0^+) (sinx / x) is:", textHi: "चूंकि x > 0 के लिए 0 <= sinx <= x है, तो सैंडविच प्रमेय के अनुसार lim(x→0^+) (sinx / x) है:", options: [{en: "1", hi: "1"}, {en: "0", hi: "0"}, {en: "∞", hi: "∞"}, {en: "Does not exist", hi: "अस्तित्व में नहीं है"}], ans: 1 },
    { type: 'MCQ', textEn: "The integrating factor for the differential equation dy/dx + y(tanx) = sin^2x is:", textHi: "अवकल समीकरण dy/dx + y(tanx) = sin^2x के लिए समाकलन गुणक (Integrating Factor) है:", options: [{en: "sec x", hi: "sec x"}, {en: "cos x", hi: "cos x"}, {en: "sin x", hi: "sin x"}, {en: "tan x", hi: "tan x"}], ans: 1 },
    { type: 'MCQ', textEn: "What is the mode of the dataset 1, 2, 2, 3, 3, 3, 4?", textHi: "डेटासेट 1, 2, 2, 3, 3, 3, 4 का बहुलक (mode) क्या है?", options: [{en: "3", hi: "3"}, {en: "2.5", hi: "2.5"}, {en: "2 and 3 (bimodal)", hi: "2 और 3 (बिमॉडल)"}, {en: "No mode", hi: "कोई बहुलक नहीं"}], ans: 1 },
    { type: 'Numerical', textEn: "Calculate the area enclosed by the ellipse x^2/25 + y^2/16 <= 1. (Divide your answer by π and enter the integer).", textHi: "दीर्घवृत्त x^2/25 + y^2/16 <= 1 द्वारा घिरे क्षेत्र के क्षेत्रफल की गणना करें। (अपने उत्तर को π से विभाजित करें और पूर्णांक दर्ज करें)।", ans: "20" },
    { type: 'Numerical', textEn: "If a·b = 10, |a| = 5, and |b| = 4, find the value of cosθ.", textHi: "यदि a·b = 10, |a| = 5, और |b| = 4 है, तो cosθ का मान ज्ञात करें।", ans: "0.5" },
    { type: 'Numerical', textEn: "Evaluate ∫_0¹ (x eˣ) dx.", textHi: "मान ज्ञात करें: ∫_0¹ (x eˣ) dx.", ans: "1" },
    { type: 'Numerical', textEn: "For a 2x2 matrix A, if trace(A) = 3 and det(A) = 2, find the trace of A^2.", textHi: "एक 2x2 आव्यूह A के लिए, यदि trace(A) = 3 और det(A) = 2 है, तो A^2 का trace ज्ञात करें।", ans: "5" },
    { type: 'Numerical', textEn: "A bag has 6 red and 4 blue balls. If 3 balls are drawn at random, the probability of drawing NO red balls is 1/x. Find the value of x.", textHi: "एक थैले में 6 लाल और 4 नीली गेंदें हैं। यदि 3 गेंदें यादृच्छिक रूप से निकाली जाती हैं, तो कोई भी लाल गेंद न निकलने की प्रायिकता 1/x है। x का मान ज्ञात करें।", ans: "30" }
];

export const mock4Questions: QuestionType[] = Array.from({ length: 75 }).map((_, i) => {
    let subject = 'Physics';
    if (i >= 25 && i < 50) subject = 'Chemistry';
    if (i >= 50) subject = 'Mathematics';
    
    const subjectIndex = i % 25;
    const type = subjectIndex < 20 ? 'MCQ' : 'Numerical';
    
    if (subject === 'Physics') {
        const physQ: any = physicsQuestions_4[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: physQ.type as 'MCQ' | 'Numerical',
            textEn: physQ.textEn || physQ.text || `[Mock 4] Physics Question ${subjectIndex + 1}`,
            textHi: physQ.textHi || physQ.text || `[Mock 4] Physics Question ${subjectIndex + 1} (Hi)`,
            options: physQ.type === 'MCQ' && physQ.options ? physQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 4 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 4 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: physQ.type === 'MCQ' ? physQ.ans as number : undefined,
            correctAnswer: physQ.type === 'Numerical' ? physQ.ans as string : undefined
        };
    }
    
    if (subject === 'Chemistry') {
        const chemQ: any = chemistryQuestions_4[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: chemQ.type as 'MCQ' | 'Numerical',
            textEn: chemQ.textEn || chemQ.text || `[Mock 4] Chemistry Question ${subjectIndex + 1}`,
            textHi: chemQ.textHi || chemQ.text || `[Mock 4] Chemistry Question ${subjectIndex + 1} (Hi)`,
            options: chemQ.type === 'MCQ' && chemQ.options ? chemQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 4 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 4 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: chemQ.type === 'MCQ' ? chemQ.ans as number : undefined,
            correctAnswer: chemQ.type === 'Numerical' ? chemQ.ans as string : undefined
        };
    }
    
    if (subject === 'Mathematics') {
        const mathQ: any = mathQuestions_4[subjectIndex];
        return {
            id: i + 1,
            subject: subject,
            type: mathQ.type as 'MCQ' | 'Numerical',
            textEn: mathQ.textEn || mathQ.text || `[Mock 4] Math Question ${subjectIndex + 1}`,
            textHi: mathQ.textHi || mathQ.text || `[Mock 4] Math Question ${subjectIndex + 1} (Hi)`,
            options: mathQ.type === 'MCQ' && mathQ.options ? mathQ.options.map((opt: any, idx: number) => ({ 
                id: idx + 1, 
                textEn: typeof opt === 'string' ? opt : opt.en || `Mock 4 Option ${idx + 1}`, 
                textHi: typeof opt === 'string' ? opt : opt.hi || `Mock 4 Option ${idx + 1} (Hi)` 
            })) : undefined,
            correctOption: mathQ.type === 'MCQ' ? mathQ.ans as number : undefined,
            correctAnswer: mathQ.type === 'Numerical' ? mathQ.ans as string : undefined
        };
    }
    return {} as any;
});
