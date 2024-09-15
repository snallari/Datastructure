var val=[1,6, 9, 10]
var res=Math.max(...val)
var resmin=Math.min(...val) //1
var resFloor=Math.floor(10.123) //10
var resRound=Math.round(10.578)//11
var resCeil=Math.ceil(10.545) //11
var resRandom=Math.random()
var resTrunc=Math.trunc(10.9)//10
var resPow=Math.pow(2,3)
var resFround=Math.fround(10.896) //10.9
var resFixed=Number(10.5145).toFixed(2)//10.14
var resPrecision=   Number(10.1545).toPrecision(3)//10.13
console.log("result",res, resmin, resFloor, resTrunc, resRound, resCeil, resRandom, resFixed, resPrecision)
console.log("pow", resPow, resFround)

var dateval=new Date().toLocaleDateString()
console.log("date",dateval)