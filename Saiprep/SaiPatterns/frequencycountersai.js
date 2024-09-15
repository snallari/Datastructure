function same(arr1, arr2) {
    console.log("it is here")
    var fq1 = {}
    var fq2 = {}
    arr1.forEach(fq => {
        fq1[fq]=fq1[fq]=1||=fq1[fq]+=1
        
    });
    arr2.forEach(fq => {
        fq2[fq] = 1
    }
    )
    console.log("sai", fq1, fq2)
}

same([1, 2, 3, 3], [9, 1, 4, 4])