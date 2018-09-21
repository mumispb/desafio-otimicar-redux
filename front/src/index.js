import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./main/reducers";
import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(thunk, multi, promise)(createStore)(
    rootReducer,
    devTools
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
