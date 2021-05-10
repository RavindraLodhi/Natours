/*********callback function is function(it cn be any function anonymous Function, Arrow function) passed into another function as 
 * a argument which is invoked inside the outer function to complet some kind of routing or action. callback function has two type
 * synchroneus and asynchroneus
 */

/*first type callback synchroneus function*/
/** synchroneus:- it's wait for each opration to complete after that it execute the next opration*/
 function show(num){
     console.log("my number is :- "+num); 
 }

 function geeky(a,callbackfunction){
    console.log("i am geeky"+a);
    callback(a)

  }
  show(100,show)


/*seconde type callback synchroneus function*/

function geeky(a,callbackfunction){
    console.log("nside the geeky"+a);
    callbackfunction(a)

}

geeky(100,function show(num){
    console.log("running show"+num);

})
/*third type callback synchroneus function */

function geeky(a, callbackfunction) {
    console.log("geeky running" + a);
    callbackfunction(a)
}

geeky(100, show => {console.log("running show" + show);})
/***********or***********/
geeky(100, (show) => { console.log("running show" + show);})


/*forth type callback function asynchroneus function*/
/*asynchroneus:- t naver wait for each opration to complete task rather it exectes all oprations*/

setTimeout(() => {
    console.log("asynchrneus callback function");
}, 1000);
console.log("end of the code");

