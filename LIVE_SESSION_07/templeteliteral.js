

// ===== TEMPLETE LITERAL =====
// Sebelum adanya template literal dalam JavaScript, pendekatan umum untuk membuat string kompleks adalah dengan menggunakan penggabungan string 
// atau concatenation. Ini melibatkan penggunaan operator + untuk menggabungkan beberapa string dan nilai.

// Sebelum Templete Literal (Menggunakan Concatenation)
const nama = "Arjuna"
const age = 20
const greeting = "Hello, my name is " + nama + " and I am " + age + " years old. Nice to meet you."
console.log(greeting);

// Setelah Templete Literal:
const nama2 = "Arjuna"
const age2 = 20
const greeting2 = `Hello, my name is ${nama2} and I am ${age2} years old. Nice to meet you.`
console.log(greeting2);
