const fs = require('fs');
const path = require('path');

const dir = 'src/app/test/[testId]/data';
const files = fs.readdirSync(dir);
let fixedCount = 0;

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
  '“': "'", // FIXED: Use single quotes to prevent breaking "text"
  '”': "'", // FIXED: Use single quotes
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
  '\uFFFD': ' ' 
};

const advancedMap = {
  'â€“': '-',
  'â€”': '-',
  'â€œ': "'",
  'â€ ': "'",
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

  for (const [key, val] of Object.entries(charMap)) {
    content = content.split(key).join(val);
  }
  for (const [key, val] of Object.entries(advancedMap)) {
    content = content.split(key).join(val);
  }

  // Double check we don't have broken quotes
  // We don't try to manually regex correctOptions null here if it wasn't an issue.
  
  if (content !== original) {
    fs.writeFileSync(p, content, 'utf8');
    fixedCount++;
  }
});

console.log('Fixed files: ' + fixedCount);
