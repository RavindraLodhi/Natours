// The concat() method is used to merge two or more arrays. 
// This method does not change the existing arrays, but instead returns a new array.

function concatM(){
  var arr1 = ["a","b","c"]
  var arr2 = ["d","e","f"]
  var arr = [1,2,3]
  var arr3 = arr1.concat(arr2,arr)
  console.log(arr1);
  console.log(arr2);
  
    return arr3;
}

function concatStr(){
  var fName = "ravi";
  var lName = "Lodhi"
  var fullName  =  fName.concat(" ",lName)
  return fullName
}
console.log(concatM());
console.log("concatination string: ",concatStr());


