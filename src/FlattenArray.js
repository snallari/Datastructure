
//UNLEARN EVERYTHING
const newArrSai=[]
const flatten = (arr) => {
  
  getArrays(arr, [])

  function getArrays(arr, acc) {
    for (let a of arr) {
      if (Array.isArray(a) && a.length > 0) {
        var narr=getValues(a, acc)
        console.log(narr)
      } else {
        newArrSai.push(a)
        acc=newArrSai
      }
    }
  }

  function getValues(arr, acc) {
    arr.reduce(function (flattenedArray, element) {
      return flattenedArray.concat(element)

    }, acc)

  }
  console.log(newArrSai)
}



// Do not edit the line below.
flatten([1, 2, 3, [4, [], 5]]);