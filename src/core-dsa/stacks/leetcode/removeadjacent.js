function removeadjacent(str){
    let stack=[]
    for(let c of str){
        //console.log(stack[stack.length-1], c)
        if(stack.length>0 && stack[stack.length-1]==c){
            stack.pop()
        }else{
            stack.push(c)
        }
    }
    return stack.join()
}

console.log(removeadjacent("azxxzy"))