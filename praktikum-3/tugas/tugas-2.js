function pangkat(basis, eksponen) {
  
  if (eksponen === 0) return 1;
  return basis * pangkat(basis, eksponen - 1);
}

console.log("=== Uji Pangkat ===");
console.log(`2^3 = ${pangkat(2, 3)}`);  
console.log(`5^0 = ${pangkat(5, 0)}`);  
console.log(`3^4 = ${pangkat(3, 4)}`);

function balikString(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

console.log("\n=== Uji Balik String ===");
console.log(`buku -> ${balikString("buku")}`);
console.log(`kelas -> ${balikString("kelas")}`);
console.log(`papan -> ${balikString("papan")}`);

function cekPalindrom(str) {
  const hasilBalik = balikString(str);
  return str === hasilBalik;
}

console.log("\n=== Uji Palindrom ===");

const kata = ["ayam", "rumah", "kipas", "hai guyss"];

kata.forEach(k => {
  console.log(`${k} -> ${cekPalindrom(k) ? "Palindrom" : "Bukan Palindrom"}`);
});