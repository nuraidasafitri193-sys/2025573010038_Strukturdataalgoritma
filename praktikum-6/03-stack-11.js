class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
}
prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
}

removeHead() {
    if (!this.head) return null;

    const removedData = this.head.data;
    this.head = this.head.next;
    this.length--;

    return removedData;
}
getHead() {
    if (!this.head) return null;
    return this.head.data;
}

isEmpty() {
    return this.length === 0;
}

size() {
    return this.length;
}

print() {
    if (!this.head) {
        console.log("[Stack kosong]");
        return;
    }

    let current = this.head;
    let result = "";

    while (current) {
        result += current.next ? `[${current.data}]-> ` : `[${current.data}]`;
        current = current.next;
    }

    while (current) {
        result += current.next ? `[${current.data}]->` : `[${current.data}]`;
        current = current.next;
    }
    console.log(result);
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

        push(data) {
        this.list.prepend(data);
    }

    pop() {
        return this.list.removeHead();
    }

    peek() {
        return this.list.getHead();
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    size() {
        return this.list.size();
    }
    print() {
        this.list.print();
        }
}    

    const stack = new Stack();

    console.log("=== push data===");
    stack.push("buka aplikasi");
    stack.push("ketik nama");
    stack.push("ketik email");
    stack.push("klik submit");
    
    stack.print();

    console.log("\n== peek ===");
    console.log("data paling atas:", stack.peek());

    console.log("\n===pop===");
    console.log("data dihapus:", stack.pop());

    console.log("\n=== Size ===");
console.log("Jumlah data:", stack.size());

console.log("\n=== Simulasi Undo ===");

const undoStack = new Stack();

const aksi = [
  "Menulis judul",
  "Menulis paragraf pertama",
  "Menulis paragraf kedua",
  "Menghapus kata",
  "Menambahkan gambar"
];

for (let i = 0; i < aksi.length; i++) {
    console.log("Aksi:", aksi[i]);
    undoStack.push(aksi[i]);
}

console.log("\nisi undo stack:");
undoStack.print();

console.log("\nundo 1:", undoStack.pop());
console.log("undo 2:", undoStack.pop());
console.log("undo 3:", undoStack.pop());

console.log("\nsisa stack:");
undoStack.print();