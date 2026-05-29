class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function buatList(arr) {
  if (arr.length === 0) return null;

  const head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }

  return head;
}

function cetakList(head) {
  let result = "";
  let current = head;

  while (current) {
    result += current.next
      ? `[${current.data}] -> `
      : `[${current.data}]`;

    current = current.next;
  }

  console.log(result);
}

function palindromLL(head) {
  const arr = [];

  let current = head;

  while (current) {
    arr.push(current.data);
    current = current.next;
  }

  let kiri = 0;
  let kanan = arr.length - 1;

  while (kiri < kanan) {
    if (arr[kiri] !== arr[kanan]) {
      return false;
    }

    kiri++;
    kanan--;
  }

  return true;
}

function hapusNDariAkhir(head, n) {
  const dummy = new Node(0);
  dummy.next = head;

  let cepat = dummy;
  let lambat = dummy;

  for (let i = 0; i <= n; i++) {
    cepat = cepat.next;
  }

  while (cepat) {
    cepat = cepat.next;
    lambat = lambat.next;
  }

  lambat.next = lambat.next.next;

  return dummy.next;
}

function tengahLinkedList(head) {
  let lambat = head;
  let cepat = head;

  while (cepat && cepat.next) {
    lambat = lambat.next;
    cepat = cepat.next.next;
  }

  return lambat;
}

console.log("=== TEST PALINDROM ===");

let p1 = buatList([1, 2, 3, 2, 1]);
console.log(palindromLL(p1));

let p2 = buatList([1, 2, 2, 1]);
console.log(palindromLL(p2));

let p3 = buatList([1, 2, 3]);
console.log(palindromLL(p3));

console.log("\n=== TEST HAPUS N DARI AKHIR ===");

let h1 = buatList([1, 2, 3, 4, 5]);
h1 = hapusNDariAkhir(h1, 2);
cetakList(h1);

let h2 = buatList([10, 20, 30, 40]);
h2 = hapusNDariAkhir(h2, 1);
cetakList(h2);

let h3 = buatList([7, 8, 9]);
h3 = hapusNDariAkhir(h3, 3);
cetakList(h3);

console.log("\n=== TEST NODE TENGAH ===");

let t1 = buatList([1, 2, 3, 4, 5]);
console.log("Tengah:", tengahLinkedList(t1).data);

let t2 = buatList([10, 20, 30, 40]);
console.log("Tengah:", tengahLinkedList(t2).data);

let t3 = buatList([7, 8, 9]);
console.log("Tengah:", tengahLinkedList(t3).data);