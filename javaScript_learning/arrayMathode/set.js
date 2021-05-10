function from_a_string(){
    return Array.from('foo');
}

function from_set(){
  const set = new Set(['foo', 'bar', 'baz', 'fook',"foo","foo","ram"]);  
  return Array.from(set);
}

function from_map(){
    const map = new Map([[1, 2], [2, 4], [4, 8]]);
    console.log("map size",map.size);
    
    console.log("map",Array.from(map));
    const mapper = new Map([['1', 'a'], ['2', 'b']]);
    console.log("mapper keys",Array.from(mapper.keys()));
    console.log("mapper values",Array.from(mapper.values()));
    return map
    
}
console.log(from_a_string());
console.log(from_set());
console.log(from_map());


