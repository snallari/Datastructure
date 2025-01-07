function removespace(s, t){
    let stack=[], sstrng, tstring
    for(let c of s){
        if(c!='#'){
            stack.push(c)
        }else{
            stack.pop()
        }
    }
    sstrng=stack.join('')
    console.log("sat", sstrng, tstring)
    stack=[]
    for(let c of t){
        if(c!='#'){
            stack.push(c)
        }else{
            stack.pop()
        }
    }
    tstring=stack.join('')
    console.log("sat", sstrng, tstring)
    return sstrng==tstring
}

console.log(removespace('ab#c','ad#c'))