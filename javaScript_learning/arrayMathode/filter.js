
 var arr = [1,2,3,4,5,6,7,8,9]
function filter(){
    var temp = [];
    return arr.filter(item=> item == 1)
}
console.log(filter());
console.log(arr);

function find(){
return arr.find(element=> element==7)
}
console.log(find());

 
const callback = (element)=> element == 7
function findIndex(){
   return arr.findIndex(callback)
}
console.log("findeIndex",findIndex());
var arr1 = [1,2,[4,5]];

function flat1(){
    console.log(arr1.flat());
    
}
console.log("flat",flat1());

