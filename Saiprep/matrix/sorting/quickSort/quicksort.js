var startIndex = 0
var endIndex;
function quickSort(array) {
   let si = 0, ei = array.length - 1
    return quickort(array, si, ei)
    function quickort(arr, startIndex, endIndex) {
        if (startIndex<=endIndex) {
            console.log("start", startIndex, endIndex)
            let pi = getPivotHelper(arr, startIndex, endIndex)
            quickort(arr, startIndex, pi - 1)
            quickort(arr, pi+1, endIndex)
        }
        return arr
    }

    function getPivotHelper(arr, startIndex, endIndex) {
        let pivot= startIndex
       console.log("spivot", arr[pivot], arr[startIndex], arr[endIndex], "--", pivot, arr,)
        while (startIndex<=endIndex) {
            console.log("inside spivot", arr[pivot], arr[startIndex], arr[endIndex], "--", pivot, arr,)
            if (arr[startIndex] > arr[pivot] && arr[endIndex] < arr[pivot]) {
                swap(startIndex, endIndex, arr)
            }
            if (arr[startIndex] <= arr[pivot]) {
                startIndex++
            }
            if (arr[endIndex] > arr[pivot]) {
                endIndex--
            }
        }
        swap(endIndex, pivot, arr)

        return endIndex
    }

    function swap(a, b, arr) {
        let temp = 0;
        temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
        return arr;
    }
}

quickSort([10,80,30,90,40,50,70])