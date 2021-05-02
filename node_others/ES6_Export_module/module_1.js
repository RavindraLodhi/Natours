const Calculator = require("./module_2");

const calculator = new Calculator("Ram");

calculator.addNumber(2,3).then(sum => {
console.log(sum);
}).catch(err => {
    console.log(err);
})
console.log(calculator.multiply(2,5));