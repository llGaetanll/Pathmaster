import React, { Component } from 'react';

import './Node.css';

export default class Node extends Component {
  render() {
    const {
      col,
      row,
      distance,
      heuristic,
      isVisited,
      previousNode,
      isStart,
      isFinish,
      isColor,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp
    } = this.props;

    const nodeType = isFinish
      ? 'node-finish'
      : isStart
        ? 'node-start'
        : isWall
          ? 'node-wall'
          : isColor
            ? 'node-color'
            : 'node-default';

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${nodeType}`}
        onMouseDown={() => onMouseDown(row, col)}
        onMouseEnter={() => onMouseEnter(row, col)}
      ></div>
    );
  }
}