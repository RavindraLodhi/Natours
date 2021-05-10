/*arrow function has a shorter syntex compared to function expression.arrow functions are always anonymous*/

var arrow1 = ()=>{console.log("running arrow1");}
arrow1();

var arrow2 = (a,b)=>{console.log("values "+a +" and " + b);}
arrow2(10,20)

/*arrow function with rest parameter*/
var arrow3 = (a,...args)=>{console.log("value of a :"+a + "and value of rest parameter : "+args);}
arrow3(2,3,5,65,6,7,7,8,8,8,8)

/* how to return arrow function with parathises
note : if uses parathethis then have to use return if you don't use return then you will get undifined
*/
var arrow4 =(a,b)=>{return a*b}
console.log("return value :- "+arrow4(10,2));

var arrow5 = (a,b)=>a*b
console.log("return value :- "+arrow5(100,1));

