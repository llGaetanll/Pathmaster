// Performs Dijkstra's Algorithm: return all visited nodes in order
// for visualization. Has nodes point to previous node in order to
// determine what the shortest path was.

import {PriorityQueue} from './priorityqueue.js';
import {getNeighbors} from './getneighbors.js';

export function dijkstra(grid, start, end, pieceType) {
	//assume distance of all nodes is already Infinity
	let visitedNodes = [];
	start.distance = 0;
	//create a priority queue to hold nodes by shortest distance
	let cmp = (a,b) => a.distance < b.distance;
	let pq = new PriorityQueue(cmp);
	pq.push(start);
	while (!pq.empty()) {
		let curr = pq.pop();
		if (curr.isVisited)
			continue;
		curr.isVisited = true;
		//have to keep track of all visited nodes for visualization
		visitedNodes.push(curr);
		if (curr === end)
			return visitedNodes;
		updateNeighbors(curr, grid, pieceType);
		let neighbors = getValidNeighbors(curr, grid, pieceType);
		for (let n of neighbors) {
			pq.push(n);
		}
	}
	//if we didn't reach the end, return what we have anyway
	//may want to change how we handle this case
	return visitedNodes;
}

function dist (a, b) {
	let x = a.row - b.row;
	let y = a.col - b.col;
	return Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
}

function updateNeighbors(node, grid, pieceType) {
	let unvisitedNeighbors = getValidNeighbors(node, grid, pieceType);
	for (let neighbor of unvisitedNeighbors) {
		let newDistance = node.distance + dist(neighbor, node);
		if (newDistance < node.distance) {
			neighbor.distance = newDistance;
			neighbor.previousNode = node;
		}
	}
}

function getValidNeighbors(node, grid, pieceType) {
	//update neighbors according to piece movement
	//third parameter is pieceType: capitalized word
	let neighbors = getNeighbors(node, grid, pieceType);
	return neighbors.filter(n => !n.isVisited && !n.isWall);
}