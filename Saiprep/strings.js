const sai="Sai please help"
const ram="sai"
var chartat=sai.charAt(1)
var charCodeat=sai.charCodeAt(1)
var saiconcat=sai.concat(ram)
var saiendswith=sai.endsWith("miss u")
var saistartswith=sai.startsWith("i m strong")
var saiincludes=sai.includes("please")
var saiindex=sai.indexOf("please")//4
var saipad="as"+sai.padStart(1000)
var saipadend=sai.padEnd(100)+"you know me"
var sailowercase=sai.toLowerCase()
var sailocalelower=sai.toLocaleLowerCase()
var saiuppercase=sai.toUpperCase()
var sailocaleUpper=sai.toLocaleUpperCase()
var at=sai.at(1)


var saislice=sai.slice(3, sai.length-1)
var saistr=sai.slice(1, sai.length-1)//Sai

const saiarrat=['ant', 'bison', 'camel', 'duck', 'elephant'];
var arrayslic=saiarrat.slice(1,3)

var strSplit=sai.split('',4)

var strSub=sai.substring(1,sai.length-1)//Sa

var strVal=new String(sai)

var strObjToVal=strVal.valueOf()


console.log("obje",strVal, strObjToVal)

//var arraysplic=saiarrat.splice(1,3)



console.log("charat", chartat,at ,charCodeat, saiconcat, saiendswith, saistartswith, saiincludes, saiindex, saipad, saipadend, sailocaleUpper,saiuppercase,sailowercase, sailocalelower)

console.log((" I might be weak but i will always wake up strong always  ").trimEnd())

console.log("slice", saistr, arrayslic,  saiarrat, strSub)

console.log("spliter", strSplit)