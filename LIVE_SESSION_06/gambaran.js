
// GAMBARAN/CONTOH STATIC PROGRAMMING (Kode dibaca dari atas ke bawah)

// 01. Membuat Database mahasiswa
const dbMahasiswa = ['Dody', 'Alim', 'Sheren'];


// 02. Read (Tampilkan data mahasiswa)
for (const mhs of dbMahasiswa){
    console.log(mhs);
}


// 03. Update (Menambahkan data mahasiswa)
dbMahasiswa.push('Rido')
dbMahasiswa.push('Bagas')


// 04. Delete (Menghapuskan data mahasiswa)
function deleteMhs(nim) {
    console.log("Delete mahasiswa berhasil");
} 

deleteMhs()




// FUNCTIONAL PROGRAMMING = Programming Modern dimana programming tidak bersifat static/baca kodenya dari atas ke bawah
// Guna functional programming adalah untuk merapikan kode agar lebih mudah dibaca.
// Selain itu, kegunaan Functional Programming:
// 01. Lebih mudah dipahami karena lebih deklaratif dan fokus pada apa yang harus dilakukan, bukan bagaimana melakukannya.
// 02. Menghindari perubahan langsung pada data, kode menjadi lebih bersih dan mudah diuji karena lebih dapat diprediksi.
// 03. Membuat penggunaan Function yang dapat digunakan kembali dan komposisi fungsi, membuat kode lebih mudah di-maintain dan ditingkatkan skalabilitasnya.


// GAMBARAN/CONTOH FUNCTIONAL PROGRAMMING 

// 01. Membuat Database mahasiswa
const dbMahasiswa2 = ['Dody', 'Alim', 'Sheren'];


// 03. Membuat function deletenya dulu (Menghapuskan data mahasiswa)
function deleteMhs(nim) {
    console.log("Delete mahasiswa berhasil");
}  


// 04. Membuat function Updatenya dulu (Menambahkan data mahasiswa)
function addMahasiswa(nim) {
    console.log("Mahasiswa telah ditambahkan");
}


// 02. Read (Tampilkan data mahasiswa)
for (const mhs of dbMahasiswa){
    console.log(mhs);
}


// 03.1. Memanggil function deletenya
deleteMhs()
// 04.1. Memanggil function updatenya
addMahasiswa()

// Jadi dari gambaran tersebut, terlihat bahwa operasi Read akan tetap dijalankan duluan sebelum Delete dan Update, 
// karena function Delete dan Update dipanggil setelah operasi Read namun functionnya dibuat sebelum operasi Read.




// Pengingat:

function deleteMhs(nim) {
    const mhs = nim
    console.log("Delete mahasiswa berhasil");
}  

function addMahasiswa(nim) {
    const mhs = nim
    console.log("Mahasiswa telah ditambahkan");
}
// Ini merupakan dua sopce/blok kode. Itulah sebabnya terdapat dua variable const yang bernama mhs tanpa adanya error, karena kedua variable
// tersebut terletak didalam blok kode masing - masing.



