
// ===== SYNCHRONOUS =====
// adalah sebuah konsep yang mengacu pada proses atau tugas yang dilakukan secara berurutan dan bergantian, 
// di mana setiap tugas harus menunggu tugas sebelumnya selesai sebelum dilanjutkan. 

// Contoh: 
console.log('Hello');
console.log('JavaScript');
console.log('Coder');

// Output dari kode diatas dijamin akan sesuai urutan, karena setiap perintah harus menunggu perintah sebelumnya selesai. 
// Proses seperti ini disebut ‘blocking’.





// ===== ASYNCHRONOUS =====
// Asynchronous hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses. 
// Eksekusi dengan asynchronous tidak akan membloking atau menunggu suatu perintah sampai selesai. Daripada menunggu, 
// asynchronous akan mengeksekusi perintah selanjutnya.

// Contoh:
console.log('Hello');
setTimeout(function(){
    console.log('JavaScript');},1000)     //Tertunda 1000 milidetik, maka akan dieksekusi code setelahnya terlebih dahulu 
console.log('Coder');





// ===== CALLBACK =====
// Callback sebenarnya adalah function, bedanya dengan function pada umumnya adalah di cara eksekusinya. 
// Jika function pada umumnya dieksekusi berurutan dari atas ke bawah maka callback di eksekusi pada point tertentu, itu sebabnya disebut callback.
// Jika function pada umumnya dieksekusi secara langsung sedangkan callback di eksekusi dalam function lain melalui *parameter*.

// Logicnya, callback === function
// Callback adalah function yang dieksekusi di dalam function tapi dikirim melalui parameter
// Sehingga, jadinya function dijallankan di dalam function

// Contoh:
function main(param1, param2, callbackSaya) {           //Argumen callbackSaya untuk function myCallback yang berada di parameternya dibawah
    console.log(param1);                                // Function biasa
    console.log(param2);
    callbackSaya()
}

function myCallback(){
    console.log("Hello, this is Callback");            // Function Callback 
}

main(1,2, myCallback)                                  //(Function callback berada didalam parameternya function main)

// Sehingga alurnya begini:
// 1. function myCallback dibuat lalu dimasukkan ke dalam parameter main di bawah. 
// 2. Terus diterima di argumen di atas yang bernama callbacksaya.
// 3. Setelah diterima di argumen, dijalankanlah function callbackSaya() di line 44


// Contoh lain:
function jumlahUang(a, b, callback){
    let result = a + b;
    if (callback){
        result = toRupiah(a,b)
    }
    return result
}

function toRupiah(x, y){
    return `Rp. ${x + y}`
}

console.log(jumlahUang(1000, 2000, toRupiah));


// Contoh Function biasa di dalam function biasa
function contoh1(){
    console.log('Contoh 1');
}
 
function contoh2(){
    contoh1()                                          // Function contoh 1 berada di dalam function contoh 2
    console.log('Contoh 2');
}

contoh2()                                              // Jadi saat dipanggil function 2, function 1 terpanggil juga





// ===== PROMISES =====
// Dalam dunia promise analogi di atas juga sama, ketika melakukan request asynchronous seperti Ajax, maka ada 3 kemungkinan state :
// Pending ( sedang dalam proses )
// Fulfilled ( berhasil )
// Rejected ( gagal )


// Contoh Promise Pending
let janjian1 = new Promise ((resolve, reject) => {})
console.log(janjian1);


// Contoh dengan resolve(berhasil) dan reject(gagal)
let janjian2 = new Promise((resolve, reject) => {})       // Promise object
janjian2
    .then((result) => {                                   // Promise Instance (Kalau berhasil)
        console.log(result);
    })
    .catch((error) =>{                                    // Promise Instance (Kalau gagal)
        console.log(error);
    })
