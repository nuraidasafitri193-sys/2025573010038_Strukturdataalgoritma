let waktuSimulasi = new Date();
class Pasien {

    constructor(id, nama, prioritas) {
        this.id = id;
        this.nama = nama;
        this.prioritas = prioritas; 
        waktuSimulasi.setSeconds(waktuSimulasi.getSeconds() +1000);
        this.waktuDaftar = new Date(waktuSimulasi).toLocaleTimeString('en-GB'); 
    }
}

class AntrianRS {
    constructor() {

        this.antrianDarurat = [];
        this.antrianBiasa = [];
    }

    daftar(pasien) {
        if (pasien.prioritas === 'darurat') {
            this.antrianDarurat.push(pasien);
        } else if (pasien.prioritas === 'biasa') {
            this.antrianBiasa.push(pasien);
        } else {
            console.log(`Prioritas tidak valid untuk pasien ${pasien.nama}`);
            return;
        }
        console.log(`[DAFTAR] Pasien ${pasien.nama} (${pasien.prioritas}) berhasil didaftarkan pada ${pasien.waktuDaftar}.`);
    }

    layani() {
        let pasienDilayani = null;

        if (this.antrianDarurat.length > 0) {
            pasienDilayani = this.antrianDarurat.shift();
        } 

        else if (this.antrianBiasa.length > 0) {
            pasienDilayani = this.antrianBiasa.shift();
        }

        if (pasienDilayani) {
            console.log(`[LAYANI] Sedang melayani: [${pasienDilayani.id}] ${pasienDilayani.nama} - Prioritas: ${pasienDilayani.prioritas}`);
        } else {
            console.log(`[LAYANI] Antrian kosong. Tidak ada pasien untuk dilayani.`);
        }
    }

    tampilkanAntrian() {
        console.log(`\n=== STATUS ANTRIAN SAAT INI ===`);
        console.log(`Darurat (${this.antrianDarurat.length} pasien):`, this.antrianDarurat.map(p => p.nama).join(', ') || 'Kosong');
        console.log(`Biasa   (${this.antrianBiasa.length} pasien):`, this.antrianBiasa.map(p => p.nama).join(', ') || 'Kosong');
        console.log(`===============================\n`);
    }
}

console.log("--- MULAI SIMULASI ANTRIAN RUMAH SAKIT ---\n");
const rs = new AntrianRS();
const dataPasien = [
    new Pasien(1, "Andi", "biasa"),
    new Pasien(2, "Budi", "darurat"),
    new Pasien(3, "Citra", "biasa"),
    new Pasien(4, "Dewi", "darurat"),
    new Pasien(5, "Eka", "biasa"),
    new Pasien(6, "Fajar", "biasa"),
    new Pasien(7, "Gita", "darurat"),
    new Pasien(8, "Hadi", "biasa"),
    new Pasien(9, "Intan", "biasa"),
    new Pasien(10, "Joko", "darurat")
];

dataPasien.forEach(pasien => rs.daftar(pasien));

rs.tampilkanAntrian();

console.log("--- MULAI MELAYANI PASIEN ---");
for (let i = 0; i < 11; i++) {
    rs.layani();
}

rs.tampilkanAntrian();