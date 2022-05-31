import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup';

function Routest() {
    return (
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
        </Switch>

    );
}

export default Routes;