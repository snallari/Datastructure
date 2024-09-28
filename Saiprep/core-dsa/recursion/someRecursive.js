
const isOdd = val => val % 2 !== 0
function someRecurssive(arr, isOdd){
    val(arr[0])
    function val(i){
        if (isOdd(i)){
            return true
        }else if(i==arr[arr.length-1]){
            return false
        }else{
            
            console.log(arr.shift())
            return val(arr.shift())
        }
    }
}

console.log(someRecurssive([2,3,4], isOdd))