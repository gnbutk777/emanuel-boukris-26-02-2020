import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Home from './HomeScreen';
import Favorites from './FavoritesScreen';

import routesName from './routes';

const Routes = ({Header, Footer}) => {
    return (
        <Router >
            {Header}
            <Switch>
                <Route path={routesName.Home}>
                    <Home />
                </Route>
                <Route path={routesName.Favorites}>
                    <Favorites />
                </Route>
            </Switch>
            {Footer}
      </Router>
    );
}
 
export default Routes;