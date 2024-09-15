//Running sum= adding all nums
// use num vals vigilently

function numsadd(nums){
    var  counter=nums[0]
    for(var i=1; i<nums.length; i++){
        counter+=nums[i]
        nums[i]=counter
    }
    return nums;
}
console.log(numsadd([3,1,2,10,1]))