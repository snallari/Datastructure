function productOfArray(n){
    if(n.length==1){
        return n
    }
    return n[0]*productOfArray(n.slice(1))
}
console.log(productOfArray([1,2,3]))