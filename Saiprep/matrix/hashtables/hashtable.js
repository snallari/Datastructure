//Object and hashmaps 
//Hashtable is a key value data store

class Hashtable {
    constructor() {
        this.dataMap = []
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)) % 2
        }
        return hash
    }
    setHash(key, value) {
        console.log("hash", this.dataMap)
        let index = this._hash(key)
        if (!this.dataMap[index]) {
            this.dataMap[index] = []
        }
        this.dataMap[index].push(key, value)
    }
    getHash(key) {
        let index = this._hash(key)
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][0] == key) {
                    return this.dataMap[index][i]
                }
            }
        }
    }

    getKeys() {
        let keys=[]
        for (let index = 0; index < this.dataMap.length; index++) {
            if (this.dataMap[index] !== undefined) {
                for (let i = 0; i < this.dataMap[index].length; i++) {
                    keys.push(this.dataMap[index][0])
                }
            }
        }
        return keys
    }

    getValues() {
        let values=[]
        for (let index = 0; index < this.dataMap.length; index++) {
            if (this.dataMap[index] !== undefined) {
                for (let i = 0; i < this.dataMap[index].length; i++) {
                    values.push(this.dataMap[index][1])
                }
            }
        }
        return values
    }

}
let hash = new Hashtable()
hash.setHash("sai", "apple")
hash.setHash("ram", "boy")
console.log(hash.getHash("ram"))
console.log(hash.getKeys())
console.log(hash.getValues())

console.log(hash)