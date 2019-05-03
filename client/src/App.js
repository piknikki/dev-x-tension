import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Index from "./pages/Index";
import Single from "./pages/Single";
import New from "./pages/New";
import Edit from "./pages/Edit";
import NoMatch from "./pages/NoMatch";
import Detail from "./pages/Detail";


function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Index} />
                        <Route exact path="/new" component={New} />
                        <Route exact path= "/post/:id" component={Single} />
                        <Route exact path= "/edit/:id" component={Edit} />
                        <Route exact path= "/category" componenet={Detail} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
export default App;
