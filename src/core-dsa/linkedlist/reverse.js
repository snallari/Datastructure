function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
   
    reverse(head) {
        for (let i = 0; i < head.length; i++) {
            this.pushFromArray(head[i])
        }
    }

    pushFromArray(data) {
        let head, current
        let node = new ListNode(data)
        if (head == null) {
            head = node
        } else {
            current = head
            while (current) {
                if (current.next) {
                    current = current.next
                } else {
                    current = node
                }
            }
            console.log("linked", current)
        }
        return head
    }
}
var linked=new SinglyLinkedList()
console.log(linked.reverse([1,2,3,4,5]))


