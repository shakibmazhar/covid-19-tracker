import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Error from "./components/Error";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Header />
                    <Home />
                </Route>
                <Route path="/*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
