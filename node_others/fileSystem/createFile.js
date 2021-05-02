/***create the file in node js 
 *  1. appendFile
 *  2. open
 *  3. writeFile
 * 
*/

// import the fs module
const fs = require("fs");

// const appenFile = (content) => {
//    fs.appendFile("hello.txt","i am creating my file with appand" ,(err, data)=>{
//      if(err) console.log("something went wrong",err);
//      console.log("file appended..");
//    })
// };

// /// flag w
// const open = (flag) => {
//    fs.open('open.txt','w',(err,data) => {
//       if(err) console.log("open",err);
//       console.log("open file created");
//    })
// }


// const fileModule = {appenFile,open}


module.exports =  {
   appenFile :  (content) => {
      fs.appendFile("hello.txt",content ,(err, data)=>{
        if(err) console.log("something went wrong",err);
        console.log("file appended..");
      })
   },
   
   /// flag w
   open : (flag) => {
      fs.open('open.txt','w',(err,data) => {
         if(err) console.log("open",err);
         console.log("open file created");
      })
   },

   writeFile : (filename,text) => {
     return new Promise((resolve,reject) => {
      fs.writeFile(filename,text,(err,res) =>{
         if(err) reject(err)
        resolve(res)
      })
     })
   },

   unlink : (path) => {
      console.log(path);
        fs.unlink(path,(err,data) => {
           if(err) console.log(err);
           console.log("file deleted successfully.....");
        })
   }


   

};
