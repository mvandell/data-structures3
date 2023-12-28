//PART 2 Breadth First Search
const graph = {
    A: ["B", "C"],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],   
    D: ['B'],   
    E: ['B', 'F'],   
    F: ['C', 'E']
}

//how to find endpoint
function bfs(graph, startV){
    const visited = new Set();
    const queue = [startV];
    visited.add(startV)
}