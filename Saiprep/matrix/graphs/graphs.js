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
    }
    removeEdge(data1, data2) {
        if (this.adjancencyList[data1]) {
           return  this.adjancencyList[data1].filter((v) => console.log("this is",v))//This is directed graph
        }
    }
}


let graph = new Graphs()
graph.addVertex("sai")
graph.addVertex("help")
graph.addEdge("help", "I really need you")
graph.addEdge("sai", "need you")
console.log("sai", graph.removeEdge("sai", "need you"))
console.log("graph", graph)