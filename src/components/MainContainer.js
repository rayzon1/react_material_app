import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import About from "./About";
import SearchAppBar from '../components/AppBar';
import Footer from '../components/Footer';

const MainContainer = () => {
    return(
        
        <HashRouter>
            <div>
                <SearchAppBar/>
                <Switch> 
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={About} />
                </Switch>
                <Footer />
            </div>
        </HashRouter>
    )

}

export default MainContainer;

