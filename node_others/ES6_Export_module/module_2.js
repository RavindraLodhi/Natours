class Calculator {

constructor(name){
    console.log("name",name);
}

 addNumber(a,b){
     return  new Promise((resolve,reject) => {
       let c = a+b ;
       if(c == 5) resolve(c)
       reject("numbe did not match..")
     }) 
 }

 multiply(a,b){
   return a*b;
 }
    
}

module.exports = Calculator;