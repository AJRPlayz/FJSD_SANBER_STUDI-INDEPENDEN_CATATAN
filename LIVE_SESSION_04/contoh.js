// CRUD Data Mahasiswa

// CREATE
// READ (Menampilkan Data)
// UPDATE (Edit Data)
// DELETE (Hapus Data)

// Mahasiswa
// 1. NIM
// 2. NAME
// 3. EMAIL
// 4. JURUSAN

                // ===== CREATE =====

// Kita buat data mahasiswa
const student = {
  nim: "032",
  name: "Arjuna",
  email: "arjuna.ribal@gmail.com",
  jurusan: "Sistem Informasi",
};

const student2 = {
  nim: "022",
  name: "Juno",
  email: "juno.ribal@gmail.com",
  jurusan: "Teknik Informasi",
};

// Ceritanya disimpan ke database Students
const students = []; //Belum berisi data mahasiswa

// Simpan Student ke database Students
students.push(student);
students.push(student2);

// Kita panggil database students
console.log(students); //Sudah berisi 2 data mahasiswa

// ===== Sekarang, kita akan membuat 5 mahasiswa dengan sistem perulangan =====

const bykMurid = [];

for (let i = 1; i <= 5; i++) {
  const murid = {
    nim: "00" + i,
    name: "Name " + i,
    email: "Email " + i,
    jurusan: "Jurusan " + i,
  };

  bykMurid.push(murid); //Masukkan data murid kedalam database bykMurid
}
// console.log(bykMurid);




                // ===== DELETE =====

// Menggunakan database sebelumnya (bykMurid), kita akan menghapus elemen dalam array tersebut.
// Pertama, kita harus menampilkan persatu elemen tanpa terkurung dalam array dengan menggunakan ForEach.
bykMurid.forEach((murid, index) => {
    console.log(murid);
});
// Kedua, menambahkan persyaratan if agar bisa memilih spesik elemen yang akan dihapus
bykMurid.forEach((murid, index) => {
    if (murid.nim === '003') {
        console.log(murid);   
    }
});
// Ketiga, setelah menentukan elemen spesifik yang ingin dihapus, gunakan array method splice
bykMurid.forEach((murid, index) => {
    if (murid.nim === '003') {
        bykMurid.splice(index, 1)
        console.log(bykMurid);   
    }
});