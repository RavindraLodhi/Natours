//The Array.of() method creates a new Array instance from a variable number of arguments,
// regardless of number or type of the arguments.
function of(){

    return Array.of({"fName":"ravi"},{"fName":"ram"},{"fName":"raju"})
}

function from(){
    return Array.from([1, 2, 3], x => x * x)
}
 console.log("of : ",of());
 console.log("from : ",from());
 
 









 //difine of :- when we pass 1,2,3 etc in to the of mathod it will return array.

 //difine of from :-  with help of from when we pass any string then it will returns array of charator of the string. 
 //also we can parform of the array.
 