import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import About from "./About";
import SearchAppBar from '../components/AppBar';
import Footer from '../components/Footer';

const MainContainer = () => {
    return(
        
        <BrowserRouter>
            <div>
                <SearchAppBar/>
                <Switch> 
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={About} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    )

}

export default MainContainer;

