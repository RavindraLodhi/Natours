const fs = require('fs');
const server = require('http').createServer();

server.on("request" , (req,res) => {

/*** this is the example of readable stream. we are reading the data from the file
 1 selotion of readable stream ***/

    fs.readFile("text/input.txt", (err,data)=>{
        if(err) console.log(err);
        res.end(data)
    })

 //2 solution 
   const readable = fs.createReadStream("text/inputjj.txt");
      readable.on("data",chunk => {
          console.log(chunk);
          res.write(chunk)
     })
     readable.on("end", () =>{
         res.end();
      });
    readable.on("error", err => {
       res.statusCode = 500;
      res.end("File not Found...")
    })

 // 3 solution 
  const readFile = fs.createReadStream("text/input.txt");
   readFile.pipe(res)

})

server.listen(8000,'127.0.0.1',()=>{
  console.log("server started....");
})



console.log(require("module").wrapper);