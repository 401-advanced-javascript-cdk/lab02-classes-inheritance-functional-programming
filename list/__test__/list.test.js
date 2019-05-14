'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
// const List = require('../list-constructor.js');

const prepList = () => {
  let stuff = new List();
  stuff.push('a');
  stuff.push('b');
  stuff.push('c');
  return stuff;
}
describe('List Data Structure', () => {

  it('starts with a length of 0 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let list = prepList();
    expect(list.length).toEqual(3);
    expect(list.data[1]).toEqual('b');
  });

  it ('throws an error if push is called without an argument', () => {
    let list = prepList();
    expect(() => list.push()).toThrow();
  });

  it('shifts 1 item off the front of the data set', () => {
    let list = prepList();
    let shifted = list.shift();
    expect(list.length).toEqual(2);
    expect(list.data[0]).toEqual('b');
    expect(shifted).toEqual('a');
  });

  it('unshifts an item to the front of the data set', () => {
    let list = prepList();
    expect(list.length).toEqual(3);
    expect(list.data[0]).toEqual('a');
    list.unshift('to the front');
    expect(list.length).toEqual(4);
    expect(list.data[0]).toEqual('to the front');
  });

  it('throws an error if unshift is called without an argument', () => {
    let list = prepList();
    expect(() => list.unshift()).toThrow();
  });

  it('Can apply a callback with forEach', () => {
    let list = prepList();
    list.forEach(value => value = 'altered by callback');
    expect(list.data[0]).toEqual('altered by callback');
    expect(list.data[1]).toEqual('altered by callback');
    expect(list.data[2]).toEqual('altered by callback');
  });

  it('throws an error if forEach is called without a callback', () => {
    let list = prepList();
    expect(() => list.unshift()).toThrow();
  });

  it('throws an error in forEach if called with any argument that is not a function', () => {
    let list = prepList();
    let nonFuncs = [100, 'not a function', {this: 'fail'}, [1,2,3], true];
    nonFuncs.forEach(arg => {
      expect(() => list.forEach(arg)).toThrow();
    });
  })
});
