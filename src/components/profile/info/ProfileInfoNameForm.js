import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../common/form/InputField';

const ProfileInfoNameForm = ({user, onChange, onSubmit, saving, errors}) => {
    return (
        <form onSubmit={onSubmit} className="fields-section" noValidate>
            <h5>Name</h5>
            <p>Here you can change your name in case you misspelled it the first time, you just feel like calling yourself something else.</p>
            <hr />
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
            <button type="submit" name="submit" className="btn inactive">Update</button>
        </form>
    );
};
ProfileInfoNameForm.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    saving: PropTypes.bool.isRequired,
    errors: PropTypes.object,
};
export default ProfileInfoNameForm;