const logicalOprator = (a,b,c) =>{
  //return a || b || c;
  return a && b && c;
}

console.log(logicalOprator(3,0,4));

function sayHello(){
  return "Hello " + this.fname +' ' + this.lName;
}


var obj2 = {fname: "Sandy",lName: "Sharma"};
var obj3 = {fname: "Sandy",lName: "Verma"};

console.log(sayHello.call(obj2));
console.log(sayHello.call(obj3));

///secode exaple 

 function applyAllowParameter(massage){
   return this.name  + " says " + massage;
 }
 var obj = {name: "Sandy"};

console.log( applyAllowParameter.call(obj,'i am learning javaScript....'));


//call() method allows an object to use the method (function) of another object.