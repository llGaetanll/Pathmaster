import React, { Component } from "react";
import king from "../pieces/king.png";
import queen from "../pieces/queen.png";
import bishop from "../pieces/bishop.png";
import rook from "../pieces/rook.png";
import knight from "../pieces/knight.png";
import pawn from "../pieces/pawn.png";

export default class PieceIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      piece: this.props.piece,
    };
  }

  onClick(piece) {
    this.props.setPieceType(piece);
    this.setState({ active: !this.state.active });
  }

  render() {
    const { piece } = this.state;
    const image = {
      King: king,
      Queen: queen,
      Bishop: bishop,
      Rook: rook,
      Knight: knight,
      Pawn: pawn,
    }[piece];

    return (
      <a>
        <li
          className={this.state.active ? "piece_selected" : "piece_unselected"}
          onClick={() => this.onClick(piece)}
        >
          <img src={image} width="35"></img>
        </li>
      </a>
    );
  }
}
