import React from "react"
import ReactDOM from "react-dom"
import './index.css';
import 'tachyons';
import App from "./App"
import UserContext from "./userContext"
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <UserContext.Provider value="Bob Proppies">
        <App />
    </UserContext.Provider>, 
    document.getElementById("root")
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();