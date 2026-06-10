class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);

        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
        console.log(`Pushed: ${val}`);
    }

    pop() {
        if (this.stack.length === 0) return null;

        const poppedVal = this.stack.pop();

        if (poppedVal === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
        console.log(`Popped: ${poppedVal}`);
        return poppedVal;
    }

    top() {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        if (this.minStack.length === 0) {
            console.log("Stack kosong!");
            return null;
        }
        const minVal = this.minStack[this.minStack.length - 1];
        console.log(`Current Min: ${minVal}`);
        return minVal;
    }
}

console.log("--- PENGUJIAN MIN STACK ---");
const myStack = new MinStack();

myStack.push(5);
myStack.push(3);
myStack.push(7);
myStack.push(2);

console.log("---");
myStack.getMin(); 

myStack.pop();
myStack.getMin(); 

myStack.pop();
myStack.getMin(); 