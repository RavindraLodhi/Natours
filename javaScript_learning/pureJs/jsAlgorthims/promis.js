let p = new Promise((resolve,reject)=>{
    let a = 1 + 2 ;
    if(a==2){
        resolve('success')
    }else{
        reject('Faild')
    }
})

p.then(data=>{
    console.log("then running...");
    
}).catch(err=>{
   console.log("catch running...");
   
})
// p.then((massage)=>{
//    console.log("this is a then : " +massage );
   
// }).catch((massage)=>{
// console.log("this is a catch : "+massage);

// })

//and we can write this code in defference way
 
function promissFuncton(b,c){
    return new Promise((resolve,reject)=>{
        let a = b+c ;
        if(a==2){
            resolve('success')
        }else{
            reject('Faild')
        } 
    })
}





promissFuncton(1,4).then((res)=>{
    console.log("this is then :"+res);
    
}).catch((err)=>{
 console.log("this. is catch : "+err);
 
})


///array of promises

const promisOne = new Promise((resolve,reject)=>{
    resolve("promise one successfull")
})
const promisTwo = new Promise((resolve,reject)=>{
    resolve("promise two successfull")
})
const promisThree = new Promise((resolve,reject)=>{
    reject("promise three failed")
})

Promise.all([
    promisOne,
    promisTwo,
    promisThree
]).then((massage)=>{
  console.log("then is running :" +massage);
  
}).catch((err)=>{
console.log("catch is running :" +err);
})