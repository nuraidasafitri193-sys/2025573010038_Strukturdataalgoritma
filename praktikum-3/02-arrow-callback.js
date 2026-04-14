function kuadratbiasa(x){
    return x * x;
};

const kuadrat = (x)=> {
    return x * x;
};
const kuadratringkas = x => x * x;

console.log('==perbandingan penulisan==');

console.log('biasa :', kuadratbiasa(5));
console.log('arrow  :', kuadrat(5));
console.log('ringkas :', kuadratringkas(5));

const luas = (panjang ,lebar) => panjang * lebar;
const salam = (nama, waktu) =>`selamat ${waktu}, ${nama}!`;

console.log('luas 4x6 :', luas(4, 6));
console.log(salam('budi', 'pagi'));

function lakukanoperasi(angka, operasicallback){
    console.log(`angka awal: ${angka}`);
    const hasil = operasicallback(angka);
    console.log(`hasil setelah operasi:${hasil}`);
}
console.log('\n== callback ==');

lakukanoperasi(7,kuadratringkas);
lakukanoperasi(10, x => x + 100);
lakukanoperasi(20, function(x){
    return x / 2;
});

console.log('\n== setTimeout (callback)==');
console.log('pesan 1: sebelum timer');

setTimeout(() => {
    console.log('pesan 3: ini dari dalam setTimeout (setelah 1 detik)');
}, 1000);
console.log('pesan 2: setelah mendaftarkan timer');


console.log('\n=== latihan 02 ===');

const keHurufBesar = (str) => str.toUpperCase();
const tambahSeru = (str) => str + "!!!";
const hitungKata = (str) => str.split(' ').length;

function prosesKalimat(kalimat, transformasiCallback) {
    const hasil = transformasiCallback(kalimat);
    console.log(hasil);
}
const kalimat = 'belajar javascript itu menyenangkan';
prosesKalimat(kalimat, keHurufBesar);
prosesKalimat(kalimat, tambahSeru);
prosesKalimat(kalimat, hitungKata);