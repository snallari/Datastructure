//Function accepts an array and number n . Calculate the max sum of n consecutive elements in the array.

console.log(maxSubSum([-3,4,0,2,6,-1],2))
function maxSubSum(arr,num){
    let temp=0, max=0
    for(let i=0; i<num;i++){
        temp+=arr[i]
    }
    max=temp
    console.log(max)
    for(let i=num; i<arr.length; i++){
        temp=max+arr[i]-arr[i-num]
        console.log("temp", temp)
        max= Math.max(max,temp)
    }

    return max
    
}