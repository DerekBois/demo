import React from 'react';
import PropTypes from 'prop-types';
import SignInForm from './SignInForm';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SIGN_IN_TARGET} from '../../constants';
import * as userActions from '../../actions/userActions';

class SignInPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: Object.assign({}, props.currentUser),
            saving: false,
            errors: {}
        };
        this.formIsValidated = this.formIsValidated.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    formIsValidated() {
        let errors = {},
            valid = true;

        // if (this.state.user.password !== this.state.user.confirm) {
        //     errors.confirm = 'Your password and confirm do not match';
        //     valid = false;
        // }
        this.setState({errors: errors});
        return valid;
    }
    onChange(e) {
        let user = Object.assign({}, this.state.user);

        user[e.target.name] = e.target.value;
        this.setState({user: user});
    }
    onSubmit(e) {
        e.preventDefault();

        if (!this.formIsValidated()) {
            return;
        }
        this.setState({errors: {}, saving: true});
        
        this.props.actions.loginUser(this.state.user)
            .then((error) => {
                if (error) {
                    return this.setState({errors: {form: error}, saving: false});
                }
                this.setState({saving: false});
                browserHistory.push(SIGN_IN_TARGET);
            });
    }
    render() {
        return (
            <div className="site-wrapper full-page">
                <div className="full-form">
                    <SignInForm 
                        user={this.state.user}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                        saving={this.state.saving}
                        errors={this.state.errors}
                    />
                </div>
            </div>
        );
    }
}
SignInPage.propTypes = {
    currentUser: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let currentUser = {email: 'derekabois@gmail.com', password: 'a123'};

    return {
        currentUser: currentUser
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);