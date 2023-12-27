//PART 1 Prim's Algorithm
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(v, priority) {
        this.values.push({v, priority});
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(v) {
        if (!this.adjacencyList[v]) {
            this.adjacencyList[v] = [];
        }
    }
    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ room: v2, weight });
        this.adjacencyList[v2].push({ room: v1, weight });
    }
}

const graph = new Graph();
for (let i = 0; i < 9; i++) {
    graph.addVertex(i);
}
graph.addEdge(0, 1, 4);
graph.addEdge(0, 7, 8);
graph.addEdge(1, 2, 8);
graph.addEdge(1, 7, 11);
graph.addEdge(2, 3, 7);
graph.addEdge(2, 8, 2);
graph.addEdge(2, 5, 4);
graph.addEdge(3, 4, 9);
graph.addEdge(3, 5, 12);
graph.addEdge(4, 5, 10);
graph.addEdge(5, 6, 2);
graph.addEdge(6, 7, 1);
graph.addEdge(6, 8, 6);
graph.addEdge(7, 8, 7);

function prims() {
    const visited = new Set();
    let queue = new PriorityQueue();
    let cost = 0;
    const startV = graph.adjacencyList[0];

    queue.enqueue(startV, priority)
}

//look up Stanley's video