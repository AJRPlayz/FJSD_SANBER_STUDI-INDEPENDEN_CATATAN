
// ===== DESTRUCTURING =====


// 1. DESTRUCTURING ARRAY
const [dua, tiga, lima] = [2,3,5]
// Kalau mau ambil nilai 2:
console.log(dua);
// Kalau mau ambil nilai 5:
console.log(lima);

// atau bisa juga

const angka = [8,9,11]
const [delapan, sembilan, sebelas] = angka;
// Kalau mau ambil nilai 9:
console.log(sembilan);
// Kalau mau ambil nilai 11:
console.log(sebelas);



// 2. DESTRUCTURING OBJECT
const {email, password} = {email:'dodi@gmail.com', password: 'dodirules'}
// Kalau mau melihat passwordnya:
console.log(password);

// atau bisa juga

const dataLogin = {
    email2: 'arjuna.ribal@gmail.com', 
    password2: 'ajrplayz'
}
const {email2, password2} = dataLogin
// Kalau mau melihat emailnya:
console.log(email2);






