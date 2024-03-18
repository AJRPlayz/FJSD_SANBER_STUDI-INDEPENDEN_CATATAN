
// ===== HIGH ORDER FUNCTION =====
// Metode/Function - function built-in dalam JavaScript.



// 1. map()
// Digunakan untuk membuat array baru dengan hasil pemanggilan fungsi tertentu pada setiap elemen array yang diberikan. 
// Contoh : Membuat array baru dimana array baru merupakan kelipatan dua dari angka array awal.
// a. Contoh tanpa map:
const numbers = [1,2,3,4,5]           //array awal
const doubled = []                    //array baru

for(i=0;i<numbers.length;i++){
    doubled.push(numbers[i]*2)        //Memasukkan setiap elemen array numbers ke dalam array doubled, tapi dikali 2 setiap elemen terlebih dahulu
}
console.log(doubled);

// b. Contoh dengan map:
const numbers2 = [1,2,3,4,5]
const doubled2 = numbers.map(num => num * 2);
console.log(doubled2);



// 2. filter()
// Digunakan untuk membuat array baru yang berisi elemen-elemen dari array awal yang melewati kondisi yang diberikan.
// Fungsi yang diteruskan ke dalam filter() mengembalikan true atau false, dan hanya elemen-elemen yang mengembalikan true yang akan dimasukkan ke dalam array baru.
// Contoh : Membuat array baru dimana array baru merupakan angka genap dari array awal.
// a. Contoh tanpa filter:
const numbers3 = [1,2,3,4,5,6]        //array awal
const evenNumbers = []                //array baru

for(i=0;i<numbers3.length;i++){
    if(numbers3[i]%2 === 0){
        evenNumbers.push(numbers3[i]) //Memasukkan setiap elemen array numbers3 ke dalam array evenNumbers, tapi dimodulo 2 = 0 setiap elemen terlebih dahulu, untuk mendapatkkan angka genapnya
    }
}
console.log(evenNumbers);

// b. Contoh dengan filter:
const numbers4 = [1,2,3,4,5,6]
const evenNumbers2 = numbers4.filter(angka => angka % 2 === 0);
console.log(evenNumbers2);



// 3. forEach()
// Digunakan untuk melakukan iterasi melalui setiap elemen dalam array dan menjalankan fungsi yang diberikan pada setiap elemen tersebut.
// Contoh:
const number5 = [1,2,3,4,5]
number5.forEach(num => console.log(num));



// 4. reduce()
// Digunakan untuk mereduksi (menggabungkan / menyatukan) elemen-elemen dalam array menjadi satu nilai tunggal, dengan menjalankan fungsi reducer pada setiap elemen array.
const number6 = [1,2,3,4,5]
const sum = number6.reduce((hasil,angka) => hasil + angka, 0)      // 0 = initial value/hasil. Jika initial valuenya 1, makanya hasil = 1
// logika loopingnya
// angka 0 sebagai awal hasil dan setiap elemen dimasukkan ke angka
// maka, jadinya:
// sum = hasil + angka
// sum =   0   +   1       (Untuk elemen pertama)
// sum =   1   +   2       (Untuk elemen kedua)
// sum =   3   +   3       (Untuk elemen ketiga)
// sum =   6   +   4       (Untuk elemen keempat)
// sum =   10  +   5       (Untuk elemen kelima)
// sum =       15
console.log(sum);



// 5. find()
// Digunakan untuk mencari elemen pertama dalam array yang memenuhi kondisi yang diberikan.
// a. Contoh tanpa find();
const students = [
    { id:1, nama:"John", umur:20},
    { id:2, nama:"Alice", umur:22},
    { id:3, nama:"Bob", umur:21},
    { id:4, nama:"Jane", umur:23}
];
let findStudent;                             //Gunakan let karena const harus dideclerasi
for (i=0;i<students.length; i++){
    if(students[i].nama === "Alice"){
        findStudent = students[i]
        break
    }
}
console.log(findStudent);

// b. Contoh dengan find()
const students2 = [
    { id:1, nama:"John", umur:20},
    { id:2, nama:"Alice", umur:22},
    { id:3, nama:"Bob", umur:21},
    { id:4, nama:"Jane", umur:23}
];
const findStudent2 = students2.find(siswa => siswa.nama === 'Bob');
console.log(findStudent2);

