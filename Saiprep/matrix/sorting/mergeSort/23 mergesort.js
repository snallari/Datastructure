//O(nlogn) TC
// Divide the array till you there is only one element in the subarray
//Now merge the subarrays in the increment of 2-4-6-so starting with left and sort it
//Merge all the way till you get one single array
//CODE
//Create a helper function for sorting
//Loop all over 2 arrays after split
//push into temp array the lesser element and increment,the pushed array
//check if the first array consists of any elements and  push into temp array
//check if the second array consists of any elements and push into temp array

function strComp(a,b) {
  if (a < b) { return -1;}
 else if (a > b) { return 1;}
 return 0;
}

function split(arr,strComp) {
  if (arr.length <= 1) return arr;
  var mid = Math.floor(arr.length / 2)
  // let splitAar=arr.slice(0,mid)
  // let splitBar=arr.slice(mid)
  // console.log("a","b",splitAar,splitBar)
  let splitA = split(arr.slice(0,mid))
  let splitB = split(arr.slice(mid))
 // console.log("splits", splitA, splitB)
 return mergeSort(splitA, splitB,strComp)
}

function mergeSort(arrA, arrB, strComp) {
  let temp=[]
  let i = 0, j = 0
  while(i < arrA.length && j < arrB.length) {
   // console.log("string",arrA[i],arrB[j],arrA[i].localeCompare(arrB[j]))
    if (isString(arrA[i], arrB[j], strComp)) {
      temp.push(arrA[i])
      i++
    } else {
      temp.push(arrB[j])
      j++
    }
  }
  console.log("tempnormal", temp)
  while (i < arrA.length) {
    temp.push(arrA[i])
    i++
  }
  while (j < arrB.length) {
    temp.push(arrB[j])
    j++
  }
  console.log("temp", temp)
  return temp
}

function isString(a,b,strComp){
 console.log("its a object",typeof a)
  if(typeof(a)==="string"){
    return strComp(a,b)<1
  }else if(typeof(a)==="object"){
    console.log("its a object" , a.age, b.age)
    return a.age<b.age
  }else{
    return a<b
  }
}

// function mergeSort(arrA, arrB) {
//   let temp=[]
//   let i = 0, j = 0
//   while(i < arrA.length && j < arrB.length) {
//     if (arrA[i] < arrB[j]) {
//       temp.push(arrA[i])
//       i++
//     } else {
//       temp.push(arrB[j])
//       j++
//     }
//   }
//   console.log("tempnormal", temp)
//   while (i < arrA.length) {
//     temp.push(arrA[i])
//     i++
//   }
//   while (j < arrB.length) {
//     temp.push(arrB[j])
//     j++
//   }
//   console.log("temp", temp)
//   return temp
// }
var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
console.log(split(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"],strComp))
