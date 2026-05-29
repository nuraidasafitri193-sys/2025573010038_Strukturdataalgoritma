class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.size++;
  }

  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log("Index di luar batas!");
      return;
    }

    if (index === 0) {
      this.prepend(data);
      return;
    }

    if (index === this.size) {
      this.append(data);
      return;
    }

    const newNode = new Node(data);
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    const previousNode = current.prev;

    previousNode.next = newNode;
    newNode.prev = previousNode;

    newNode.next = current;
    current.prev = newNode;

    this.size++;
  }

  delete(data) {
    if (!this.head) return false;

    if (this.head.data === data) {
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }

      this.size--;
      return true;
    }

    if (this.tail.data === data) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size--;
      return true;
    }

    let current = this.head;

    while (current) {
      if (current.data === data) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.size--;
        return true;
      }

      current = current.next;
    }

    return false;
  }
  reverse() {
    let current = this.head;
    let temp = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }

  printForward() {
    if (!this.head) {
      console.log("[List kosong]");
      return;
    }

    let current = this.head;
    let result = "";

    while (current) {
      result += current.next ? `[${current.data}] <-> ` : `[${current.data}]`;
      current = current.next;
    }

    console.log("Depan ke belakang:", result, `(size: ${this.size})`);
  }

  printBackward() {
    if (!this.tail) {
      console.log("[List kosong]");
      return;
    }

    let current = this.tail;
    let result = "";

    while (current) {
      result += current.prev ? `[${current.data}] <-> ` : `[${current.data}]`;
      current = current.prev;
    }

    console.log("Belakang ke depan:", result, `(size: ${this.size})`);
  }
}

const dll = new DoublyLinkedList();

console.log("=== Append ===");
dll.append(10);
dll.append(20);
dll.append(30);
dll.printForward();
dll.printBackward();

console.log("\n=== Prepend ===");
dll.prepend(5);
dll.printForward();
dll.printBackward();

console.log("\n=== Insert At Index 2 ===");
dll.insertAt(15, 2);
dll.printForward();
dll.printBackward();

console.log("\n=== Delete 20 ===");
dll.delete(20);
dll.printForward();
dll.printBackward();

console.log("\n=== Reverse ===");
dll.reverse();
dll.printForward();
dll.printBackward();

console.log("\nBukti append O(1):");
console.log("Karena append langsung menggunakan pointer tail, jadi tidak perlu traversal dari head ke akhir list.");