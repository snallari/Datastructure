//1.	Create 2 pointers and use the pointers to iterate.
//2.	For greater value or lesser value

console.log(remove([3,3],3))

function remove(nums, val){
    var i=0, j=nums.length-1
    while(i<=nums.length){
        if(nums[i]==val){
            nums.splice(i,1)
            i++
        }else if(nums[j]==val){
            nums.splice(j,1)
            j--
        }else{
            i++
            j--
        }
    }
    return nums
}