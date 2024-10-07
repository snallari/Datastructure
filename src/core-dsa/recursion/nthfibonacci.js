function getNthFib(n){
    counter=1
    if(n==0 || n==1){
        return n
    }
    console.log(getNthFib(n-1)+getNthFib(n-2))
    return getNthFib(n-1)+getNthFib(n-2)
}

getNthFib(3)

// DS are arrays, hashmaps