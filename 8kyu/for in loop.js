// *** D e s c r i p t i o n ***//

// The function giveMeFive accepts 1 parameter, obj, which is an object.

// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

// At the end, return your array.

// You should use for..in in your code, otherwise your solution may not pass this kata.

//***  S o l u t i o n ***//

function giveMeFive(obj){
  let fiveLengthWords = []
  //coding here
 for (let key in obj){
   if(key.length === 5 ){
     // console.log(key)
    fiveLengthWords.push(key)}
 
   if(obj[key].trim().length === 5){
     // console.log(obj[key].trim())
    fiveLengthWords.push(obj[key])} 
 }
return fiveLengthWords
}

// not using for in loop
function giveMeFive(obj){
    return Object
    .entries(obj)
    .join(',')
    .split(',')
    .filter(w => w.length === 5) 

}