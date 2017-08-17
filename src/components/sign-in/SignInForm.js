import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../common/form/InputField';

const SignInForm = ({user, onChange, onSubmit, saving, errors}) => {
    return (
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
            <button type="submit">{saving ? 'Saving...' : 'Save'}</button>
        </form>
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