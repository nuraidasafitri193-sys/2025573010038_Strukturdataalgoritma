class Kendaraan {
    constructor(merek, model, tahun) {
        this.merek = merek;
        this.model = model;
        this.tahun = tahun;
        this.kecepatanSaatIni = 0;
    }

    akselerasi(tambahan) {
        this.kecepatanSaatIni += tambahan;
        console.log(`${this.merek} ${this.model}: kecepatan ${this.kecepatanSaatIni} km/h`);
    }

    rem() {
        this.kecepatanSaatIni = 0;
        console.log(`${this.merek} ${this.model}: berhenti.`);
    }

    info() {
        return `${this.tahun} ${this.merek} ${this.model}`;
    }
}


class Mobil extends Kendaraan {
    constructor(merek, model, tahun, jumlahPintu) {
        super(merek, model, tahun);
        this.jumlahPintu = jumlahPintu;
    }

    bunyikanKlakson() {
        console.log(`${this.merek}: beep beep!`);
    }

    info() {
        const infoParent = super.info();
        return `${infoParent} (${this.jumlahPintu} pintu)`;
    }
}


class Motor extends Kendaraan {
    constructor(merek, model, tahun, jenisMotor) {
        super(merek, model, tahun);
        this.jenisMotor = jenisMotor;
    }

    wheelie() {
        if (this.kecepatanSaatIni > 50) {
            console.log(`${this.merek}: Wheelie!`);
        } else {
            console.log("Kecepatan terlalu rendah untuk wheelie.");
        }
    }

    info() {
        return `${super.info()} [${this.jenisMotor}]`;
    }
}


const mobil = new Mobil("Toyota", "Avanza", 2022, 4);
const motor = new Motor("Honda", "CBR600RR", 2021, "sport");

console.log("==== Info Kendaraan ====");
console.log(mobil.info());
console.log(motor.info());

console.log("\n=== Aksi ===");
mobil.akselerasi(60);
mobil.bunyikanKlakson();
motor.akselerasi(80);
motor.wheelie();
motor.rem();

console.log("\n=== instanceof ===");
console.log("mobil instanceof Mobil :", mobil instanceof Mobil);
console.log("mobil instanceof Kendaraan :", mobil instanceof Kendaraan);
console.log("motor instanceof Mobil :", motor instanceof Mobil);

console.log("\n=== Polymorphism ===");
const semuaKendaraan = [mobil, motor];
semuaKendaraan.forEach(k => console.log(k.info()));


// ================= HEWAN =================

console.log("\n=== Hierarki Class Hewan ===");

class Hewan {
    constructor(nama, suara) {
        this.nama = nama;
        this.suara = suara;
    }

    bersuara() {
        console.log(`${this.nama} berkata: ${this.suara}`);
    }

    info() {
        console.log(`Nama Hewan: ${this.nama}`);
    }
}

class Anjing extends Hewan {
    constructor(nama) {
        super(nama, "Guk guk");
    }

    fetch() {
        console.log(`${this.nama} mengambil bola!`);
    }

    info() {
        console.log(`Nama Hewan: ${this.nama} (jenis: anjing)`);
    }
}

class Kucing extends Hewan {
    constructor(nama) {
        super(nama, "Meong");
    }

    cakarSofa() {
        console.log(`${this.nama} mencakar sofa!`);
    }

    bersuara() {
        super.bersuara();
        console.log("Purrr...");
    }
}

const anjing1 = new Anjing("Buddy");
const anjing2 = new Anjing("Max");
const kucing1 = new Kucing("Kitty");
const kucing2 = new Kucing("Milo");

const semuaHewan = [anjing1, anjing2, kucing1, kucing2];

console.log("\n=== Daftar Hewan ===");

semuaHewan.forEach(hewan => {
    hewan.bersuara();
    hewan.info();
    console.log("------------------");
});

console.log("\n=== Method Khusus ===");
anjing1.fetch();
kucing1.cakarSofa();