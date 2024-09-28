//Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is p. Return an array that includes both values that sum to zero 
//or undefined if a pair doesnt exist

console.log(sumZero([-4, -3, -2, -1, 0, 1,8, 9, 10]))


function sumZero(arr) {
    let left = 0, right = arr.length - 1, sum=0
    while (left < right) {
        sum=arr[left]+arr[right]
        if (sum == 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--
        } else {
            left++
        }
    }
}