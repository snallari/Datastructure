function reverseStrings(str){
    let s=str.trim().split(/\s+/).reverse()
    return s.join('  ')
}

console.log(reverseStrings("a good example"))