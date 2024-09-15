
const convert = (num) => {
    console.log(num.toString().split(""))
}

const round = (num) => {
    console.log(Math.round(num))
}

const reverse=(character)=>{
    console.log(character.split("").reverse().join(""))
}

const fillter=(list)=>{
    let newlist=list.filter((x)=>x<10)
    return newlist
}

const obj=()=>{
    let data=[{
        "name":"shruti",
        "age":"16",
        "value":"500k"
    },
    {
        "name":"shruti",
        "age":"16",
        "value":"500k"
    },
]
let data2=[1,2,3,4,5]
let combined= [...data,data2]
console.log(combined)
}

const obj2=()=>{
    let data=[{
        "name":"shruti",
        "age":16,
        "value":"500k"
    },
    {
        "name":"shruty",
        "age":17,
        "value":"500k"
    },
    {
        "name":"shruty",
        "age":12,
        "value":"500k"
    }
]

 let data2=[{
    "name":"shruti",
    "age":"16",
    "value":"500k"
},
{
    "name":"shruti",
    "age":"16",
    "value":"500k"
}]
//const dat=data.filter((d,i)=> i==0)
//const datRedu=data.reduce((d,newv)=>d+newv.age,0)
// const dsort=data.sort((a,b)=>a.age-b.age)
console.log("data",data);
const da=data.splice(0,2,data2)
//Splice is used to add elements in middle
//Push is used to add elements in the end
//Unshit is used to addd elements in the start
//const dsplice=data.splice(0,2)
console.log("data",da);
console.log("data",data);
// const dashift=data.push( {
//     "name":"sami",
//     "age":11,
//     "value":"500k"
// },
// {
//     "name":"abhi",
//     "age":10,
//     "value":"500k"
// })
const index=data.map(d=>d.name).indexOf("sai")
const includes=data.map(d=>d.name).includes("sai")// Returns Boolean
const findIndex=data.find(d=>d.name=="sai")
const every=data.every(d=>d.age>=10)// Returns Boolean
const some=data.some(d=>d.age<10)// Returns Boolean
const fill= data.map(d=>d.name).fill(10)
const numbers=data.map(d=>d.age)

//Math Functions
const Pi=Math.PI
const max=Math.max(...numbers)
const min=Math.min(...numbers)
const random=33.53763
const ceil=Math.ceil(random)
const floor=Math.floor(random)
const round=Math.round(random)
const truncate=Math.trunc(random)
const fround=Math.fround(random)
const sqrt=Math.sqrt(26)

//Number
const fixed=random.toFixed(3)//rounds the last number after decimal
const precision=random.toPrecision(6) //number even acts for the all digits

//Date 
const todaysDate = new Date()
const stringdate=todaysDate

// data.shift()
// data.pop()
console.log(todaysDate,"todaysDate");
console.log(stringdate, "stringdate")
//Fixed and Precision are for decimals , round, ceil, floor are to get whole numbers
console.log(fixed, "fixed 33.538")
console.log(precision, "precision 33.5377")
console.log(sqrt,"sqrt")
console.log(ceil,"highest if its 33.46438 it becomes 34")
console.log(floor, "tolowest if its 33.46438 it becomes 33.0")
console.log(round, " if it is 33.49 it becomes 33, if more than 33.5 it becomes 34")
console.log(truncate, "truncate means removes numbers after after decimal")
console.log(fround, "rounds number inside decimal 33.54")
console.log(numbers)
console.log(Pi)
console.log(max)
console.log(min)
console.log("random",random)
console.log("fill",fill)
console.log("some",some)
console.log("every", every)
console.log("findindex", findIndex)
console.log("includes", includes)
console.log("index", index)
console.log("data", dashift)
console.log("data", data)

}

console.log(obj2())
