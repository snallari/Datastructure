const lengthString="Sairam is always true"
const secondString=" combined your "
const thirdString=" "

console.log("sailength 21",lengthString.length)
console.log("saiat", lengthString.at(-6),"s")
console.log("saicharat",lengthString.charAt(11) ,"l")
console.log("saicharcodeat",lengthString.charCodeAt(1))
console.log("saicodepointat",lengthString.codePointAt(1))
console.log("concat",lengthString+thirdString+secondString)
console.log("concat",lengthString.concat(thirdString).concat(secondString))//cant with spread operator
console.log("endswith u",lengthString.endsWith("e"))//character or string evaluation
console.log("startswith", lengthString.startsWith("S"))
console.log("indexof",lengthString.indexOf("is"))// -1 when nothing is found, otherwise the index of the string(it checks the whole string and returns the first character)
console.log("lastindexof",lengthString.lastIndexOf(lengthString.substring(lengthString.length-5)))
console.log("trim", secondString.trimEnd())
console.log("trimstart",secondString.trimStart())
console.log("trim",lengthString.trim())
console.log("uppercase",secondString.toLocaleUpperCase("de-DE"))// It doesnt stay back, it goes away when the menthod is removed
console.log("lowercase", lengthString.toLocaleLowerCase())// It doesnt stay back, it goes away when the menthod is removed
console.log("uppercase",secondString.toUpperCase())//It doesnt stay back, it goes away when the menthod is removed
console.log("lowercase", secondString.toLowerCase())//It doesnt stay back, it goes away when the menthod is removed
console.log("slic", lengthString.slice(0,9))
console.log("suvbstring", lengthString.substring(0,9))
console.log("includes", lengthString.includes("always true"))
console.log(lengthString)

