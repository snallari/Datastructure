
//Maps they cant be overiden when seting
const map1=new Map();
map1.set('a',1)
map1.set('b', 2)
map1.set('c',3)
//Map.gets the val of a key
//map.has checks if the key exist
if(map1.has('a')){
    console.log("its already there", map1.get('a'))
}else{
    map1.set('z', 26)
}

//looping over key and value
map1.forEach((key, val)=>{
console.log("map 1 key val", key, val)
})

map1.has('a')?map1.delete('a'):map1.set('z',4)
console.log("a",map1);
map1.clear()

map1.keys((d)=>{
    console.log("key",d)
})

const entry=map1.entries()
console.log("entry", entry)
console.log("entry", entry.next().value)
map1.forEach((key, val)=>{

    console.log("both",key, val)
})

const map2 = new Map();

map2.set('0', 'foo');
map2.set(1, 'bar');


//Entries
const iterator1 = map2.entries();
console.log("it",map2, iterator1)
for(let v of iterator1){
    console.log(v)
}

//Values
const iteratorVals=map2.values()
for(let v of iteratorVals){
    console.log(v)
}

//Keys
const iteratorKeys=map2.keys()
for(let k of iteratorKeys){
    console.log(k)
}