function richestMe(mat){
    var richestNumber = 0
    for (var i = 0; i < mat.length; i++) {
        var counter = 0
        for (var j = 0; j < mat[i].length; j++) {
            console.log(mat[i][j])
            counter += mat[i][j]
        }
      richestNumber= Math.max(richestNumber, counter)
    }

    return richestNumber
}

console.log("prevval", richestMe([[7,1,3],[2,8,7],[1,9,5]]))