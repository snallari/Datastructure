//countsmaller
function smaller(arr) {
    let p = 0, l = p + 1, r = arr.length - 1, temp = []
    iterate(p, l, r)
    function iterate(p, l, r) {
        if (p > r) {
            return 0
        }
        let count = 0
        while (l <= r) {
            if (arr[l] < arr[p]) {
                count++
            }
            l++
        }
        temp.push(count)

        return iterate((p + 1), (p + 1 + 1), r)
    }
    return temp
}

console.log(smaller([-10000,-9999,-9998,-9997,-9997,-9997,-9997,-9997,-9996,-9996,-9996,-9996,-9996,-9995,-9995,-9995]))