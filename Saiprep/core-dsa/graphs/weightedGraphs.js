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
            console.log("currentnode",currentNode)
            if (currentNode == end) {
                while(previous[currentNode]){
                    path.push(currentNode)
                    currentNode=previous[currentNode]
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
        console.log("path", path, currentNode, path.concat(currentNode).reverse())
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
weight.addEdge("A", "B", 4)
weight.addEdge("B", "C", 2)
weight.addEdge("C", "D", 3)
weight.addEdge("D", "E", 1)
weight.addEdge("E", "F", 1)
weight.addEdge("F", "E", 2)
weight.dijkstras("A", "F")
console.log("graph", weight.dijkstras("A","F"))