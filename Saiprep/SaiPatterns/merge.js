getmerege()

function getmerege() {
    const word1 = "abc"
    const word2 = "pqr"

    const wordArr1 = word1.split('')
    const wordArr2 = word2.split('')

    const wordmerge = []
    let i=0

    while (wordArr1.length == wordArr2.length) {
        wordmerge.push(wordArr1[i])
        wordmerge.push(wordArr2[i])
        i++
    }
    
}
