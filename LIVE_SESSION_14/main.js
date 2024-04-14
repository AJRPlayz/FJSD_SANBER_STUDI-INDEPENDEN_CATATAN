//  NPM MODULE SYSTEMS


// ===== PATH Module =====

const path  = require('path')   // IMPORT

// untuk mendapatkan nama filenya
console.log(path.basename(__filename));

// untuk mendapatkan nama folder/diretorinya
console.log(path.basename(__dirname));

// untuk mengetahui extensionnya
console.log(path.extname(__filename));

// untuk mendapatkan path lengkapnya file
console.log(path.join(__dirname));

// untuk mendapatkan path lengkapnya + tambahan path
console.log(path.join(__dirname, 'test1', 'hello.html'));




// ===== FS (File System) Module =====
// INGAT UNTUK JALANKAN PERINTAHNYA SATU - SATU/COMMENT UNTUK PERINTAH YANG SUDAH DIJALANKAN AGAR TIDAK TERBUAT ULANG FILE/FOLDER YANG SUDAH DIBUAT

const fs = require ('fs')   // IMPORT

// // untuk membuat folder baru (path, nama folder baru)
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err     //Jika ada error, tampilkan dan jangan dilanjutkan perintah selanjutnya (berhenti)
//     console.log('Folder berhasil dibuat');
// })

// // untuk membuat sebuah file baru (path, nama folder tujuan, nama file baru, isi file baru)
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello Sanber', err => {
//     if(err) throw err;
//     console.log('File berhasil dibuat');
// })

// // untuk membaca isi file (path filenya, format character, data file)
// fs.readFile(path.join(__dirname, '/test' , 'hello.txt'), 'utf-8', (err,data) => {
//     if(err) throw err;
//     console.log(data);
// })

// // Untuk merubah nama file (path + nama file yang akan diubah, path + nama file baru)
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello_sanber.txt'), err =>{
//     if(err) throw err;
//     console.log('Nama file berhasil diubah');
// })




// ===== OS (Operationg System) Module =====

const os = require('os')  // IMPORT

// untuk mengetahui platform yang digunakan perangkat
console.log(os.platform());

// untuk mengetahui bit yang digunakan perangkat
console.log(os.arch());

// untuk mengetahui informasi lengkap CPU perangkat
console.log(os.cpus());

// untuk mengetahui sisa free memory yang dimiliki perangkat
console.log(os.freemem());

// untuk mengetahui total memory yang dimiliki perangkat
console.log(os.totalmem());

// untuk mengetahui home directorynya
console.log(os.homedir());

// untuk mengetahui lama hidupnya perangkat
console.log(os.uptime());




// ===== HTTP Module =====
// Untuk membuat sebuah endpoint (URL)

// const http = require('http')   // IMPORT

// const server = http.createServer((req, res) => {
//     res.write('Hello SANBER')
//     res.end()
// })
// server.listen(3000, () => {
//     console.log('Server running in port 3000');
// })

// atau bisa digabung seperti:

const http = require('http')   // IMPORT

http.createServer((req, res) => {             
    res.write('Hello SANBER 100')             //Menulis "Hello SANBER 100 di server"
    res.end()
}).listen(3000, () => {
    console.log('Server running in port 3000');
})




// ===== THIRD-PARTY MODULE =====
// 1. NODEMON
// Module/package ini digunakan agar server yang telah distart akan terupdate secara otomatis perubahan2nya tanpa menghentikannya terlebih dahulu
// Cara menggunakan:
// Masukkan kode        "start": "node main" dan "dev": "nodemon main" di bagian script di package.json
// Ketik di terminal    "NPM run dev"




// 2. MOMENT
// Module/package digunakan untuk kelola tanggal dan waktu

const moment = require ('moment')   //Import

// Untuk mendapatkan waktu sekarang
const now = moment();
console.log(now);

// Untuk mendapatkan waktu sekarang dengan format tertentu
console.log(now.format('DD-MM-YYYY  hh:mm:ss'));

// Untuk mendapatkan waktu 7 hari setelah sekarang
const sevenDaysAfter = moment().add(7, 'days')
console.log(sevenDaysAfter.format('DD-MM-YYYY hh:mm:ss'));

// Untuk mendapatkan waktu 1 bulan setelah sekarang
const oneMonthAfter = moment().add(1, 'M')
console.log(oneMonthAfter.format('DD-MM-YYYY hh:mm:ss'));

// Untuk mendapatkan waktu 5 tahun setelah sekarang
const fiveYearsAfter = moment().add(5, 'years')
console.log(fiveYearsAfter.format('DD-MM-YYYY hh:mm:ss'));
