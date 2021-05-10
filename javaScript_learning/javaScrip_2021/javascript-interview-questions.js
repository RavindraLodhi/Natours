(()=>{
    console.log(`hi i am IIFE or immediately invoked function..`);
})()


//higher order function of first-class citizens

const higherOrder  =  (b) =>{
    let a = 2;
  return ()=>{
    console.log(`a = ${a+b}`);
  }
}


const x =  higherOrder(7)

x();