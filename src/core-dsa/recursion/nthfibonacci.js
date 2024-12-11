var counter=0
function getNthFib(n){
    if(n==0 || n==1){
        return n
    }else{
        counter++
        console.log("final o/p",counter)
    }
    return getNthFib(n-1)+getNthFib(n-2)
}

console.log("final o/p",getNthFib(6))

// DS are arrays, hashmaps