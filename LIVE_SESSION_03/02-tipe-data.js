/*Tipe data terdiri atas primitive (String, Number, Boolean, Null, Undefined)
   dan object (array dan object)
*/

// ==== TIPE DATA PRIMITIVE ====

//STRING
// ==> string bisa menggunakan kutip 1 ('') ataupun ketip 2 ("").
const namaDepan = "Arjuna";
const namaBelakang = "Ribal";

console.log(namaDepan);
console.log(namaBelakang);

//NUMBER
const angka = 10;
const umur = 25;

console.log(angka);
console.log(umur);

//BOOLEAN
//  ==> tipe data yang valuenya hanya true atau false
const sudahMenikah = true;
const apaJomblo = false;
const isRetired = false;

console.log(sudahMenikah);
console.log(apaJomblo);
console.log(isRetired);

//NULL
//  ==> tipe data yang valuenya secara sengaja diassign/ditulis oleh si coder

//bulan pertama
let ipkSemester6 = null;

//bulan keenam
ipkSemester6 = 3;

console.log(ipkSemester6);

//UNDEFINED
// ==> tipe data ini termasuk kesalahan program
// console.log(tahun);

// ==== TIPE DATA OBJECTIVE ====

//ARRAY
// ==> memakai keyword [], dan valuenya dipisah dengan coma ","
// ==> diuurutkan mulai dari 0
// const siswa = ["Arjuna", "Edgar", "Michiko"];
// console.log(siswa);

const siswa = ["Arjuna", "Edgar", "Michiko"];
console.log(siswa[1]);

// const siswa2 = ["Arjuna Ribal", 20, "Pare pare", true];
// console.log(siswa2);

const siswa2 = ["Arjuna Ribal", 20, "Pare pare", true];
console.log(siswa2[2]);

// OBJECT
// ==> kita tulis pake keyword bracket "{}"
// object terdiri atas beberapa properti (terdiri atas key dan value)
// object itu adalah pasangan antar key dan value

const mahasiswa = {
  nama: "Arjuna",
  jurusan: "Sistem Informasi",
  email: "arjuna.ribal@gmail.com",
  umur: 20,
  isGraduated: true,
};

console.log(mahasiswa);

// Untuk mencari properti yang spesifik dalam sebuah object:
console.log(mahasiswa.jurusan);
console.log(mahasiswa.umur);

// MENGGABUNGKAN OBJECT DENGAN ARRAY
// ==> Jika kita mau membuat 100 atau 1000 data mahasiswa, kita gak perlu membuat nama variable baru di setiap mahasiswanya

const students = [
  {
    nama: "Arjuna",
    jurusan: "Sistem Informasi",
    email: "arjuna.ribal@gmail.com",
    umur: 20,
    isGraduated: true,
  },
  {
    nama: "Edgar",
    jurusan: "Sistem Informasi",
    email: "edgar.silvanus@gmail.com",
    umur: 21,
    isGraduated: true,
  },
  {
    nama: "Michiko",
    jurusan: "Sistem Informasi",
    email: "michiko.tjiang@gmail.com",
    umur: 19,
    isGraduated: false,
  },
];

console.log(students);

// Saat mau akses salah satu object dalam arraynya:
console.log(students[2]);

// Saat mau akses salah satu properti dalam object dalam array:
console.log(students[1].email);

// Cara mengecek tipe data:
console.log(typeof students);
console.log(typeof angka);