
// ===== MODULE =====
// JavaScript Module adalah cara untuk memecah kode menjadi bagian-bagian yang terpisah dan independen, 
// yang masing-masing memiliki cakupan (scope) sendiri. 
// Modular = KIS (Keep It Simple) = Readable

// Contoh:

// a. Function Biasa:
function sayHello(nama){
    return console.log('Hello ' + nama);
}

sayHello('Arjuna')


// b. CommonJS Module                                //PENTING: Untuk menjalankan commonJS Module, tidak boleh ada "type : module" di package.json
const sayHi = require('./getName')                     
sayHi('Junjun')


// c. ES Module
import sayHowdy from './getName.js';                 //PENTING: Untuk menjalankan ES Module, harus ada "type : module" di package.json
sayHowdy('Junong')




// MAKA, CommonJs Module dan ES Module tidak bisa berjalan bersama karena butuh diubah settingan package.json sesuai dengan masing2 module.
// package.js dapat diakses dengan mengetik "npm init -y" di Terminal