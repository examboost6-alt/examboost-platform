const fs = require('fs');
const http = require('https');

async function translateText(text) {
    if (!text || text.trim() === '') return text;
    // URL encode the text
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=' + encodeURIComponent(text);
    
    return new Promise((resolve, reject) => {
        let retries = 3;
        const attempt = () => {
            http.get(url, (res) => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => {
                    try {
                        const parsed = JSON.parse(data);
                        let translated = '';
                        if (parsed && parsed[0]) {
                            parsed[0].forEach(item => { if (item[0]) translated += item[0]; });
                        }
                        resolve(translated || text);
                    } catch (e) {
                        if (retries > 0) {
                            retries--;
                            setTimeout(attempt, 3000);
                        } else {
                            resolve(text); // Fallback to original
                        }
                    }
                });
            }).on('error', (e) => {
                 if (retries > 0) {
                     retries--;
                     setTimeout(attempt, 3000);
                 } else {
                     resolve(text);
                 }
            });
        };
        attempt();
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function processMock(mockIndex) {
    const filePath = "d:/examboost/src/app/test/[testId]/data/neetMock" + mockIndex + ".ts";
    if (!fs.existsSync(filePath)) {
        console.log("File " + filePath + " not found");
        return;
    }

    console.log("Processing NEET Mock " + mockIndex + "...");
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract JSON part
    const arrayStart = content.indexOf('[', content.indexOf('='));
    const arrayEnd = content.lastIndexOf(']');
    
    if (arrayStart === -1 || arrayEnd === -1) {
        console.log('Could not find JSON array in file.');
        return;
    }
    
    const jsonStr = content.substring(arrayStart, arrayEnd + 1);
    let qList;
    try {
        qList = JSON.parse(jsonStr);
    } catch(e) {
        console.log('Error parsing JSON for Mock', mockIndex, e.message);
        return;
    }

    let modified = false;

    // We process sequentially to avoid triggering rate limit ban
    for (let i = 0; i < qList.length; i++) {
        let q = qList[i];
        
        let needsQTrans = q.textHi && (q.textHi.includes('(Hindi translated') || q.textHi === q.textEn);
        if (needsQTrans) {
            let trQ = await translateText(q.textEn);
            if (trQ !== q.textEn) {
                q.textHi = trQ;
                modified = true;
            }
            await delay(150); // increased delay to 150ms to manage rate limits
        }
        
        if (q.options) {
            for (let j = 0; j < q.options.length; j++) {
                let opt = q.options[j];
                // Simple English words like A, B, C, D don't need translation, but if it has more text:
                if (opt.textHi === opt.textEn && opt.textEn.length > 2) {
                     // For numerical answers, we might not strictly need Hindi translation, but let's do it safely
                     if (/[a-zA-Z]/.test(opt.textEn)) {
                         let trO = await translateText(opt.textEn);
                         if (trO !== opt.textEn) {
                             opt.textHi = trO;
                             modified = true;
                         }
                         await delay(100);
                     }
                }
            }
        }
        
        if (i > 0 && i % 25 === 0) {
            console.log("Normal Mock " + mockIndex + ": translated " + i + " questions so far...");
            // Extra delay checkpoint mapping
            await delay(1000); // Wait 1 second every 25 questions
        }
    }

    if (modified) {
        const outStr = "import { QuestionType } from '../mockData';\n\nexport const neetMock" + mockIndex + "Questions: QuestionType[] = " + JSON.stringify(qList, null, 2) + ";\n";
        fs.writeFileSync(filePath, outStr);
        console.log("Mock " + mockIndex + " successfully updated with Hindi translations!");
    } else {
        console.log("Mock " + mockIndex + " already fully translated or no changes needed.");
    }
}

async function run() {
    for (let idx = 1; idx <= 15; idx++) {
        await processMock(idx);
    }
    console.log("All normal mocks fully translated!");
}

run();
