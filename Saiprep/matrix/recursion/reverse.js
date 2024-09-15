function reverse(word){
    if(word.length==1){
        return word
    }
    return word[word.length-1]+reverse(word.slice(0,(word.length-1)))
}

console.log(reverse('awesome'))