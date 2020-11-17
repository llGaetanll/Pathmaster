import React, { Component } from "react";
import PieceIcon from "./PieceIcon";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import "./Header.css";
import king from "../pieces/king.png";
import queen from "../pieces/queen.png";
import bishop from "../pieces/bishop.png";
import rook from "../pieces/rook.png";
import knight from "../pieces/knight.png";
import pawn from "../pieces/pawn.png";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    var { active } = this.state;

    return (
      <div>
        <div className="header" onClick={() => this.props.handleMouseUp()}>
          <div className="top_header">
            <div className="logo_holder">
              <a>
                <li onClick={() => this.onClick("Pawn")}>
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/107/107613.svg"
                    width="35"
                  ></img>
                </li>
              </a>
              <h1>
                PATH<span>MASTER</span>
              </h1>
            </div>
            <div className="top_button">
              <Button onClick={() => this.props.visualize()}>Run</Button>
            </div>
            <div className="top_button">
              <Button onClick={() => this.props.resetBoard()}>Reset</Button>
            </div>
            <ul class="navigation">
              <a href="https://github.com/eugli/Pathmaster" target="_blank">
                <li>
                  <img
                    src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"
                    width="40"
                    height="40"
                  ></img>
                </li>
              </a>
            </ul>
          </div>
          <div className="bottom_header">
            <ul class="piece_select">
              <a>
                <li>Select a Piece:</li>
              </a>
              <span>
                <PieceIcon
                  active={active}
                  piece={"King"}
                  setPieceType={this.props.setPieceType}
                />
                <PieceIcon
                  active={active}
                  piece={"Queen"}
                  setPieceType={this.props.setPieceType}
                />
                <PieceIcon
                  active={active}
                  piece={"Bishop"}
                  setPieceType={this.props.setPieceType}
                />
                <PieceIcon
                  active={active}
                  piece={"Rook"}
                  setPieceType={this.props.setPieceType}
                />
                <PieceIcon
                  active={active}
                  piece={"Knight"}
                  setPieceType={this.props.setPieceType}
                />
              </span>
            </ul>
            <div className="algo_select">
              <h1>Select Algorithm:</h1>
              <div class="selectdiv">
                <label>
                  <Select
                    defaultValue={this.props.algorithm}
                    onChange={(e) => this.props.setAlgorithm(e.target.value)}
                  >
                    <MenuItem value="Dijkstra">Dijkstra's Algorithm</MenuItem>
                    <MenuItem value="BFS">Breadth-First Search</MenuItem>
                    <MenuItem value="A* (Weighted)">
                      A* Search (Weighted)
                    </MenuItem>
                    <MenuItem value="A* (Unweighted)">
                      A* Search (Unweighted)
                    </MenuItem>
                  </Select>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
