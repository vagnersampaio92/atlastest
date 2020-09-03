import React from 'react'
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import Home from '../pages/home/index'





const Routes = () =>(
    <BrowserRouter>
     <Switch>
        <Route path="/" exact component={Home} exact />
       
    </Switch>
    </BrowserRouter>
   
);
export default Routes