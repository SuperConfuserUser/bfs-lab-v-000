// rootNode (x,y)
// vertices Array of { name: (x,y), distance: number, predecessor: string }
// edges Array of [(x,y), (x,y)]
function bfs(rootNode, vertices, edges) {
  return findAdjacent(rootNode, vertices, edges);
}

// node (x,y)
// vertices Array of Vertex
// edges Array of [(x,y), (x,y)]
// returns Array of Vertex
function findAdjacent(node, vertices, edges) {
  const adjacent = [];
  edges.forEach(edge => {
    if (edge.some(vertex => vertex === node)) {
      adjacent.push(edge.find(vertex => vertex !== node));
    }
  });
  return adjacent
    .map(node => vertices.find(vertex => vertex.name === node))
    .filter(vertex => vertex.distance === null);
}

// node (x,y)
// adjacentNodes Array of Vertex
function markDistanceAndPredecessor(node, adjacentNodes) {
  adjacentNodes.forEach(vertex => { 
    vertex.distance = 1;
    vertex.predecessor = node;
  });
  return adjacentNodes;
}

