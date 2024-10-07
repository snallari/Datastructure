var searchInsert = function(arr, val) {
    let left=0
   let right=arr.length-1
   
   for(let i=left; i<=right; i++){
       let mid=Math.ceil((left+right)/2)
       if (val == arr[mid]) {
           return mid
       } else if (val > arr[mid]) {
           left = mid + 1
       } else {
           right = mid - 1
       }
   }
};

console.log(searchInsert([1,3,5,6],2))