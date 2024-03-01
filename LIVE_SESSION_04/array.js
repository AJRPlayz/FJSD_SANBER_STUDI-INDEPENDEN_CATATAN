// ===== ARRAY METHOD =====
// Array Method merupakan method/function yang melekat pada array, yang memungkinkan kita untuk memanipulasi array




// 1. Array.isArray()
// Untuk mengecek apakah isi dari suatu variabel berupa array atau tidak
const students = ["Arjuna", "Edgar", "Michiko", "Adam"];
console.log(Array.isArray(students));

const cars = new Array("Avanza", "Rush", "Jazz");
console.log(Array.isArray(cars));

const name = "Arjuna";
console.log(Array.isArray(name));




// 2. Reverse
// Untuk membalik urutan elemen dalam sebuah array
const students2 = ["Arjuna", "Edgar", "Michiko", "Adam"];
console.log(students2.reverse());




// 3. Concat (Penggabungan)
// Untuk menggabungkan array
const students3 = ["Arjuna", "Edgar", "Michiko", "Adam"];
const cars3 = new Array("Avanza", "Rush", "Jazz");
console.log(students3.concat(cars));




// 4. Push
// Untuk menambahkan satu atau lebih elemen ke akhir array
const students4 = ["Arjuna", "Edgar", "Michiko", "Adam"];

// penambahan elemennya bisa dibuatkan dulu sebagai variable:
const murid4 = "Zabil";
students4.push(murid4);
// atau langsung method:
students4.push("Sofyan");

console.log(students4);




// 5. Pop
// Untuk menghapus elemen terakhir dalam sebuah array
// Menggunakan contoh dari PUSH, kita hapus elemen yang baru ditambahkan:
students4.pop(); //Maka, elemen "Sofyan" terhapus dari array
console.log(students4);
// Method ini dapat dilakukan beberapa kali untuk menghapus beberapa elemen dari akhir array.
students4.pop(); //Maka, elemen "Zabil terhapus dari array"
console.log(students4);




// 6. Shift
// Untuk menghapus elemen pertama dalam sebuah array
// Menggunakan contoh dari PUSH, kita hapus elemen paling pertama di array tersebut:
students4.shift(); //Maka, element "Arjuna" terhapus dari array
console.log(students4);
// Method ini dapat dilakukan beberapa kali untuk menghapus beberapa elemen dari awal array.
students4.pop(); //Maka, elemen "Edgar" terhapus dari array"
console.log(students4);




// 7. Splice
// Untuk menghapus elemen spesifik dalam array
const students7 = ["Arjuna", "Edgar", "Michiko", "Adam"];
console.log(students7);
// Format Splice:
    // array.splice(indeksAwal, jumlahElemenYangDihapus)
// Contoh:
    students7.splice(1,2)   //Maka akan menghapuskan elemen mulai dari String "Edgar" dan akan menghapus sebanyak 2 string berikutnya ("Edgar", "Michiko")
console.log(students7);
