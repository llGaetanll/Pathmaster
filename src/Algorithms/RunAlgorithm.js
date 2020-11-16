// This is a wrapper file for running each algorithm
// it is called in Pathmaster.jsx and runs different algs
// from src/Algorithms

import {dijkstra} from './Dijkstra.js';
import {bfs} from './BFS.js';
import {astar} from './Astar.js';


//runs a given algorith, just a wrapper for all the pathfinding algs
export function runAlgorithm(alg, grid, start, end, pieceType) {
	if (alg === "Dijkstra") {
		return dijkstra(grid, start, end, pieceType);
	}
	if (alg === "BFS") {
		return bfs(grid, start, end, pieceType);
	}
	if (alg === "AstarWeighted") {
		return astar(grid, start, end, pieceType, true);
	}
	if (alg === "AstarUnweighted") {
		return astar(grid, start, end, pieceType, false);
	}
}

// Backtracks from the finishNode to find the shortest path.
// Works for any search alg so this method can be used for all of them
export function getNodesInOrder(finish) {
	let inOrder = [];
	let curr = finish;
	while (curr !== null) {
		inOrder.unshift(curr);
		curr = curr.previousNode;
	}
	return inOrder;
}