 function sapa() {
    console.log('Halo! Selamat datang di praktikum JavaScript.');
}
sapa();
sapa();

function sapaNama(nama) {
    console.log('Halo, ${nama} Selamat belajar.');
}
sapaNama('Budi');
sapaNama('Siti');

function tambah(angka1, angka2) {
    const hasil = angka1 + angka2;
    return hasil;
}

const hasilpenjumlahan= tambah(10, 25);
console.log('10 + 25 =', hasilpenjumlahan);
console.log('7 + 13 =', tambah(7, 13));

function hitung(nilai, pengali =2) {
    return nilai * pengali;
}
console.log(hitung(5));
console.log(hitung(5, 3));

const pesanGlobal = 'Saya ada di mana saja';
function cekScope() {
    const pesanLokal = 'Saya hanya ada di dalam function ini';
    console.log(pesanGlobal);
    console.log(pesanLokal);
}

cekScope() 
console.log(pesanGlobal);

console.log('\n===latihan 01 ===');

function kurang (angka1, angka2) {
    const hasil = angka1 + angka2;
    return hasil;
}
const hasilpengurangan = kurang(10, 7);
console.log('\n10 - 7 =', hasilpengurangan);
console.log('12 - 6 =', kurang(12, 6));

function kali (a, b){
   const hasil = a * b;
   return hasil;
}
const hasilkali = kali(12, 2);
console.log('\n12 * 2 = ',hasilkali); 
console.log('10 * 3 =', kali(10, 3));

function bagi (a, b){
    const hasil = a / b;
    return hasil;
}
const hasilbagi = bagi(12, 2);
console.log('\n12 : 2 = ',hasilbagi); 
console.log('10 / 2 =', bagi(10, 2));

function tambah(a, b) {
    return a + b;
}

function kurang(a, b) {
    return a - b;
}

function kali(a, b) {
    return a * b;
}

function bagi(a, b) {
    if (b === 0) {
        return "Error: bagi dengan nol tidak bisa di lakukan";
    }
    return a / b;
}

function kalkulator(a, operator, b) {
    switch (operator) {
        case '+':
            return tambah(a, b);
        case '-':
            return kurang(a, b);
        case '*':
            return kali(a, b);
        case '/':
            return bagi(a, b);
        default:
            return "Operator tidak terdeteksi";
    }
}
console.log(kalkulator(12, '+', 5));
console.log(kalkulator(19, '-', 4)); 
console.log(kalkulator(20, '*', 2)); 
console.log(kalkulator(112, '/', 4));
console.log(kalkulator(10, '/', 0)); 