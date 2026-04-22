// ================= OBJECT DESTRUCTURING =================
const produk = {
    nama: 'Laptop Gaming',
    merek: 'TechBrand',
    harga: 12500000,
    stok: 15,
    garansi: '1 tahun'
};

const { nama, harga, stok } = produk;

console.log("=== OBJECT DESTRUCTURING ===");
console.log(`${nama} | Rp${harga.toLocaleString()} | Stok: ${stok}`);

const { nama: namaProduk, garansi: periodeGaransi } = produk;
console.log(`Produk: ${namaProduk}, Garansi: ${periodeGaransi}`);

const { warna = 'tidak diketahui', stok: jumlahStok = 0 } = produk;
console.log(`Warna: ${warna} | Stok: ${jumlahStok}`);


// ================= ARRAY DESTRUCTURING =================
const koordinat = [10, 25, 5];
const [x, y, z] = koordinat;

console.log("\n=== ARRAY DESTRUCTURING ===");
console.log(`x=${x}, y=${y}, z=${z}`);

const [, kedua] = [100, 200, 300, 400];
console.log("Elemen kedua:", kedua);


// ================= SWAP VARIABLE =================
let a = 'pertama';
let b = 'kedua';

console.log("Sebelum swap:", a, b);

[a, b] = [b, a];

console.log("Setelah swap:", a, b);


// ================= SPREAD OPERATOR =================
const buah = ['apel', 'mangga', 'jeruk'];
const sayur = ['bayam', 'wortel'];

const salinanBuah = [...buah];
salinanBuah.push('pisang');

console.log("\n=== SPREAD OPERATOR ===");
console.log("Buah asli:", buah);
console.log("Salinan buah:", salinanBuah);

const semuaMakanan = [...buah, ...sayur, 'tempe'];
console.log("Gabungan makanan:", semuaMakanan);


// ================= SPREAD OBJECT =================
const profil = {
    nama: 'Siti',
    umur: 22,
    kota: 'Jakarta'
};

const profilUpdate = {
    ...profil,
    umur: 23
};

console.log("Profil Update:", profilUpdate);


// ================= REST PARAMETER =================
function jumlahkanSemua(...angka) {
    console.log("Argumen diterima:", angka);
    return angka.reduce((total, n) => total + n, 0);
}

console.log("\n=== REST PARAMETER ===");
console.log("Total:", jumlahkanSemua(1,2,3));
console.log("Total:", jumlahkanSemua(10,20,30,40,50));

const [kepala, ...ekor] = [1,2,3,4,5];
console.log("Kepala:", kepala);
console.log("Ekor:", ekor);


// ================= PENGOLAHAN DATA =================
console.log("\n=== PENGOLAHAN DATA ===");

const timA = ['Budi', 'Siti', 'Ahmad'];
const timB = ['Rina', 'Doni'];

const timGabungan = [...timA, ...timB, 'Zahra'];

console.log("Tim Gabungan:", timGabungan);

const [kapten, ...anggota] = timGabungan;

console.log("Kapten:", kapten);
console.log("Anggota lainnya:", anggota);


// ================= OBJECT SETTING =================
const pengaturanDefault = {
    tema: 'terang',
    bahasa: 'id',
    notifikasi: true,
    fontSize: 14
};

const pengaturanUser = {
    ...pengaturanDefault,
    tema: 'gelap',
    fontSize: 16
};

console.log("Pengaturan User:", pengaturanUser);

const { tema, fontSize } = pengaturanUser;

console.log("Tema:", tema);
console.log("Font Size:", fontSize);