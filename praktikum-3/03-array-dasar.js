const mahasiswa =['budi','siti','ahmad','rina'];
const nilai     =[85, 92, 78, 95, 88];

console.log('== Array awal ==');
console.log('Mahasiswa:', mahasiswa);
console.log('Nilai :', nilai);
console.log('Jumlah mahasiswa:', mahasiswa.length);

console.log('\n== Akses elemen ==');
console.log('Elemen pertama:',mahasiswa[0]);
console.log('Elemen ketiga :', mahasiswa[2]);
console.log('Elemen terakhir:', mahasiswa[mahasiswa.length - 1]); 

mahasiswa[1] = 'Siti Rahayu'; 
console.log('\nSetelah diubah:', mahasiswa); 

console.log('\n=== Manipulasi Array ==='); 
mahasiswa.push('Doni'); 
console.log('Setelah push :', mahasiswa); 

mahasiswa.unshift('Zahra'); 
console.log('Setelah unshift :', mahasiswa); 

const dihapusAkhir = mahasiswa.pop(); 
console.log('Dihapus (pop) :', dihapusAkhir); 
console.log('Setelah pop :', mahasiswa); 

const dihapusAwal = mahasiswa.shift();
console.log('Dihapus (shift) :', dihapusAwal); 
console.log('Setelah shift :', mahasiswa); 

console.log('\n=== Pencarian ==='); 
console.log('Indeks Ahmad :', mahasiswa.indexOf('Ahmad')); 
console.log('Ada Rina? :', mahasiswa.includes('Rina')); 
console.log('Ada Budi? :', mahasiswa.includes('Budi')); 

const sebagian = nilai.slice(1, 4); 
console.log('\nNilai asli :', nilai); 
console.log('Slice [1,4] :', sebagian); 

console.log('\n=== latihan 03 ===');
let daftarBelanja = ["Beras", "Gula", "Minyak", "Telur", "Garam"];

console.log("Daftar Belanja:");
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log((i + 1) + ". " + daftarBelanja[i]);
}

daftarBelanja.push("Susu");
daftarBelanja.push("Kopi");

console.log("\nSetelah ditambah:");
console.log(daftarBelanja);

let itemDihapus = daftarBelanja.shift();
console.log("\nItem yang dihapus:", itemDihapus);

let adaSusu = daftarBelanja.includes("Susu");
console.log("\nApakah 'Susu' ada di daftar?", adaSusu ? "Ya, ada" : "Tidak ada");

console.log("\nJumlah item akhir:", daftarBelanja.length);