function basic(num){
    if(num==0)
    return
    num--
    return basic(num)
}


function recurssion(num) {
   
    if (num > 10) {
        return
    }
    console.log("recurssion",num)
    return num*recurssion(num*2)
}

function factorial(num){
    if(num==1)
    return 1
    console.log("num",num)
    return num*factorial(num-1)
}

// console.log(recurssion(1))
// console.log(basic(10))
console.log(factorial(10))
