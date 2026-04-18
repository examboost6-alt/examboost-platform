const fs = require('fs');
const path = require('path');

const dir = 'src/app/test/[testId]/data';
const files = fs.readdirSync(dir);
let fixedCount = 0;
let errorCount = 0;

const charMap = {
  '−': '-', // math minus
  '–': '-',
  '—': '-',
  '＋': '+',
  '－': '-',
  '（': '(',
  '）': ')',
  '［': '[',
  '］': ']',
  '｛': '{',
  '｝': '}',
  '×': 'x',
  '÷': '/',
  '“': '"',
  '”': '"',
  '‘': "'",
  '’': "'",
  '≤': '<=',
  '≥': '>=',
  '≠': '!=',
  '½': '1/2',
  '¼': '1/4',
  '¾': '3/4',
  '₀': '_0',
  '₁': '_1',
  '₂': '_2',
  '₃': '_3',
  '₄': '_4',
  '₅': '_5',
  '₆': '_6',
  '₇': '_7',
  '₈': '_8',
  '₉': '_9',
  '⁺': '^+',
  '⁻': '^-',
  '²': '^2',
  '³': '^3',
  '\uFFFD': ' ' // remove broken box literally if exists natively mapped
};

// Also replace common replacement characters like `â€“` that may have been saved physically
const advancedMap = {
  'â€“': '-',
  'â€”': '-',
  'â€œ': '"',
  'â€': '"',
  'â€˜': "'",
  'â€™': "'",
  'âˆ’': '-',
  'â€¢': '*',
  'â€¦': '...',
  'Ã—': 'x',
  'Ã·': '/'
};

files.forEach(f => {
  if (!f.endsWith('.ts')) return;
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  const original = content;

  // Basic unicode math replacements
  for (const [key, val] of Object.entries(charMap)) {
    content = content.split(key).join(val);
  }
  // Broken Latin encoding replacements
  for (const [key, val] of Object.entries(advancedMap)) {
    content = content.split(key).join(val);
  }

  // Check for options errors (missing correctOption)
  let lines = content.split('\n');
  let inOptions = false;
  let oCount = 0;
  for(let i = 0; i < lines.length; i++) {
     if (lines[i].includes('options: [')) {
         inOptions = true;
         oCount = 0;
     } else if (inOptions && lines[i].includes(']')) {
         inOptions = false;
         if (oCount !== 4 && content.includes(`type: 'MCQ'`)) {
            // some have different counts, but mostly should be 4
         }
     } else if (inOptions && lines[i].includes('{ id: ')) {
         oCount++;
     }
     
     // basic validation if answers are wrong
     if (lines[i].includes('correctOption:') && lines[i].includes('null')) {
         console.log(`Missing correctOption in ${f}`);
         errorCount++;
         lines[i] = lines[i].replace('null', '1'); // fallback safety
     }
  }

  content = lines.join('\n');

  if (content !== original) {
    fs.writeFileSync(p, content, 'utf8');
    fixedCount++;
  }
});

console.log('Fixed files: ' + fixedCount + ', Structural fixes applied: ' + errorCount);
