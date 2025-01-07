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
        this.root = new TNode(4)
        this.root.left = new TNode(2)
        this.root.right = new TNode(7)
        this.root.left.left = new TNode(1)
        this.root.left.right = new TNode(3)
    }

    insertBulk(arr){
        arr.forEach(e => {
            this.insert(e)
        });
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

    inSaiorder(current) {
        if (current !== null) {
            if(current.left)this.inSaiorder(current.left)
            if(current.data){this.inArr.push(current.data)}
            if(current.right)this.inSaiorder(current.right)
        }
        return this.inArr;
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

    nodeDept(){
        let arr = [], current, qdel, arrFinal = [], leftDepth=0, rightDepth=0
        current = this.root
        arr.push(current)
        while (arr.length) {
            qdel = arr.pop()
            console.log("value",leftDepth++, qdel)
            arrFinal.push(qdel.data)
            if (qdel.left) {
                arr.push(qdel.left)
            }
            if (qdel.right) {
                arr.push(qdel.right)
            }
        }
        console.log("arra")
        return leftDepth+rightDepth
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

    validateBST() {
        let current, qdel, arrFinal = []
        current = this.root
        let q = new Queue()
        q.enqueue(current) //q=[10n]
        console.log("enqueue", current)
        while (q.size) {
            qdel = q.dequeue() //[20n]
            console.log("dequeue", qdel)
            arrFinal.push(qdel.data)//f=[10,6,15,3,8,20]
            console.log("dequeue", qdel.left, qdel.right)
            if (qdel.left) {
                console.log("left good", current, qdel.left)
                if (qdel.left.data<current.data) {
                    console.log("left good")
                    q.enqueue(qdel.left)
                } //[3n,8n,20n]
                else{
                    return false
                }
            }
            if (qdel.right) {
                console.log("right good", current, qdel.right)
                if (qdel.right.data>=current.data) {
                    console.log("right good")
                    q.enqueue(qdel.right)
                }else{
                    return false
                    
                }
            }
        }
        if(q.size==0){
            return true
        }
    }

    gettree(root, val){
        let current, target
        if(root.data==val){
            target=root
        }else{
            current=root
        while(current){
            if(root.left.data<=val){
            if(root.left.data==val){
                target=root.left
                break;
            }else{
                if(root.left){
                    current=root.left
                }
            }
            }else{
               if(root.right.data==val){
                target=root.right
                break;
            }else{
                if(root.right){
                    current=root.left
                }
            }
            }
        }
        console.log("target", target)
        return target?[target.data, target.left.data, target.right.data]:[]
    }
}


    searchTheTree(root, val){
        let current=root
        let queue=new Queue()
        let arrFinal = []
        queue.enqueue(current)
        console.log("entering the queue", current)
        while(queue.size){
            let qdel=queue.dequeue()
            //console.log("qdel", qdel);
            //arrFinal.push(qdel.data)
            if(qdel.left){
                if(qdel.left.data==val){
                    console.log("found",qdel.left.data, qdel.left.left, qdel.left.right)
                    arrFinal=[qdel.left.data, qdel.left.left.data, qdel.left.right.data]
                }
                queue.enqueue(qdel.left)
                //console.log("add to the queue", qdel)
                //console.log("q", queue)
            }else{
                if(qdel.right.data==val){
                    console.log("found",qdel.right.data, qdel.right.left.data, qdel.right.right.data)
                    arrFinal=[qdel.left.data,qdel.left.left.data, qdel.left.right.data]
                }
                queue.enqueue(qdel.right)
               // console.log("q", queue)
            }
        }
        console.log("arrfinal", arrFinal)
        return arrFinal
     }
}


var tree = new BSTSai()
tree.insertManual()
//var op=tree.gettree(tree.root,5)
console.log("FOUND",tree.searchTheTree(tree.root,5))
tree.nodeDept()
console.log("tree", tree)
console.log("o/p",op);

//tree.insertBulk([3,9,20,null,null,15,7])

// tree.insert(1)
// tree.insert(null)
// tree.insert(2)
// tree.insert(3)
// tree.insert(3)
// tree.insert(8)
// tree.insert(20)
// tree.insert(11)
// tree.insert(16)
// tree.insert(1)
// tree.insert(31)
// tree.insert(18)
// tree.insert(21)

console.log(tree.inSaiorder(tree.root))
//console.log("bfs tree", tree.bfsq())
//console.log("findtheclosest", tree.findTheClosest(10, 20))
//console.log("bfs tree", tree.printLevelOrder(tree.root))
// console.log("pre tree", tree.preSaiorder())
// console.log("post tree", tree.postSaiorder(tree.root))
// console.log("in tree", tree.inSaiorder(tree.root))
//tree.inSaiorder()
