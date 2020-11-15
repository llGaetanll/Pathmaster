import React, { Component } from 'react';

import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div onMouseUp = {() => this.props.handleMouseUp()}>
                <div className="footer">
                    <h1>COP3530</h1>
                </div>
            </div>
        )
    }
}
