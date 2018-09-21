import React, { Component } from "react";
import logo from "../template/otimicar.png";

export default class Bar extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}
