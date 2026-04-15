export const jeeSubjectsList = ['Physics', 'Chemistry', 'Mathematics'];
export const neetSubjectsList = ['Physics', 'Chemistry', 'Botany', 'Zoology'];

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

import { neetMock1Questions } from './data/neetMock1';
import { neetMock2Questions } from './data/neetMock2';
import { neetMock3Questions } from './data/neetMock3';
import { neetMock4Questions } from './data/neetMock4';
import { neetMock5Questions } from './data/neetMock5';
import { neetMock6Questions } from './data/neetMock6';
import { neetMock7Questions } from './data/neetMock7';
import { neetMock8Questions } from './data/neetMock8';
import { neetMock9Questions } from './data/neetMock9';
import { neetMock10Questions } from './data/neetMock10';
import { neetMock11Questions } from './data/neetMock11';
import { neetMock12Questions } from './data/neetMock12';
import { neetMock13Questions } from './data/neetMock13';
import { neetMock14Questions } from './data/neetMock14';
import { neetMock15Questions } from './data/neetMock15';
import { neetIntensiveMock1Questions } from './data/neetIntensiveMock1';
import { neetIntensiveMock2Questions } from './data/neetIntensiveMock2';
import { neetIntensiveMock3Questions } from './data/neetIntensiveMock3';
import { neetIntensiveMock4Questions } from './data/neetIntensiveMock4';
import { neetIntensiveMock5Questions } from './data/neetIntensiveMock5';

import { mock1Questions } from './data/mock1';
import { mock2Questions } from './data/mock2';
import { mock3Questions } from './data/mock3';
import { mock4Questions } from './data/mock4';
import { mock5Questions } from './data/mock5';
import { mock6Questions } from './data/mock6';
import { mock7Questions } from './data/mock7';
import { mock8Questions } from './data/mock8';
import { mock9Questions } from './data/mock9';
import { mock10Questions } from './data/mock10';
import { mock11Questions } from './data/mock11';
import { mock12Questions } from './data/mock12';
import { mock13Questions } from './data/mock13';
import { mock14Questions } from './data/mock14';
import { mock15Questions } from './data/mock15';

export const getJeeMockQuestions = (testId: string): QuestionType[] => {
    // Extract the test number from the testId, handling both 'test-1' and 'mock-eng-1-test-1' formats
    const match = testId.match(/test-(\d+)/);
    const testNum = match ? parseInt(match[1]) : 1;

    switch (testNum) {
        case 1: return mock1Questions;
        case 2: return mock2Questions;
        case 3: return mock3Questions;
        case 4: return mock4Questions;
        case 5: return mock5Questions;
        case 6: return mock6Questions;
        case 7: return mock7Questions;
        case 8: return mock8Questions;
        case 9: return mock9Questions;
        case 10: return mock10Questions;
        case 11: return mock11Questions;
        case 12: return mock12Questions;
        case 13: return mock13Questions;
        case 14: return mock14Questions;
        case 15: return mock15Questions;
        default: return mock1Questions;
    }
};

