
// require('es6-promise').polyfill();
// require('isomorphic-fetch'); 
// async function f() {
//     let promis = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(1)
//         }, 5000);
//     })

const { async } = require("q");
const { promise } = require("selenium-webdriver");
const { resolve } = require("path");
const { reject } = require("lodash");

//     let result = await promis;
//     console.log("2 :"+ result);
//     return result;
// }


// // f().then(res => {
// // console.log("1 :" + res);


// // }).catch(err => {
// //     console.log(res);

// // });




// //reading the file fro the json file

// async function reading(){
//     let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
//     let response = await fetch(url);
//     //console.log(response);
//    // console.log("respose with let");

// }
// //console.log("nshqjhejqehqej");

// reading()
// // function f1() {
// //     return new Promise((resolve, reject) => {
// //         resolve(1)   
// //     })
// // }

// // f1().then(res => {
// //     console.log(res);

// // }).catch(err => {
// //     console.log(res);

// // });;
// async function outer(){
// console.log("running outer function.......");
//     var result1 = await wait1()
//     console.log(result1);
//     var result4 = await wait4()
//     .then(data=>{
//      console.log(data);
//     }).catch(err=>{
//      console.log(err);
//     })
//     var result2 = await wait2()
//     console.log(result2);
//     var result3 = await wait3()
//     console.log(result3);

//    var nonawait1 = nonawait()
//    console.log(nonawait1);
// }

// function wait1(){
//     return 1
// }
// function wait2(){
//     return 2
// }
// function wait3(){
//     return 3
// }
// function wait4(){
//     return new Promise((resolve,reject)=>{
//         let a = 1 + 1 ;
//         if(a==2){
//             url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
//             resolve(fetch(url))
//         }else{
//             reject('Faild')
//         }
//     })
// }
// function nonawait(){
//     return "nonawait"
// }
// outer()


var fun1 =  function () {
   return new Promise((resolve, reject)=>{
       if(true){
        resolve("success")
       }
       else{
        reject("reject")
       }
   })
   
}

console.log(fun1().then(data=>{
    console.log(data);
    console.log("end");
}));


var fun2 = async function(){

    let promise1 = new Promise((res, rej) => {
        setTimeout(() => res(1), 5000)
    });

    let promise2 = new Promise((res, rej) => {
        setTimeout(() => res(2), 100)
    });
    
    let result1 = await promise1; 
    let result2 = await promise2;
    console.log(result1);
    console.log(result2);
  //  console.log(result);
    console.log("running inside the async...");
    return result1 + result2;
}

fun2().then(data=>{
    console.log("end of the function",data);
})



