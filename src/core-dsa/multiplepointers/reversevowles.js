function reverseVowels(s){
    let vowels=['a','e','i','o','u']
    let left=0; right=s.length-1
    let sArr=s.split('')
    while(left<right){
        if(sArr[left] in vowels && sArr[right] in vowels){
            let temp=sArr[left]
            sArr[left]=sArr[right]
            sArr[right]=temp
        }
        return sArr.join('')
    }
}