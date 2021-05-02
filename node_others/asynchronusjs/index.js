const fs = require('fs');
const superAgent = require("superagent");

// fs.readFile(`${__dirname}/dog.txt`,'utf8' , (err,data)=>{
//     console.log(data);
//     if(err) console.log(err);
//     else{
//         superAgent.get(`https://dog.ceo/api/breed/${data}/images/random`).then(data => {
//             fs.writeFile("./image.txt",data.body.message, err => {
//                 console.log(`dog image saved !`);
//             })
//         }).catch(err => {
//            console.log(err.message);
//         })
       
//     }
// })


const writeFile =  (path,data) => {
    return new Promise((resolve,reject) => {
        fs.writeFile(path,data, err => {
            if(err) reject(err)
            resolve("file updated successfully...")
        })  
    })
} 


const fileRead = path =>{
  return new Promise((resolve,reject)=>{
    fs.readFile(path,'utf8', (err,data) => {
      if(err) reject("data not found!")
      resolve(data)
    })
  })
}


fileRead(`${__dirname}/dog.txt`).then(res => {
    return  superAgent.get(`https://dog.ceo/api/breed/${res}/images/random`);
}).then(res => {
   return writeFile("./image.txt",res.body.message)
}).then(res => {
 console.log("success : ",res);
}).catch(err => {
  console.log("err : ",err);
})


/*** asy/await */


const getDogPic = async () => {
    try {
        const data =  await fileRead(`${__dirname}/dog.txt`);
        console.log(data);

        const res =   await superAgent.get(`https://dog.ceo/api/breed/${data}/images/random`);
        console.log(res.body.message);

        await  writeFile("./image.txt",res.body.message);    
    } catch (error) {
      console.log(error );
    }

    return "Ready.."
  
} 

// console.log("before getDogPic");
// const x = getDogPic();
// console.log(x);
// console.log("after getDogPic");


// to solve above issue will use IIFE

(async() => {
   try {
    console.log("before getDogPic");
    const x = await getDogPic();
    console.log(x);
    console.log("after getDogPic");
   } catch (error) {
      console.log(error); 
   }
 })()


// fileRead(`${__dirname}/dog.txt`).then(res => {
//    return  superAgent.get(`https://dog.ceo/api/breed/${res}/images/random`);
// }).then(res => {
//     return writeFile("./image.txt",res.body.message)
// })

