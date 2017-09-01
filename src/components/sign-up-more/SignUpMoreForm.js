import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../common/form/InputField';

const SignUpMoreForm = ({user, onChange, onSubmit, saving, errors}) => {
    console.log(user);
    return (
        <div className="form-wrapper">
            <form onSubmit={onSubmit} noValidate>
                <InputField 
                    name="firstName"
                    label="First Name"
                    value={user.firstName}
                    onChange={onChange}
                    error={errors.firstName}
                />
                <InputField 
                    name="lastName"
                    label="Last Name"
                    value={user.lastName}
                    onChange={onChange}
                    error={errors.lastName}
                />
                {errors.form && <p>{errors.form}</p>}
                <button type="submit" className="btn">{saving ? 'Saving...' : 'Continue'}</button>
            </form>
        </div>
    );
};
SignUpMoreForm.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    saving: PropTypes.bool.isRequired,
    errors: PropTypes.object,
};
export default SignUpMoreForm;