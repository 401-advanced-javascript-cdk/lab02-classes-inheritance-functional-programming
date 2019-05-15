'use strict';

function List() {
  this.length = 0;
  this.data = {};

}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.checkForArguments(item);
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length - 1];
  delete this.data[this.length - 1];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  let returnValue = this.data[0];
  for (let i = 0; i < this.length; i++) {
    this.data[i] = this.data[i+1];
  }
  delete this.data[this.length - 1];
  this.length--;
  return returnValue;
};

List.prototype.unshift = function(value) {
  this.checkForArguments(value);
  for(let i = this.length - 1; i > -1; i--) {
    this.data[i+1] = this.data[i];
  }
  this.data[0] = value;
  this.length++;
};

List.prototype.forEach = function(callback) {
  this.checkForArguments(callback);
  if (typeof callback !== 'function') {
    throw new Error('forEach requires a function argument');
  }
  for(let i = 0; i < this.length; i++) {
    this.data[i] = callback([this.data[i]]);
  }
};

List.prototype.checkForArguments = function(value) {
  if(!value) {
    throw new Error('method called without arguments');
  }
  return true;
};

module.exports = List;