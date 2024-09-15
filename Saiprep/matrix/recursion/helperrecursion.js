function values(arr){

    function helper(arr){
        if(arr.length == 0){
            return
        }
        console.log(arr)
        arr.shift()
        return helper(arr)
    }
    helper(arr)

    return arr;
}
values([1,2,3,4,5])