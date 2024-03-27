// Menggunakan Class dengan Import dan Export (Module)

class Plants {
    constructor (nama, warna, habitat){
        this.nama = nama;
        this.warna = warna;
        this.habitat = habitat;
    }

    bertumbuh(){
        console.log(`Tanaman ${this.nama} yang berwarna ${this.warna} sedang bertumbuh di ${this.habitat}.`);
    }

}


export default Plants;