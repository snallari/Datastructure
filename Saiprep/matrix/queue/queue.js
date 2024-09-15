//Queue is first in first out
//So the first element is the first out
//with LL we can do in O(1)
//Here we do push and shift
class QNode {
    constructor(data) {
        this.data = data
        this.nextNode = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = null
    }
    enqueue(data) {
        let current
        let newNode = new QNode(data)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
            this.size=1
        } else {
            this.last.nextNode=newNode
            this.last=this.last.nextNode
            this.size++
        }
        console.log("list", q)
    }

    dequeue() {
        let del, newFirst
        if (!this.first) {
            return this.size=-1
        } else {
            del = this.first
            newFirst=this.first.nextNode
            this.first=newFirst
            this.size--
        }
        return del.data;
    }
}

var q = new Queue()
q.enqueue(10)
q.enqueue(11)
q.enqueue(12)
q.enqueue(13)
console.log("q", q)
console.log(q.dequeue())
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
console.log("q", q)

