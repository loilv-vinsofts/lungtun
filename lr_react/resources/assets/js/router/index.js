import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {routes} from './routers'

export const RouteWithSubRoutes = route => (
    <Route 
        path= {route.path} render={props =>(
            < route.component {...props} route = {route.routes} />
        ) }
    />
    
)

const routesMap = routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />);
export default routesMap;