import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class Main extends Component {

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
                        <Switch>
                            <Route exact path="/"><Home /></Route>
                            <Route path="/about"><About /></Route>
                            <Route path="/contact"><Contact /></Route>



                        </Switch>




                    </div>
                </div>
            </Router>
        );
    }
}

export default Main;
// ReactDOM.render(<Main />, document.getElementById("root"))