const neetFallbackGen = Array.from({ length: 180 }).map((_, i) => {
    let subject = 'Physics';
    if (i >= 45 && i < 90) subject = 'Chemistry';
    if (i >= 90 && i < 135) subject = 'Botany';
    if (i >= 135) subject = 'Zoology';
    
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

export const getNeetMockQuestions = (testId: string): QuestionType[] => {
    if (testId.includes('test-intensive-5')) return neetIntensiveMock5Questions;
    if (testId.includes('test-intensive-4')) return neetIntensiveMock4Questions;
    if (testId.includes('test-intensive-3')) return neetIntensiveMock3Questions;
    if (testId.includes('test-intensive-2')) return neetIntensiveMock2Questions;
    if (testId.includes('test-intensive-1')) return neetIntensiveMock1Questions;
    if (testId.includes('test-15')) return neetMock15Questions;
    if (testId.includes('test-14')) return neetMock14Questions;
    if (testId.includes('test-13')) return neetMock13Questions;
    if (testId.includes('test-12')) return neetMock12Questions;
    if (testId.includes('test-11')) return neetMock11Questions;
    if (testId.includes('test-10')) return neetMock10Questions;
    if (testId.includes('test-1')) return neetMock1Questions;
    if (testId.includes('test-2')) return neetMock2Questions;
    if (testId.includes('test-3')) return neetMock3Questions;
    if (testId.includes('test-4')) return neetMock4Questions;
    if (testId.includes('test-5')) return neetMock5Questions;
    if (testId.includes('test-6')) return neetMock6Questions;
    if (testId.includes('test-7')) return neetMock7Questions;
    if (testId.includes('test-8')) return neetMock8Questions;
    if (testId.includes('test-9')) return neetMock9Questions;
    return neetFallbackGen;
};

export const SYLLABUS: any = {
  Engineering: [
    { subject: 'Physics', chapters: [
        { name: 'Physical World & Measurement', class: '11th' }, { name: 'Kinematics', class: '11th' }, { name: 'Laws of Motion', class: '11th' }, { name: 'Work, Energy & Power', class: '11th' }, { name: 'Rotational Motion', class: '11th' }, { name: 'Gravitation', class: '11th' }, { name: 'Properties of Solids & Liquids', class: '11th' }, { name: 'Thermodynamics', class: '11th' }, { name: 'Kinetic Theory of Gases', class: '11th' }, { name: 'Oscillations & Waves', class: '11th' },
        { name: 'Electrostatics', class: '12th' }, { name: 'Current Electricity', class: '12th' }, { name: 'Magnetic Effects of Current & Magnetism', class: '12th' }, { name: 'Electromagnetic Induction & AC', class: '12th' }, { name: 'Electromagnetic Waves', class: '12th' }, { name: 'Optics', class: '12th' }, { name: 'Dual Nature of Matter & Radiation', class: '12th' }, { name: 'Atoms & Nuclei', class: '12th' }, { name: 'Electronic Devices', class: '12th' }
    ] },
    { subject: 'Chemistry', chapters: [
        { name: 'Some Basic Concepts of Chemistry', class: '11th' }, { name: 'Structure of Atom', class: '11th' }, { name: 'Periodic Table & Periodicity', class: '11th' }, { name: 'Chemical Bonding', class: '11th' }, { name: 'Thermodynamics', class: '11th' }, { name: 'Equilibrium', class: '11th' }, { name: 'Redox Reactions', class: '11th' }, { name: 'p-Block Elements', class: '11th' }, { name: 'Organic Chemistry Basics', class: '11th' }, { name: 'Hydrocarbons', class: '11th' },
        { name: 'Solutions', class: '12th' }, { name: 'Electrochemistry', class: '12th' }, { name: 'Chemical Kinetics', class: '12th' }, { name: 'd & f Block Elements', class: '12th' }, { name: 'Coordination Compounds', class: '12th' }, { name: 'Haloalkanes & Haloarenes', class: '12th' }, { name: 'Alcohols, Phenols & Ethers', class: '12th' }, { name: 'Aldehydes, Ketones & Carboxylic Acids', class: '12th' }, { name: 'Amines', class: '12th' }, { name: 'Biomolecules', class: '12th' }
    ] },
    { subject: 'Mathematics', chapters: [
        { name: 'Sets, Relations & Functions', class: '11th' }, { name: 'Complex Numbers & Quadratics', class: '11th' }, { name: 'Permutations & Combinations', class: '11th' }, { name: 'Binomial Theorem', class: '11th' }, { name: 'Sequence & Series', class: '11th' }, { name: 'Straight Lines', class: '11th' }, { name: 'Conic Sections', class: '11th' }, { name: 'Limits & Derivatives', class: '11th' }, { name: 'Statistics', class: '11th' },
        { name: 'Matrices & Determinants', class: '12th' }, { name: 'Continuity & Differentiability', class: '12th' }, { name: 'Applications of Derivatives', class: '12th' }, { name: 'Integrals', class: '12th' }, { name: 'Applications of Integrals', class: '12th' }, { name: 'Differential Equations', class: '12th' }, { name: 'Vector Algebra', class: '12th' }, { name: '3D Geometry', class: '12th' }, { name: 'Probability', class: '12th' }
    ] }
  ],
  Medical: [
    { subject: 'Physics', chapters: [
        { name: 'Physical World & Measurement', class: '11th' }, { name: 'Kinematics', class: '11th' }, { name: 'Laws of Motion', class: '11th' }, { name: 'Work, Energy & Power', class: '11th' }, { name: 'Rotational Motion', class: '11th' }, { name: 'Gravitation', class: '11th' }, { name: 'Properties of Solids & Liquids', class: '11th' }, { name: 'Thermodynamics', class: '11th' }, { name: 'Kinetic Theory of Gases', class: '11th' }, { name: 'Oscillations & Waves', class: '11th' },
        { name: 'Electrostatics', class: '12th' }, { name: 'Current Electricity', class: '12th' }, { name: 'Magnetic Effects of Current & Magnetism', class: '12th' }, { name: 'Electromagnetic Induction & AC', class: '12th' }, { name: 'Electromagnetic Waves', class: '12th' }, { name: 'Optics', class: '12th' }, { name: 'Dual Nature of Matter & Radiation', class: '12th' }, { name: 'Atoms & Nuclei', class: '12th' }, { name: 'Electronic Devices', class: '12th' }
    ] },
    { subject: 'Chemistry', chapters: [
        { name: 'Some Basic Concepts of Chemistry', class: '11th' }, { name: 'Structure of Atom', class: '11th' }, { name: 'Periodic Table & Periodicity', class: '11th' }, { name: 'Chemical Bonding', class: '11th' }, { name: 'Thermodynamics', class: '11th' }, { name: 'Equilibrium', class: '11th' }, { name: 'Redox Reactions', class: '11th' }, { name: 'p-Block Elements', class: '11th' }, { name: 'Organic Chemistry Basics', class: '11th' }, { name: 'Hydrocarbons', class: '11th' },
        { name: 'Solutions', class: '12th' }, { name: 'Electrochemistry', class: '12th' }, { name: 'Chemical Kinetics', class: '12th' }, { name: 'd & f Block Elements', class: '12th' }, { name: 'Coordination Compounds', class: '12th' }, { name: 'Haloalkanes & Haloarenes', class: '12th' }, { name: 'Alcohols, Phenols & Ethers', class: '12th' }, { name: 'Aldehydes, Ketones & Carboxylic Acids', class: '12th' }, { name: 'Amines', class: '12th' }, { name: 'Biomolecules', class: '12th' }
    ] },
    { subject: 'Biology', chapters: [
        { name: 'The Living World', class: '11th' }, { name: 'Biological Classification', class: '11th' }, { name: 'Plant Kingdom', class: '11th' }, { name: 'Animal Kingdom', class: '11th' }, { name: 'Morphology of Flowering Plants', class: '11th' }, { name: 'Anatomy of Flowering Plants', class: '11th' }, { name: 'Structural Organisation', class: '11th' }, { name: 'Cell: The Unit of Life', class: '11th' }, { name: 'Biomolecules (11th)', class: '11th' }, { name: 'Cell Cycle and Division', class: '11th' }, { name: 'Photosynthesis', class: '11th' }, { name: 'Respiration in Plants', class: '11th' }, { name: 'Plant Growth', class: '11th' }, { name: 'Breathing & Exchange', class: '11th' }, { name: 'Body Fluids & Circulation', class: '11th' }, { name: 'Excretory Products', class: '11th' }, { name: 'Locomotion & Movement', class: '11th' }, { name: 'Neural Control', class: '11th' }, { name: 'Chemical Coordination', class: '11th' },
        { name: 'Reproduction in Organisms', class: '12th' }, { name: 'Sexual Reproduction in Plants', class: '12th' }, { name: 'Human Reproduction', class: '12th' }, { name: 'Reproductive Health', class: '12th' }, { name: 'Principles of Inheritance', class: '12th' }, { name: 'Molecular Basis of Inheritance', class: '12th' }, { name: 'Evolution', class: '12th' }, { name: 'Human Health & Disease', class: '12th' }, { name: 'Microbes in Human Welfare', class: '12th' }, { name: 'Biotechnology: Principles', class: '12th' }, { name: 'Biotechnology Applications', class: '12th' }, { name: 'Organisms & Populations', class: '12th' }, { name: 'Ecosystem', class: '12th' }, { name: 'Biodiversity & Conservation', class: '12th' }
    ] }
  ]
};

export const generateAIMockQuestions = (params: any): { qs: QuestionType[], subs: string[] } => {
    const { selectedChapters = [], questionCount = 30, examType = 'Engineering', difficulty = 'Mixed' } = params;
    
    // Build a map of chapter to subject
    const chapterToSubject: Record<string, string> = {};
    const syllabusArray = SYLLABUS[examType] || SYLLABUS['Engineering'];
    syllabusArray.forEach((sub: any) => {
        sub.chapters.forEach((chap: any) => {
            chapterToSubject[chap.name] = sub.subject;
        });
    });

    const questions: QuestionType[] = [];
    const subjectsSet = new Set<string>();

    for(let i=0; i<questionCount; i++) {
        // Round robin pick from selected chapters
        const chapter = selectedChapters[i % selectedChapters.length] || 'General Concept';
        const subject = chapterToSubject[chapter] || 'Physics';
        subjectsSet.add(subject);

        const difficultyLabel = difficulty;

        questions.push({
            id: i + 1,
            subject: subject,
            type: 'MCQ',
            textEn: `[AI Simulated - ${difficultyLabel}] A conceptual problem based on ${chapter}. Given the physical parameters and theoretical boundary conditions related to ${chapter}, evaluate the correct inference from the options below.`,
            textHi: `[AI Simulated - ${difficultyLabel}] ${chapter} पर आधारित एक वैचारिक समस्या। ${chapter} से संबंधित भौतिक मापदंडों और सैद्धांतिक सीमा स्थितियों को देखते हुए, नीचे दिए गए विकल्पों में से सही निष्कर्ष का मूल्यांकन करें।`,
            options: [
                { id: 1, textEn: "Inference confirms positive correlation", textHi: "निष्कर्ष सकारात्मक सहसंबंध की पुष्टि करता है" },
                { id: 2, textEn: "System remains in invariant state", textHi: "प्रणाली अपरिवर्तनीय स्थिति में रहती है" },
                { id: 3, textEn: "Calculated magnitude deviates significantly", textHi: "परिकलित परिमाण काफी विचलित होता है" },
                { id: 4, textEn: "Fundamental laws are preserved universally", textHi: "मौलिक नियम सार्वभौमिक रूप से संरक्षित हैं" }
            ],
            correctOption: (i % 4) + 1
        });
    }

    // Sort questions by Subject so they group together appropriately
    const defaultOrder = examType === 'Medical' ? ['Physics', 'Chemistry', 'Biology'] : ['Physics', 'Chemistry', 'Mathematics'];
    
    questions.sort((a,b) => {
        return defaultOrder.indexOf(a.subject) - defaultOrder.indexOf(b.subject);
    });

    // Reassign IDs to be sequential
    questions.forEach((q, idx) => {
        q.id = idx + 1;
    });

    const activeSubjects = Array.from(subjectsSet).sort((a,b) => defaultOrder.indexOf(a) - defaultOrder.indexOf(b));

    // Fallback if no subjects
    if (activeSubjects.length === 0) activeSubjects.push('Physics');

    return { qs: questions, subs: activeSubjects };
};
