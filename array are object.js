// Description:
// In Javascript, Arrays are just a special kind of Object. Don't believe me? Try this...

// typeof []; // "object"
// This allows us to do some pretty cool things with Arrays that you may not even know, like adding methods. This is basically how jQuery works (what is returned is just an Array with all the jQuery methods shoved in).

// There should be a constructor function named magicArray which returns an array containing all arguments, with the methods in fn also attached. If the first argument is an Array, then it should enhance this array with the methods.

// Your task, should you choose to accept it, is to make an object named fn and add to it the following methods (we can do most of it natively, but just to prove the point):

// getFiltered: function(predicate) - Returns all the items in the array which pass the predicate in a magicArray;

// getRejected: function(predicate) - Returns all the items in the array which fail the predicate in a magicArray;

// getSplit: function(predicate) - Return an object with a "pass" property containing all the items which pass the predicate, and a property named "fail" containing all the items which did not (in a magicArray for each);

// count: function() - Return the length of the array;

// double: function() - Append all items in the array to itself in the same order. Return the array again with all methods. This should change the values of the source array;

// multiply: function(n) - Multiply all items in the array by n (this will only be called with valid numbers). Return the array with all methods. This should change the values of the source array;

// first: function() - Return an array with all methods, only containing the first item;

// last: function() - Return an array with all methods, only containing the last item;

// eq: function(n) - Return an array with all methods, only containing the item with the index of eg (e.g. 0 would return the first, 1 the 2nd etc.) — just like in jQuery.


//S O L U T I O N
const fn = {
  getFiltered(predicate) {
    return magicArray(this.filter(predicate));
  },
  getRejected(predicate) {
    return magicArray(this.filter(item => !predicate(item)));
  },
  getSplit(predicate) {
    return {
      pass: magicArray(this.filter(predicate)),
      fail: magicArray(this.filter(item => !predicate(item)))
    };
  },
  count() {
    return this.length;
  },
  double() {
    this.push(...this);
    return magicArray(this);
  },
  multiply(n) {
    for (let i = 0; i < this.length; i++) {
      this[i] *= n;
    }
    return magicArray(this);
  },
  first() {
    return magicArray([this[0]]);
  },
  last() {
    return magicArray([this[this.length - 1]]);
  },
  eq(n) {
    return magicArray([this[n]]);
  }
};

function magicArray(array) {
  const arr = Array.isArray(array) ? array : [...arguments];
  return Object.assign(arr, fn)
}
