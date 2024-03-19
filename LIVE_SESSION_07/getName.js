
// CommonJS Module
function sayHi(nama) {
    return console.log('Hi, ' + nama);
}

module.exports = sayHi;                   //PENTING: Untuk menjalankan CommonJs Module, tidak boleh ada "type : module" di package.json



// ES Module
function sayHowdy(nama) {
    return console.log("Howdy " + nama);
}
export default sayHowdy;                     //PENTING: Untuk menjalankan ES Module, harus ada "type : module" di package.json