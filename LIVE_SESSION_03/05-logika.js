// ===== STRUKTUR LOGIKA =====
//IF

const nilai = 61

if(nilai > 60){
    console.log("Lulus");
}else{
    console.log("Tidak Lulus");
}

// ELSE IF

const grade = 81

if (grade <= 50){
    console.log("Anda dapat nilai E");
} else if (grade <= 60){
    console.log("Anda dapat nilai D");
} else if (grade <= 75){
    console.log("Anda dapat nilai C");
} else if (grade <= 85){
    console.log("Anda dapat nilai B");
} else {
    console.log("Anda dapat nilai A");
}


//SWITCH

const warna = "hijau"
let message = null

switch(warna){
    case "biru":
        message = "warna yang dipilih adalah biru"
        break;
    case "merah":
        message = "warna yang dipilih adalah merah"   
        break
    case "merah":
        message = "warna yang dipilih adalah merah"  
    default:
        message = "warna tidak dikenali"
}

console.log(message)