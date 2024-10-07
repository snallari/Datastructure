/* n=14
14/2=7
7-1=6
6/2=3
3-1=2
2/2=1
1-1=0*/

function numOfSteps(n){
    var  counter = 0
    while (n > 0) {
        counter++
        (n % 2 == 0) ? n/= 2 : n --
    }
    return counter
}

console.log("numsofsteps",numOfSteps(8))