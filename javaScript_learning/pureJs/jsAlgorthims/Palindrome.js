let palimdrome  = (str) => {
    let splitString = str.split("").reverse().join("");
    return splitString === str;
}

console.log(palimdrome("civic")); 
