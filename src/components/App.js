import React from 'react';
import PropTypes from 'prop-types';
//import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {registerHsid} from '../actions/hsidActions';

class App extends React.Component {
    componentWillMount() {
        let query = this.props.location.query,
            campaign = this.props.params.slug,
            hsid = localStorage.getItem('hsidString');

        // http://localhost:3000/campaign/campaign-one?hsid=F12345&r=http://something.com
        //                                     |\slug       |\c  |\hsid         |\redirect

        if (query.hsid) {
            this.props.dispatch(registerHsid(query.hsid));

            if (query.r) {
                return; // window.location = query.r;
            }
            return;
        }
        if (campaign) {
            console.log('something');
        }
        if (hsid && hsid !== undefined) {
            return this.props.dispatch(registerHsid(hsid));
        }
    }
    render() {
        return this.props.children;
    }
}
App.propTypes = {
    children: PropTypes.object.isRequired
};

export default connect()(App);