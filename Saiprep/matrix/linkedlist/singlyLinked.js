/*Linked list is a JS Class
which consists of
-Node Class
-Head Node
-Tail Node
The nodes are not interconnected,but connected to next one,
the access to the nodes is done
one after the other*/
class LinkedNode {
    constructor(data) {
        this.node = data
        this.nextNode = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }
    push(data) {
        //If there is no head, than no tail so assign the head and tail, to first node,
        //If head, this.tail.nextNode= new data, assign the tail to the new this.tail.nextNode.
        //If again there is a push, first, tail.nextNode=new data , tail= tail.nextNode, and increase the length
        let node = new LinkedNode(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.nextNode = node
            this.tail = this.tail.nextNode
        }
        this.length++
        return this
    }
    traverseNonRecursive() {
        ///till nextnode is null make the nextnode the current node and iterate.
        let current = this.head
        while (current != null) {
            current = current.nextNode
        }
    }


    traverse() {
        let current = this.head
        recurssion(current)
        function recurssion(current) {
            if (current != null) {
                console.log("current", current)
                current = current.nextNode
                return recurssion(current)
            }
        }
    }

    pop() {
        let current, prev
        if (this.head == null || this.length == 0) {
            return this.head = this.tail = null
        } else {
            if (this.length == 1) {
                this.head = this.tail
                this.length--
            } else {
                //check if there head, make it current and prev. Now keep the prev value, but change current=current+1(current.next). Everytime the current=current.nextNode, prev=current.
                //If the current.nextNode is no longer therem, than the tail=prev. head.nextNode==tail. tail.nextNode=null, to pop of the last one. 
                //decrease the length
                current = this.head
                while (current.nextNode != null) {
                    prev = current
                    current = current.nextNode
                    //   console.log("newTail", prev, current)
                }

                this.tail = prev
                this.tail.nextNode = null
                this.length--
            }



            return this
        }
    }

    unshift(data) {
        //Create a current with the head, assign head to new node, head.next to current,
        let current;
        let newNode = new LinkedNode(data)
        if (!this.head) {
            this.head = this.tail = newNode
        } else {
            current = this.head
            this.head = newNode
            this.head.nextNode = current
            console.log("shift", this)
        }
        this.length++
        return this;

    }

    shift() {
        if (!this.head) {
            return undefined
        } else {
            this.head = this.head.nextNode
        }
        this.length--
        if (this.length == 0) {
            this.tail = null
        }
        return this;
    }

    sumOfNodes() {
        let current, sum = 0
        if (!this.head) {
            return 0
        }
        current = this.head
        while (current) {
            sum += current.node
            current = current.nextNode
        }
        return sum
    }
    pushABunch(arr, list) {
        for (let i = 0; i < arr.length; i++) {
            list.push(arr[i])
        }
    }
    search(arr, key) {
        let count = 0, current
        if (key < 0 || key == this.length)
            return false
        current = this.head
        while (current) {
            if (current.node == key) {
                return count
            } else {
                current = current.nextNode
                count++
            }
        }
        return false
    }

    getIndex(arr, index) {
        // for (let i = 0; i < arr.length; i++) {
        //     list.push(arr[i])
        // }
        let count = 0, current
        if (index < 0 || index == this.length)
            return false
        current = this.head
        while (current) {
            if (count == index) {
                return current.node
            } else {
                current = current.nextNode
                count++
            }
        }
        return false
    }


    // If you want to insert between 2 nodes, take the reference of the index-1 node and index node , so index-1.next, can be set to newNode, newNode.next would be index node. 
    //We take the reference because if we set prev.next=newNode, we loose the reference of prev.next
    insertIndex(val, index) {
        let current, idx = 0, prev, currentnext
        let newNode
        newNode = new LinkedNode(val)
        if (this.head == null) {
            this.head = val
            this.tail = val
        } else {
            current = this.head
            while (current) {
                if (idx == index - 1) {
                    prev = current
                    currentnext = prev.nextNode
                    prev.nextNode = newNode
                    newNode.nextNode = currentnext
                    console.log("list", list)
                } else {
                    current = current.nextNode
                }
                idx++
            }
        }
    }

    insertIndexWithGet(val, key) {
        let current, idx = 0, prev, currentnext
        let newNode
        newNode = new LinkedNode(val)
        if (this.head == null) {
            this.head = val
            this.tail = val
        } else {
            current = this.head
            //var indexVal=this.search(["shr", "dad", "mum", "thatha", "amma", "sami"], key)
            var get = list.search(["shr", "dad", "mum", "thatha", "amma", "sami"], "dad")
            console.log("index", get)
            while (current) {
                if (get == key) {
                    prev = current
                    currentnext = prev.nextNode
                    prev.nextNode = newNode
                    newNode.nextNode = currentnext
                } else {
                    current = current.nextNode
                }
            }
            console.log("this", list)
        }
    }

