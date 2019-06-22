import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import About from "./About";
import Grid from '@material-ui/core/Grid';
import SearchAppBar from '../components/AppBar';


const MainContainer = () => {
    return(
        
        <BrowserRouter>
            <div>
                <SearchAppBar/>
                <Switch> 
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </BrowserRouter>
    )

}

export default MainContainer;

