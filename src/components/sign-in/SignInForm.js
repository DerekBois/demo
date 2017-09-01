import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import InputField from '../common/form/InputField';

const SignInForm = ({user, onChange, onSubmit, saving, errors}) => {
    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmit} noValidate>
                <InputField 
                    type="email"
                    name="email"
                    label="Email"
                    value={user.email}
                    onChange={onChange}
                    error={errors.email}
                />
                <InputField 
                    type="password"
                    name="password"
                    label="Password"
                    value={user.password}
                    onChange={onChange}
                    error={errors.password}
                />
                {errors.form && <p>{errors.form}</p>}
                <button type="submit" className="btn">{saving ? 'Signing In...' : 'Sign In'}</button>
                <p>Don't have an account? Sign up <Link to="/sign-up">here</Link></p>
            </form>
        </div>
    );
};
SignInForm.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    saving: PropTypes.bool.isRequired,
    errors: PropTypes.object,
};
export default SignInForm;