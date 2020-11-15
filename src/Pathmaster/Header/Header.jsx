import React, { Component } from 'react';

import './Header.css';

function Header() {
    return (
        <div>
            <div className="header">
                <div className="top_header">
                    <div className="logo_holder">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/107/107613.svg" width="35" ></img>
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
                        <a><li>King</li></a>
                        <a><li>Queen</li></a>
                        <a><li>Bishop</li></a>
                        <a><li>Rook</li></a>
                        <a><li>Knight</li></a>
                        <a><li>Pawn</li></a>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Header;
