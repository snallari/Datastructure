//DISCLAIMER EVERYTHING WITH OBJECTS START WITH Object, like Math

const target={a:1, b:2}
const source={b:3, c:2}
const targetsource=Object.assign(target, source)
const spread={...target, ...source}

// Assign or spread merges the objects and overides if any property is same
console.log(targetsource, spread, "{a:1,b:3,c:2}")


//Creating Objects
const person={
    isHuman:false,
    print(){
        console.log("print me")
    }
}
person["age"]=16
person["gender"]="female"
console.log(person)
const isext=Object.isExtensible(person)

console.log("isext", isext)
//Create - Acts as extends when using functional js
const newPerson=Object.create(person)
newPerson.name="s"
newPerson.age=19
console.log("new", newPerson, person)



//Define Property: You can set few properties to readonly and never overide
const newRole={}
Object.defineProperties(newRole,{
    age:{
        value:10,
        writable:false,
    },
    name:{
        value:"shruti",
        writable:true
    },
    names:[
        {
            age:1100
        },
        {
            age:199
        }
    ]
})

Object.freeze(newRole)// Freezes the whole Object vs writable freezes the property in the object
const isFroz=Object.isFrozen(newRole)

// Object.seal(newRole)
// const isSeal=Object.isSealed(newRole)
// console.log("isFroz", isSeal)
newRole.age=100
newRole.name="toy"
newRole.sex="f"
console.log("freeze",newRole)

//Entries
const persona={
    name:"sh",
    age:17,
    type:"loving, strong, protective"
}
//Values only
for(let p of Object.entries(persona)){
    console.log("values only",p)
}
//Values and Keys
for(let [key,val] of Object.entries(persona)){
    console.log("key and val only",key,val)
}
//Checks whether the object has the value
const hasit =Object.hasOwnProperty(newRole,'name')
console.log("has", hasit)
const copy=Object.create(persona)
const copyspread={...persona}// The original object stays untouched
copyspread.age=10
const personaa2=Object.create(persona)
personaa2["gender"]="f"
const has=Object.hasOwnProperty(personaa2,'name')
console.log("has",has)
const hasownproperty=personaa2.hasOwnProperty('gender')
console.log("hasown", hasownproperty)
const checking=Object.is(copy,copyspread)
console.log("is", checking,copyspread,copy.age, persona)