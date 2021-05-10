const arr = [3,2,5,1,6,0,3];
console.log(arr);
const selectionSort = (array) => {
      
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1 ; j < array.length; j++) {
          if(array[i] > array[j]){
            let temp =  array[i];
            array[i] =  array[j];
            array[j] =  temp; 
          }     
        }  
    }

    console.log("selectionSort",array);
}


//selectionSort(arr);

const bubbleSort = (array) => {
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength ; i++) {
      for (let j = 0; j < array.length; j++) {
          if (array[j] > array[j+1]) {
               let temp = array[j];
               array[j] = array[j+1];
               array[j+1]  = temp
          }
      }
    }
    console.log("bubbleSort" , array);
}

bubbleSort(arr)

