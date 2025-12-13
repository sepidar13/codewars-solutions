// *** D e s c r i p t i o n ***//

// Your task is to extend the JavaScript Array object with methods 
// .first() and .last(), 
// so you can get the first respectively the last element of the array.


// ** S O L U T I O N **//
Array.prototype.first = function(){
  return this[0]
}
Array.prototype.last = function(){
  return this[this.length-1]
}