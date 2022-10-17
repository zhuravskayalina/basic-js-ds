const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
    constructor(element) {
        this.stack = [];
        this.length = this.stack.length;
    }

    push(element) {
        this.stack.push(element);
        this.length++;
    }

    pop() {
        if (!this.length) throw new Error('Already empty stack');
        this.length--;
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.length - 1]
    }
}

module.exports = {
    Stack
};
