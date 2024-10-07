//Check the substring over a string
function naiveSearch(str, substr) {
    let i = 0; j = 0; count=0;
    // while (j < substr.length && i < str.length) {
    //     console.log("i,j", i, j , str[i], substr[j])
    //     if (str[i] == substr[j]) {
    //         i++
    //         j++
    //     } else {
    //         i++
    //         if(j!=substr.length && j>=1){
    //             j=0
    //         }
    //     }
    // }
    while (i < str.length-1){
        while (j < substr.length) {
            console.log("i,j", i, j, str[i], substr[j])
            if (str[i] == substr[j]) {
                i++
                j++
            } else {
                i++
                if (j != substr.length && j >= 1) {
                    j = 0
                }
            }
        }
        if (j == substr.length) {
            count++
            console.log("match found", count)
        }
    }

   
}

naiveSearch("lorlol", "pop");