import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import AuthContainer from './components/AuthContainer';
import Home from './components/Home';
import SignUpPage from './components/sign-up/SignUpPage';
import SignUpMorePage from './components/sign-up-more/SignUpMorePage';
import SignInPage from './components/sign-in/SignInPage';
import ProfilePage from './components/profile/ProfilePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={SignInPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/sign-up-more" component={SignUpMorePage} />
        <Route component={AuthContainer}>
            <Route path="/profile" component={ProfilePage} />
            <Route path="/home" component={Home}/>
        </Route>
    </Route>
);