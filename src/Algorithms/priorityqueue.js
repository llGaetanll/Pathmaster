// Priority Queue class for Dijkstra's and other algorithms.
// Constructor can be given any comparison function to sort
// the elements, so for Dijkstra we can use distance while
// for A* we can use distance + heuristic

export class PriorityQueue {
  constructor(comp = (a, b) => a > b) {
    this.data = [];
    this.comp = comp;
  }

  empty() {
    return this.data.length === 0;
  }

  size() {
    return this.data.length;
  }

  push(element) {
    //push to end & heapify up
    let length = this.data.push(element);
    length--;
    this.heapifyUp(length);
  }

  pop() {
    let x = this.data[0];
    //swap first/last elements
    let length = this.data.length;
    this.data[0] = this.data[length - 1];
    this.data[length - 1] = x;
    //remove final element
    this.data.pop();

    //heapify down
    this.heapifyDown(0);

    return x;
  }

  heapifyUp(index) {
    while (index !== 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.comp(this.data[index], this.data[parent])) {
        let temp = this.data[parent];
        this.data[parent] = this.data[index];
        this.data[index] = temp;
        index = parent;
      } else {
        break;
      }
    }
  }

  heapifyDown(index) {
    while (2 * index + 2 < this.data.length) {
      let left = this.data[2 * index + 1];
      let right = this.data[2 * index + 2];
      let minIndex = this.comp(left, right) ? 2 * index + 1 : 2 * index + 2;
      if (this.comp(this.data[minIndex], this.data[index])) {
        let temp = this.data[minIndex];
        this.data[minIndex] = this.data[index];
        this.data[index] = temp;
        index = minIndex;
      } else {
        break;
      }
    }
    if (2 * index + 2 === this.data.length) {
      let left = this.data[2 * index + 1];
      if (this.comp(left, this.data[index])) {
        let temp = this.data[index];
        this.data[index] = left;
        this.data[2 * index + 1] = temp;
      }
    }
  }
}
