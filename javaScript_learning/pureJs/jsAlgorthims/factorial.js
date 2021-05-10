const factorial = (num) =>{

    for (let i = num - 1; 0 < i ; i--) {
        num = num * i
    }
    console.log("fact",num);
}


/// with the help of recursion
const recursion = (num)=>{
if(num==1)
    return 1;
    return num*recursion(num-1);
}

factorial(5)
console.log("Recursion :: "+recursion(5));
/** 4 * 3 * 2 * 1   = 24
 *  4 * 2
 *  4 * 3
 *  4 * 4 */ 