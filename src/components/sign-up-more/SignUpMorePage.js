import React from 'react';
import PropTypes from 'prop-types';
import SignUpMoreForm from './SignUpMoreForm';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SIGN_UP_TARGET} from '../../constants';
import * as userActions from '../../actions/userActions';

class SignUpMorePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: Object.assign({}, this.props.currentUser),
            saving: false,
            errors: {}
        };
        this.formIsValidated = this.formIsValidated.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillMount() {
        if (!this.state.user.email) {
            browserHistory.push('/sign-up');
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.user !== nextProps.user) {
            this.setState({user: Object.assign({}, nextProps.user)});
        }
    }
    formIsValidated() {
        let errors = {},
            valid = true;

        if (this.state.user.password !== this.state.user.confirm) {
            errors.confirm = 'Your password and confirm do not match';
            valid = false;
        }
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

        this.props.actions.updateUser(this.state.user).then((error) => {
            if (error) {
                return this.setState({errors: {form: error}, saving: false});
            }
            this.setState({saving: false});
            browserHistory.push(SIGN_UP_TARGET);
        });
    }
    render() {
        return (
            <div className="site-wrapper full-page">
                <div className="col-uno"></div>
                <div className="full-form">
                    <SignUpMoreForm 
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
SignUpMorePage.propTypes = {
    currentUser: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        currentUser: state.currentUser
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpMorePage);