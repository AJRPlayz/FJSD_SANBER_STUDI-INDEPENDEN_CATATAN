//FOR digunakan sebagai sistem perulangan
//Format dasar for:
// for(start; condition, increment){
//      statement;
// }

//Contoh:
for(let i = 1; i < 10; i++){
    console.log('Hello World');
}

//THE LOGIC
// i = 1
// 1 itu lebih kecil dari 10? True
// maka 1++ = 2
// console.log()

// jadinya:
//  i = 2
// 1 itu lebih kecil dari 10? True
// maka 2++ = 3
// console.log()

// dan seterusnya hingga...
// i = 10
// 10 itu lebih kecil dari 10? FALSE
// Maka berhentilah perulangan


// Bisa menggunakan Operator Concat "+"
for(let i = 1; i < 10; i++){
    console.log("Hello World ke - " + i);
}


//Contoh2 (Untuk melakukan perulangan pada element array):
//  Buatlah sebuah array
const siswa2 = ['Arjuna', 'Edgar', 'Michiko', 'Adam']
//  Perulangan for
for(let i = 0; i < 4; i++){
    console.log(siswa2[i]);
}


//Contoh3 (Untuk melakukan perulangan pada element array dengan kondisi yang menyesuaikan dengan banyaknya index pada array):
//  Buatlah sebuah array
const siswa3 = ['Arjuna', 'Edgar', 'Michiko', 'Adam','Zabil', 'Sofyan','Mukram', 'Ardi','Erwin']
//  Perulangan for
for(let i = 0; i < siswa3.length; i++){
    console.log(siswa3[i]);
}


//Cara mengetahui jumlah index dalam array menggunakan For:
const siswa4 = ['Arjuna', 'Edgar', 'Michiko', 'Adam','Zabil', 'Sofyan','Mukram', 'Ardi','Erwin']
console.log(siswa4.length);




