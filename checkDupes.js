const fs = require('fs');
const path = require('path');

const dir = 'src/app/test/[testId]/data';
const mockFiles = Array.from({length: 15}, (_, i) => "neetMock" + (i+1) + ".ts");
const intensiveFiles = Array.from({length: 5}, (_, i) => "neetIntensiveMock" + (i+1) + ".ts");
const allFiles = [...mockFiles, ...intensiveFiles];

let allQuestions = [];

allFiles.forEach(file => {
    const fullPath = path.join(dir, file);
    if (!fs.existsSync(fullPath)) return;
    
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Instead of regex matchAll which can be tricky, extract using index:
    let idx = content.indexOf('"textEn":');
    let qNumber = 1;
    while(idx !== -1) {
       let startQuote = content.indexOf('"', idx + 9);
       let qText = "";
       if (content[idx + 9] === ' ' && content[idx + 10] === '"') {
            let nextLine = content.indexOf('",', idx);
            if (nextLine > idx) {
                qText = content.substring(idx + 11, nextLine).trim();
            }
       }
       if (qText) {
          let cleanText = qText.replace(/\s+/g, ' ').trim().toLowerCase();
          allQuestions.push({ file, qText: cleanText, id: qNumber });
       }
       qNumber++;
       idx = content.indexOf('"textEn":', idx + 10);
    }
});

let duplicates = {};
allQuestions.forEach(q => {
    if(!duplicates[q.qText]) duplicates[q.qText] = [];
    duplicates[q.qText].push(q);
});

let dupeCount = 0;
for(let key in duplicates) {
    if(duplicates[key].length > 1 && key.length > 5) {
        dupeCount++;
        // console.log("Duplicate:", key.substring(0, 50), "in", duplicates[key].map(d => d.file));
    }
}
console.log('Total Duplicate Questions Found:', dupeCount);

let fileCounts = {};
allFiles.forEach(f => fileCounts[f] = 0);
allQuestions.forEach(q => fileCounts[q.file]++);
console.log(fileCounts);
