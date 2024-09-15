//Stacks work LIFO
//Recursion is the example of stacks- it uses call stack
//Undo 
//It can be implemented by LL  unshift and shift with O(N)
//with array push and pop it becomes of O(N) as it has to access all items to go to last one

class StackNode {
    constructor(data) {
        this.data = data
        this.nextNode = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = null
    }
    push(data) {
        let oldHead, current
        var dat = new StackNode(data)
        if (!this.first) {
            this.first = dat
            this.last = dat
            this.size = 1
        } else {
            oldHead=this.first
            this.first=dat
            this.first.nextNode=oldHead
            this.size++
        }
        return this
    }
    pop() {
        let newHead, deleteHead
        if (!this.first) {
            return null
        } else {
            newHead = this.first.nextNode
            deleteHead = this.first
            this.first = newHead
            this.size--
        }
        console.log("delete", deleteHead)
        return deleteHead
    }
}

var stack = new Stack()//GJ sai you say pls help
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(11)
stack.push(12)
stack.push(13)
stack.push(14)
stack.push(15)
console.log("list", stack)
console.log(stack.pop())
console.log("list", stack)