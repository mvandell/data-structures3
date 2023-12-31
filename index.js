//PART 1 Prim's Algorithm
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(v, priority) {
        this.values.push({v, priority});
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
    }
    isEmpty() {
        return this.values.length === 0;
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(v) {
        if (!this.adjacencyList.has(v)) {
            this.adjacencyList.set(v, []);
        }
    }
    addEdge(v1, v2, weight) {
        this.adjacencyList.get(v1).push({node: v2, weight});
        this.adjacencyList.get(v2).push({node: v1, weight});
    }
}

const graphP = new Graph();
for (let i = 0; i < 9; i++) {
    graphP.addVertex(i);
}
graphP.addEdge(0, 1, 4);
graphP.addEdge(0, 7, 8);
graphP.addEdge(1, 2, 8);
graphP.addEdge(1, 7, 11);
graphP.addEdge(2, 3, 7);
graphP.addEdge(2, 8, 2);
graphP.addEdge(2, 5, 4);
graphP.addEdge(3, 4, 9);
graphP.addEdge(3, 5, 12);
graphP.addEdge(4, 5, 10);
graphP.addEdge(5, 6, 2);
graphP.addEdge(6, 7, 1);
graphP.addEdge(6, 8, 6);
graphP.addEdge(7, 8, 7);

function prims(graph) {
    const visited = new Set();
    let queue = new PriorityQueue();
    let cost = 0;
    const startV = Array.from(graph.adjacencyList.keys())[0];
    const mst = [];

    visited.add(startV);
    graph.adjacencyList.get(startV).forEach(edge => {
        queue.enqueue({vertex: startV, edge}, edge.weight)
    });

    while (!queue.isEmpty()) {
        const {vertex, edge} = queue.dequeue();

        if (!visited.has(edge)) {
            visited.add(edge);
            mst.push({edge, vertex});
            cost += edge.weight;

            console.log(graph.adjacencyList.get(edge))
            graph.adjacencyList.get(edge).forEach(nextEdge => {
                if (!visited.has(nextEdge)) {
                    queue.enqueue({vertex: edge, edge: nextEdge},)
                }
            });
        }
    }
    return {mst, cost};
}

console.log(prims(graphP));