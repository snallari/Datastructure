export default class GraphAdjacencyMatrix{

    constructor(vertices){
        this.vertices=vertices
        this.adjacencyMatrix=[]
        for(let i=0;i<vertices;i++){
            this.adjacencyMatrix[i]=[]
            for(let j=0;j<vertices;j++){
                this.adjacencyMatrix[i][j]=0
            }
        }
    }
    addVertex(v){
        this.vertices++
        for(let i=0;i<this.adjacencyMatrix.length;i++){
            this.adjacencyMatrix[i][this.vertices-1]=0
        }
        this.adjacencyMatrix[this.vertices-1]=[]
        for(let j=0;j<this.vertices;j++){
            this.adjacencyMatrix[this.vertices-1][j]=0
        }
        console.log("matrix", this.adjacencyMatrix)
        console.log("------------------")
    }
    addEdge(v1,v2){
        if(v1>=this.vertices || v2>=this.vertices || v1<0 || v2<0){
            console.log("invalid vertex")
            return
        }
        //since its undirected
        this.adjacencyMatrix[v1][v2]=1
        this.adjacencyMatrix[v2][v1]=1
    }
    addEdgeDirected(v1,v2){
        if(v1>=this.vertices || v2>=this.vertices || v1<0 || v2<0){
            console.log("invalid vertex")
            return
        }
        // since its directed
        this.adjacencyMatrix[v1][v2]=1
    }
}
const g=new GraphAdjacencyMatrix(2)
g.addVertex()
g.addEdgeDirected(1,2)
console.log(g.adjacencyMatrix)