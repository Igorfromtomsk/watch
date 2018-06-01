import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/parts/header";
import Clock from "./components/clock/clock.js";

const App = (
    <div className="inner-wrapper">
        <Header />
        <Clock />
    </div>
);

ReactDOM.render(App, document.getElementById("app"));