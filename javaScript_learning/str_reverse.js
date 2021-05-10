function sayHello() {
    //let fruits = ['Apple', 'Banana']
    let name = "pradeep";
     var temp = [];
    for(let i=name.length;i>=0;i--){
       temp.push(name[i])
    }
   console.log(temp.join(''));
}
sayHello();