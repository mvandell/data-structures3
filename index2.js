//PART 2 Breadth First Search
const adjacencyTable = {
    A: ["B", "C"],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],   
    D: ['B'],   
    E: ['B', 'F'],   
    F: ['C', 'E']
}

//how to find endpoint
function bfs(graph, startV, endV){
    const visited = new Set();
    const queue = [[startV, [startV]]];
    
    while (queue.length > 0) {
        const [current, path] = queue.shift();

        if (visited.has(current)) {
            continue;
        }
        visited.add(current);

        for (const neighbor of graph[current]) {
            if (neighbor === endV) {
                return path.concat(neighbor)
            }
            if (!visited.has(neighbor)) {
                queue.push([neighbor, path.concat(neighbor)]);
            }
        }
    }
    return null;
}

console.log(bfs(adjacencyTable, "A", "F"))