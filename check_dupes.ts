import { mock1Questions } from './src/app/test/[testId]/data/mock1';
import { mock2Questions } from './src/app/test/[testId]/data/mock2';
import { mock3Questions } from './src/app/test/[testId]/data/mock3';
import { mock4Questions } from './src/app/test/[testId]/data/mock4';
import { mock5Questions } from './src/app/test/[testId]/data/mock5';
import { mock6Questions } from './src/app/test/[testId]/data/mock6';
import { mock7Questions } from './src/app/test/[testId]/data/mock7';
import { mock8Questions } from './src/app/test/[testId]/data/mock8';
import { mock9Questions } from './src/app/test/[testId]/data/mock9';
import { mock10Questions } from './src/app/test/[testId]/data/mock10';
import { mock11Questions } from './src/app/test/[testId]/data/mock11';
import { mock12Questions } from './src/app/test/[testId]/data/mock12';
import { mock13Questions } from './src/app/test/[testId]/data/mock13';
import { mock14Questions } from './src/app/test/[testId]/data/mock14';
import { mock15Questions } from './src/app/test/[testId]/data/mock15';

const allMocks = [
    mock1Questions, mock2Questions, mock3Questions, mock4Questions, mock5Questions,
    mock6Questions, mock7Questions, mock8Questions, mock9Questions, mock10Questions,
    mock11Questions, mock12Questions, mock13Questions, mock14Questions, mock15Questions
];

const seen = new Map<string, string>();
const duplicates: any[] = [];

allMocks.forEach((mock, index) => {
    const mockNum = index + 1;
    if (!mock) return;
    mock.forEach((q, qIndex) => {
        let text = q.textEn || (q as any).text || '';
        const normalizedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        if (normalizedText.length > 5 && !normalizedText.includes('samplemcqquestionnumber') && !normalizedText.includes('placeholder')) {
            if (seen.has(normalizedText)) {
                duplicates.push({ 
                    text: text, 
                    original: seen.get(normalizedText), 
                    duplicate: `mock${mockNum}.ts Q${qIndex + 1} (${q.subject})` 
                });
            } else {
                seen.set(normalizedText, `mock${mockNum}.ts Q${qIndex + 1} (${q.subject})`);
            }
        }
    });
});

import * as fs from 'fs';
fs.writeFileSync('duplicates_report.json', JSON.stringify(duplicates, null, 2));
console.log(`Found ${duplicates.length} duplicates. Report saved.`);
