function reverseVowels(s){
    let vowels=['a','e','i','o','u']
    let left=0, right=s.length-1
    let sArr=s.split('')
    let v, u
    while(left<right){
        v=vowels.some((v)=>v==sArr[left].toLowerCase())
        u=vowels.some((v)=>v==sArr[right].toLowerCase())
        console.log("v",v, u, left, right);
        if(v && u){
            let temp=sArr[left]
            console.log("val", sArr[left])
            sArr[left]=sArr[right]
            sArr[right]=temp
            console.log(sArr)
            left++
            right--
        }else if(!u){
            right--
        }else{
            left++
        }
       // console.log(sArr)
    }
    return sArr.join('')
}
console.log(reverseVowels('IceCreAm'));

// reverseVowels('hello')