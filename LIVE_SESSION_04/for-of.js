//Perulangan FOR OF khusus digunakan untuk menampilkan element array terlepas dari arraynya.
//FOR OF juga menampilkan semua index dalam element array tanpa diset berapa yang ingin ditampilkan (unlike for)
//sehingga kita nda perlu lagi menghitung jumlah index dalam arraynya.

//Contoh1:
//  Buatlah sebuah array
const siswa1 = ['Arjuna1', 'Edgar1', 'Michiko1', 'Adam1']
//  Perulangan for of
for(const item of siswa1){
    console.log(item);
}

// PERBANDINGAN

//(Kalau menggunakan For biasa):
//  Buatlah sebuah array
const siswa2 = ['Arjuna2', 'Edgar2', 'Michiko2', 'Adam2']
//  Perulangan for
for(let i = 0; i < 4; i++){
    console.log(siswa2[i]);
}


//Contoh3
const students3 = ['Arjuna3', 'Edgar3', 'Michiko3', 'Adam3','Zabil3', 'Sofyan3','Mukram3']
for(const student3 of students3){
    console.log(student3);
}


//Cara mengetahui banyaknya index dengan menggunakan For Each:
students3.forEach((student3, index) => {
    console.log(index);
});