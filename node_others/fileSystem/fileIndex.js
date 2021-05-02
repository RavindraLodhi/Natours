const {appenFile,open,writeFile,unlink} = require("./createFile.js");


appenFile("i am replacing the content using append file...");
open('w');
writeFile("Promis.txt","i am replacing content using write file..").then(res => {
    console.log(res ,"file created successfully....");
}).catch(err =>{
    console.log(err);
})
unlink("hello.txt")

