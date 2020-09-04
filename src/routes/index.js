import React from 'react'
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'
import Home from '../pages/home/index'
import Listusers from '../pages/listusers/index'




const Routes = () =>(
    <BrowserRouter>
     <Switch>
        <Route path="/" exact component={Home}  />
        {/* <Route path="/listusers" render={(props)=><Listusers {...props}  />} /> */}
        <Route path="/listusers" component={Listusers}/>
    </Switch>
    </BrowserRouter>
   
);
export default Routes