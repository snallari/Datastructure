//Object and hashmaps 
//Hashtable is a key value data store

class Hashtable{
    constructor(size){
        this.dataMap=new Array(size)
    }
    _hash(key){
        let hash=0
        for(let i=0; i<key.length; i++){
            hash=(hash+key.charCodeAt(i))%23
        }
        return hash
    }
    set(key, value){
        let index=this._hash(key)
        console.log("index", index)
        if(!this.dataMap[index]){
            this.dataMap[index]=[]
        }
        this.dataMap[index].push([key,value])
        return this
    }
    get(key){
        let index=this._hash(key)
        if(this.dataMap[index]){
            for(let i=0; i<this.dataMap[index].length; i++){
                if(this.dataMap[index][i][0]==key){
                    return this.dataMap[index][i][1]
                }
            }
        }
    }
    search(value) {
        const index = this._hash(value)
        if (this.dataMap[index] == value)
            console.log("The value is found at index : ", index);
        else
            console.log("Not found");
    }
 
}
let hash=new Hashtable()
hash.set("sai", "apple")
hash.set("ram", "boy")
console.log(hash.get("ram"))
console.log(hash.search("sai"))
console.log(hash)