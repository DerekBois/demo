import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../common/form/InputField';

const ProfileForm = ({user, onChange, onSubmit, saving, errors}) => {
    // console.log(user);
    return (
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
            <button type="submit">{saving ? 'Saving...' : 'Save'}</button>
        </form>
    );
};
ProfileForm.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    saving: PropTypes.bool.isRequired,
    errors: PropTypes.object,
};
export default ProfileForm;