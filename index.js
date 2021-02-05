// rootNode (x,y)
// vertices Array of { name: (x,y), distance: number, predecessor: string }
// edges Array of [(x,y), (x,y)]
function bfs(rootNode, vertices, edges){
  const queue = [];
  
  return queue;
}

// node (x,y)
// vertices Array of Vertex
// edges Array of [(x,y), (x,y)]
function findAdjacent(node, vertices, edges) {
  const adjacent = [];
  edges.forEach(edge => {
    const found = edge.findIndex(vertex => vertex === node) !== -1
    if (found) {
      const node = found === 0 ? edge[1] : edge[0];
      adjacent.push(node);
    }
  });
  return adjacent
    .map(node => vertices.find(vertex => vertex.name === node))
    .filter(vertex => vertex.distance === null);
}

// node (x,y)
// adjacentNodes Array of (x,y)
function markDistanceAndPredecessor(node, adjacentNodes) {
  
}

