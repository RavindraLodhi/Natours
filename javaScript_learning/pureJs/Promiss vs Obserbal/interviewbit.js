//call


const funCall = function(lng1,lng2){
    return `Hello :  ${this.name}
U are old  : ${this.age}
You Knows ${lng1} and ${lng2}


`
}
let obj = {
    name : "Ravindra",
    age : 79
};
// console.log(funCall.call(obj,"java","html"));

const funApply = function(lng1,lng2){
    return `Hello :  ${this.name}
U are old  : ${this.age}
You Knows ${lng1} and ${lng2}`

}

// console.log(funApply.apply(obj,["java","html"]));


const funBind = function(lng1,lng2){
    return `Hello :  ${this.name}
U are old  : ${this.age}
You Knows ${lng1} and ${lng2}
`
}


console.log(funBind.bind(obj)("ss","sdss"));

// call back function

const outerFun = ()=>{
    let count = 0;
    return ()=>{
    return count++;
    }
}

const innerFun = outerFun();
for (let index = 0; index < 20; index++) {
    console.log(innerFun());
}


//constrictor 
let name;
let age

const funConstructor = function(name, age){
   this.name = name;
   this.age = age;
   console.log(this.name);
   console.log(this.age);
};

// arrow function and normal fuction


const objArrow = {
    name : "ravi",
    arrowFun : () => objArrow.name
}

const objNormFun = {
    name : "ravi",
    normFun : function(){
        return this;
    }
}

console.log(objArrow.arrowFun());
console.log(objNormFun.normFun());

//let const and var 


let letExam = 0;
var varExa = 0;
const letExa = () => {
      if(true){
       let names  = "ravi";
       var age = 34;
      }
      console.log(age);
      //console.log(names);
    }     
  
letExa();

//rest parameter and spread operator

const addNumbers = (...arg) =>{
    let sum = 0;
   for (let index = 0; index < arg.length; index++) {
     sum = sum + arg[index];
   }
   return sum;
};

console.log(addNumbers(1,3,4,5,6));

const addspreadOpr = (a,b,c,d) =>{
    return a+b+c+d;
}
console.log(addspreadOpr(...[1,2,3,4]));


function* genFunc(){
    let count = 0;
    for (let i = 0; i < 2; i++) {
        count++;
        yield i;
    }
    return count;
}

let genrator = genFunc();
console.log(genrator.next());
console.log(genrator.next());
console.log(genrator.next());


//weakset

let set = new Set(1,2,3,4,5,5);
console.log("zzz");





  




