// rootNode (x,y)
// vertices Array of { name: (x,y), distance: number, predecessor: string }
// edges Array of [(x,y), (x,y)]
function bfs(rootNode, vertices, edges){
  const queue = [];
  
  return queue;
}

// node (x,y)
// vertices Array of (x,y)
// edges Array of [(x,y), (x,y)]
function findAdjacent(node, vertices, edges) {
  const adjacent = [];
  edges.forEach(edge => {
    if (edge.some(vertex => vertex === node)) {
      adjacent.push(edge.find(vertex => vertex !== node));
    }
  })
  return adjacent;
}

// node (x,y)
// adjacentNodes Array of (x,y)
function markDistanceAndPredecessor(node, adjacentNodes) {
  
}

