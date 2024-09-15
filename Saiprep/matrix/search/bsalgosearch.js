function findThreeLargestNumbers(arr) {
    let left = 0, right = arr.length - 1, temp = []
    let mid = Math.floor(left + right / 2)
    for (let i = 0; i < arr.length - 1; i++) {
        (arr[mid] > arr[left]) ?
            temp.push(arr[mid]) :
            temp.push(arr[left])

        (arr[mid] > arr[right]) ?
            temp.push(arr[mid]) :
            temp.push(arr[left])
    }
}

findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])