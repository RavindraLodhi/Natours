let MyStr = "Hello world!"

let reverseStr = (str)=>{
    // split the string  in will convert in array.
   return (str.split("").reverse().join(""));
}

//console.log(reverseStr(MyStr));


//without using any mathod

let withouMathodReverseString = (str) =>{
    let temp = "";
    for(let i = str.length - 1 ; i >= 0 ; i--){
        temp += str[i];
    }
return temp;
}


//console.log(withouMathodReverseString("Hello"));

numberRevers = (num) => {
   let reverseNumber = 0; 
    while (0 < num) {
    reverseNumber = (reverseNumber*10) + num % 10;;
    num = num/10 | 0;
   }
   return reverseNumber;
}
//numberRevers(789);

let palindromNumber = (number) => {
    return (number == numberRevers(number))
}

//console.log(palindromNumber(12421));


// let removeDuplicates  = (arr) =>{
//     let uniq = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//           if(arr[i] == arr[j]){
//             console.log(arr[i]);
//           }
//         }
//     }
// }
function remove_duplicates(arr) {
    var obj = {};
    var out_arr = [];
    for (var i = 0; i < arr.length; i++) {
        console.log(i);
        obj[arr[i]] = true;
        console.log(obj);
    }
    console.log(obj);
    // for (var key in obj) {
    //     out_arr.push(key);
    // }
    // return out_arr;
}

console.log(remove_duplicates([5,1,2,1,2,3])); 