import {PriorityQueue} from './priorityqueue.js';
import {getNeighbors} from './getneighbors.js';

export function dijkstra(grid, start, end) {
	//assume all distances of nodes are already updated
	//i.e. start is 0, rest are infinity
	//also assuming start.previousNode = null
	start.distance = 0;
	//create priority queue to hold nodes by shortest distance
	let cmp = (a,b) => (a.distance < b.distance);
	let pq = new PriorityQueue(cmp);
	pq.push(start);
	while (!pq.empty()) {
		let curr = pq.pop();
		curr.isVisited = true;
		if (curr === end) {
			let inOrder = getNodesInOrder(end);
			return inOrder;
		}
		updateNeighbors(curr, grid);
		let neighbors = getValidNeighbors(curr);
		for (let n of neighbors) {
			pq.push(n);
		}
	}
	//if we didn't reach the end, return null to indicate unsuccessful
	return null;
}

function dist(a, b) {
	let x = a.row - b.row;
	let y = a.col - b.col;
	return Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
}

function updateNeighbors(node, grid) {
	let neighbors = getValidNeighbors(node, grid);
	for (let neighbor of neighbors) {
		let newDistance = dist(neighbor, node);
		if (newDistance < neighbor.distance) {
			neighbor.distance = newDistance;
			neighbor.previousNode = node;
		}
	}
}

function getValidNeighbors(node, grid) {
	let neigbors = [];
	let row = node.row;
	let col = node.col;
	//update neighbors according to piece movement
	//third parameter is pieceType: capitalized word
	let neighbors = getNeighbors(node, grid);
	return neighbors.filter(n => !n.isVisited && !n.isWall);
}

function getNodesInShortestPathOrder(finish) {
	let inOrder = [];
	let curr = finish;
	while (curr !== null) {
		inOrder.unshift(curr);
		curr = curr.previousNode;
	}
	return inOrder;
}