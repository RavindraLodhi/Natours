function map(){
    let map = new Map();
    map.set('1', 'str1');
    map.set('2', 'str2');
    map.set('3', 'str2');
    map.set('3', 'str2');
    for(let key of map.values()){
        console.log(key);
        
    }
    return map ;

}
console.log(map());
