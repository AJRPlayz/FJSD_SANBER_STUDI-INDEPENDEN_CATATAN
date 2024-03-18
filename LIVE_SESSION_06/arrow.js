
// ===== MODERN FUNCTION/REVOLUSI FUNCTION =====


// 1. Arrow Function
//contoh Function Konventional
function square(x) {
    return x * x 
}
console.log(square(2));
//contoh Arrow Function
const squareArrow = (x) => {
    return x * x;
}
console.log(squareArrow(4));



// Perbandingan ketiga Function:
// a. Function Deklarasi
function penjumlahan(a, b){
    return a + b
}
console.log(penjumlahan(3,5));

// b. Function Ekpresi
const pengurangan = function(a, b){
    return a - b
}
console.log(pengurangan(7,4));

// c. Function Arrow (Jika lebih 2 line dalam Function/menggunakan Return)
const perkalian = (a,b) => {
    console.log("Arrow Function Completed");
    return a * b
}
console.log(perkalian(3,4));

// c. Function Arrow (Jika 1 line saja dalam function/tidak menggunakan Return)
const pembagian = (a,b) => console.log(a / b)
pembagian(49,7)





// ===== DEFAULT PARAMETERS =====
// Memungkinkan kita untuk menentukan nilai default untuk parameter fungsi jika tidak diberikan saat pemanggilan fungsi. 

// Contoh tanpa default parameter:
const addition = (a,b) => {
    return a + b
}
console.log(addition(2));       //Akan dioutputkan NaN karena parameter yang diberikan tidak cukup / nilai b tidak diberikan di parameternya

// Contoh default parameter:
const subtraction = (a,b) =>{
    const angkaA = a || 1       //Cara bacanya: Jika angka a diberikan nilai diparameternya, maka nilai itu yang berlaku. Jika tidak, maka a = 1
    const angkaB = b || 1       //Cara bacanya: Jika angka b diberikan nilai diparameternya, maka nilai itu yang berlaku. Jika tidak, maka b = 1
    return angkaA - angkaB
}
// Jika keduanya diberikan parameter:  (9-4 = 5)
console.log(subtraction(9,4));
// Jika hanya a diberikan parameter:   (9-1 = 8)
console.log(subtraction(9));
// Jika tidak diberikan parameter:     (1-1 = 0)
console.log(subtraction());