    remove(index) {
        //If you want to remove between 2 nodes, take the reference of the delete-1 node, delete node, delete nextNode.  so we can set delete-1.next=delete+1. 
        //That way we dont loose the reference
        let current, prev, deleteNode, deleteNodeReplace
        if (index < 0 || index > list.length) {
            return undefined
        }
        if (index == 0) {
            list.shift()
        } else if (index == list.length - 1) {
            list.pop()
        } else {
            current = this.head
            var previous = list.getIndex(["shr", "dad", "mum", "thatha", "amma", "sami"], index - 1)
            console.log("search", previous)
            while (current) {
                //console.log("current",current.node, previous)
                if (current.node == previous) {
                    prev = current
                    deleteNode = prev.nextNode
                    deleteNodeReplace = deleteNode.nextNode
                    prev.nextNode = deleteNodeReplace
                    console.log("prev", prev, "current-dele", deleteNode, "replace", deleteNodeReplace)
                    this.length--
                }
                current = current.nextNode
            }
        }
        console.log("list", list)
    }

    reverseAList() {
        let prevPrev, prev, current
        current = this.head
        this.head = this.tail
        this.tail = current
        while (current) {
            prevPrev = prev
            prev = current
            current = current.nextNode
            prev.nextNode = prevPrev
            console.log("prevprev", prevPrev, "prev", prev, "current", current, "NEW", prev.nextNode)
        }
        console.log("list", list)
    }

    isSorted() {
        let prev, current
        if (this.head == null) {
            return undefined
        } else {
            current = this.head
            while (current.nextNode != null) {
                prev = current
                current = current.nextNode
                console.log("prev", prev.node, current.node)
                if (prev.node > current.node) {
                    return false
                }
            }
            return true
        }
    }

    concatenate(a, b) {
        let newNode
        newNode = a.head
        while (newNode.nextNode != null) {
                newNode = newNode.nextNode
        }
            newNode.nextNode=b.head //GJ
    }

    merge(a,b){
        console.log("head", a.head, b.head)
        let newNode, third, fourth, newNodeB
        fourth=new LinkedNode()
        newNode=a.head
        newNodeB=b.head
        console.log("newnode", newNode, newNodeB)
        if(newNode.node<newNodeB.node){
            third=newNode
            newNode=newNode.nextNode
        }else{
            third=newNodeB
            newNodeB=newNodeB.nextNode
        }
        console.log("third", third, fourth)
        while(newNode.node<newNodeB.node){
            third.nextNode=newNode.node
            fourth=third.nextNode
            third.nextNode=third.nextNode.nextNode
            newNode=newNode.nextNode
            console.log("third while 1", third, fourth)
        }
        while(newNode.node<newNodeB.node){
            third.nextNode=newNodeB.node
            fourth=third.nextNode
            third.nextNode=third.nextNode.nextNode
            newNodeB=newNodeB.nextNode
            console.log("third while 2", third, fourth)
        }
       
        console.log("third", third, fourth)
    }

    // concatenate(a ,b) {
    //     let newNode=a.head
    //     let bNode=b.head
    //     mergeRecursive(newNode)
    //     function mergeRecursive(newNode){
    //         if(newNode){
    //             newNode=newNode.nextNode
    //            return mergeRecursive(newNode)
    //         }
    //     }
    //     console.log("newNode",newNode)
    //}


}
let list = new SinglyLinkedList()
list.pushABunch([4, 10, 11, 3, 8], list)
let listB = new SinglyLinkedList()
listB.pushABunch([2, 5, 12, 14, 16], listB)
//console.log(list, listB)
list.merge(list, listB)
console.log("list", list)
//console.log("list",list.isSorted())
// list.push(1)
// list.push()
// list.push(1)
// list.unshift(3)
// console.log("unshift", list)
// list.traverse()
// list.sumOfNodes()
// var search = list.search(["shr", "dad", "mum", "thatha", "amma", "sami"])
// console.log("traverse", search, list)
// var reverseAList=list.reverseAList()
// console.log("reverse", reverseAList)
//var remove = list.remove(3)
// var get=list.getIndex(["shr", "dad", "mum", "thatha", "amma", "sami"], 1)
// console.log("get", get)

// var setInx=list.insertIndexWithGet("sai", 1)
// console.log("setInx", setInx)

// console.log("setInx", setInx)
// var setInx=list.insertIndex(5, 2)
// console.log("setInx", setInx)
// list.shift()
// console.log("shift", list)
// list.traverse()
// console.log("traverse", list)
// list.pop()
// console.log("pop", list)
// list.pop()
// list.pop
// console.log("pop", list)
// list.pop()
// console.log("pop", list)
// list.pop()
// console.log("pop", list)
