import React from 'react';
import PropTypes from 'prop-types';
import ProfileInfoForm from './ProfileInfoForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../actions/userActions';

class ProfileInfo extends React.Component {
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
        let user = Object.assign({}, this.state.user),
            fieldsSection = e.target.closest('.fields-section'),
            submitBtn = fieldsSection.querySelector('button[type=submit]'),
            value = e.target.value;

        if (e.target.type === 'checkbox') {
            value = e.target.checked;
        }
        if (submitBtn.classList.contains('inactive')) {
            submitBtn.classList.remove('inactive')
        }
        if (e.target.name.includes('.')) {
            let splitName = e.target.name.split('.'),
                obj = user[splitName[0]];

            obj[splitName[1]] = e.target.value;
            user[splitName[0]] = obj;

            return this.setState({user: user});
        }
        user[e.target.name] = value;
        this.setState({user: user});
    }
    onSubmit(e) {
        let submitBtn = e.target.querySelectorAll('button[type=submit]');

        e.preventDefault();

        if (!this.formIsValidated()) {
            return;
        }
        [...submitBtn].forEach(btn => {
            if (!btn.classList.contains('inactive')) {
                btn.classList.add('inactive')
            }
        });
        this.setState({errors: {}, saving: true});
        this.props.actions.updateUser(this.state.user).then((error) => {
            if (error) {
                return this.setState({errors: {form: error}, saving: false});
            }
            this.setState({saving: false});
        });
    }
    render() {
        return (
            <ProfileInfoForm 
                user={this.state.user}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                saving={this.state.saving}
                errors={this.state.errors}
            />
        );
    }
}
ProfileInfo.propTypes = {
    currentUser: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log(state.currentUser);
    return {
        currentUser: state.currentUser
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);