//PART 3 Depth First Search
const adjacencyTable = {
    A: ["B", "C"],   
    B: ["A", "D", "E"],   
    C: ["A", "F"],   
    D: ["B"],   
    E: ["B", "F"],   
    F: ["C", "E"]
}

//how to find endpoint
function findAllRoutes(graph, startNode, endNode) {
    const visited = new Set();
    const routes = [];
  
    function dfs(currentNode, path) {
      visited.add(currentNode);
  
      if (currentNode === endNode) {
        routes.push([...path]);
      } else {
        for (const neighbor of graph[currentNode]) {
          if (!visited.has(neighbor)) {
            path.push(neighbor);
            dfs(neighbor, path);
            path.pop();
          }
        }
      }
  
      visited.delete(currentNode);
    }
  
    dfs(startNode, [startNode]);
    return routes;
  }

console.log(findAllRoutes(adjacencyTable, "A", "F"))