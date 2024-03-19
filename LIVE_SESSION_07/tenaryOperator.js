
// ===== TERNARY OPERATOR =====
// Ternary operator adalah operator yang digunakan untuk membuat ekspresi kondisional dengan sintaks yang ringkas. 
// Operator ini memungkinkan kita untuk menentukan nilai berdasarkan suatu kondisi dengan menggunakan format condition ? expr1 : expr2.
// Ternary operator ini juga termasuk ES Module

// Contoh 1:
const age = 25;
const message = age >= 18 ? "Dewasa" : "Anak - anak"
console.log(message);

// Contoh 2:
const num = 11
const result = num %2 === 0 ? "Bilangan Genap" : "Bilangan Ganjil" 
console.log(result);

// Contoh 3:
const angka = -4
const hasil = angka > 0 ? "Bilangan Positif" : angka < 0 ? "Bilangan Negatif" : "";
console.log(hasil);
