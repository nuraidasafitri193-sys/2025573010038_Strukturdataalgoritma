// ================= PARENT CLASS =================
class Produk {
    constructor(id, nama, harga, stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    info() {
        console.log(`ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | Stok: ${this.stok}`);
    }

    tersedia() {
        return this.stok > 0;
    }

    jual(jumlah) {
        if (jumlah <= 0) {
            console.log("Jumlah tidak valid");
            return;
        }

        if (jumlah > this.stok) {
            console.log(`Stok ${this.nama} tidak mencukupi`);
            return;
        }

        this.stok -= jumlah;
        console.log(`${jumlah} ${this.nama} berhasil dijual. Sisa stok: ${this.stok}`);
    }
}

class ProdukDigital extends Produk {
    constructor(id, nama, harga, ukuranFile, formatFile) {
        super(id, nama, harga, Infinity); // produk digital tidak terbatas
        this.ukuranFile = ukuranFile;
        this.formatFile = formatFile;
    }

    info() {
        console.log(`ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | File: ${this.ukuranFile}MB | Format: ${this.formatFile}`);
    }

    download() {
        console.log(`${this.nama} sedang didownload...`);
    }

    jual() {
        console.log(`${this.nama} berhasil dibeli (produk digital tidak mengurangi stok).`);
    }
}

class ProdukFisik extends Produk {
    constructor(id, nama, harga, stok, beratGram, dimensi) {
        super(id, nama, harga, stok);
        this.beratGram = beratGram;
        this.dimensi = dimensi;
    }

    info() {
        console.log(`ID: ${this.id} | Nama: ${this.nama} | Harga: Rp${this.harga} | Stok: ${this.stok} | Berat: ${this.beratGram}g | Dimensi: ${this.dimensi}`);
    }

    hitungOngkir(tarifPerKg) {
        const beratKg = this.beratGram / 1000;
        const ongkir = beratKg * tarifPerKg;
        return ongkir;
    }
}2

const ebook = new ProdukDigital(1, "Ebook JavaScript", 50000, 5, "PDF");
const template = new ProdukDigital(2, "Template Website", 75000, 20, "ZIP");

const laptop = new ProdukFisik(3, "Laptop Gaming", 12000000, 5, 2500, "35x25x2 cm");
const mouse = new ProdukFisik(4, "Mouse Wireless", 150000, 10, 200, "10x6x4 cm");

const daftarProduk = [ebook, template, laptop, mouse];

console.log("=== Semua Produk ===");

daftarProduk.forEach(produk => {
    produk.info();
});

console.log("\n=== Produk Tersedia ===");

const produkTersedia = daftarProduk.filter(p => p.tersedia());

produkTersedia.forEach(p => console.log(p.nama));

console.log("\n=== Nama Produk ===");

const namaProduk = daftarProduk.map(p => p.nama);

console.log(namaProduk);

console.log("\n=== Test Method ===");

ebook.download();
laptop.jual(2);

console.log("Ongkir Laptop:", laptop.hitungOngkir(10000));