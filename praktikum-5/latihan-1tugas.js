console.log('\n latihan identifikasi kompleksitas-1.js');

function fungsiA(n){
    return n * 2;
}

function fungsiB(n){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            let x = i + j;
        }
    }
}

function fungsiC(n){
    for(let i = 1; i < n; i *= 2){
        let x = i;
    }
}

function fungsiD(arr){
    arr.forEach(x =>
        arr.forEach(y =>
            arr.forEach(z =>{
                let a = x + y + z;
            })
        )
    );
}

function hitungKompleksitas(n, fn, bigO){
    const start = Date.now();
    fn(n);
    const end = Date.now();

    console.log("Big O:", bigO);
    console.log("Waktu eksekusi:", (end - start), "ms");
    console.log("----------------------");
}

let n = 50;

console.log("Fungsi A");
hitungKompleksitas(n, fungsiA, "O(1)");

console.log("Fungsi B");
hitungKompleksitas(n, fungsiB, "O(n^2)");

console.log("Fungsi C");
hitungKompleksitas(n, fungsiC, "O(log n)");

console.log("Fungsi D");
const arr = Array.from({length: n}, (_, i) => i);

const start = Date.now();
fungsiD(arr);
const end = Date.now();

console.log("Big O: O(n^3)");
console.log("Waktu eksekusi:", (end - start), "ms");