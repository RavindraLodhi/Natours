var chainPro = new Promise((resolve,reject)=>{
        resolve(1)
}).then(result =>{
    //alert(result)
    console.log("result"+result);
    return result*2;
}).then(result=>{
   // alert(result)
   console.log("result"+result);
    return result*2;
}).then(result=>{
    console.log("result"+result);
   // alert(result)
    return result *2;
})




console.log(chainPro);
