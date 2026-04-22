class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            return null;
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function cekKurungSeimbang(ekspresi) {
    const stack = new Stack();

    for (let char of ekspresi) {
        if (char === "(") {
            stack.push(char);
        }

        else if (char === ")") {
            if (stack.isEmpty()) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.isEmpty();
}

const daftarTes = [
    "(2 + 3) * (4 - 1)",
    "((a + b)",
    ")(",
    "((()))",
    "(a+b)*(c+d)"
];

daftarTes.forEach(ekspresi => {
    const hasil = cekKurungSeimbang(ekspresi);
    console.log(`'${ekspresi}' → Seimbang: ${hasil}`);
});