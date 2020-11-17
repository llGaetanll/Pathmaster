import React, { Component } from "react";
import Button from "@material-ui/core/Button";
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
      active: this.props.active,
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

    if (piece === "Pawn") {
      return (
        <button
          className={
            this.state.active
              ? "piece_selected easter"
              : "piece_unselected easter"
          }
          onClick={() => this.onClick(piece)}
        >
          <img src={image} width="35"></img>
        </button>
      );
    } else {
      return (
        <Button
          className={this.state.active ? "piece_selected" : "piece_unselected"}
          onClick={() => this.onClick(piece)}
        >
          <img src={image} width="35"></img>
        </Button>
      );
    }
  }
}
