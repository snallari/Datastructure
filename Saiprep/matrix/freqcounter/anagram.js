// 1.	Create counter variables to count the number of variables, in a map or object.
// 2.	Stick to one for loop no nested for loop.
// 3.	Now after accumulation of the number of times
// 4.	Use another for loop to see if the value exists.
// Merge Sort: Most efficient: Which follows divide and conquer.
console.log(isAna('aaz', 'zza'))

function isAna(s, t) {
    let obj = {}
    let sarr = s.split(''), tarr = t.split('') , isAna=false
    if (sarr.length != tarr.length) {
        isAna=false;
    } else {
        sarr.forEach((e) => {
            obj.hasOwnProperty(e) ?
                obj[e]++ :
                obj[e] = 1
            return obj
        });
        console.log("sa", obj)
        for (let e of tarr) {
            if (obj[e] && obj[e] > 0) {
                obj[e]--
                console.log("zaa", obj)
            } else {
                isAna=false
            }
            isAna=true;
        }
        //if(obj[e])
        
    }
    return isAna

}