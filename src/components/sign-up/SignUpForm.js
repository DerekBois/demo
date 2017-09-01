import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import InputField from '../common/form/InputField';

const SignUpForm = ({user, onChange, onSubmit, saving, errors}) => {
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
                <InputField 
                    type="password"
                    name="confirm"
                    label="Confirm Password"
                    value={user.confirm}
                    onChange={onChange}
                    error={errors.confirm}
                />
                {errors.form && <p>{errors.form}</p>}
                <button type="submit" className="btn">{saving ? 'Signing Up...' : 'Sign Up'}</button>
                <p>Already have an account? Sign in <Link to="/">here</Link></p>
            </form>
        </div>
    );
};
SignUpForm.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    saving: PropTypes.bool.isRequired,
    errors: PropTypes.object,
};
export default SignUpForm;