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
    if (testId.includes('test-1')) return neetMock1Questions;
    if (testId.includes('test-2')) return neetMock2Questions;
    if (testId.includes('test-3')) return neetMock3Questions;
    if (testId.includes('test-4')) return neetMock4Questions;
    if (testId.includes('test-5')) return neetMock5Questions;
    return neetFallbackGen;
};
