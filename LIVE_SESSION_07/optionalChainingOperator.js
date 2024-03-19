
// ===== OPTIONAL CHAINING OPERATOR =====
// Optional Chaining Operator adalah fitur baru dalam JavaScript yang memungkinkan kita untuk mengakses property dari objek secara aman, 
// bahkan jika salah satu dari properti tersebut tidak terdefinisi atau bernilai null atau undefined.
// Mirip dengan Tenary Operator


// Contoh:
const siswa = {
    alamat: {
        kota: 'Makassar',
        provinsi: 'Sulawesi Selatan'
    }
}
// Jika mau outputkan kota dari alamat:
const value = siswa.alamat.kota
console.log(value);

// Jika mau cek kalau ada properti kota dari alamat (Seharusnya ada):
const value2 = siswa.alamat.kota ? 'Ada' : 'Tidak ada'
console.log(value2);

// Jika mau cek kalau ada properti jalan dari alamat (Seharusnya tidak ada:)
const value3 = siswa.alamat.jalan ? 'Ada' : 'Tidak ada'
console.log(value3);

// Melakukan pengecekan, jika propertynya ada, maka outputkan nama propertynya. Jika tidak ada, outputkan "Tidak ada"
const value4 = siswa.alamat.jalan ? siswa.alamat.jalan : 'Tidak ada'
console.log(value4);  //Tidak ada

console.log(siswa.alamat.provinsi ? siswa.alamat.provinsi : 'Tidak ada');  //Sulawesi Selatan



// Optional Chaining Operator juga dapat digunakan untuk menghindari error dengan menggantikannya dengan undefined

// Contoh:
const student = {
    alamat: {
        kota: 'Makassar',
        provinsi: 'Sulawesi Selatan'
    }
}

console.log(student.alamat.jalan.toUpperCase());      //Akan error karena properti jalan tidak ada

console.log(student.alamat.jalan ?.toUpperCase());     //Akan dioutputkan undefined