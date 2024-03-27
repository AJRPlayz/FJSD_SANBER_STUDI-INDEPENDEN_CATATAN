
// ===== OBJECT ORIENTED PROGRAMMING (OOP) =====
// Object Oriented Programing adalah salah satu paradigma atau teknik atau cara dalam menulis program.
// Selain OOP, kita kenal juga paradigma pemrograman lain seperti procedural programing dan functional programing.



// OBJECT
// Untuk memahami OOP, terlebih dahulu kita harus mengerti mengenai objek itu sendiri.
// Kalau di javascript kita mengenal 2 jenis type data yaitu data primitif dan objek.
// Data primitif seperti string, number, boolean, null, undefined, dan symbol.
// Sedangkan objek adalah kumpulan data yang saling berhubungan.
// Yang mana data tersebut terdiri dari pasangan properti dan value/nilai.

// Contoh object:
const barang = {
  name: "Lenovo Thinkpad x230",     //(Properti = key: value)
  harga: 2300000,
  warna: "hitam",
  berat: "2 Kg",
};

// Kita disuruh untuk membuat 3 objek yang memiliki model atau bentuk yang sama, hanya berbeda value di setiap
// property atau methodnya. Solusi paling gampang tentu dengan membuat objeknya satu persatu. Seperti berikut:
const barang1 = {
  name: "Lenovo Thinkpad x230",
  harga: 2300000,
  warna: "hitam",
  berat: "2 Kg",
};

const barang2 = {
  name: "Asus ROG",
  harga: 12000000,
  warna: "merah",
  berat: "5 Kg",
};

const barang3 = {
  name: "Acer Predator",
  harga: 8500000,
  warna: "Hijau",
  berat: "3 Kg",
};

// Namun ini akan menjadi sebuah masalah bila kita di suruh membuat objek yang jumlahnya puluhan atau ratusan.
// Sehingga solusi terbaik adalah dengan menggunakan method object.create()


// OBJECT.CREATE()
// Metode Object.create() adalah cara untuk membuat objek baru dengan prototipe tertentu.
// Ini seperti blueprint yang dibuat terlebih dahulu untuk menerapkan sebuah pola.
// Ini adalah salah satu cara untuk menerapkan pola pewarisan (inheritance) dalam JavaScript.

// Contoh penggunaan method tersebut:
const item = {                            // Ini Blueprintnya
  name: "Asus ROG Strix",
  price: 14000000,
  color: "red",
  weight: "5 Kg",
  showPrice: function () {
    console.log(`Harga ${this.name} adalah Rp.${this.price}.`);
  },
};

const item1 = Object.create(item);        // Ini Instancenya
item1.showPrice();

// Namun, jika mau membuat data untuk item lain dengan values yang berbeda, maka dibuat seperti berikut:
const item2 = Object.create(item, {       // Ini juga instancenya
  name: { value: "Acer Predator X" },
  price: { value: 12500000 },
  color: { value: "green" },
  weight: { value: "3 Kg" },
});
item2.showPrice();



// CLASS
// Class adalah salah satu fitur baru yang diperkenalkan di javascript versi 2015 atau ES6.
// Class seperti versi terbaru dari object.create
// Fitur class menyediakan syntax yang lebih sederhana dan rapi untuk membuat blueprint sebuah objek.
// Perlu dicatat bahwa di javascript, class sebenarnya adalah sebuah function namun dengan sintax yang berbeda.

// Contoh penggunaan kelas:
class Handphone {             // Ini blueprint (Disarankan untuk nama class diawali huruf kapital setiap kata)
  constructor(nama, harga, warna, berat) {
    this.nama = nama;
    this.harga = harga;
    this.warna = warna;
    this.berat = berat;
  }
  tampilHarga() {
    console.log(
      `Harga ${this.nama} dengan warna ${this.warna} dan berat ${this.berat} adalah Rp. ${this.harga}`
    );
  }
}

const Handphone1 = new Handphone(   // Ini instancenya
  "Samsung Galaxy S25",
  25000000,
  "Biru Tua",
  "0.5 kg"
);
Handphone1.tampilHarga();

const Handphone2 = new Handphone(   // Ini juga instancenya untuk handphone baru
  "Iphone 15",
  27000000,
  "Merah muda",
  "0.2 kg"
);
Handphone2.tampilHarga();



// KEYWORD THIS
// This adalah sebuah keyword khusus yang merujuk pada objek pemiliknya.
// Maksudnya adalah nilai dari this sangat bergantung pada di mana keyword this ini diletakkan atau di panggil. 
// Jika this digunakan dalam sebuah method maka ia merujuk pada objek pemiliknya.
// Dalam kasus function constructor dan class maka keyword this ini mengacu pada objek instannya.


