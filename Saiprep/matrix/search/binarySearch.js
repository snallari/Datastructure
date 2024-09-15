/*
-Divide and conquer
-It has to be sorted
-Pick a pivot as middle element
-search element is greater - Move right,(low=mid+1)(Second half)
-lesser-Move left high=mid-1(First half)
-Best Case:O(1) Worst:O(Log n)(Its so good)
TIP:left or right will be equal to middle in the last step
*/

console.log(binarySearch([1,2,3,4,8], 5))

function binarySearch(arr, val){
    let left=0
    let right=arr.length-1
    
    for(let i=left; i<=right; i++){
        let mid=Math.ceil((left+right)/2)
        console.log(`left${left}, right${right} mid${mid}, ${arr[mid]}`)
        if (val == arr[mid]) {
            return mid
        } else if (val > arr[mid]) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
   return -1
}

