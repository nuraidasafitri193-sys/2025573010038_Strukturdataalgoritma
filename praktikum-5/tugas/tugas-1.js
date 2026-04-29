console.log("=== Tugas 1: Analisis dan Refactor ===");
// =====================================================
// FUNGSI A: INTERSECTION DUA ARRAY
// =====================================================

// Time Complexity: O(n²)
// Space Complexity: O(k), k = jumlah elemen yang sama
function intersectionLambat(arr1, arr2) {
  const hasil = [];

  for (const x of arr1) {
    for (const y of arr2) {
      if (x === y && !hasil.includes(x)) {
        hasil.push(x);
      }
    }
  }

  return hasil;
}
// Time Complexity: O(n)
// Space Complexity: O(n)
function intersectionCepat(arr1, arr2) {
  const setArr2 = new Set(arr2);
  const hasil = [];

  for (const x of arr1) {
    if (setArr2.has(x) && !hasil.includes(x)) {
      hasil.push(x);
    }
  }

  return hasil;
}
// =====================================================
// FUNGSI B: KELOMPOK ANAGRAM
// =====================================================

// Time Complexity: O(n * k log k)
// n = jumlah kata, k = panjang rata-rata kata
// Space Complexity: O(n)
function kelompokAnagram(words) {
  const map = new Map();

  for (const word of words) {
    const key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  return Array.from(map.values());
}
// =====================================================
// FUNGSI C: ADA DUA ANGKA YANG JUMLAHNYA = KUADRAT ANGKA KETIGA
// =====================================================

// Time Complexity: O(n³)
// Space Complexity: O(1)
function cekKuadratLambat(arr) {
  for (let k = 0; k < arr.length; k++) {
    const target = arr[k] * arr[k];

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return true;
        }
      }
    }
  }

  return false;
}
// Time Complexity: O(n²)
// Space Complexity: O(n)
function cekKuadratCepat(arr) {
  for (let k = 0; k < arr.length; k++) {
    const target = arr[k] * arr[k];
    const seen = new Set();

    for (const angka of arr) {
      const pasangan = target - angka;

      if (seen.has(pasangan)) {
        return true;
      }

      seen.add(angka);
    }
  }

  return false;
}

console.log("\nFungsi A:");
console.log(intersectionLambat([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(intersectionCepat([1, 2, 3, 4], [3, 4, 5, 6]));

console.log("\nFungsi B:");
console.log(kelompokAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));

console.log("\nFungsi C:");
console.log(cekKuadratLambat([1, 2, 3, 4, 5]));
console.log(cekKuadratCepat([1, 2, 3, 4, 5]));

console.log("\n=== Benchmark ===");

const arrA1 = Array.from({ length: 3000 }, (_, i) => i);
const arrA2 = Array.from({ length: 3000 }, (_, i) => i + 1500);

let mulai = Date.now();
intersectionLambat(arrA1, arrA2);
console.log("Intersection Lambat:", Date.now() - mulai, "ms");

mulai = Date.now();
intersectionCepat(arrA1, arrA2);
console.log("Intersection Cepat :", Date.now() - mulai, "ms");

const kataBesar = ["eat", "tea", "tan", "ate", "nat", "bat"];

mulai = Date.now();
kelompokAnagram(kataBesar);
console.log("Kelompok Anagram:", Date.now() - mulai, "ms");

const arrC = Array.from({ length: 200 }, (_, i) => i + 1);

mulai = Date.now();
cekKuadratLambat(arrC);
console.log("Kuadrat Lambat:", Date.now() - mulai, "ms");

mulai = Date.now();
cekKuadratCepat(arrC);
console.log("Kuadrat Cepat :", Date.now() - mulai, "ms");