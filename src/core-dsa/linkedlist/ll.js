class LinkedNode {
    constructor(data) {
        this.data = data
        this.nextNode = null
        this.prevNode = null
    }
}

deleteMiddle([1,3,4,7,1,2,6])

function getLL(arr){
    let current, i=1, newnode
    current=new LinkedNode(arr[0])
    newnode=current

    while(newnode && i<arr.length){
        current.nextNode=arr[i]
        newnode.nextNode=current.nextNode
        i++
        console.log("current", current)
    }
   

}

function deleteMiddle(head) {
    let list
    list=getLL([1,3,4,7,1,2,6])
    let current, prev, deleteNode, deleteNodeReplace, count
    current = head
    while (current) {
        current = current.next
        count++
    }
    var previous = Math.floor(count / 2) - 1
    console.log("search", previous)
    while (current) {
        if (count == previous) {
            prev = current
            deleteNode = prev.next
            deleteNodeReplace = deleteNode.nextNode
            prev.nextNode = deleteNodeReplace
            this.length--
        }
        count++
        current = current.nextNode
    }
}
