function forSum(nums, target) {
    let i = 0, j = i + 1, sum = 0, add = []
    while (j < nums.length) {
        console.log("i,j", nums[i], nums[j], add)
        sum = nums[i] + nums[j]
        if (sum < target) {
            add.push([nums[i], nums[j]])
        }
        if (j == nums.length - 1) {
            console.log("its i++")
            i++
            j = i + 1
        } else {
            console.log("its j++")
            j++
        }

    }
    return add.length
}

console.log("forsum", forSum([-49,20,-28,7,37,-1,9,6,-50,-39,12,40,-8,49,11,20,-24,-24,-7,18,-42,17,-28,-32,14,32,12,-47,-28,26,-30,-24,-18,-15], 50))