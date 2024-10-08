
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

class Heaps {
    constructor() {
        this.values = []
        this.size = 0
        this.newValues = []
    }

    insert(element) {
        let median, idx,count = 0
        this.values.push(element)
        this.size = count++
        idx = this.values.length - 1
        while (idx > 0) {
            median = Math.floor(idx / 2)
            if (this.values[idx] < this.values[median]) {
                this.swap(median, idx)
            }
            idx = median
        }
        return this.values
    }
    swap(a, b) {
        let temp;
        temp = this.values[a]
        this.values[a] = this.values[b]
        this.values[b] = temp
        return this.values
    }
    //Only can delete highest priority element
    delete() {
        let replace = "", extract = "", newValues = []
        replace = this.values.pop()
        extract = this.values[0]
        this.values[0] = replace
        this.heapifyDown()
        return extract
    }

    heapifyDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        let lidx, ridx, l, r, swap
        while (idx < length) {
            lidx = 2 * idx + 1
            ridx = 2 * idx + 2
            if (lidx < length) {
                l = this.values[lidx]
                if (l < element) {
                    swap = lidx
                }
            }
            if (ridx < length) {
                r = this.values[ridx]
                if ((r < element && swap == null) || (swap !== null && r < l)) {
                    swap = ridx
                }
            }
            if (swap == null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
            swap = null
            console.log("values", this.values, idx);
        }


    }
}
class WeightedGraph {
    constructor() {
        this.adjencenyList = {}
    }
    addVertex(v) {
        if (v) {
            this.adjencenyList[v] = []
        }
    }

    addEdge(v1, v2, weight) {
        if (v1) {
            this.adjencenyList[v1].push({ v2, weight })
        }
    }

    //dijkstras to get the shortest path.
    dijkstras(start, end) {
        let distances = {}, previous = {}, currentNode, path = []
        let queue = new Queue()
        //add all vertices to previous and distances
        //Intializing distances[v] to infinity 
        //except the start to 0
        for (let v in this.adjencenyList) {
            distances[v] = Infinity
            queue.enqueue(v)
            if (start == v) {
                distances[v] = 0
                queue.enqueue(v)
            }
            previous[v] = null
        }
        // loop around the queue
        while (queue.size > 1) {
            currentNode = queue.dequeue()
            //dequeue getting the last
            console.log("currentnode", currentNode)
            if (currentNode == end) {
                while (previous[currentNode]) {
                    path.push(currentNode)
                    currentNode = previous[currentNode]
                }
                console.log("path", path)
                break;
            }
            if (currentNode) {
                for (let neigh in this.adjencenyList[currentNode]) {
                    //find neigh node (V, W)
                    let nextNode = this.adjencenyList[currentNode][neigh]
                    //Seperating the V and Weight
                    let nextWeight = nextNode.weight
                    let nextVertex = nextNode.v2
                    //find the sum of all nodes to the negigh node
                    let summing = distances[currentNode] + nextWeight
                    if (summing < distances[nextVertex]) {
                        // Updating the distances of nextvertex with new sum
                        distances[nextVertex] = summing
                        //adding the neighbor path 
                        previous[nextVertex] = currentNode
                        queue.enqueue(nextVertex, summing)
                    }
                }
            }
        }
        console.log("path",  distances)
        return path.concat(currentNode).reverse()
    }

    dijkstrasHeap(start, end) {
        let distances = {}, previous = {}, currentNode, path = []
        let queue = new Heaps()
        //add all vertices to previous and distances
        //Intializing distances[v] to infinity 
        //except the start to 0
        for (let v in this.adjencenyList) {
            distances[v] = Infinity
            queue.insert(v)
            if (start == v) {
                distances[v] = 0
                queue.insert(v)
            }
            previous[v] = null
        }
        // loop around the queue
        while (queue.values.length > 1) {
            currentNode = queue.delete()
            //dequeue getting the last
            console.log("currentnode", currentNode)
            if (currentNode == end) {
                while (previous[currentNode]) {
                    path.push(currentNode)
                    currentNode = previous[currentNode]
                }
                console.log("path", path)
                break;
            }
            if (currentNode) {
                for (let neigh in this.adjencenyList[currentNode]) {
                    //find neigh node (V, W)
                    let nextNode = this.adjencenyList[currentNode][neigh]
                    //Seperating the V and Weight
                    let nextWeight = nextNode.weight
                    let nextVertex = nextNode.v2
                    //find the sum of all nodes to the negigh node
                    let summing = distances[currentNode] + nextWeight
                    if (summing < distances[nextVertex]) {
                        // Updating the distances of nextvertex with new sum
                        distances[nextVertex] = summing
                        //adding the neighbor path 
                        previous[nextVertex] = currentNode
                        queue.insert(nextVertex, summing)
                    }
                }
            }
        }
        console.log("path", distances)
        return path.concat(currentNode).reverse()
    }
}


var weight = new WeightedGraph()
weight.addVertex("A")
weight.addVertex("B")
weight.addVertex("C")
weight.addVertex("D")
weight.addVertex("E")
weight.addVertex("F")
weight.addVertex("G")
weight.addEdge("A", "C", 100);
weight.addEdge("A", "B", 3);
weight.addEdge("A", "D", 4);
weight.addEdge("D", "C", 3);
weight.addEdge("D", "E", 8);
weight.addEdge("E", "F", 10);
weight.addEdge("B", "G", 9);
weight.addEdge("E", "G", 50);



//weight.dijkstras("A", "F")
console.log("graph heap", weight.dijkstrasHeap("A", "F"))
console.log("graph ", weight.dijkstras("A", "F"))