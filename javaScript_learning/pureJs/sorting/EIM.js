const fizz_buzz_second = () =>{
    for (let i = 1; i < 100; i++) {
         if(i%3 === 0){
              if(i%5==0) console.log(i," : buzz_buzz");
              else console.log(i ," :fizz");
         }else if(i%5 == 0) console.log(i ," :buzz");
    }
}

// fizz_buzz_second();

// let firstString =   "abcdefg"
// let secondString =   "1234"

// const finalStr = (fstr,sString) => {
//    let finalString  = "";
//    let length = fstr.length > sString.length ? sString.length : sString.length
//    for (let i = 0; i <  length; i++) {
//      finalString = finalString +  fstr[i] + sString[i];
//    }
//    if(firstString.length > length){
//       finalString = finalString +  fstr.slice(length)
//    }else {
//     finalString +=  sString.slice(length)
//    }

//    return finalString;
// }

// console.log(finalStr(firstString ,secondString));

// let obj = {
//     a : 10,
//     b : "abc",
//     c : true
// }

// const addVlues  = (obj) => {
//     let sum = "";
//     for (const el in obj) {
//         if (obj.hasOwnProperty(el)) {
//            sum = sum +  obj[el]
//         }
//     }
//     return sum ;

// }

// console.log(addVlues(obj));

A = [{id: 10, status: true}, {id: 20, status: false}, {id: 30, status: true}]
B = [{id: 10, value: "100"}, {id: 20, value: "200"}, {id: 30, value: "300"}]

const joinArr = (arrA , arrB) => {
    let c = [...arrA];
    for (let i = 0; i < arrA.length; i++) {
       c[i].value = arrB[i].value;
    }
    return c;
}


console.log(joinArr(A,B));

//Output:
//C = [{id: 10, status: true, value: "100"}, {id: 20, status: false, value: "200"}, {id: 30, status: true, value: "300"}]

