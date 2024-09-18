//Graphs consist of vertex(nodes)
//edges(connections)
//Next, left, right would not work
//Adjacany matrix (2 d array), adjacency list
//Adjancey list is easy for insert and delete
//Transveral
//BFS: 2 terms visited, explored same as level order trees
// It can be done using queues

//DFS:IT uses stack
//go to each vertex make                                                                                          
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

    dfs(v){
        const stack=[]
        const result=[]
        const visited={}
        let currentVertex;
        stack.push(v)
        visited[v]=true
        while(stack.length){
            console.log("stack", stack)
            currentVertex=stack.pop()
            console.log("currentdfs", visited)
            this.adjancencyList[currentVertex].forEach((n)=>{
                if(!visited[n]){
                    visited[n]=true
                    stack.push(n)
                }
            })
        }
    }

    bfs(v){
        const queue=[]
        const visited={}
        let currentVertex;
        visited[v]=true
        queue.push(v)
        while(queue.length){
            console.log("q", queue)
            currentVertex=queue.shift()
            console.log("current", visited)
            this.adjancencyList[currentVertex].forEach((n)=>{
                console.log(visited[n],n)
                if(!visited[n]){
                    visited[n]=true
                    queue.push(n)
                }
            })
        }
    }
}


let graph = new Graphs()
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
graph.addVertex(6)
graph.addVertex(7)
graph.addEdge(1,2)
graph.addEdge(2,3)
graph.addEdge(3,4)
graph.addEdge(1,3)
graph.addEdge(4,5)
graph.addEdge(3,5)
graph.addEdge(5,6)
graph.addEdge(5,7)
graph.dfs(1)
graph.bfs(1)
//console.log("sai", graph.removeEdge("D", "A"))
// console.log("sai", graph.removeEdge("dallas", "tokyo"))
//graph.removeVertex("dallas")
// console.log("graph", graph.adjancencyList)