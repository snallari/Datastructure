var moveZeros=(nums)=>{
    let left=0, right=1
    while(left<right && nums.length>0){
        if(nums[left]!=0 || nums[right]!=0){
                let temp=nums[left]
                nums[left]=nums[right]
                nums[right]=temp
                left++
                right--
           
        }else if(nums[left]!==0){
            left++
        }else{
            right--
        }
    }
    console.log("nums", nums);
    
    return nums
}

moveZeros([0,1,0,3,12])