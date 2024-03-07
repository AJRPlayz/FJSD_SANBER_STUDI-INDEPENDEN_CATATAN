// FUNCTION merupakan blok kode yang dirancang untuk melakukan tugas tertentu yang dapat dipanggil(dijalankan) di berbagai bagian dari program. Satu function bisa digunakan blok kode yang lain atau file yang lain.
// Biasa digunakan untuk mengorganisir kode menjadi bagian - bagian yang lebih kecil dan lebih mudah dikelola, reusable, dan mudah di maintanance.




// === FUNCTION DECLARATION ===
// Kata kuncinya : Diawali dengan Function
// Caranya:
// 1. Bikin functionnya
function sayHello() {
  console.log("Hello Gaiss");
}

// 2. Call functionnya
sayHello();

// Function yang sama dapat dicall beberapa kali
sayHello();
sayHello();




// === FUNCTION EXPRESSION ===
// Kata kuncinya : Dibuat variabelnya terlebih dahulu
// Caranya:
// 1.Buat variablenya sebelum function
const add = function () {
  console.log(3 + 4);
};
// 2. Call functionnya
add();





// === ARGUMEN DAN PARAMETER ===
// Argumen dan Parameter digunakan agar suatu function bisa dipakai berulang2 tanpa menulis ulang functionnya.
// Contoh (Menggunakan Function Decleration):
function addition(angka1, angka2) {
  //angka1 dan angka2 sebagai argumen
  console.log(angka1 + angka2);
}

addition(5, 4); //5 dan 4 sebagai contoh parameter

// Maka, dengan argumen dan parameter, function addition() dapat digunakan berkali2 dengan paramater berbeda tanpa membuat ulang function baru.

addition(10, 3);
addition(15, 68);
addition(107, 95);

// CATATAN: JUMLAH ARGUMEN HARUS SAMA DENGAN JUMLAH PARAMETER

// Contoh:
function subtraction(angka1, angka2, angka3, angka4, angka5) {
  // Terdapat 5 Argumen
  console.log(angka1 - angka2 - angka3 - angka4 - angka5);
}

subtraction(100, 46, 21, 10, 5); // Terdapat 5 parameter



// Contoh Argumen dan Parameter menggunakan STRING
function greetings(name) {
  console.log("Hello " + name + ". How are you today?");
}
greetings("Arjuna");
greetings("Andre");
greetings("Wira");



// Contoh Argumen dan Parameter menggunakan ARRAY
// 1. Buat Arraynya terlebih dahulu
const siswa = ["Noel", "Samban", "Putra", "Bryan", "Barney"];
// 2. Buat function dengan perulangan dalam statementnya untuk memanggil index arraynya
function helloStudents(students) {
  for (const student of students) {
    console.log("Hello " + student + ". What's up?");
  }
}
// 3.Call functionnya dengan parameter nama array
helloStudents(siswa);

// Function yang sama dapat memanggil lebih dari 1 array
const siswa2 = ["Michiko", "Edgar", "Adam", "Zabil", "Sofyan"];
helloStudents(siswa2);





// === RETURN VALUE ===
// Return Value adalah hasil yang akan kita balikkan
// Untuk mengembalikan hasil nilai
// Contoh:
// 1. Buat function
function penjumlahan(num1, num2) {
  console.log(num1 + num2);    // console.log digunakan untuk sekedar menampilkan hasil function
  return num1 + num2;      // return digunakan agar nilai hasil functionnya dapat digunakan kembali (Tapi tidak menampilkan hasil masing2 function)
}                          // Bisa digunakan salah satunya aja diantara console.log dan return
// 2. Jika dicall functionnya untuk menampilkan
penjumlahan(5,6);
penjumlahan(6,4);

// 3. Jika nilai hasil functionnya akan digunakan kembali untuk variabel lain:
const hasil = penjumlahan(5, 6) + penjumlahan(6,4);
//                    11        +        10
console.log(hasil);





// === OBJECT METHOD ===
// Selain Property, di dalam object juga dapat terdapat METHOD, yakni sebutan untuk Function.
// Penulisannya sangat mirip dengan function biasa yang telah dibahas sebelumnya, yakni Function Expression.

// Contoh:
const student = {               //objectnya
  name: 'Dodi',                    
  email: 'dodi@gmail.com',
  sayHello: function() {
    console.log("Hello " + this.name +"!");     //Method ini untuk memanggil property name yang ada pada object student
  }
}

student.sayHello()

// Contoh diatas bisa dibuat ulang dengan value berbeda pada propertynya
const student2 = {
    name: 'Andi',
    email: 'andi@gmail.com',
    sayHello: function() {
      console.log("Hello " + this.name+ "!");
    }
}

student2.sayHello()       //nama object yang dipanggil harus sesuai



// Adapun Method yang udah Built-in di Javascript:
console.log(student.name.toLowerCase());              //untuk mengubah value jadi huruf kecil semua
console.log(student.name.toUpperCase());              //untuk mengubah value jadi huruf besar semua



// Membuat Method dalam object dengan PARAMETER
const calculator = {
  penjumlahan: function(a,b){                //Parameternya adalah a dan b
    return a + b                             //Menggunakan return agar hasil functionnya dapat digunakan lagi
  },
  pengurangan: function(a,b){
    return a - b
  }
}
console.log(calculator.penjumlahan(5,7));    // Untuk menampilkan hasil function penjumlahan dari object calculator
console.log(calculator.pengurangan(10,7));    // Untuk menampilkan hasil function pengurangan dari object calculator

console.log(calculator.penjumlahan(15,5) - calculator.pengurangan(17,7));    //Penggunaan ulang function penjumlahan dan pengurangan karena Return





// NESTED OBJECT
let person= { 
  name: "John",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "New York",
    country: "USA"
  }
}
// Maka untuk menampilkan seluruh properti address John:
console.log(person.address);

// Untuk menampilkan hanya nama jalannya address John:
console.log(person.address.street);

// Untuk menampilkan hanya nama negaranya address John:
console.log(person.address.country);

