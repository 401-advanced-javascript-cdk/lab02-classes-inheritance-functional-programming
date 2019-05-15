'use strict';

const checkForArguments = (value) => {
  if(!value) {
    throw new Error('method called without arguments');
  }
  return true;
};

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    checkForArguments(item);
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return returnValue;
  }

  shift() {
    let returnValue = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return returnValue;
  }

  unshift(value) {
    checkForArguments(value);
    for(let i = this.length - 1; i > -1; i--) {
      this.data[i+1] = this.data[i];
    }
    this.data[0] = value;
    this.length++;
  }

  forEach(callback) {
    checkForArguments(callback);
    if (typeof callback !== 'function') {
      throw new Error('forEach requires a function argument');
    }
    for(let i = 0; i < this.length; i++) {
      this.data[i] = callback([this.data[i]]);
    }
  }
}

module.exports = List;