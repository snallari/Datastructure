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

}

var weight = new WeightedGraph()
weight.addVertex("A")
weight.addVertex("B")
weight.addVertex("C")
weight.addVertex("D")
weight.addVertex("E")
weight.addVertex("F")
weight.addEdge("A", "B", 4)
weight.addEdge("A", "C", 2)
weight.addEdge("C", "D", 3)
weight.addEdge("D", "E", 1)
weight.addEdge("E", "F", 1)
weight.addEdge("F", "E", 2)
console.log("graph", weight)