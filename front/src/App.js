import React, { Component } from "react";
import "./App.css";

//Dependências CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./template/custom.css";
import Main from "./components/Main";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Main />
            </div>
        );
    }
}

export default App;
