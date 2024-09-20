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

    //Push each vertex or node in the q, 
    //make it visted=true
    //while q.size is not empty 
    //SHIFT the node (FIFO, from first )
    //use this node to loop over all the ADJANCENCY LIST- mark as VISITED
    //push on the queue
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

    //Same steps as BFS- Only difference 
    //as it Use stack mechansisim-Pop instead of Shift(LIFO)
    //push the root noode or v
    //make it visited
    //while stack is not empty
    //pop the stack
    //use this node to get all the adjacency vertices
    //make it visited
    //push on stack

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
    dfsrecursive(v){
        let result=[]
        let visited={}
        let currentVertex
        let adjlist=this.adjancencyList
        child(v)
        function child(v){
            if(v==null){
                return undefined
            }
            currentVertex=v
            result.push(v)
            console.log("res", result)
            visited[v]=true
            adjlist[currentVertex].forEach((v)=>{
                if(!visited[v]){
                    child(v)
                }
            })
        }
        console.log("res", result)
        return result
    }
}


let graph = new Graphs()
// graph.addVertex(1)
// graph.addVertex(2)
// graph.addVertex(3)
// graph.addVertex(4)
// graph.addVertex(5)
// graph.addVertex(6)
// graph.addVertex(7)
// graph.addEdge(1,2)
// graph.addEdge(2,3)
// graph.addEdge(3,4)
// graph.addEdge(1,3)
// graph.addEdge(4,5)
// graph.addEdge(3,5)
// graph.addEdge(5,6)
// graph.addEdge(5,7)
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("G")
graph.addEdge("D", "A")
graph.addEdge("D", "E")
graph.addEdge("E", "A")
graph.addEdge("A", "C")
graph.addEdge("C", "F")
graph.addEdge("C", "G")
graph.addEdge("F", "B")
graph.addEdge("B", "C")
graph.dfsrecursive("D")
graph.dfs("D")
graph.bfs("D")
//console.log("sai", graph.removeEdge("D", "A"))
// console.log("sai", graph.removeEdge("dallas", "tokyo"))
//graph.removeVertex("dallas")
// console.log("graph", graph.adjancencyList)