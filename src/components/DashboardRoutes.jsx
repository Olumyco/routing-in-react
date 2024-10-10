import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Blog from './Blog';
import Routes from '../Routes';

const DashboardRoutes = ({ match }) => {
    
    return (
        <Switch>
            <Route exact path={`${match.url}/`} component={Dashboard} />
            <Route path={`${match.url}/profile`} component={Profile} />
            <Route path={`${match.url}/blog`} component={Blog} />
            <Route path={`${match.url}/:id`} component={Dashboard} />
        </Switch>
    );
};

export default DashboardRoutes;