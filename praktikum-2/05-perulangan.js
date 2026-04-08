
console.log('=== For Loop: Hitung 1 sampai 5 ===');
for (let i = 1; i <= 5; i++) {
console.log(`Iterasi ke-${i}`);
}

console.log('\n=== While Loop: Countdown ===');
let hitung = 5;
while (hitung > 0) {
console.log(`Hitung mundur: ${hitung}`);
hitung--; 
}
console.log('Selesai!');

console.log('\n=== Bilangan Genap antara 1 - 20 ===');
for (let i = 1; i <= 20; i++) {
     if (i % 2 === 0) { 
          console.log(i + ' '); 
     }
}


console.log(''); 
console.log('\n=== Break dan Continue ===');
for (let i = 1; i <= 10; i++) {
if (i === 4) {
console.log(`Melewati angka ${i} (continue)`);
continue; // lewati angka 4, lanjut ke i=5
}
if (i === 8) {
console.log(`Berhenti di angka ${i} (break)`);
break; // hentikan loop di angka 8
}
console.log(`Angka: ${i}`);
}


console.log('\n=== latihan 5 ===');


// Segitiga bintang
for (let i = 1; i <= 5; i++) {
  let baris = "";
  
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  
  console.log(baris);
}