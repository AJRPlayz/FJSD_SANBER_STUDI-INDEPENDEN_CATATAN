// MENGGUNAKAN CONTOH.JS PERTEMUAN SEBELUMNYA

// SEKARANG KITA MENGGUNAKAN FUNCTION UNTUK CONTOH INI

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

  
  // ===== Sekarang, kita akan membuat 5 mahasiswa dengan sistem perulangan (DENGAN FUNCTION) =====
  
  const bykMahasiswa = [];
  
  function addMahasiswa(nim, name, email, jurusan) {       //tulis 4 argumennya
    const newMahasiswa = {
        nim: nim,              //formatnya => property: argumen
        name: name,
        email: email,
        jurusan: jurusan
    }
    bykMahasiswa.push(newMahasiswa)    //function untuk memasukkan data ke dalam database bykMahasiswa
  }


// Waktunya memasukkan data:  
addMahasiswa('001', 'Dodi', 'dodi@gmail.com', 'Teknik Informatika') 
addMahasiswa('002', 'Andi', 'dodi@gmail.com', 'Teknik Elektro') 
addMahasiswa('003', 'Sherin', 'sherin@gmail.com', 'Teknik Mesin')
console.log(bykMahasiswa); 


// LOGIKANYA:
// Data yang dimasukkan di line 61 - 63 dimasukkan ke dalam function() di line 49, yang kemudian diolah dan disimpan ke database bykMahasiswa di line 47






                  // ===== UPDATE =====  

// Membuat function untuk mengupdate data:
function updateMahasiswa(nim, dataMahasiswa) {      //Kita menggunakan nim sebagai argumen karena dia berupa unique key (tidak ada duplikat)
    for (const mahasiswa of bykMahasiswa) {
        if(nim === mahasiswa.nim){                      //Jika nim datamahasiswa yang ingin diupdate sama dengan nim mahasiswa database,
            mahasiswa.name = dataMahasiswa.name         //maka, property nama, email, jurusan akan diupdate dengan datamahasiswa terbaru.
            mahasiswa.email = dataMahasiswa.email
            mahasiswa.jurusan = dataMahasiswa.jurusan
        }
    }
}

// Data yang ingin diupdate:
updateMahasiswa('003',{              //isi argumen nim dengan nim mahasiswa yang ingin diganti
    nim: '003',                      //isi dataMahasiswa dengan data baru yang ingin diupdatekan
    name: 'SherinLagi',
    email: 'sherinlagi@gmail.com',
    jurusan: 'Teknik Mesin Air'
}
)
   

  

  
                  // ===== DELETE =====
  
  // Menggunakan database sebelumnya (bykMahasiswa), kita akan menghapus elemen dalam array tersebut.
  // Pertama, kita harus menampilkan persatu elemen tanpa terkurung dalam array dengan menggunakan ForEach.
//   bykMahasiswa.forEach((murid, index) => {
//       console.log(murid);
//   });
  // Kedua, menambahkan persyaratan if agar bisa memilih spesik elemen yang akan dihapus
//   bykMahasiswa.forEach((murid, index) => {
    //   if (murid.nim === '003') {
        //   console.log(murid);   
    //   }
//   });
  // Ketiga, setelah menentukan elemen spesifik yang ingin dihapus, gunakan array method splice
//   bykMahasiswa.forEach((murid, index) => {
    //   if (murid.nim === '003') {
        //   bykMahasiswa.splice(index, 1)
        //   console.log(bykMahasiswa);   
    //   }
//   });