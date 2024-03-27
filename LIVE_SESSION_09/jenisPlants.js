import Plants from "./plants.js"

class Bunga extends Plants {
    constructor(nama, warna, habitat){
        super(nama, warna, habitat)
    }
}

const bungaMawar = new Bunga ("Bunga Mawar", "Merah", "Ladang Rumput")
const bungaMelati = new Bunga ("Bunga Melati", "Putih", "Ladang Rumput")
bungaMawar.bertumbuh()
bungaMelati.bertumbuh()


class Pohon extends Plants {
    constructor (nama, warna, habitat){
        super(nama, warna, habitat)
    }
}

const pohonJacaranda = new Pohon("Pohon Jacaranda", "Ungu", "Taman Adelaide")
pohonJacaranda.bertumbuh()