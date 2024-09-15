//var min=0 :(
function sellStock(n) {
    let temp = 0, min = 0

    const getMin = (n) => {
        if (n[n.length - 1] == 1) {
            return 0
        } else if (n[0]>temp) {
            temp=n[0];
        }
        min++
        return getMin(n.slice(1))
    }
    getMin(n)

    for (i = min + 1; i < n.length; i++) {
        if (n[i] > temp) {
            temp = n[i]
        }
    }
    return temp > n[min] ? temp - n[min] : 0

}


console.log(sellStock([2,1,2,0,1]))

///FAILED