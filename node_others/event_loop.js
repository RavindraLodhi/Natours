const fs  =  require('fs');


setTimeout(() => {console.log(`Timer 1 finished`);}, 0);
setImmediate(()=> console.log(`setImmediate 2 finished`));

fs.readFile("./text/input.txt",()=>{
    console.log("I/O opration finished..");

    setTimeout(() => {console.log(`Timer 1 finished`);}, 0);
    setTimeout(() => {console.log(`Timer 300 finished`);}, 1300);
    setImmediate(()=> console.log(`setImmediate 2 finished`));

})

console.log(`hello from the top level code `);

