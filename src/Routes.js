import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import DashboardRoutes from './components/DashboardRoutes';

const Routes = () => {
    return (
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={DashboardRoutes} />
        </div>
    );
};

export default Routes;