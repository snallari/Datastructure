//Number of Pairs


function getThePair(nums1,nums2,tar)
{
    let count=0
    let i=0
    let j=1
    while(i<j){
        var val=(nums1[i]-nums1[j])
        var t=(nums2[i]-nums2[j]+tar)
        if (val <= t) {
            if (j < nums1.length) {
                j++
            } else {
                i++
            }
        }
        console.log("count", count)
        count++
    }
}

getThePair([3,2,5],[2,2,1],1)