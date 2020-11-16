// This is a wrapper file for running each algorithm
// it is called in Pathmaster.jsx and runs different algs
// from src/Algorithms

import {dijkstra} from './Dijkstra.js';
import {bfs} from './bfs.js';
import {astar} from './Astar.js';

//runs a given algorith, just a wrapper for all the pathfinding algs
export function runAlgorithm(alg, grid, start, end, pieceType) {
	if (alg === "Dijkstra") {
		return dijkstra(grid, start, end, pieceType);
	} else if (alg === "BFS") {
		return bfs(grid, start, end, pieceType);
	} else if (alg === "A* (Weighted)") {
		return astar(grid, start, end, pieceType, true);
	} else if (alg === "A* (Unweighted)") {
		return astar(grid, start, end, pieceType, false);
	} else {
		console.log("error")
	}
}

// Backtracks from the finishNode to find the shortest path.
// Works for any search alg so this method can be used for all of them
export function getNodesInOrder(finish, pieceType, showAll, grid) {
	let inOrder = [];
	let curr = finish;
	if (showAll && pieceType !== "Knight") {
		let curr = finish.previousNode;
		let lastNode = finish;
		while (curr !== null) {
			while (lastNode !== curr) {
				inOrder.unshift(lastNode);
				lastNode = getAdjacent(lastNode, curr, grid);
			}
			inOrder.unshift(lastNode);
			curr = curr.previousNode;
		}
	}
	else {
		while (curr !== null) {
			inOrder.unshift(curr);
			curr = curr.previousNode;
		}
	}
	return inOrder;
}

//returns next adjacent node in a row/column/diagonal
function getAdjacent(lastNode, curr, grid) {
	//if horizontal, get next horizontal node
	if (lastNode.row === curr.row) {
		if (lastNode.col < curr.col)
			return grid[lastNode.row][lastNode.col+1];
		else
			return grid[lastNode.row][lastNode.col-1];
	}
	//vertical
	if (lastNode.col === curr.col) {
		if (lastNode.row < curr.row)
			return grid[lastNode.row+1][lastNode.col];
		else
			return grid[lastNode.row-1][lastNode.col];
	}
	//diag1
	if (lastNode.row + lastNode.col === curr.row + curr.col) {
		if (lastNode.row - lastNode.col < curr.row - curr.col)
			return grid[lastNode.row+1][lastNode.col-1];
		else
			return grid[lastNode.row-1][lastNode.col+1];
	}
	//diag2
	if (lastNode.row - lastNode.col === curr.row - curr.col) {
		if (lastNode.row + lastNode.col < curr.row + curr.col)
			return grid[lastNode.row+1][lastNode.col+1];
		else
			return grid[lastNode.row-1][lastNode.col-1];
	}
}