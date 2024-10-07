

const minSubArray = (arr, val) => {
    let temp = 0; min = 0
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i]
        if (temp >= val) {
            min = arr.splice(0, i + 1).length
            break;
        }
    }
    temp = 0
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i]
        if (temp >= val) {

            min = min < arr.slice(0, i + 1).length ? min : arr.slice(0, i + 1).length
            break;
        }
    }
    return min;
}

minSubArray([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)
