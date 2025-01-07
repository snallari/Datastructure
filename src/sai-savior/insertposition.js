function bsInsert(nums, closest){
    let start=0
    let end=nums.length, found=0
    console.log("closest", closest)
    for(let i=0; i<=end; i++){
       let mid= start +Math.floor((end - start)/2)
       console.log("start, end, mid", start, end, mid, nums[mid], found);
        if(closest>=nums[mid]){
            found=nums[mid]
            start=mid+1
        }else{
            end=mid-1
        }
    }
    return found
}

console.log(bsInsert([1,3,5,6], 5))