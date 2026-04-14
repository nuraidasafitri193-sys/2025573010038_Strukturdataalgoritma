const dataMahasiswa = [
  { nama: 'aida', nilai: 85 },
  { nama: 'naya', nilai: 70 },
  { nama: 'aulia', nilai: 90 },
  { nama: 'Dewi', nilai: 60 },
  { nama: 'fara', nilai: 75 },
  { nama: 'dinda', nilai: 49 }
];

function hitungStatistik(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce((acc, mhs, index, arr) => {
    acc.total = arr.length;
    acc.jumlahNilai += mhs.nilai;
    acc.tertinggi = Math.max(acc.tertinggi, mhs.nilai);
    acc.terendah = Math.min(acc.terendah, mhs.nilai);

    if (index === arr.length - 1) {
      acc.rataRata = acc.jumlahNilai / arr.length;
    }

    return acc;
  }, {
    total: 0,
    jumlahNilai: 0,
    rataRata: 0,
    tertinggi: -Infinity,
    terendah: Infinity
  });

  delete hasil.jumlahNilai; 
  return hasil;
}
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}
function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map(mhs => {
    let grade;
    if (mhs.nilai >= 85) grade = 'A';
    else if (mhs.nilai >= 75) grade = 'B';
    else if (mhs.nilai >= 65) grade = 'C';
    else if (mhs.nilai >= 50) grade = 'D';
    else grade = 'E';

    return { ...mhs, grade };
  });
}

const statistik = hitungStatistik(dataMahasiswa);
const mahasiswaLulus = filterLulus(dataMahasiswa, 70);
const mahasiswaDenganGrade = tambahGrade(dataMahasiswa);

console.log("=== Statistik Mahasiswa ===");
console.log(`Total        : ${statistik.total}`);
console.log(`Rata-rata    : ${statistik.rataRata.toFixed(2)}`);
console.log(`Tertinggi    : ${statistik.tertinggi}`);
console.log(`Terendah     : ${statistik.terendah}`);

console.log("\n=== Mahasiswa Lulus (>= 70) ===");
mahasiswaLulus.forEach(mhs => {
  console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}`);
});

console.log("\n=== Data Mahasiswa + Grade ===");
mahasiswaDenganGrade.forEach(mhs => {
  console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}, Grade: ${mhs.grade}`);
});