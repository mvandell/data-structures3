//PART 4 D's algorithm
graph = {
    A: { B: 5, C: 2 },   
    B: { D: 4, E: 2 },   
    C: { B: 8, E: 7 },   
    D: { E: 6, F: 3 },   
    E: { F: 1 },   
    F: {}
}

//how to find endpoint
function dAlgo(graph, startV, endV){
    const distance = new Map();
    const visited = new Set();
    const queue = [];

    
}