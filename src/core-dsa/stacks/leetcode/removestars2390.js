var removeStars=(s)=>{
    let stack=[]
        let splitystr=s.split("")
        splitystr.forEach(e => {
            if(e!=='*'){
                stack.push(e)
                console.log("stack", stack)
            }else{
                stack.pop()
                console.log("stack", stack)
            }
        });
        return stack.join('')
    }

    // for(let i=0; i<splitystr.length; i++){
    //     if(splitystr[i]==='*'){
    //         splitystr.splice(i-1,2)
    //         console.log("*",(i), splitystr[i], splitystr);
    //     }
    // }
    //console.log("count", count,splitystr)

console.log(removeStars("leet**cod*e"))