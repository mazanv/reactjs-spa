import React from "react";
// import { Route, NavLink, HashRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class Main extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <h1 className="title">Single Page Application</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        {/* <Switch> */}
                        <Routes exact path="/" component={Home}></Routes>
                        <Routes path="/about" component={About}></Routes>
                        <Routes path="/contact" component={Contact}></Routes>
                        {/* </Switch> */}
                    </div>
                </div>
            </Router>
        );
    }
}

export default Main;