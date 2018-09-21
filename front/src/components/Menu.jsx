import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
            <div>
                <Link to="/list">
                    <button>Lista</button>
                </Link>
                <Link to="/register">
                    <button>Cadastro</button>
                </Link>
            </div>
        );
    }
}
