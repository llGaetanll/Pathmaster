// Performs BFS, returns all visited nodes in order for visualization
// has nodes point to previous node in order to determine what the
// shortest path was

import { getNeighbors } from "./getneighbors.js";

export function bfs(grid, start, end, pieceType) {
  //assuming all distances have been updated
  let q = [];
  let visitedNodes = [];
  start.distance = 0;
  //using push/shift to treat this like a queue
  q.push(start);
  while (q.length !== 0) {
    let curr = q.shift();
    if (curr.isVisited) continue;
    curr.isVisited = true;
    visitedNodes.push(curr);
    if (curr === end) {
      return visitedNodes;
    }
    updateNeighbors(curr, grid, pieceType);
    let neighbors = getValidNeighbors(curr, grid, pieceType);
    for (let n of neighbors) {
      q.push(n);
    }
  }
  return visitedNodes;
}

function updateNeighbors(node, grid, pieceType) {
  let neighbors = getValidNeighbors(node, grid, pieceType);
  for (let neighbor of neighbors) {
    if (node.distance + 1 < neighbor.distance) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
    }
  }
}

function getValidNeighbors(node, grid, pieceType) {
  //update neighbors according to piece movement
  //third parameter is pieceType: capitalized word
  let neighbors = getNeighbors(node, grid, pieceType);
  return neighbors.filter((n) => !n.isVisited && !n.isWall);
}
