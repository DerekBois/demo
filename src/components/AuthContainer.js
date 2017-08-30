import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as userActions from '../actions/userActions';

class AuthContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: Object.assign({}, this.props.currentUser)
        }
        this.logout = this.logout.bind(this);
    }
    componentWillMount() {
        if (this.props.auth === 0) {
            browserHistory.push('/');
        }
    }
    logout(e) {
        e.preventDefault();

        console.log(e);

        this.props.actions.logoutUser().then(res => {
            browserHistory.push('/');
        });
    }
    render() {
        if (this.props.auth === 2) {
            return (
                <div className="site-wrapper">
                    <Header 
                        user={this.props.currentUser}
                    />
                    <button type="button" onClick={this.logout}>Logout</button>
                    {this.props.children}
                </div>
            );
        }
        return <div>'loading...'</div>;
    }
}
AuthContainer.propTypes = {
    auth: PropTypes.oneOf([0, 1, 2]).isRequired,
    currentUser: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired
};
function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth,
        currentUser: state.currentUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);