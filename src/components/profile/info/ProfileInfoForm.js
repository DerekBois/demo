import React from 'react';
import ProfileInfoNameForm from './ProfileInfoNameForm';
import ProfileInfoBirthdayForm from './ProfileInfoBirthdayForm';

const ProfileInfoForm = (props) => {
    return (
        <div>
            <ProfileInfoNameForm {...props}/>
            <ProfileInfoBirthdayForm {...props}/>
        </div>
    );
};
export default ProfileInfoForm;