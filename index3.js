//PART 3 Depth First Search
const graph = {
    A: ["B", "C"],   
    B: ["A", "D", "E"],   
    C: ["A", "F"],   
    D: ["B"],   
    E: ["B", "F"],   
    F: ["C", "E"]
}

function dfs(graph, startV, endV){
    const visited = new Set();
    visited.add(startV);
}