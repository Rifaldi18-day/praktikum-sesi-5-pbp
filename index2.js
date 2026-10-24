const os = require('os');
console.log("Nama User      :", os.userInfo().username);
console.log("Platform       :", os.platform());
console.log("total memori   :", os.totalmem());

const url = require('url');
let alamat = 'https://www.example.com/search?keyword=nodejs';
let parsed = url.parse(alamat, true);
console.log("Kata kunci pencarian :", parsed.query.keyword);

/* 
  PENJELASAN HASIL RUNNING (node index2.js):
  1. Modul 'os':
     - os.userInfo().username -> Menampilkan nama user Windows yang aktif, yaitu "Shinta A".
     - os.platform()          -> Menampilkan jenis sistem operasi, yaitu "win32" (untuk Windows).
     - os.totalmem()          -> Menampilkan total kapasitas RAM komputer dalam satuan bytes.
  
  2. Modul 'url':
     - url.parse(alamat, true)-> Mengubah string URL mentah menjadi objek JavaScript agar bagian-bagiannya mudah diakses.
     - parsed.query.keyword   -> Mengambil nilai dari parameter pencarian (query) di dalam URL, yang menghasilkan string "nodejs".
*/