class Kendaraan{
    constructor(nama){
        this.nama = nama;
    }
    info(){
        console.log("Kendaraan: " + this.nama);
    }
}

class KendaraanBensin extends Kendaraan{
    isiBensin(liter){
        console.log(this.nama + "mengisi bensin" + liter + "liter");
    }
}

class KendaraanListrik extends Kendaraan{
    isiDaya(kwh){
       console.log(this.nama + "mengesisi daya" + kwh + "kwh");
    }
}

class MobilBensin extends KendaraanBensin {
    isiBensin(liter) {
        throw new Error(this.nama + "tidak memakai daya!");
    }
}

class MobilListrik extends KendaraanListrik {
    isiBensin(liter) {
        throw new Error(this.nama + "tidak memakai bensin!");
    }
}

function isiSemuaBensin(daftar){
    daftar.forEach((x) => x.isiBensin(20));
}

function isiSemuaDaya(daftar){
    daftar.forEach((x) => x.isiDaya(40));
}


const avanza = new MobilBensin("Avanza_3634");
const ioniq = new MobilListrik("Ioniq_3634");
const beat = new MobilBensin("Beat_3634");
avanza.info();
beat.info();
ioniq.info();

isiSemuaBensin([avanza, beat]);
isiSemuaDaya([ioniq]);
