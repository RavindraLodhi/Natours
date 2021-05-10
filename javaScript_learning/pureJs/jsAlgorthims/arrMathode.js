let fruits = ['Apple', 'Banana', "Mango", "Papaya"]
function mathoseArr(value) {
    var newarr;
    switch (value) {
        case "push":
            fruits.push("Orang");
            newarr = fruits;
            break;
        case "pop":
            fruits.pop();
            newarr = fruits;
            break;
        case "shift":
            fruits.shift();
            newarr = fruits;
            break;
        case "unshift":
            fruits.unshift("Orang");
            newarr = fruits;
            break;
        default:
            break;
    }
    return newarr;

}
//push(): Add items to the end of an array
console.log(mathoseArr("push"));
//pop(): Remove an item from the end of an array
console.log(mathoseArr("pop"));
//shift(): Remove an item from the beginning of an array
console.log(mathoseArr("shift"));
//unshift(): Add items to the beginning of an array
console.log(mathoseArr("unshift"));


//The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

var from =  Array.from("ravi");
console.log(from);

//The Array.isArray() method determines whether the passed value is an Array.
var isArray =  Array.isArray({"num":924});
console.log(isArray);

//The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
var arrarro2 =  Array.of("ravi","ram","surru");
//console.log(arr1)




