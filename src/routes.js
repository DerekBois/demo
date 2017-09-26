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

import CampaignsPage from './components/campaigns/CampaignsPage';
import CampaignsList from './components/campaigns/list/CampaignsList';
import CampaignDetailsPage from './components/campaigns/CampaignDetailsPage';
import CampaignCreatePage from './components/campaigns/create/CampaignCreatePage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={SignInPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/sign-up-more" component={SignUpMorePage} />
        <Route component={AuthContainer}>
            <Route path="/profile" component={ProfilePage} pageTitle="Profile">
                <IndexRoute component={ProfileInfo} pageTitle="Info" />
                <Route path="/social" component={ProfileSocial} pageTitle="Social" />
            </Route>


            <Route path="/campaigns" component={CampaignsPage} pageTitle="Campaigns">
                <IndexRoute component={CampaignsList} pageTitle="List"/>
                <Route path="/social" component={ProfileSocial} pageTitle="Overview" />
            </Route>

            <Route path="/campaign/create" component={CampaignCreatePage} />
            <Route path="/campaign/:slug" component={CampaignDetailsPage} />

            <Route path="/home" component={Home}/>
        </Route>
    </Route>
);