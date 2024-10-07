function same(a,b){
    if(a.length == b.length){
        console.log(b.includes(4))
       return a.every(i=>i>0)
    }else{
        return false
    }
}
console.log("calling", same([1,2,3], [4,1,9]))



// for(let i=0; i<a.length; i++){
        //     for(let j=0; j<b.length; j++){
        //         if(a[i]*a[i] === b[j]){
        //             console.log("its true", a[i]*a[i], b[j] )
        //         }
        //     }
        // }
        //console.log( a.every((i)=>{console.log}))
        //     return a;
        // }else{
        //     return false