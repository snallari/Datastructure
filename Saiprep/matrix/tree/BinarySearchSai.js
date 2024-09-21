//const q=require('../queue/queue.js')
//BST
//Has root Node
//Node is made of data , nextNode-----Trees Node is made of data, left and right
//LL create a node and give its root ---- Trees create a new node and give its root
//to push check if current is empty---- Check if newdata<cureent.left  or newData>current.right
//if is is add new node ------ if it is insert appropriately
//else current = current.nextnode --- else iterate current=current.left or current=current.right


//Transversal
//Inorder-inorder(left),console.log(node),inorder(right)
//Preorder-console.log(node),preorder(left),preorder(right)
//Postorder-postorder(left),postorder(right),console.log(node),

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
            this.size = 1
        } else {
            this.last.nextNode = newNode
            this.last = this.last.nextNode
            this.size++
        }
    }

    dequeue() {
        let del, newFirst
        if (!this.first) {
            return this.size = -1
        } else {
            del = this.first
            newFirst = this.first.nextNode
            this.first = newFirst
            this.size--
        }
        return del.data;
    }
}
class TNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

class BSTSai {
    postArr = []
    inArr = []
    constructor() {
        this.root = null
    }

    insertManual() {
        this.root = new TNode(1)
        this.root.left = new TNode(2)
        this.root.right = new TNode(3)
        this.root.left.left = new TNode(4)
        this.root.left.right = new TNode(5)
    }

    insert(data) {
        let currentL = 0, currentR = 0, current
        let newNode = new TNode(data)
        if (!this.root) {
            this.root = newNode
            // return this
        } else {
            current = this.root
            while (current) {
                if (data < current.data) {
                    if (current.left == null) {
                        current.left = newNode
                        return this;
                    } else {
                        current = current.left
                    }
                } else {
                    if (current.right == null) {
                        current.right = newNode
                        return this;
                    } else {
                        current = current.right
                    }
                    //return this.insert(current.right)
                }
            }
        }
        console.log("l,r", currentL, currentR)
    }

    find(data) {
        let findNode = new Node(data)
        let current
        if (this.root == null) {
            return undefined
        } else {
            current = this.root
            while (current) {
                console.log("data", current.data)
                if (findNode.data == current.data) {
                    console.log("found")
                    return current.data
                } else if (findNode.data > current.data) {
                    current = current.right
                } else {
                    current = current.left
                }
            }
            return "Not found in BST"
        }
    }

    preSaiorder() {
        let arr = [], current
        current = this.root
        const preorder = (current) => {
            if (current) {
                arr.push(current.data)
                preorder(current.left)
                preorder(current.right)
            }
        }
        preorder(current)
        console.log("arr", arr)
    }

    inSaiorder(node) {
        if (node != null) {
            this.inSaiorder(node.left)
            this.inArr.push(node.data)
            this.inSaiorder(node.right)
        }
        return this.inArr
    }

    postSaiorder(current) {
        if (current !== null) {
            this.postSaiorder(current.left)
            this.postSaiorder(current.right)
            this.postArr.push(current.data)
        }
        return this.postArr;
    }

    bfs() {
        let arr = [], current, qdel, arrFinal = []
        current = this.root
        arr.push(current)
        while (arr.length) {
            qdel = arr.shift()
            arrFinal.push(qdel.data)
            if (qdel.left) {
                arr.push(qdel.left)
            }
            if (qdel.right) {
                arr.push(qdel.right)
            }
        }
        console.log("arra", arrFinal)
        return arrFinal
    }

    bfsq() {
        let current, qdel, arrFinal = []
        current = this.root
        let q = new Queue()
        q.enqueue(current) //q=[10n]
        while (q.size) {
            qdel = q.dequeue() //[20n]
            arrFinal.push(qdel.data)//f=[10,6,15,3,8,20]
            if (qdel.left) {
                q.enqueue(qdel.left) //[3n,8n,20n]
            }
            if (qdel.right) {
                q.enqueue(qdel.right)
            }
        }
        console.log("arra", q)
        return arrFinal
    }

    findTheClosest(tree,target) {
        let currentNode, closest, prev, curr
        currentNode = this.root
        while (currentNode.data !== null) {
            if(target==currentNode.data){
                return console.log("found", currentNode)
            }
            else if (target<currentNode.data) {
                prev = currentNode.data
                if (currentNode.left !== null) {
                    currentNode = currentNode.left
                    curr = currentNode.data
                }
                console.log("tree right", curr, prev, closest)
                closest = (Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
            } else {
                prev = currentNode.data
                if (currentNode.right !== null) {
                    currentNode = currentNode.right
                    curr = currentNode.data
                }
                console.log("tree left", curr, prev, closest)
                closest = (Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
            }
            console.log("tree", curr, prev, closest)
        }


    }
}

var tree = new BSTSai()
//tree.insertManual()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log("tree", tree)
console.log("bfs tree", tree.bfsq())
console.log("findtheclosest", tree.findTheClosest(10, 15))
//console.log("bfs tree", tree.printLevelOrder(tree.root))
// console.log("pre tree", tree.preSaiorder())
// console.log("post tree", tree.postSaiorder(tree.root))
// console.log("in tree", tree.inSaiorder(tree.root))
//tree.inSaiorder()