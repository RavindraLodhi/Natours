const rxjs = require('rxjs') ;


const observable = new rxjs.Observable(observer => {
    setTimeout(() => {
      observer.next('Hello');
      observer.next('Ravindra!');
      observer.next('Lodhi');
      observer.complete();
      observer.next('End Obserble');
      observer.next('Hello from a Observable!');
    }, 2000);
  });

 observable.subscribe(value => console.log(value));

const promissFun = (a,b) =>{
    return new  Promise((resolve,reject)=>{
      if(a + b == 5){
        resolve('Promiss resolve...');
      }else{
        reject('Promis fails...')
      }
    });;
}

promissFun(2,3).then(res =>{
    console.log(res);
}).catch(err =>{
    console.log(err);
})