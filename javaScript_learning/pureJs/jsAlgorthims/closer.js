
//link for refrence : https://www.tutorialsteacher.com/javascript/closure-in-javascript
// JavaScript is the world's most misunderstood programming language. Some believe that it lacks the property of information hiding because objects 
// cannot have private instance variables and methods. But this is a misunderstanding. 
// JavaScript objects can have private members.

// defination :- Closure means that an inner function always has access to the vars and parameters of its outer function,
// even after the outer function has returned.

// use :- Closure is useful in hiding implementation detail in JavaScript.
// In other words, it can be useful to create private variables or functions.
var funRef = function OuterFunction() {
    var outerVariable = 1;
    function InnerFunction() {
        var InnerFunction1 = 400;
        function InnerFunction1() {
            return InnerFunction1
        }
        return InnerFunction1 + outerVariable;
    }
    return InnerFunction();
}
console.log("closer example:-" + funRef());

// var ss = function Counter() {
//     console.log("ravi");
//     var counter = 0;
//     function IncreaseCounter() {
//         console.log("ram");
//         return counter += 1;
//     };
//     return IncreaseCounter;
// }

// var counter = ss();

// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

// In the above example, outer function Counter returns the reference of inner function IncreaseCounter().
// IncreaseCounter increases the outer variable counter to one. So calling inner function multiple time will 
// increase the counter to one each time.Closure is valid in multiple levels of inner functions.

// function Counter() {

//     var counter = 0;
//     setTimeout( function () {
//         var innerCounter = 0;
//         counter += 1;
//         console.log("counter = " + counter);
//         setTimeout( function () {
//             counter += 1;
//             innerCounter += 1;
//             console.log("counter = " + counter + ", innerCounter = " + innerCounter)
//         }, 500);

//     }, 1000);
// };

// Counter();

//The following example shows how to create private functions & variable.

// var counter = function () {
//     var privateCounter = 0;
//     function changeBy(val) {
//         privateCounter += val;
//     }
//     return {
//         increment: function () {
//             changeBy(1);
//         },
//         decrement: function () {
//             changeBy(-1);
//         },
//         value: function () {
//             return privateCounter;
//         }
//     };
// }();

// console.log(counter.value()); // 0
// counter.increment();
// counter.increment();
// console.log(counter.value()); // 2
// counter.decrement();
// console.log(counter.value()); // 1


