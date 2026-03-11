const https = require('https');
const fs = require('fs');
const path = require('path');

const logosDir = path.join(__dirname, 'public', 'logos');

if (!fs.existsSync(logosDir)){
    fs.mkdirSync(logosDir, { recursive: true });
}

const downloads = [
  { name: 'nta.png', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/National_Testing_Agency_logo.png/300px-National_Testing_Agency_logo.png' },
  { name: 'ssc.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Staff_Selection_Commission_Logo.svg/300px-Staff_Selection_Commission_Logo.svg.png' },
  { name: 'upsc.png', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/UPSC_Logo.svg/300px-UPSC_Logo.svg.png' },
  { name: 'ibps.png', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Institute_of_Banking_Personnel_Selection_logo.png/300px-Institute_of_Banking_Personnel_Selection_logo.png' },
  { name: 'rrb.png', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Indian_Railways_logo.svg/300px-Indian_Railways_logo.svg.png' }
];

downloads.forEach((file) => {
  const fileStream = fs.createWriteStream(path.join(logosDir, file.name));
  
  const req = https.get(file.url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) width/1920' },
      rejectUnauthorized: false
  }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
          console.log(`Redirecting ${file.name} to ${res.headers.location}`);
          https.get(res.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' }, rejectUnauthorized: false }, (redirectRes) => {
             redirectRes.pipe(fileStream);
          });
      } else {
          res.pipe(fileStream);
      }
      fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded ${file.name}`);
      });
  }).on('error', (err) => {
      console.log(`Error downloading ${file.name}: ${err.message}`);
  });
});
