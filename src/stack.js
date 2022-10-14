const { NotImplementedError } = require('../extensions/index.js');

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
    this.lenght = this.stack.length;
  }
  push(element) {
    this.stack.push(element);
    return this.stack;
  }

  pop() {
    if (!this.lenght) throw new Error('Already empty stack');
    this.stack.pop();
  }

  peek() {
    return this.stack[this.lenght - 1]
  }
}

module.exports = {
  Stack
};
