import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/Home';
import SignUpPage from './components/sign-up/SignUpPage';
import SignInPage from './components/sign-in/SignInPage';

export default (
    <Route path="/">
        <IndexRoute component={SignInPage} />
        <Route path="/home" component={Home} />
        <Route path="/sign-up" component={SignUpPage} />
    </Route>
);