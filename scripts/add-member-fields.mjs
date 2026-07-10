import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const departmentsDir = path.join(__dirname, '../src/content/departments');

// Field baru yang mau lo tambahin ke setiap member
const NEW_FIELDS = {
  instagramUsn: "",
  instagramUrl: "",
  // tambah field lain di sini kalau ada
};

const files = fs.readdirSync(departmentsDir).filter(f => f.endsWith('.json'));

for (const file of files) {
  const filePath = path.join(departmentsDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Loop tiap member dan tambahin field baru kalau belum ada
  data.members = data.members.map(member => {
    for (const [key, defaultValue] of Object.entries(NEW_FIELDS)) {
      if (!(key in member)) {
        member[key] = defaultValue;
      }
    }
    return member;
  });

  // Tulis ulang file dengan format yang rapi
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(`✅ Updated: ${file}`);
}

console.log('🎉 All files updated!');