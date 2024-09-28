//Find the smallest in the list of array
//swap with the index 
//continue till all elements are sorted ascending
//  O(n)- because it has to go to the whole list
function selection(arr) {
    let count = 0
    while (count < arr.length) {
        swap(arr)
    }

    function getMin(arr) {
        let min = arr[0]
        for (let i = 1; i <= arr.length; i++) {
            if (count < arr[i]) {
                min = i
            }
            console.log("min", min)
        }
        return min
    }

    function swap(arr) {
        let arrval = getMin(arr)
        console.log(arrval)
        let temp = arr[count]
        arr[count] = arr[arrval]
        arr[arrval] = temp
        count++
        return arr;
    }
}

console.log("array", selection([64, 25, 12, 22, 11]))