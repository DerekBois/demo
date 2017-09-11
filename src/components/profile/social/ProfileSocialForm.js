import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../common/form/InputField';
import CheckboxField from '../../common/form/CheckboxField';
import SelectField from '../../common/form/SelectField';

const ProfileSocialForm = ({user, onChange, onSubmit, saving, errors}) => {


/* 

facebook
twitter
linkedin
instagram
pinterest

*/



    return (
        <form onSubmit={onSubmit} className="thin-content" noValidate>
            <div className="fields-section">
                <h5>Social Profiles</h5>
                <p>Add in your social handles and links below.</p>
                <hr />
                <InputField 
                    name="facebook"
                    label="Facebook Profile URL"
                    placeholder="https://www.facebook.com/your-username"
                    value={user.facebook}
                    onChange={onChange}
                    error={errors.facebook}
                />
                <InputField 
                    name="twitter"
                    label="Twitter Handle"
                    placeholder="@your_username"
                    value={user.twitter}
                    onChange={onChange}
                    error={errors.twitter}
                />
                {errors.form && <p>{errors.form}</p>}
                <button type="submit" name="submit" className="btn inactive">Update</button>
            </div>
        </form>
    );
};
ProfileSocialForm.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    saving: PropTypes.bool.isRequired,
    errors: PropTypes.object
};
export default ProfileSocialForm;