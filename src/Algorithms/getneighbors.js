export function getNeighbors(node, grid, pieceType = "Knight") {
	let neighbors = [];
	let r = node.row;
	let c = node.col;
	if (pieceType === "Knight") {
		//two in one direction, one in another
		//only eight possible moves, so brute-forcing
		if (r > 0 && c > 1)
			neighbors.push(grid[r-1][c-2]);
		if (r > 0 && c < grid[0].length-2)
			neighbors.push(grid[r-1][c+2]);
		if (r > 1 && c > 0)
			neighbors.push(grid[r-2][c-1]);
		if (r > 1 && c < grid[0].length-1)
			neighbors.push(grid[r-2][c+1]);

		if (r < grid.length-1 && c > 1)
			neighbors.push(grid[r+1][c-2]);
		if (r < grid.length-1 && c < grid[0].length-2)
			neighbors.push(grid[r+1][c+2]);
		if (r < grid.length-2 && c > 1)
			neighbors.push(grid[r+2][c-2]);
		if (r < grid.length-2 && c < grid[0].length-2)
			neighbors.push(grid[r+2][c+2]);
	}
	if (pieceType === "Rook") {
		//everything in the same row/column
		for (let i = 0; i < grid.length; i++) {
			if (i === r) continue;
			neighbors.push(grid[i][c]);
		}
		for (let i = 0; i < grid[r].length; i++) {
			if (i === c) continue;
			neighbors.push(grid[r][i]);
		}
	}
	if (pieceType === "King") {
		//every immediately adjacent square within the grid boundaries
		let numRows = grid.length;
		let numCols = grid[0].length;
		// up/down/left/right
		if (r > 0) neighbors.push(grid[r-1][c]);
		if (c > 0) neighbors.push(grid[r][c-1]);
		if (r < numRows-1) neighbors.push(grid[r+1][c]);
		if (c < numCols-1) neighbors.push(grid[r][c+1]);
		//diagonals
		if (r > 0 && c > 0) neighbors.push(grid[r-1][c-1]);
		if (r > 0 && c < numCols-1) neighbors.push(grid[r-1][c+1]);
		if (r < numRows-1 && c > 0) neighbors.push(grid[r+1][c-1]);
		if (r < numRows-1 && c < numCols-1) neighbors.push(grid[r+1][c+1]);
	}
	if (pieceType === "Bishop") {
		//two diagonal directions, excepting the square itself
		let lower = min(r,c);
		let upper = min(grid.length-1-r, grid[0].length-1-c);
		for (let i = -lower; i <= upper; i++) {
			if (i === 0) continue;
			neighbors.push(grid[r+i][c+i]);
		}
		lower = min(r, grid[0].length-1-c);
		upper = min(grid.length-1-r, c);
		for (let i = -lower; i <= upper; i++) {
			if (i === 0) continue;
			neighbors.push(grid[r+i][c-i]);
		}
	}
	if (pieceType === "Queen") {
		//just copying code from rook + bishop
		//there won't be any overlap between the two

		//Rook: everything in the same row/column
		for (let i = 0; i < grid.length; i++) {
			if (i === r) continue;
			neighbors.push(grid[i][c]);
		}
		for (let i = 0; i < grid[r].length; i++) {
			if (i === c) continue;
			neighbors.push(grid[r][i]);
		}

		//Bishop: two diagonal directions, excepting the square itself
		let lower = min(r,c);
		let upper = min(grid.length-1-r, grid[0].length-1-c);
		for (let i = -lower; i <= upper; i++) {
			if (i === 0) continue;
			neighbors.push(grid[r+i][c+i]);
		}
		lower = min(r, grid[0].length-1-c);
		upper = min(grid.length-1-r, c);
		for (let i = -lower; i <= upper; i++) {
			if (i === 0) continue;
			neighbors.push(grid[r+i][c-i]);
		}
	}

	return neighbors;
}