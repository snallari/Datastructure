/*
-Divide and conquer
-It has to be sorted
-Pick a pivot as middle element
-search element is greater - Move right,(low=mid+1)(Second half)
-lesser-Move left high=mid-1(First half)
-Best Case:O(1) Worst:O(Log n)(Its so good)
TIP:left or right will be equal to middle in the last step
*/

console.log(binarySearch([0,1,5],0))

function binarySearch(nums, target){
    let left=0
    let right=nums.length
    // if(nums.length==1){
    //     if(nums[0]==target)
    //         return nums[0]
    // }else{
        for(let i=left; i<=right; i++){
            let mid= left +Math.floor((right-left)/2)
            console.log(`left${left}, right${right} mid${mid}, ${nums[mid]}`)
            if (target == nums[mid]) {
                return mid
            } else if (target > nums[mid]) {
                left=mid+1
                console.log(`leftyy${left}, right${right} mid${mid}, ${nums[mid]}`)
            } else {
                right = mid-1
                console.log(`left${left}, right${right} mid${mid}, ${nums[mid]}`)
            }
        }
    //}
    return -1
    
}

