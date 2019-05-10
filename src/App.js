import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Join from "./components/Join";
import JoinForm from "./components/JoinForm";

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/join" component={Join} />
                <Route path="/join-next" component={JoinForm} />
            </Switch>
        </div>
    );
};

export default App;
