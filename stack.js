'use strict';

class Node {
    constructor(data, next) {
      this._data = data;
      this._next = next;
    }
  }
  
  class Stack {
    constructor(maxSize = 30) {
      this._maxSize = maxSize;
      this._size = 0;
      this._top = null;
    }
    /**
     *
     * @param {*} value
     */
    push(value) {
      if (this._size === this._maxSize) {
        throw new RangeError('Stack overflow');
      }
      this._top = new Node(value, this._top);
      this._size++;
    }
    pop() {
      if (!this.isEmpty) {
        const value = this._top._data;
        this._top = this._top._next;
        this._size--;
        return value;
      }
    }
    get peek() {
      return this._top?._data;
    }
    get isEmpty() {
      return this._size === 0;
    }
  }
  
// debugger
function palindrom (str) {
    const brackerStack = new Stack();
    str = str.toLowerCase().replace(/\s/g,'');
        const half = Math.floor(str.length / 2);
        for (let i = 0; i < half; i++) {
            brackerStack.push(str[i]);
        }
        const half2 = Math.ceil(str.length / 2);
        for (let i = half2; i < str.length; i++) {
            if (str[i] === brackerStack.peek){
                brackerStack.pop();
            } else{
                return false;
            }
            

        }
    return brackerStack.isEmpty;
}


console.log(palindrom('tenet'));