import React, { Component } from 'react';

import './Header.css';
import king from "../pieces/king.png";
import queen from "../pieces/queen.png";
import bishop from "../pieces/bishop.png";
import rook from "../pieces/rook.png";
import knight from "../pieces/knight.png";
import pawn from "../pieces/pawn.png";

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="header" onClick = {() => this.props.handleMouseUp()}>
                    <div className="top_header">
                        <div className="logo_holder">
                            <a><li onClick = {() => this.props.setPieceType("Pawn")}><img src="https://www.flaticon.com/svg/static/icons/svg/107/107613.svg" width="35" ></img></li></a>
                            <h1>PATH<span>MASTER</span></h1>
                        </div>
                        <ul class="navigation">
                            <a><li>VISUALIZATION</li></a>
                            <a><li>ABOUT</li></a>
                            <a><li><img src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" width="40" height="40"></img></li></a>
                        </ul>
                    </div>
                    <div className="bottom_header">
                        <ul class="piece_select">
                            <a><li>Select a Piece:</li></a>
                            <span>
                                <a><li onClick = {() => this.props.setPieceType("King")}><img src={king} width="35"></img></li></a>
                                <a><li onClick = {() => this.props.setPieceType("Queen")}><img src={queen} width="35"></img></li></a>
                                <a><li onClick = {() => this.props.setPieceType("Bishop")}><img src={bishop} width="35"></img></li></a>
                                <a><li onClick = {() => this.props.setPieceType("Rook")}><img src={rook} width="35"></img></li></a>
                                <a><li onClick = {() => this.props.setPieceType("Knight")}><img src={knight} width="35"></img></li></a>
                            </span>
                        </ul>
                        <div className="algo_select">
                            <h1>Select Algorithm:</h1>
                            <div class="selectdiv">
                                <label>
                                    <select>
                                        <option selected> --- </option>
                                        <option>Dijkstra's Algorithm</option>
                                        <option>Breadth-First Search</option>
                                        <option>A* Search</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
