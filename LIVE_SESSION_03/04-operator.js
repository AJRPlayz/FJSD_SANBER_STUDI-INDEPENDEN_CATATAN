// ===== ARITMATIKA =====
//PENJUMLAHAN
console.log(2 + 2);
// or
const angkaPertama = 2;
const angkaKedua = 3;

console.log(angkaPertama + angkaKedua);

//PENGURANGAN
console.log(2 - 2);
// or
const angkaFirst = 2;
const angkaSecond = 3;

console.log(angkaFirst - angkaSecond);

//PERKALIAN
console.log(2 * 2);
// or
const angkaOne = 2;
const angkaTwo = 3;

console.log(angkaOne * angkaTwo);

//PEMBAGIAN
console.log(6 / 2);
// or
const angkaSatu = 2;
const angkaDua = 3;

console.log(angkaSatu / angkaDua);

//MODULUS/MODULO
// ==> modulus adalah sisa bagi

console.log(10 % 4); //4 dikali berapa yang terdekat sebelum 10
//==================== 4 x 2 = 8. Lalu, 10 - 8 = 2
// or
let sisa = 15 % 4;
console.log(sisa);
// or
const angka1 = 19;
const angka2 = 7;

console.log(angka1 % angka2);

// contoh modulus
const angka = 15;

if (angka % 2 === 0) {
  console.log(angka + " merupakan bilangan genap");
} else {
  console.log(angka + " merupakan bilangan ganjil");
}

// ===== INCREMENT DAN DECREMENT =====
//INCREMENT = ++
// contoh:
let umurIbu = 40;
umurIbu++; //umurIbu + 1
console.log(umurIbu);

//DECREMENT = --
// contoh:
let umurAyah = 45;
umurAyah--; //umurAyah - 1
console.log(umurAyah);

// ===== OPERATOR PERBANDINGAN =====
//SAMA DENGAN (==)
console.log(20 == 20); //menentukan pernyataannya true or false

//TIDAK SAMA DENGAN (!=)
console.log(20 != 20); //menentukan pernyataannya true or false

//KURANG DARI (<)
console.log(20 < 25); //menentukan pernyataannya true or false

//LEBIH DARI (>)
console.log(20 > 25); //menentukan pernyataannya true or false

// ===== OPERATOR STRING (Concat)=====
//==> Menggabungkan 2 string atau lebih, biasa disebut operator concatenation atau concat (+)
console.log("Arjuna" + " " + "Ribal");


