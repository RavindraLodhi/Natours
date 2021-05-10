let arr1 = [2, 4, 6, 8, 10, 1, 3, 5, 7];

//bubble sort
let sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

//console.log(sort(arr1));

const unsortedArray = [6, 2, 9, 3, 8, 4, 35, 16, 78, 44];

const arr2 = [1, 3, 5, 7];
const arr3 = [2, 4, 6, 8, 10];

let sortedArraySol = () => {
  let mergArr = [];
  const lenth = arr2.length;
  for (let i = 0; i < lenth; i++) {
    for (let j = 0; j < arr3.length; j++) {
      if (arr2[i] > arr3[j]) {
        mergArr.push();
      }
    }
    // arr3[arr3.length]  =  arr2[index]
  }
  return sort(arr3);
};

let arrayA = [1,3,5];
let arrayB = [2,8,10 ];
const arrayC = [];

function merge(a, b) {
  let arrayALenth = a.length - 1;
  let arrayBLength = b.length - 1;
  let bothLength = arrayALenth + arrayBLength + 1; 
  for (;  bothLength >= 0 ; bothLength--) {
   // arrayC[bothLength] = (a[arrayALenth] > b[arrayBLength] || arrayBLength < 0) ? arrayC[bothLength] = a[arrayALenth] : arrayC[bothLength] = b[arrayBLength] ;
    if (a[arrayALenth] > b[arrayBLength] || arrayBLength < 0) {
       // a[bothLength] = a[arrayALenth];
        arrayC[bothLength] = a[arrayALenth]
        arrayALenth--;
      }else {
       // a[bothLength] = b[arrayBLength];
        arrayC[bothLength] = b[arrayBLength]
        arrayBLength--;
      } 
  }
 // console.log(arrayC);
  return arrayC;
}

console.log(merge(arrayA, arrayB));
console.log(arrayA);
console.log(arrayB);

