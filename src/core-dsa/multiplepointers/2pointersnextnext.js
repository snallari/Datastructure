console.log(countUniqueVals([0,0,1,1,1,2,2,3,3,4]))


function countUniqueVals(arr) {
    var left=0 
    for(let j=1; j<=arr.length; j++){
        console.log("i, j", left, j, arr)
        if(arr[left] != arr[j]){
            left++
            arr[left]=arr[j]
        }
    }
    return left
}