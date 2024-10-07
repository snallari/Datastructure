"use strict"
const a={
    name:"shruti",
    age:"12",
    

}
const b={
    name:"sami",
    age:"16",
    gender:"f"
}
console.log("getting a", a)

 const getMixed=()=>{
    console.log(a.age+a.name)
    return this.age
}

const getm=(godswish)=>{
    console.log(a.age, a.name, godswish)
}

//Revisit Bind
getMixed.apply(a,["next"])
getMixed.call(a, "a")
//Merge 2 objects
console.log("Merging",{...a,...b})