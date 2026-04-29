function jumlahArray(arr) {
    let total = 0;
    for (const x of arr) total += x;
    return total;
}
function duplikasiArray(arr) {
    const baru = [];
    for (const x of arr) baru.push(x * 2);
    return baru;
}
function faktorialRekursif(n) {
    if (n <= 1) return 1;
    return n * faktorialRekursif(n - 1);
}

function faktorialIteratif(n) {
    let hasil = 1;
    for (let i = 2; i <= n; i++) hasil *= i;
    return hasil;
}
const arr = [1,2,3,4,5,6,7,8,9,10];
console.log('Jumlah array:', jumlahArray(arr)); 
console.log('Duplikasi array:', duplikasiArray(arr)); 
console.log('Faktorial 10 rekursif:', faktorialRekursif(10));
console.log('Faktorial 10 iteratif:', faktorialIteratif(10));

function hitungUnik(arr) {
    const seen = new Set(); 
    for (const x of arr) seen.add(x);
    return seen.size;
}
const dataAcak = [1,2,3,2,1,4,5,3,6,4,7];
console.log('Elemen unik:', hitungUnik(dataAcak));

console.log('\nCari pasangan angka');

function cariPasanganLambat(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}
function cariPasanganCepat(arr, target){
    let seen = new Set();
    for(let num of arr){
        let pasangan = target - num;
        if(seen.has(pasangan)){
            return [pasangan, num];
        }
        seen.add(num);
    }
    return null;
}

let arr2 = [2,7,11,15];
let target = 9;

console.log("Hasil Lambat:", cariPasanganLambat(arr2, target));
console.log("Hasil Cepat:", cariPasanganCepat(arr2, target));

let besar = [];
for(let i = 0; i < 5000; i++){
    besar.push(Math.floor(Math.random() * 100000));
}
let targetBesar = -1;

let start1 = Date.now();
cariPasanganLambat(besar, targetBesar);
let end1 = Date.now();

let start2 = Date.now();
cariPasanganCepat(besar, targetBesar);
let end2 = Date.now();

console.log("Waktu Lambat:", (end1 - start1), "ms");
console.log("Waktu Cepat:", (end2 - start2), "ms");

console.log("\n=== Latihan bankaccount ===");
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }non
    }
  }
  return null;
}
function cariPasanganCepat(arr, target) {
  const seen = new Set();

  for (const angka of arr) {
    const pasangan = target - angka;

    if (seen.has(pasangan)) {
      return [pasangan, angka];
    }
    seen.add(angka);
  }
  return null;
}
const dataPasangan = [2, 7, 11, 15];
const targetPasangan = 9;
console.log("Hasil Lambat:", cariPasanganLambat(dataPasangan, targetPasangan));
console.log("Hasil Cepat :", cariPasanganCepat(dataPasangan, targetPasangan));

const dataBesar = [];

for (let i = 0; i < 1500; i++) {
  dataBesar.push(Math.floor(Math.random() * 100000));
}
const targetTidakAda = -1;
let mulai = Date.now();
const hasilLambat = cariPasanganLambat(dataBesar, targetTidakAda);
let selesai = Date.now();

console.log("\nHasil Lambat:", hasilLambat);
console.log("Waktu Lambat:", selesai - mulai, "ms");

mulai = Date.now();
const hasilCepat = cariPasanganCepat(dataBesar, targetTidakAda);
selesai = Date.now();

console.log("\nHasil Cepat:", hasilCepat);
console.log("Waktu Cepat:", selesai - mulai, "ms");

console.log("\nDiskusi:");
console.log("Fungsi cariPasanganCepat lebih baik karena hanya melakukan satu kali perulangan.");
console.log("Trade-off-nya adalah cariPasanganCepat membutuhkan memori tambahan karena menggunakan Set.");
console.log("Fungsi cariPasanganLambat lebih hemat memori, tetapi lebih lambat karena menggunakan nested loop.");