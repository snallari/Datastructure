
const val = (arr, v) => {
  for(let i=0; i<arr.length; i++){
    if(arr[i]==v){
        return arr[i]
    }
  }
  return -1
}
console.log(val([10, 15, 20, 25, 30], 15))
//LinearSearch 
//BestCase=o(1)
//WorstCase=o(n)
