const fs = require('fs');
const path = require('path');

const seen = new Map();
const duplicates = [];

for (let i = 1; i <= 15; i++) {
    const filePath = path.join(__dirname, `src/app/test/[testId]/data/mock${i}.ts`);
    if (!fs.existsSync(filePath)) continue;
    
    const content = fs.readFileSync(filePath, 'utf8');
    
    const regex = /textEn:\s*(['"`])(.*?)\1|text:\s*(['"`])(.*?)\3/g;
    let match;
    let index = 0;
    while ((match = regex.exec(content)) !== null) {
        index++;
        let rawText = match[2] || match[4];
        if (!rawText) continue;
        let normalized = rawText.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (normalized.length > 5 && !normalized.includes('samplemcq') && !normalized.includes('placeholder')) {
            if (seen.has(normalized)) {
                duplicates.push({
                    text: rawText,
                    original: seen.get(normalized),
                    duplicate: `Mock ${i} Q~${index}`
                });
            } else {
                seen.set(normalized, `Mock ${i} Q~${index}`);
            }
        }
    }
}

fs.writeFileSync('duplicates_report.json', JSON.stringify(duplicates, null, 2));
console.log(`Found ${duplicates.length} duplicates.`);
