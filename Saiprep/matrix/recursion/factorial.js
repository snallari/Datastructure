function factorial(n){
    if(n==0){
        return n
    }
    if(n==1 || n==2){
        return n
    }
    return n*factorial(n-1)
}

console.log(factorial(7))

function getVal(arr,val){
    let v=0
    v=arr.forEach(element => {
        return element==val?element:-1
    });
}
console.log(getVal([1,2,3],2))