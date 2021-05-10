


const arr = [1, 2,35,36,60, 4, 5,7, 7, 8, 9,11,34,16,20]

function recursiveBinarySearch(n, arr) {
    let mid = Math.floor(arr.length / 2);
  // base cases
    if (arr.length === 1 && arr[0] != n) {
      return false;
    }
    if (n === arr[mid]) {
        return true;
    } else if (n < arr[mid]) {
        return recursiveBinarySearch(n, arr.slice(0, mid));
    } else if (n > arr[mid]) {
       return recursiveBinarySearch(n, arr.slice(mid));
    }
}

console.log(recursiveBinarySearch(7,arr)); 


const bubbleSort = (arr) =>{
   let len = arr.length;
   for (let i = 0 ; i < len; i++){
    for (let j = 0; j < len; j++) {
      if(arr[j] > arr[j+1]){
        let temp = arr[j] ;
        arr[j] = arr[j+1] ;
        arr[j+1] = temp;
      }
    }
   }
   return arr;
}

// console.log(arr);
// console.log(bubbleSort(arr));


 
