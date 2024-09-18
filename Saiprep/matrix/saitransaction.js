function transactionLog(logs, threshold){
    let map={} ,values=[]
    logs.forEach(element => {
        let arr= element.split(" ")
       console.log("arr", arr[0],arr[1])
       if(arr[0]==arr[1]){
        map[arr[0]]?map[arr[0]]++:map[arr[0]]=1
        console.log("arr", arr[0],arr[1])
       }else{
        map[arr[0]]?map[arr[0]]++:map[arr[0]]=1
        map[arr[1]]?map[arr[1]]++:map[arr[1]]=1
        console.log("arr", arr[0],arr[1], map)
       }
    });
       
    for(var id in map){
        if(map[id]>=threshold){
            values.push(id)
        }
        return values.sort()
    }
}

console.log("transaction", transactionLog(["345366 89921 45"],
    ["029323 38239 23"],
    ["38239 345366 15"],
    ["029323 38239 77"],
    ["345366 38239 23"],
    ["029323 345366 13"],
    ["38239 38239 23"]))