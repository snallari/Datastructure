const se=new Set()
se.add("thatha")
se.add(1)
se.add(2)
se.add("amma")
se.add(2)
const isse= se.has("thatha")?se.delete(1):se.delete(2)
console.log("set",se, isse)

se.forEach((s)=>{
    console.log(s);
})


for(let s of se.entries()){
    console.log("se",s)
}

for(let v of se.values()){
    console.log("val",v)
}

for( let k of se.keys()){
    console.log("keys",k)
}




//Clear
const see=new Set()
see.add("thatha")
see.add(1)
see.add(2)
see.clear()
console.log("set", see)