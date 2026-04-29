console.log("=== Tugas 2: Visualisasi Pertumbuhan Big O ===");
function fn_O1(n) {
  return n + 1;
}
function fn_On(n) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}
function fn_OnLogn(n) {
  let total = 0;
  const logN = Math.floor(Math.log2(n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < logN; j++) {
      total++;
    }
  }
  return total;
}
function fn_On2(n) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total++;
    }
  }
  return total;
}
function ukurWaktu(nama, fn, n) {
  const mulai = Date.now();
  fn(n);
  const selesai = Date.now();
  console.log(`${nama} untuk n=${n}: ${selesai - mulai} ms`);
}
function benchmarkSemua(ukuranData) {
  for (const n of ukuranData) {
    console.log(`\nUkuran data: ${n}`);

    ukurWaktu("O(1)", fn_O1, n);
    ukurWaktu("O(n)", fn_On, n);
    ukurWaktu("O(n log n)", fn_OnLogn, n);
    ukurWaktu("O(n²)", fn_On2, n);
  }
}

benchmarkSemua([100, 500, 1000, 5000, 10000]);
/*
Komentar hasil pengamatan:

1. O(1) cenderung selalu sangat cepat karena hanya menjalankan satu operasi.
2. O(n) bertambah seiring bertambahnya ukuran input.
3. O(n log n) lebih lambat dari O(n), tetapi masih lebih baik daripada O(n²).
4. O(n²) paling lambat karena menggunakan nested loop n x n.
5. Pola pertumbuhan ini konsisten dengan teori Big O.
*/