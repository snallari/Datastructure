class prims{
    findNearestVertex(distances, visited) {
        let minDistance = Infinity;
        let minVertex = -1;

        for (let i = 0; i < distances.length; i++) {
            if (!visited[i] && distances[i] < minDistance) {
                minDistance = distances[i];
                minVertex = i;
            }
        }

        return minVertex;
    }

    primeMST(vertex, edges, weights){
        const numVertices=vertex.length
        const parent=Array(numVertices).fill(null)
        const distances=Array(numVertices).fill(Infinity)
        const visited=Array(numVertices).fill(false)
       //start from vertex 0
       distances[0]=0
       parent[0]=-1
       visited[0]=true
       for(let i=0; i<numVertices-1; i++){
        const nearest=this.findNearestVertex(distances,visited)
        visited[nearest]=true
       }
    }
}

let p=new prims()
p.primeMST([])
 