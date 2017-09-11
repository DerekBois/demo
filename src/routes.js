import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import AuthContainer from './components/AuthContainer';
import Home from './components/Home';
import SignUpPage from './components/sign-up/SignUpPage';
import SignUpMorePage from './components/sign-up-more/SignUpMorePage';
import SignInPage from './components/sign-in/SignInPage';

import ProfilePage from './components/profile/ProfilePage';
import ProfileInfo from './components/profile/info/ProfileInfo';
import ProfileSocial from './components/profile/social/ProfileSocial';
// import ProfileDemographicPage from './components/profile/ProfileDemographicPage';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={SignInPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/sign-up-more" component={SignUpMorePage} />
        <Route component={AuthContainer}>
            <Route path="/profile" component={ProfilePage} pageTitle="Profile">
                <IndexRoute component={ProfileInfo} />
                <Route path="/social" component={ProfileSocial} />
            </Route>
            <Route path="/home" component={Home}/>
        </Route>
    </Route>
);


// <Route path="/" component={App}>
//     <IndexRoute component={SignInPage} />
//     <Route path="/sign-up" component={SignUpPage} />
//     <Route path="/sign-up-more" component={SignUpMorePage} />
//     <Route component={AuthContainer}>
//         <Route path="/profile" component={ProfileContainer}>
//             <IndexRoute component={ProfileInfoPage} />
//             <Route path="/social" component={ProfileSocialPage} />
//             <Route path="/demographic" component={ProfileDemographicPage} />
//         </Route>
//         <Route path="/home" component={Home}/>
//     </Route>
// </Route>