class Node {
    constructor(data){
    this.data = data;
    this.next = null;
    }
}

class LinkedList {
    constructor() {
    this.head = null;
    this.size = 0;
}

append(data) {
    const newNode = new Node(data);
    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) current = current.next;
        current.next= newNode;
    }
    this.size++;
}

prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

insertAt(data, index) {
    if (index < 0 || index > this.size) {
        console.log(' index di luar batas!'); return;
    }
    if (index === 0) {this.prepend(data); return; }
    const newNode = new Node(data);
    let current = this.head;
    for (let i = 0; i < index -1; i++) current = current.next;
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
} 

delete(data) {
    if (!this.head) return false;
    if(this.head.data === data) {
        this.head = this.head.next;
        this.size --;
        return true;
    }
    let current = this.head;
    while (current.next) {
        if (current.next.data === data) {
            current.next = current.next.next;
            this.size--;
            return true;
    }
    current = current.next;
}
return false;
} 

search(data) {
    let current = this.head;
    let index = 0;
    while (current) {
        if (current.data == data) return index;
        current = current.next;
        index++;
    }
    return -1;
}

print() {
    if (!this.head) { console.log('[list kosong]'); return;}
    let result = '';
    let current = this.head;
    while (current) {
        result += current.next ? `[${current.data}] → `: `[${current.data}]`;
        current = current.next;
    }
    console.log('', result,` (size:${this.size})`);
}

reverse() {
    let prev = null;
    let current = this.head;
    while(current){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;    
}
getAt(index) {
    if (index < 0 ||index >= this.size) return null;

    let current = this.head;
    let count = 0;

    while (current) {
        if (count === index) return current.data;
        count++
    }
    return null;
}
deleteAt(index) {
    if (index < 0 || index >= this.size) return null;
    
    if (index === 0) {
        const deleteData = this.head.data;
        this.head = this.head.next;
        this.size--;
        return deleteData;
    }
    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < index) {
        previous = current;
        current = current.next;
        count++;
    }
    previous.next = current.next;
    this.size--;

    return current.data;
}
indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current){
    if (current.data === data) return index;
    current = current.next;
    index++;

    }
    return -1;
}
isEmpty() {
    return this.size === 0;
}
clear() {
    this.head = null;
    this.size = 0;
}
toArray() {
    const arr = [];
    let current = this.head;
    while (current) {arr.push(current.data); current = current.next; }
    return arr;
    }
}

const ll = new LinkedList();
console.log('===\n prepend===');
ll.append(10); ll.append(20);ll.append(30); ll.append(40);
ll.print();

console.log('\n=== prepend ===');
ll.prepend(5);
ll.print();

console.log('\n=== Insert di indeks 2 ===');
ll.insertAt(15, 2);
ll.print();
console.log('\n=== Search ===');
console.log(' Indeks nilai 20:', ll.search(20));
console.log(' Indeks nilai 99:', ll.search(99));
console.log('\n=== Delete 20 ===');
ll.delete(20);
ll.print();

console.log('\n=== Reverse ===');
ll.reverse();
ll.print();

console.log("\n===latihan 1===");
console.log("getAt(0):", ll.getAt(0));
console.log("getAt(2):", ll.getAt(2));
console.log("getAt(99):", ll.getAt(99));

console.log("indexOf(30):", ll.indexOf(30));
console.log("indexOf(100):", ll.indexOf(100));

console.log("isEmpty():", ll.isEmpty());

console.log("\n=== Delete At Index 1 ===");
console.log("Data dihapus:", ll.deleteAt(1));
ll.print();

console.log("\n=== Clear List ===");
ll.clear();
ll.print();

console.log("isEmpty():", ll.isEmpty());
