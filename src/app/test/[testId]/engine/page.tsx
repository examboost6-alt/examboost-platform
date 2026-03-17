'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import { 
    CheckCircle2, 
    Menu,
    X,
} from 'lucide-react';
import { getSupabaseClient } from '@/lib/supabaseClient';

export default function NTA_JEETestEngineWrapper() {
    return (
        <Suspense fallback={<div className="min-vh-100 bg-slate-900 flex items-center justify-center text-white">Loading Test Engine...</div>}>
            <JEE_NTA_TestEngine />
        </Suspense>
    );
}

// Generate some mock questions (75 for JEE: 25 Math, 25 Physics, 25 Chem)
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

function JEE_NTA_TestEngine() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = useParams();
    const testId = (params?.testId as string) || '';
    const isNeet = testId.includes('med');
    
    const mockQuestions = isNeet ? neetMockQuestions : jeeMockQuestions;
    const subjectsList = isNeet ? neetSubjectsList : jeeSubjectsList;
    const examName = isNeet ? 'NEET UG' : 'JEE MAIN';
    const examPaperName = isNeet ? 'NEET UG PAPER' : 'JEE MAIN PAPER 1';
    
    const defaultLang = searchParams.get('lang') === 'hindi' ? 'hindi' : 'english';

    const [userName, setUserName] = useState("Candidate");
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    const [timeLeft, setTimeLeft] = useState((isNeet ? 200 : 180) * 60); // 200 mins for NEET, 180 mins for JEE
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMobilePaletteOpen, setIsMobilePaletteOpen] = useState(false);
    
    // State for questions
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questionLang, setQuestionLang] = useState<'english' | 'hindi'>(defaultLang);
    
    const [responses, setResponses] = useState<Record<number, number | string>>({});
    const [status, setStatus] = useState<Record<number, string>>({
        [mockQuestions[0].id]: 'not_answered'
    });

    const currentQuestion = mockQuestions[currentQuestionIndex];
    const [activeSubject, setActiveSubject] = useState(currentQuestion.subject);

    useEffect(() => {
        const fetchUser = async () => {
            const supabase = getSupabaseClient();
            if (!supabase) return;
            const { data: authData } = await supabase.auth.getSession();
            if (authData?.session?.user) {
                const uid = authData.session.user.id;
                const { data } = await supabase.from('profiles').select('full_name, photo_path').eq('id', uid).maybeSingle();
                if (data?.full_name) {
                    setUserName(data.full_name);
                }
                if (data?.photo_path) {
                    const { data: publicData } = supabase.storage.from('student-photos').getPublicUrl(data.photo_path);
                    if(publicData?.publicUrl) setAvatarUrl(publicData.publicUrl);
                }
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        // Sync active subject tab when question changes via Next/Back
        if (currentQuestion.subject !== activeSubject) {
            setActiveSubject(currentQuestion.subject);
        }
    }, [currentQuestionIndex]);

    useEffect(() => {
        if (isSubmitted) return;
        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    handleSubmit();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [isSubmitted]);

    useEffect(() => {
        setStatus((prev) => {
            if (!prev[currentQuestion.id] || prev[currentQuestion.id] === 'not_visited') {
                return { ...prev, [currentQuestion.id]: 'not_answered' };
            }
            return prev;
        });
        setQuestionLang(defaultLang);
    }, [currentQuestionIndex, defaultLang, currentQuestion.id]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleOptionSelect = (optId: number) => {
        setResponses(prev => ({ ...prev, [currentQuestion.id]: optId }));
    };

    const handleNumericalInput = (val: string) => {
        setResponses(prev => ({ ...prev, [currentQuestion.id]: val }));
    };

    const goToNextQuestion = () => {
        if (currentQuestionIndex < mockQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };
    
    const goToPrevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const isCurrentAnswered = () => {
        const res = responses[currentQuestion.id];
        return res !== undefined && res !== '';
    };

    const handleSaveNext = () => {
        if (isCurrentAnswered()) {
            setStatus(prev => ({ ...prev, [currentQuestion.id]: 'answered' }));
        } else {
            setStatus(prev => ({ ...prev, [currentQuestion.id]: 'not_answered' }));
        }
        goToNextQuestion();
    };

    const handleSaveMarkReview = () => {
        if (isCurrentAnswered()) {
            setStatus(prev => ({ ...prev, [currentQuestion.id]: 'answered_marked' }));
        } else {
            setStatus(prev => ({ ...prev, [currentQuestion.id]: 'marked' }));
        }
        goToNextQuestion();
    };

    const handleMarkReview = () => {
        if (isCurrentAnswered()) {
            setStatus(prev => ({ ...prev, [currentQuestion.id]: 'answered_marked' }));
        } else {
            setStatus(prev => ({ ...prev, [currentQuestion.id]: 'marked' }));
        }
        goToNextQuestion();
    };

    const handleClearResponse = () => {
        setResponses(prev => {
            const newRes = { ...prev };
            delete newRes[currentQuestion.id];
            return newRes;
        });
        setStatus(prev => ({ ...prev, [currentQuestion.id]: 'not_answered' }));
    };

    const navToQuestion = (index: number) => {
        setCurrentQuestionIndex(index);
        setIsMobilePaletteOpen(false);
    };

    const handleSubjectChange = (subject: string) => {
        setActiveSubject(subject);
        // Find first question of this subject
        const firstQIndex = mockQuestions.findIndex(q => q.subject === subject);
        if (firstQIndex !== -1) {
            navToQuestion(firstQIndex);
        }
    };

    const handleSubmit = () => {
        if (confirm("Are you sure you want to submit the exam?")) {
            let score = 0;
            let correct = 0;
            let incorrect = 0;
            let unattempted = 0;

            mockQuestions.forEach(q => {
                const ans = responses[q.id];
                if (ans !== undefined && ans !== '') {
                    if (q.type === 'MCQ') {
                        if (ans === q.correctOption) {
                            score += 4;
                            correct++;
                        } else {
                            score -= 1;
                            incorrect++;
                        }
                    } else if (q.type === 'Numerical') {
                        if (parseFloat(ans as string) === parseFloat(q.correctAnswer as string)) {
                            score += 4;
                            correct++;
                        } else {
                            // Section B Numerical has no negative marking for incorrect
                            incorrect++;
                        }
                    }
                } else {
                    unattempted++;
                }
            });

            sessionStorage.setItem('examResponses', JSON.stringify(responses));
            setIsSubmitted(true);
            setTimeout(() => {
                router.push(`/test/${testId}/analysis?score=${score}&correct=${correct}&incorrect=${incorrect}&unattempted=${unattempted}&isNeet=${isNeet}`);
            }, 1500);
        }
    };

    const getStatusCounts = () => {
        let answered = 0;
        let notAnswered = 0;
        let notVisited = 0;
        let marked = 0;
        let answeredMarked = 0;

        mockQuestions.forEach(q => {
            const s = status[q.id] || 'not_visited';
            if (s === 'answered') answered++;
            else if (s === 'not_answered') notAnswered++;
            else if (s === 'not_visited') notVisited++;
            else if (s === 'marked') marked++;
            else if (s === 'answered_marked') answeredMarked++;
        });

        return { answered, notAnswered, notVisited, marked, answeredMarked };
    };

    const counts = getStatusCounts();

    const getStatusShapeClasses = (questionId: number) => {
        const s = status[questionId] || 'not_visited';
        if (s === 'not_visited') return 'bg-[#e2e2e2] text-black border border-[#d4d4d4] rounded-sm';
        if (s === 'not_answered') return 'bg-[#e74c3c] text-white rounded-b-lg rounded-t-sm';
        if (s === 'answered') return 'bg-[#2ecc71] text-white rounded-t-lg rounded-b-sm';
        if (s === 'marked') return 'bg-[#9b59b6] text-white rounded-full flex items-center justify-center';
        if (s === 'answered_marked') return 'bg-[#9b59b6] text-white rounded-full relative';
        return 'bg-gray-200';
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-[#f4f7fe] flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-md w-full text-center shadow-2xl shadow-indigo-500/10 border border-slate-200">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">Test Submitted!</h1>
                    <p className="text-slate-500 text-sm sm:text-base font-medium mb-8">Your responses have been recorded successfully. Analytics are being generated.</p>
                    
                    <div className="bg-slate-50 p-4 rounded-xl mb-8 flex justify-between px-4 sm:px-6 text-xs sm:text-sm font-bold text-slate-700">
                        <div className="text-center">
                            <span className="block text-xl sm:text-2xl mb-1 text-emerald-600">{counts.answered + counts.answeredMarked}</span>
                            Attempted
                        </div>
                        <div className="text-center">
                            <span className="block text-xl sm:text-2xl mb-1 text-red-500">{counts.notAnswered}</span>
                            Missed
                        </div>
                        <div className="text-center">
                            <span className="block text-xl sm:text-2xl mb-1 text-indigo-500">{counts.marked + counts.answeredMarked}</span>
                            Reviewed
                        </div>
                    </div>

                    <button 
                        disabled
                        className="w-full bg-[#337ab7] text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-lg opacity-80 text-sm sm:text-base cursor-wait"
                    >
                        Redirecting to Analysis...
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-screen font-sans bg-white overflow-hidden text-[13px] md:text-sm select-none">
            {/* Header */}
            <header className="flex justify-between items-center bg-[#2B579A] text-white px-4 py-2 border-b-4 border-[#1c3a66] shrink-0">
                <div className="flex items-center gap-3">
                    <div className="text-lg md:text-xl font-bold uppercase tracking-wide hidden sm:block">ExamBoost NTA Simulator</div>
                    <div className="text-lg md:text-xl font-bold uppercase tracking-wide sm:hidden">NTA Simulator</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right leading-tight hidden md:block">
                        <div className="text-xs text-blue-100">Candidate Name: <span className="text-yellow-300 font-bold ml-1 text-sm tracking-wide">{userName}</span></div>
                        <div className="text-xs text-blue-100 mt-0.5">Exam Name: <span className="text-yellow-300 font-bold ml-1 text-sm tracking-wide">{examName}</span></div>
                    </div>
                </div>
            </header>
            
            <div className="flex flex-1 overflow-hidden relative">
                {/* Left Panel */}
                <div className="flex-1 flex flex-col border-r border-[#ccc] min-w-0 bg-[#f9f9f9] lg:bg-white z-10 w-full lg:w-auto">
                    <div className="bg-[#e4e8eb] border-b border-[#ccc] flex justify-between items-center px-3 py-2 shrink-0">
                        <div className="font-bold text-[#333] text-sm md:text-base">{examPaperName}</div>
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-[#333] hidden sm:inline">Time Left:</span>
                            <span className="bg-white px-2 md:px-3 py-0.5 border border-[#ccc] rounded">
                                <span className="font-bold text-lg md:text-xl text-[#2B579A] tabular-nums tracking-widest">{formatTime(timeLeft)}</span>
                            </span>
                        </div>
                        {/* Mobile right panel toggler in header */}
                        <div className="lg:hidden">
                            <button onClick={() => setIsMobilePaletteOpen(true)} className="bg-[#2B579A] p-2 text-white rounded">
                                 <Menu className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    
                    {/* Subject Tabs */}
                    <div className="bg-[#f0f0f0] flex px-2 pt-2 border-b-2 border-[#2B579A] shrink-0 overflow-x-auto hide-scrollbar">
                        {subjectsList.map(sub => (
                            <button 
                                key={sub}
                                onClick={() => handleSubjectChange(sub)}
                                className={`px-4 md:px-8 py-2 md:py-2.5 font-bold rounded-t-md border-t border-l border-r mr-1 whitespace-nowrap outline-none transition-colors ${activeSubject === sub ? 'bg-[#2B579A] text-white border-[#2B579A]' : 'bg-[#e0e0e0] text-[#333] border-[#ccc] hover:bg-[#d0d0d0]'}`}
                            >
                                {sub}
                            </button>
                        ))}
                    </div>

                    {/* Question Header */}
                    <div className="flex justify-between items-center px-4 py-2 border-b border-[#ccc] bg-white shrink-0">
                        <div className="font-bold text-red-600 text-xs md:text-sm">Question Type : {currentQuestion.type === 'MCQ' ? 'Multiple Choice Question' : 'Numerical Value Type'}</div>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-600 font-semibold text-xs md:text-sm whitespace-nowrap hidden sm:inline">View In : </span>
                            <select 
                                value={questionLang}
                                onChange={(e) => setQuestionLang(e.target.value as 'english' | 'hindi')}
                                className="border border-[#ccc] px-2 py-1 text-xs md:text-sm font-semibold rounded outline-none w-[100px] md:w-[120px] bg-white"
                            >
                                <option value="english">English</option>
                                <option value="hindi">Hindi</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-between items-center bg-blue-50/50 px-4 py-2 border-b border-[#ccc] shrink-0">
                        <div className="font-bold text-[#2B579A] text-sm md:text-base">
                            Question No. {currentQuestion.id}
                        </div>
                    </div>

                    {/* Question Content */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-8 text-sm md:text-base bg-white">
                        <div className="mb-6 md:mb-8 text-black font-semibold text-base md:text-lg leading-relaxed select-text">
                            {questionLang === 'hindi' ? currentQuestion.textHi : currentQuestion.textEn}
                        </div>
                        <div className="space-y-4">
                            {currentQuestion.type === 'MCQ' && currentQuestion.options?.map((opt, idx) => {
                                const isSelected = responses[currentQuestion.id] === opt.id;
                                return (
                                    <label key={opt.id} className={`flex items-start gap-4 cursor-pointer p-4 rounded-md transition-colors border ${isSelected ? 'border-blue-300 bg-blue-50' : 'border-transparent hover:bg-gray-50'}`}>
                                        <div className="flex-shrink-0 pt-0.5">
                                            <input 
                                                type="radio" 
                                                name={`option-${currentQuestion.id}`} 
                                                checked={isSelected}
                                                onChange={() => handleOptionSelect(opt.id)}
                                                className="w-5 h-5 text-[#2B579A] border-gray-400 focus:ring-[#2B579A] cursor-pointer" 
                                            />
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="font-bold text-gray-700 min-w-[20px] text-base md:text-lg">{idx+1})</span>
                                            <span className="text-gray-900 font-medium text-base md:text-lg font-serif">
                                                {questionLang === 'hindi' ? opt.textHi : opt.textEn}
                                            </span>
                                        </div>
                                    </label>
                                );
                            })}
                            
                            {currentQuestion.type === 'Numerical' && (
                                <div className="mt-4">
                                    <label className="block text-gray-700 font-bold mb-2">Enter your answer:</label>
                                    <input 
                                        type="number" 
                                        value={(responses[currentQuestion.id] as string) || ''}
                                        onChange={(e) => handleNumericalInput(e.target.value)}
                                        className="border-2 border-gray-300 p-2 rounded-md outline-none focus:border-[#2B579A] w-full max-w-xs text-base md:text-lg"
                                        placeholder="Enter numerical value"
                                        step="any"
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="bg-[#f2f4f5] border-t border-[#ccc] p-3 md:p-4 flex flex-wrap md:flex-nowrap justify-between gap-3 shrink-0">
                        <div className="flex flex-wrap md:flex-nowrap gap-2 w-full md:w-auto">
                            <button onClick={handleSaveNext} className="w-full md:w-auto bg-[#5cb85c] hover:bg-[#4cae4c] text-white px-4 py-2.5 md:py-2.5 font-bold text-sm uppercase rounded shadow-[0_1px_3px_rgba(0,0,0,0.2)] active:translate-y-px transition-colors border border-[#4cae4c]">
                                Save & Next
                            </button>
                            <button onClick={handleClearResponse} className="w-[48%] md:w-auto bg-white hover:bg-gray-100 text-[#333] px-3 md:px-4 py-2.5 md:py-2.5 font-bold text-sm uppercase rounded shadow-[0_1px_3px_rgba(0,0,0,0.2)] active:translate-y-px transition-colors border border-[#ccc]">
                                Clear
                            </button>
                            <button onClick={handleSaveMarkReview} className="w-[48%] md:w-auto bg-[#f0ad4e] hover:bg-[#eea236] text-white px-3 md:px-4 py-2.5 md:py-2.5 font-bold text-sm uppercase rounded shadow-[0_1px_3px_rgba(0,0,0,0.2)] active:translate-y-px transition-colors border border-[#eea236] whitespace-nowrap text-xs md:text-sm">
                                Save & Mark For Review
                            </button>
                            <button onClick={handleMarkReview} className="w-full md:w-auto bg-[#337ab7] hover:bg-[#286090] text-white px-3 md:px-4 py-2.5 md:py-2.5 font-bold text-sm uppercase rounded shadow-[0_1px_3px_rgba(0,0,0,0.2)] active:translate-y-px transition-colors border border-[#2e6da4]">
                                Mark For Review & Next
                            </button>
                        </div>
                        <div className="flex gap-2 w-full md:w-auto mt-2 md:mt-0 justify-between md:justify-center">
                            <button onClick={goToPrevQuestion} disabled={currentQuestionIndex === 0} className="w-1/2 md:w-auto bg-white hover:bg-gray-100 text-[#333] disabled:opacity-50 disabled:cursor-not-allowed px-5 md:px-6 py-2.5 font-bold text-sm uppercase rounded shadow-[0_1px_3px_rgba(0,0,0,0.2)] active:translate-y-px transition-colors border border-[#ccc]">
                                &lt;&lt; Back
                            </button>
                            <button onClick={goToNextQuestion} disabled={currentQuestionIndex === mockQuestions.length - 1} className="w-1/2 md:w-auto bg-white hover:bg-gray-100 text-[#333] disabled:opacity-50 disabled:cursor-not-allowed px-5 md:px-6 py-2.5 font-bold text-sm uppercase rounded shadow-[0_1px_3px_rgba(0,0,0,0.2)] active:translate-y-px transition-colors border border-[#ccc]">
                                Next &gt;&gt;
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className={`absolute lg:relative inset-y-0 right-0 z-50 w-[300px] lg:w-[320px] bg-[#e4e8eb] flex flex-col shrink-0 transform transition-transform duration-300 ${isMobilePaletteOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} shadow-2xl lg:shadow-none border-l border-[#ccc]`}>
                    
                    {/* Profile Section */}
                    <div className="p-3 bg-white border-b border-[#ccc] flex flex-col shrink-0">
                        <div className="flex justify-end lg:hidden mb-1">
                             <button onClick={() => setIsMobilePaletteOpen(false)} className="bg-gray-200 text-gray-700 p-1.5 rounded"><X className="w-4 h-4"/></button>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-[85px] h-[85px] bg-white border border-[#ccc] p-0.5 shrink-0 overflow-hidden shadow-sm flex items-center justify-center">
                                {avatarUrl ? (
                                    <img src={avatarUrl} alt="Profile" className="w-full h-full object-cover" />
                                ) : (
                                    <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=f3f4f6&color=6b7280&size=100&font-size=0.6`} alt="Profile" className="w-full h-full object-cover" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="font-bold text-[#337ab7] text-xl block truncate leading-none mb-1">{userName}</span>
                                <span className="text-gray-500 font-semibold text-xs uppercase block">{examName}</span>
                            </div>
                        </div>
                    </div>

                    {/* Status Legends */}
                    <div className="p-2 md:p-3 bg-white grid grid-cols-2 gap-x-2 gap-y-2 text-[11px] md:text-xs border-b border-[#ccc] shrink-0 font-bold text-[#555] shadow-sm">
                       <div className="flex items-center gap-2 overflow-hidden">
                           <div className="w-[28px] h-[26px] md:w-8 md:h-[28px] flex items-center justify-center font-bold bg-[#f1f1f1] text-black border border-[#d4d4d4] rounded shadow-sm shrink-0">{counts.notVisited}</div>
                           <span className="leading-tight truncate">Not Visited</span>
                       </div>
                       <div className="flex items-center gap-2 overflow-hidden">
                           <div className="w-[28px] h-[26px] md:w-8 md:h-[28px] flex items-center justify-center font-bold bg-[#e74c3c] text-white rounded-b-lg rounded-t-sm shadow-sm shrink-0">{counts.notAnswered}</div>
                           <span className="leading-tight truncate">Not Answered</span>
                       </div>
                       <div className="flex items-center gap-2 overflow-hidden">
                           <div className="w-[28px] h-[26px] md:w-8 md:h-[28px] flex items-center justify-center font-bold bg-[#2ecc71] text-white rounded-t-lg rounded-b-sm shadow-sm shrink-0">{counts.answered}</div>
                           <span className="leading-tight truncate">Answered</span>
                       </div>
                       <div className="flex items-center gap-2 overflow-hidden">
                           <div className="w-[28px] h-[26px] md:w-8 md:h-[28px] flex items-center justify-center font-bold bg-[#9b59b6] text-white rounded-full shadow-sm shrink-0">{counts.marked}</div>
                           <span className="leading-tight truncate">Marked for Review</span>
                       </div>
                       <div className="flex items-start md:items-center gap-2 col-span-2 mt-1 bg-gray-50 p-1.5 border border-gray-100 rounded">
                           <div className="w-[28px] h-[26px] md:w-8 md:h-[28px] flex items-center justify-center font-bold bg-[#9b59b6] text-white rounded-full relative shrink-0 shadow-sm mt-0.5 md:mt-0">
                               {counts.answeredMarked}
                               <div className="absolute bottom-0 -right-0.5 w-[10px] h-[10px] bg-[#2ecc71] rounded-full border border-white"></div>
                           </div>
                           <span className="leading-tight text-[10px] md:text-[11px] pr-1">Answered & Marked for Review (will be considered for evaluation)</span>
                       </div>
                    </div>

                    {/* Section Label */}
                    <div className="bg-[#337ab7] text-white px-4 py-2 font-bold text-sm shrink-0 flex justify-between items-center shadow-inner text-center justify-center">
                        <span className="uppercase mx-auto block w-full text-center">{activeSubject}</span>
                    </div>

                    {/* Question Palette */}
                    <div className="flex-1 overflow-y-auto bg-blue-50/20 p-4 hide-scrollbar min-h-0 border-b border-[#ccc]">
                        <div className="font-bold text-[#337ab7] mb-3 text-sm border-b border-[#bce8f1] pb-1">Choose a Question</div>
                        <div className="grid grid-cols-5 gap-y-3 gap-x-2">
                            {mockQuestions.filter(q => q.subject === activeSubject).map((q) => {
                                const isActive = currentQuestion.id === q.id;
                                const shapeClass = getStatusShapeClasses(q.id);
                                return (
                                    <button 
                                        key={q.id}
                                        onClick={() => navToQuestion(mockQuestions.findIndex(mq => mq.id === q.id))}
                                        className={`w-[42px] h-[36px] flex items-center justify-center font-bold text-sm md:text-[15px] transition-all relative mx-auto ${shapeClass} ${isActive ? 'ring-2 ring-[#000] ring-offset-2 z-10 scale-[1.05] font-black' : 'hover:brightness-95 shadow-[0_1px_2px_rgba(0,0,0,0.15)]'}`}
                                    >
                                        {q.id}
                                        {status[q.id] === 'answered_marked' && (
                                            <div className="absolute -bottom-[1px] -right-[2px] w-[12px] h-[12px] bg-[#2ecc71] rounded-full border border-white z-20"></div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="bg-[#f5f5f5] p-3 md:p-4 shrink-0 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
                         <button 
                            onClick={handleSubmit} 
                            className="bg-[#5cb85c] hover:bg-[#4cae4c] w-full text-white py-3 rounded font-bold text-base border border-[#4cae4c] shadow-[0_2px_4px_rgba(0,0,0,0.2)] uppercase tracking-wider transition-colors active:translate-y-px"
                         >
                            Submit Test
                         </button>
                    </div>

                </div>
            </div>

            {/* Mobile Overlay */}
            {isMobilePaletteOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsMobilePaletteOpen(false)}
                />
            )}

            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
