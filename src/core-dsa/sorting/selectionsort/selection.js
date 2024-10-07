//Find the smallest in the list of array
//swap with the index 
//continue till all elements are sorted ascending
//  O(n)- because it has to go to the whole list
function selection(arr) {
    let count = 0, val=0,arrVal=0
    while (count < arr.length) {
        console.log("arr",arr)
        swap(arr)
    }

    function getMin(arr) {
        for (let i = count+1; i < arr.length; i++) {
            console.log("i,j", arr[i], arr[count])
            if (arr[i]<arr[count]) {
                val=i
                console.log("val", val)
            }
        }
        
        return val
    }

    function swap(arr) {
        arrval = getMin(arr)
        console.log(arrval)
        let temp = arr[count]
        arr[count] = arr[arrval]
        arr[arrval] = temp
        count++
        console.log("final", count, arr)
        return arr;
    }
}

console.log("array", selection([64, 25, 12, 22, 11]))