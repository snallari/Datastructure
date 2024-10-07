//In doubly linked list there is a prevNode, along with all other things in the singly linked list
class LinkedNode {
    constructor(data) {
        this.data = data
        this.nextNode = null
        this.prevNode = null
    }
}

class DLL {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    pushABunch(arr){
        for(let ele of arr){
            this.push(ele)
        }
    }

    push(data) {
        let prev
        let newnode = new LinkedNode(data)
        if (!this.head) {
            this.head = this.tail = newnode
        } else {
            prev = this.tail
            this.tail.nextNode = newnode
            this.tail = this.tail.nextNode
            this.tail.prevNode = prev
        }
        this.length++
        // console.log("this", this)
        return this
    }

    pop() {
        let deleteItem, newTail
        if (!this.head) {
            return undefined
        } else {
            deleteItem = this.tail
            newTail = this.tail.prevNode
            this.tail = newTail
            this.tail.nextNode = null

            this.length--
        }
        // console.log("this", this)
        return deleteItem
    }

    shift() {
        let deleteItem, newHead
        if (!this.head) {
            return undefined
        } else {
            deleteItem = this.head
            newHead = this.head.nextNode
            this.head = newHead
            this.head.prevNode = null
            this.length--
        }
        // console.log("length", this.length)
        return deleteItem
    }

    unshift(data) {
        let oldHead
        let newNode = new LinkedNode(data)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            oldHead = this.head
            this.head = newNode
            this.head.nextNode = oldHead
            oldHead.prevNode = this.head
        }
        this.length++
    }

    get(index,val) {
        let current,lastCurrent
        let count = 0
        current = this.head
        if (index < Math.floor(this.length / 2)) {
            while (current) {
                if (count == index) {
                    return current.data
                }
                count++
                current = current.nextNode
            }
        } else {
            count=this.length
            lastCurrent = this.tail
            while (lastCurrent) {
                if (count == index) {
                    return lastCurrent.data
                }
                count--
                lastCurrent=lastCurrent.prevNode
            }
        }


        return undefined
    }

    numOfNodes(head) {
        let current, count = 0
        if (!head) {
            return 0
        } else {
            current = head
            while (current) {
                count++
                current = current.nextNode
                console.log("count", count)
            }
        }
        return count
    }
    isItOddOrEven(){
        var val=this.numOfNodes()
        var isOddOrEven=val%2==0?"even":"odd"
        return isOddOrEven
    }
    setAItemAtIndex(val, index){
        let current, newNodeNext, rememberReplace,count=0
        let newNode=new LinkedNode(val)
        let getVal=this.get(index-1)
        console.log("getval set", getVal)
        current=this.head
        while(current){
            if(current.data==getVal){
                rememberReplace=current.nextNode.nextNode
                current.nextNode=newNode
                newNode.nextNode=rememberReplace
                // this.length++
                // console.log("newNode", current, rememberReplace)
                // newNode.nextNode=rememberReplace
            }
            current=current.nextNode
        }
        return this //GJ
    }

    insertAItemAtIndex(val, index){
        let current, newNodeNext, rememberReplace,count=0
        let newNode=new LinkedNode(val)
        let getVal=this.get(index-1)
        console.log("getval", getVal)
        current=this.head
        while(current){
            if(current.data==getVal){
                rememberReplace=current.nextNode
                current.nextNode=newNode
                this.length++
                //console.log("newNode", current, rememberReplace)
                newNode.nextNode=rememberReplace
            }
            current=current.nextNode
        }
        return this //GJ
    }
//1>2>3>4
//get 2
//remember 4
//pre
    removeNode(index){
        let current, remember,prev,deleteNode
        let getVal=this.get(index-1)
        current=this.head
        while(current){
            if(current.data==getVal){
                console.log("delete node",current.data)
                prev=current
                remember=current.nextNode.nextNode
                current.nextNode=deleteNode
                //current.nextNode=null
                current.nextNode=remember
                remember.prevNode=prev
                this.length--

            }
            current=current.nextNode
        }
        return this
    }

}

var dll = new DLL()
//dll.pushABunch([11, 19,  25, 26, 78 , 90])
dll.pushABunch(["ant","bus", "cat", "dog", "eat", "fan","gap", "hat", "ice", "jam"])
console.log("dll", dll)
console.log("odd",dll.isItOddOrEven())
console.log("total", dll.numOfNodes(dll.head))
console.log("get", dll.get(7))
console.log("get", dll.get("eat"))
//console.log("set", dll.setAItemAtIndex(5, 2))
console.log("set", dll.setAItemAtIndex("sai", 8))
console.log(dll)
console.log("set", dll.insertAItemAtIndex("saibaba", 8))
console.log(dll)
console.log("delete", dll.removeNode(3))
console.log(dll)
