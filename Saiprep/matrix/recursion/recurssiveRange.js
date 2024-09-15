function recurssiveRange(n){
 if(n==1){
    return n
 }
 return n+recurssiveRange(n-1)
}

console.log(recurssiveRange(6))