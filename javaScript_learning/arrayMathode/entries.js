const array1 = ['a', 'b', 'c'];

function entries(arr){
    return arr.entries()
}
var response = entries(array1)
console.log("response",response.next().value);
