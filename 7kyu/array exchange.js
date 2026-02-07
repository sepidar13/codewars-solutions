Description:
Array Exchange and Reversing

It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed. The arrays may be of unequal lengths, in which case you will have to expand the shorter one in-place.

Solution 
function exchangeWith(a, b) {
  // your code here
   let splicedArray = a.splice(0,a.length)
   let splicedOtherArray = b.splice(0,b.length)
   
   let reversedSplicedArray = splicedArray.reverse((a, b) => {b - a })
   let reversedSplicedOtherArray = splicedOtherArray.reverse((a, b) => {b - a})
   
a.push(...reversedSplicedOtherArray)
b.push(...reversedSplicedArray)
  return a, b

}