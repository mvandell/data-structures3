//PART 4 D's algorithm
class Graph {
    constructor(table) {
        this.nodes = new Map();

        for (const node in table) {
            this.addNode(node);
            for (const neighbor of table[node]) {
                const {node: neighborNode, weight} = neighbor;
                this.addEdge(node, neighborNode, weight);
            }
        }
    }

    addNode(node) {
        this.nodes.set(node,[]);
    }
    addEdge(n1, n2, weight) {
        this.nodes.get(n1).push({node: n2, weight});
        this.nodes.get(n2).push({node: n1, weight});
    }
}

const adjacencyTable = {
    "A": [{ node: "B", weight: 5, node: "C", weight: 2 }],   
    "B": [{ node: "D", weight: 4, node:"E", weight: 2 }],   
    "C": [{ node: "B", weight: 8, node: "E", weight: 7 }],   
    "D": [{ node: "E", weight: 6, node: "F", weight: 3 }],   
    "E": [{ node: "F", weight: 1 }],  
    "F": [{}] 
}

const graphD = new Graph(adjacencyTable);
const startNode = "A";
const endNode = "F";

//how to find endpoint
function dAlgo(graph, startN, endN){
    const distances = {};
    const visited = {};
    const previousNodes = {};

    for (const node of graph.nodes.keys()) {
        distances[node] = Infinity;
        previousNodes[node] = null;
    }

    distances[startN] = 0;

    const getMinDistanceNode = () => {
        let minNode = null;
        for (const node of graph.nodes.keys()) {
            if (!visited[node] && (minNode === null || distances[node] < distances[minNode])) {
                minNode = node;
            }
        }
        return minNode;
    };

    while (true) {
        const currentNode = getMinDistanceNode();

        if (currentNode === null || distances[currentNode] === Infinity) {
            break;
        }

        for (const neighbor of graph.nodes.get(currentNode)) {
            const {node, weight} = neighbor;
            const newDistance = distances[currentNode] + weight;

            if (newDistance < distances[node]) {
                distances[node] = newDistance;
                previousNodes[node] = currentNode;
            }
        }
        visited[currentNode] = true;
    }

    const path = [];
    let current = endN;

    while (current !== null) {
        path.unshift(current);
        current = previousNodes[current];
    }

    return {
        path,
        distance: distances[endN],
    };
}
const result = dAlgo(graphD, startNode, endNode) 
console.log("Shortest Path: ", result.path);
console.log("Distance: ", result.distance);