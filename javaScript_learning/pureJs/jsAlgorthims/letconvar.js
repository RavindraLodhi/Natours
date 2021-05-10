
const myName = "ravi"
function letM(){
 
console.log("first",i);

 for (var i = 0; i < 5; i++) {
   console.log(i);
     
 }
 console.log("end",i);
}



const myAwesomeArray = [1, 2, 3, 4, 5]
var arr1 = myAwesomeArray.forEach(x => x * x)
console.log(arr1);

//>>>>>>>>>>>>>return value: undefined

var arr2 = myAwesomeArray.map(x => x * x)
console.log(arr2);

//>>>>>>>>>>>>>return value: [1, 4, 9, 16, 25]
letM()