// ===== Berikut adalah keempat pilar utama OOP: =====
// 1. ENCAPSULATION
// Encapsulation atau enkapsulasi adalah cara untuk membatasi akses langsung ke properti atau method dari 
// sebuah objek. Enkapsulasi mencakup gagasan bahwa data(property atau method) suatu objek tidak boleh langsung 
// diekspos. Selain definisi di atas, enkapsulasi juga berarti membungkus property dan method dalam satu 
// unit/function.

// Contoh Encapsulation menggunakan metode object.create:
const ongkir = {
  pajak: 500,
  berat: 0,       // defaultnya 0
  biaya: function(){
    return this.berat * 1000;
  },
  totalBiaya: function (){
    return console.log(this.biaya() + this.pajak);
  }
}

const buku = Object.create(ongkir, {
  berat: {value: 3}    // Beratnya object buku adalah 3 kg              
})

// Perannya Encapsulation, agar segala properti atau metode dalam sebuah objek tidak diubah.
// Seperti ini:
buku.pajak = 1000
// Dengan perubahan ini, maka untuk object buku, blueprint pajaknya beda dari object ongkir

buku.totalBiaya()  //tampilkan total biayanya



// 2. INHERITANCE
// Inheritance dalam OOP adalah sebuah proses dimana sebuah class mewariskan property dan methodnya 
// ke class lain atau child nya.
// Sehingga terdapat parent class dan child class.

// Contoh Inheritance:
// Parent Class
class Animal {
  constructor(nama, habitat, umur){
    this.nama = nama
    this.habitat = habitat
    this.umur = umur
  }

  tidur(){
    console.log(`Hewan ${this.nama} yang berumur ${this.umur} bulan sedang tertidur.`);
  }

  makan(){
    console.log(`Hewan ${this.nama} yang berumur ${this.umur} bulan sedang makan.`);
  } 

  berjalan(){
    console.log(`Hewan ${this.nama} sedang berjalan di ${this.habitat}.`);
  }

}

// Child Class
class Ikan extends Animal {                 // Menghubungkan dengan parent class Animal.
  constructor (nama, habitat, umur){        // Sehingga class Ikan memiliki akses dari property dan method
    super(nama, habitat, umur)              // parent class, yaitu class Animal.
  }

  berenang(){
    console.log(`Hewan ${this.nama} sedang berenang di ${this.habitat}.`);
  }

  makan(){   //Contoh Polymorphism
    console.log(`Hewan ${this.nama} sedang makan ikan lebih kecil.`);
  }

}

const ikanPaus = new Ikan("Ikan Paus", "Air", 12) // Instancenya
ikanPaus.tidur()  //Memanggil method dari parent class
ikanPaus.berenang()   //Memanggil method dari child class sendiri
ikanPaus.makan()  //Method yang terpanggil adalah method yang berada di child class, bukan parent class.

// Child Class lain
class Unta extends Animal {
  constructor(nama, habitat, umur){
    super(nama, habitat, umur)
  }
  
  makan(){   //Contoh Polymorphism
    console.log(`Hewan ${this.nama} sedang makan rumput.`);
  }

}

const untaArab = new Unta ("Unta Arab", "Gurun", 24) // Instancenya
untaArab.berjalan()  //Memanggil method dari parent class
untaArab.makan()  //Method yang terpanggil adalah method yang berada di child class, bukan parent class.



// 3. POLYMORPHISM
// Dari asal katanya, poly berarti banyak dan morphe berarti bentuk.
// Dengan kata lain polymorphism berarti banyak bentuk.
// Polymorphism adalah kemampuan untuk membuat variabel, fungsi, atau objek yang memiliki banyak bentuk.

// Contohnya polymorphism bisa dilihat kembali di contoh Inheritance.
// Terdapat 2 macam method makan() di atas. Method dari parent class dan method dari masing2 child class.
// Namun method yang terpanggil merupakan method yang dibuat di child class masing2 walaupun nama methodnya sama
// dengan method di parent classnya.
// Sehingga, ini contoh bahwa pada satu bentuk (method makan()), isinya bisa beda.



// ABSTRACTION
// Abstraction adalah sebuah teknik untuk menyembunyikan detail tertentu dari sebuah objek 
// dan hanya menampilkan fungsionalitas atau fitur penting dari objek tersebut.

// 4. Analoginya:
// Kita analogikan seperti ini.
// Setiap hari kita berangkat ke kantor dengan mengendarai mobil pribadimu.
// Kita sebenarnya tidak perlu tahu bagaimana mesin mobil itu bekerja sampai membuat mobilnya bisa bergerak, 
// atau bagaimana sistem pembakaran dalam mesinnya, atau apa yang terjadi di dalam mesin ketika kita menginjak 
// pedal gas.
// Kita tidak perlu tahu semua itu.
// Yang perlu kita tahu adalah cara menyalakan mobil dan tau cara menyetir.

