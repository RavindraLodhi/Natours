let integerReverse = (itr) =>{
  let conevrtIntegerToString = itr.toString();
  return parseInt(conevrtIntegerToString.split("").reverse().join(""));
}
console.log(integerReverse(1234));