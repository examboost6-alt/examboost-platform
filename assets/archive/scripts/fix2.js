const fs = require('fs');

const files = [
    'src/app/exams/banking/page.tsx',
    'src/app/exams/cuet/page.tsx',
    'src/app/exams/engineering-entrance/page.tsx',
    'src/app/exams/law/page.tsx',
    'src/app/exams/mba/page.tsx',
    'src/app/exams/medical-entrance/page.tsx',
    'src/app/exams/police/page.tsx',
    'src/app/exams/railways/page.tsx',
    'src/app/exams/ssc-exams/page.tsx',
    'src/app/exams/state-psc/page.tsx',
    'src/app/exams/teaching/page.tsx',
    'src/app/exams/upsc-civil-services/page.tsx'
];

files.forEach(file => {
    if(!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Add the missing background and padding classes
    content = content.replace(/className="min-h-screen\s+w-full overflow-x-hidden"/g, 'className="min-h-screen bg-slate-50 dark:bg-[#020617] pt-20 md:pt-24 w-full overflow-x-hidden"');
    
    fs.writeFileSync(file, content);
});
console.log('Restored background classes');
