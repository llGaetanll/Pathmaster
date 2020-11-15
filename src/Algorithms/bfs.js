

export function bfs(grid, start, finish) {
	//assuming all distances have been updated
	let q = [];
	//using push/shift to treat this like a queue
	q.push(start);
	while (!q.empty()) {
		let curr = q.shift();
		curr.isVisited = true;
		if (curr === finish) {
			let inOrder = getNodesInOrder(finish);
			return inOrder;
		}
		updateNeighbors(curr, grid);
		let neighbors = getValidNeighbors(curr);
		for (let n of neighbors) {
			q.push(n);
		}
	}
	return null;
}

function updateNeighbors(node, grid) {
	let neighbors = getValidNeighbors(node, grid);
	for (let neighbor of neighbors) {
		//maybe set 'observed' boolean to true here
		neighbor.previousNode = node;
	}
}

function getValidNeighbors(node, grid) {
	let neighbors = [];
	let row = node.row;
	let col = node.col;
	//update neighbors according to piece movement
	//third parameter is pieceType: capitalized word
	let neighbors = getNeighbors(node, grid);
	return neighbors.filter(n => !n.isVisited && !n.isWall);
}

function getNodesInOrder(finish) {
	let curr = finish;
	let inOrder = [];
	while (curr !== null) {
		inOrder.unshift(curr);
		curr = curr.previousNode;
	}
	return inOrder;
}