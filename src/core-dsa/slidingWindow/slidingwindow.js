function slidingWindow(arr, num) {
    let maxSum = 0
    let tempSum = 0
    if (num > arr.length) {
        return null
    } else {
        for (let i = 0; i < num; i++) {
            tempSum += arr[i]
        }
        console.log("sum", tempSum)
        maxSum = tempSum
        for (let i = num; i < arr.length; i++) {
            console.log("val", arr[i], arr[i - num], i - num, maxSum, arr.length, num)
            tempSum += arr[i] - arr[i - num]
            console.log("tempsum, maxsum", tempSum, maxSum)
            maxSum = Math.max(maxSum, tempSum)
            console.log("maxSum", maxSum)
        }
        return maxSum
    }
}

console.log(slidingWindow([-3,4,0,-2,6,-1], 2))