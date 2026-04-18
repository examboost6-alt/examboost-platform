const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            filelist = fs.statSync(dirFile).isDirectory() ? walkSync(dirFile, filelist) : filelist.concat(dirFile);
        } catch (err) {
            if (err.code === 'ENOENT') {
                return;
            }
            throw err;
        }
    });
    return filelist;
};

const adminDir = path.join(__dirname, '../../src/app/admin');
const files = walkSync(adminDir).filter(f => f.endsWith('.tsx'));

const replacements = [
    { pattern: /text-blue-[456]00/g, replacement: 'text-primary' },
    { pattern: /bg-blue-[456]00/g, replacement: 'bg-primary' },
    { pattern: /border-blue-[456]00/g, replacement: 'border-primary' },
    { pattern: /ring-blue-[456]00/g, replacement: 'ring-primary' },

    { pattern: /text-indigo-[456]00/g, replacement: 'text-secondary' },
    { pattern: /bg-indigo-[456]00/g, replacement: 'bg-secondary' },
    { pattern: /border-indigo-[456]00/g, replacement: 'border-secondary' },
    { pattern: /ring-indigo-[456]00/g, replacement: 'ring-secondary' },

    { pattern: /text-purple-[456]00/g, replacement: 'text-accent' },
    { pattern: /bg-purple-[456]00/g, replacement: 'bg-accent' },
    { pattern: /border-purple-[456]00/g, replacement: 'border-accent' },
    { pattern: /ring-purple-[456]00/g, replacement: 'ring-accent' },
];

let changedFilesCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    replacements.forEach(r => {
        content = content.replace(r.pattern, r.replacement);
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        changedFilesCount++;
        console.log(`Updated colors in ${file}`);
    }
});

console.log(`Finished updating ${changedFilesCount} files.`);
