import React from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {registerHsid} from '../actions/hsidActions';

class App extends React.Component {
    componentWillMount() {
        let query = this.props.location.query,
            hsid = localStorage.getItem('hsidString');

        if (query.hsid) {
            this.props.dispatch(registerHsid(query.hsid));

            if (query.r) {
                return browserHistory.push(query.r);
            }
            return;
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