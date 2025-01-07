var findMaxAverage = function(nums, k){
    let avg=0,  max
    for(let i=0; i<k; i++){
        avg+=nums[i]
    }
    max=avg

    for(let j=k; j<nums.length; j++){
        avg+=nums[j]-nums[j-k]
        max=Math.max(max,avg)
    }
    return max/k
}

console.log("sai", findMaxAverage([1,12,-5,-6,50,3], 4))