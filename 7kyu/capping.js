//D e s c r i p t i o n 
//create a function that accepts an array of names,and returns an array of each name with it's first letter capitalized and the remainder in lowercase 

//s o l u t i o n 
function capitalizeTheFirstLetterAndLowercaseTheRest(array){
return array.map(function(name){
return name.charAt(0).toUppercase() + name.slice(1).to lowercase()})
}