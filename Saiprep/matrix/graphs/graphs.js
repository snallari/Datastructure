//Graphs consist of vertex(nodes)
//edges(connections)
//Next, left, right would not work
//Adjacany matrix (2 d array), adjacency list
//Adjancey list is easy for insert and delete
class Graphs {
    constructor() {
        this.adjancencyList = {}
    }

    addVertex(data) {
        if (!this.adjancencyList[data]) {
            this.adjancencyList[data] = []
        }
    }
    addEdge(data1, data2) {
        if (this.adjancencyList[data1]) {
            this.adjancencyList[data1].push(data2)//This is directed graph
        }
        if (this.adjancencyList[data2]) {
            this.adjancencyList[data2].push(data1)//This is directed graph
        }
    }
    removeEdge(data1, data2) {
            this.adjancencyList[data1] = this.adjancencyList[data1].filter((v) => v != data2)//This is directed graph
            this.adjancencyList[data2] = this.adjancencyList[data2].filter((v) => v != data1)//This is directed graph
            console.log("removed", this.adjancencyList[data1])
    }
    removeVertex(v){
        this.adjancencyList[v].forEach(element => {
            this.removeEdge(v,element)
        });
        delete this.adjancencyList[v]
    }
}


let graph = new Graphs()
graph.addVertex("dallas")
graph.addVertex("tokyo")
graph.addVertex("aspen")
graph.addEdge("dallas", "tokyo")
graph.addEdge("dallas", "aspen")
console.log("sai", graph.removeEdge("dallas", "aspen"))
// console.log("sai", graph.removeEdge("dallas", "tokyo"))
//graph.removeVertex("dallas")
console.log("graph", graph)