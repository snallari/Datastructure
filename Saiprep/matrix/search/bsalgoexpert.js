function bs(arr, tar) {
    let left = 0,
    right = arr.length - 1, mid=0
    console.log(left, right)
    for(let i=left;i<arr.length; i++){
        mid = (Math.floor((left+right) / 2))
        console.log(left, right, mid)
        console.log("left",left, arr[left], "right", right,arr[right],"mid",Math.floor(mid),"arr",arr[mid])
        if (arr[mid] == tar){
            return mid
        }
        else if (arr[mid] > tar) {
            right = mid - 1
        } else {
            left = mid+1
        }
    }
    return -1
}

console.log(bs([0, 1, 21, 33, 45, 61, 71, 72, 73],0))