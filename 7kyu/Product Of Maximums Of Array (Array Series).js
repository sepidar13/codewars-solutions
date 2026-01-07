// *** D e s c r i p t i o n ***//

// Task
// Given an array/list [] of integers , Find the product of the k maximal numbers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.


//***  S o l u t i o n ***//

 function maxProduct(numbers,size){
  return numbers.sort((a, b) => a - b).slice(-size).reduce((a,c) => a * c)
}
