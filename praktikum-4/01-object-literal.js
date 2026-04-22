const mahasiswa ={
    nama : 'budi santoso',
    umur : 20,
    ipk : 3.75,
    aktif : true,
};

console.log('===akses propErty===');
console.log('nama :',mahasiswa.nama);
console.log('jurusan : ',mahasiswa['jurausan']);

const keyYangdicari = 'ipk';
console.log('ipk : ', mahasiswa[keyYangdicari]);

mahasiswa.email ='budi@email.com';
mahasiswa.umur = 21;
console.log('\nsetelah diubah:', mahasiswa);

delete mahasiswa.aktif;
console.log('setelah delete:',mahasiswa);

const dosen = {
    nama : 'dr. ahmad fauzi',
    matakuliah : 'struktur data',
    pengalaman : 10, // tahun

    perkenalan () {
        return `halo, saya ${this.nama}, mengajar ${this.matakuliah}.`;
    
    },
    statusSenior() {
        if (this.pengalaman >= 10) {
            return `${this.nama} adalah dosen junior.`;

        }
        return `${this.nama}adalah dosen junior.`;
    }
};
console.log('\n===method object===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

console.log('\n=== iterasi object ===');
for (const key in dosen )
    if (typeof dosen[key]!== 'function'){
        console.log(` ${key}: ${dosen[key]}`);
    }
        console.log('keys :', Object.keys(mahasiswa));
        console.log('values:', Object.values(mahasiswa));
    
console.log('\n===latihan 1.object buku dan perpustakan===');

// Membuat array koleksi buku
const koleksiBuku = [
{
    judul: "Laskar Pelangi",
    pengarang: "Andrea Hirata",
    tahunTerbit: 2005,
    harga: 100000,
    tersedia: true,

    info: function() {
        return `Judul        : ${this.judul}
Pengarang    : ${this.pengarang}
Tahun Terbit : ${this.tahunTerbit}
Harga        : Rp${this.harga}
Tersedia     : ${this.tersedia}
------------------------------`;
    },

    diskon: function(persen) {
        return this.harga * (1 - persen/100);
    }
},

{
    judul: "Bumi",
    pengarang: "Tere Liye",
    tahunTerbit: 2014,
    harga: 90000,
    tersedia: false,

    info: function() {
        return `Judul        : ${this.judul}
Pengarang    : ${this.pengarang}
Tahun Terbit : ${this.tahunTerbit}
Harga        : Rp${this.harga}
Tersedia     : ${this.tersedia}
------------------------------`;
    },

    diskon: function(persen) {
        return this.harga * (1 - persen/100);
    }
},

{
    judul: "Negeri 5 Menara",
    pengarang: "Ahmad Fuadi",
    tahunTerbit: 2009,
    harga: 85000,
    tersedia: true,

    info: function() {
        return `Judul        : ${this.judul}
Pengarang    : ${this.pengarang}
Tahun Terbit : ${this.tahunTerbit}
Harga        : Rp${this.harga}
Tersedia     : ${this.tersedia}
------------------------------`;
    },

    diskon: function(persen) {
        return this.harga * (1 - persen/100);
    }
}
];

console.log("DAFTAR SEMUA BUKU");
koleksiBuku.forEach(function(buku){
    console.log(buku.info());
});

const bukuTersedia = koleksiBuku.filter(function(buku){
    return buku.tersedia === true;
});

console.log("BUKU YANG TERSEDIA");
bukuTersedia.forEach(function(buku){
    console.log(buku.info());
});

console.log("Harga setelah diskon 10% buku pertama:", koleksiBuku[0].diskon(10));