
// 1.	Create counter variables to count the number of variables, in a map or object.
// 2.	Stick to one for loop no nested for loop.
// 3.	Now after accumulation of the number of times
// 4.	Use another for loop to see if the value exists.
// Merge Sort: Most efficient: Which follows divide and conquer.

function same(arr1, arr2) {
    let alpha = {};
    let alpha2 = {};
    let counter = 1, counter2 = 1
    if (arr1.length == arr2.length) {
        for (var v of arr1) {
            alpha[v] = !alpha.hasOwnProperty(v) ? 1 : ++counter
        }
        for (var v1 of arr2) {
            alpha2[v1] = !alpha2.hasOwnProperty(v1) ? 1 : ++counter2
        }
        console.log("values",alpha, alpha2)
        let it = Object.keys(alpha)
        for (let k of it) {
            console.log(`its a false ${alpha[k]}${k}`)
            if (!alpha[k] in alpha2) {
                console.log(`its a false ${alpha[k]}${k}`)
                return false
            }
            console.log("k its a false", k)
            if (!k in alpha2) {
                console.log("k its a false", k)
                return false
            }
            
        }
        return true
        
    }



}

console.log(same([1, 2, 3, 4], [1, 2, 2, 4]))