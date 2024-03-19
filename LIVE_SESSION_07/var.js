

// ===== VAR =====
// var merupakan deklarasi variabel dalam javascript, sebelum adanya ES6 var merupakan deklarasi umum yang sering digunakan.
// Disarankan untuk saat ini sebaiknya tidak menggunakan var dalam pengembangan perangkat lunak.



// Kekurangan Var:
// 1. Scope (Cakupan)
// Scope(cakupan) dari var adalah global scope atau function scope, jadi ketika mendeklarasikan variabel dengan menggunakan var, 
// variabel ini dapat diakses dimanapun.
// Contoh:
var nama = 'Dodi'                       // Global Scope = Bisa diakses dimanapun dalam module/file yang sama

function getName(){
    console.log(nama);                  // Function Scope = Bisa diakses di dalam function
}

console.log(nama);
getName()

// Namun, var tidak mendukung Block Scope (untuk blok If else)
// Contoh:
if (true){
    var a = 50;                         // Block Scope = Tidak dapat diakses diluar scope
}
console.log(a);
// Jadi, karena var tidak mendukung Block Scope, maka variable var dalam sebuah scope dapat diakses diluar scopenya
// Seharusnya, jika variable ditulis dalam sebuah scope, tidak dapat diakses diluar scope tersebut.




// 2. Redeklaration (Deklarasi Ulang)
// Var dapat dideklarasi ulang dan di update sesuka hati, var bisa menimpa value dari variable dengan nama yang sama.
// Contoh:
var nama2 = 'Dodi'
var nama2 = 'Kayis'
console.log(nama2);

// Bedanya dengan Reassign (biasa disebut menimpa juga):
let num = 10
num = 25 
console.log(num);




// 3. Hoisting (Mengangkat/Mendongkrak)
// Hoisting adalah perilaku di mana deklarasi variabel dan fungsi diangkat (di dongkrak) ke atas cakupan (scope),
// tempat mereka dideklarasikan sebelum kode dieksekusi.
// Contoh:
console.log(angka);                  // Normalnya variable dideklarasi terlebih dahulu sebelum dieksekusi
var angka = 15
// Walaupun outputnya undefined, namun tidak error. Bedanya dengan const:
console.log(angka1);
const angka1 = 20
// Auto error kalau pakai const atau let.

