function getFizzBuzz(n){
    var i=1, arr=[]
    while(i<=n){
        var currStr=""
        if(i%3==0){
            currStr+="Fizz"
        }
        if(i%5==0){
            currStr+="Buzz"
        }
        if(currStr==""){
            currStr+=i
        }
        arr.push(currStr)
        i++
    }
    return arr
}

for(var arr of arr1){
    var index=arr2.indexOf((Math.pow(arr,2)))
    console.log("index", index)
    if(index ==-1){
     return false
    }
    arr2.splice(index,1)
    console.log("index", index, arr2)
 }
console.log(getFizzBuzz(15))

//
    // let arr = [], current, currentNode, arrFinal = []
    // current = this.root
    // arr.push(current)
    // while (arr.length) {
    //     currentNode = arr.shift()
    //     arrFinal.push(currentNode.data)
    //     if (currentNode.left && currentNode.left.data) {
    //         arr.push(currentNode.left)
    //     }
    //     if (currentNode.right && currentNode.right.data) {
    //         arr.push(currentNode.right)
    //     }
    // }
    // console.log("arra", arrFinal)
    // return arr
