console.log(nearest([10, 22, 28, 29, 30, 40], 52))

function nearest(arr, x) {
    let i = 0; j = arr.length - 1, sum = 0
    while (i < arr.length) {
        sum = arr[i] + arr[j];
        console.log("sum", sum, arr[i], arr[j])
        if (sum == x) {
            return `${arr[i]} and ${arr[j]}`
        } else if (sum > x) {
            j--
        } else {
            i++
        }
    }
}

function getTheNearest(i, j){
    return Math.abs(i-j)
}