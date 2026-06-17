function subArrayJumlahK(arr, k) {
    const map = new Map();
    map.set(0, 1); 
    
    let totalSubarray = 0;
    let prefixSum = 0;

    for (const num of arr) {
        prefixSum += num;
        
        if (map.has(prefixSum - k)) {
            totalSubarray += map.get(prefixSum - k);
        }
        
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return totalSubarray;
}

function karakterPertamaUnik(s) {
    const map = new Map();

    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}

function topKFrequent(arr, k) {
    const map = new Map();
    
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const sortedElements = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));

    return sortedElements.slice(0, k);
}

console.log('=== Tugas 2: Soal Klasik Hash Table ===\n');

console.log('1. Subarray Jumlah K');
console.log('Contoh [1,1,1], k=2 →', subArrayJumlahK([1, 1, 1], 2)); 

console.log('\n2. Karakter Pertama Unik');
console.log("Contoh 'leetcode' →", karakterPertamaUnik('leetcode')); 

console.log('\n3. Top K Frequent');
console.log('Contoh [1,1,1,2,2,3], k=2 →', topKFrequent([1, 1, 1, 2, 2, 3], 2));