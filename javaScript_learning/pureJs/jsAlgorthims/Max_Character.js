// let maxChar = (str) =>{
   
// }

const getMaxLetter = (str) => {
    let max = 0;
    let maxChar = '';
    str.split('').forEach((char) => {
        console.log("char",char);
      if (str.split(char).length > max) {
        max = str.split(char).length - 1;
        maxChar = char;
      }
    });
    return `The max letter is : ${maxChar} and the max number of times it is seen is: ${max} times`;
  };

  console.log(getMaxLetter("rrpppppptrr"));