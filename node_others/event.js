const EventEmiter  = require("events");

const myEmiter = new EventEmiter();

myEmiter.on("newSale", ()=>{
    console.log("there was a new sale....1");
})

myEmiter.on("newSale", ()=>{
    console.log("there was a new sale....2");
})

//we can pass argument 

myEmiter.on("newSale" ,  (stock) => {
   console.log(`${stock } items left in stock.`);
})

myEmiter.emit("newSale",20)







