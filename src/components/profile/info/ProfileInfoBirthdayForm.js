import React from 'react';
import PropTypes from 'prop-types';
import CheckboxField from '../../common/form/CheckboxField';
import SelectField from '../../common/form/SelectField';

const ProfileInfoBirthdayForm = ({user, onChange, onSubmit, saving, errors}) => {
    const birthdayValues = {
        days: () => {
            let daysArray = [];

            for (let i=1;i<32;i++) {
                daysArray = [...daysArray, {value: i, text: i}];
            }
            return daysArray;
        },
        months: () => {
            let monthsArray = [];

            for (let i=1;i<13;i++) {
                monthsArray = [...monthsArray, {value: i, text: i}];
            }
            return monthsArray;
        },
        years: () => {
            let current = new Date().getFullYear(),
                yearsArray = [];

            for (let i=0;i<110;i++) {
                yearsArray = [...yearsArray, {value: current-i, text: current-i}];
            }
            return yearsArray;
        }
    }
    return (
        <form onSubmit={onSubmit} className="fields-section" noValidate>
            <h5>Birthday</h5>
            <p>You can keep your age private if you'd like.  If you're ok with your age (not your birthday) being shared, check the box below.</p>
            <hr />
            <div className="row-fields">
                <SelectField 
                    name="birthdayDay"
                    label="Day"
                    value={user.birthdayDay}
                    options={birthdayValues.days()}
                    onChange={onChange}
                    error={errors.birthdayDay}
                />
                <SelectField 
                    name="birthdayMonth"
                    label="Month"
                    value={user.birthdayMonth}
                    options={birthdayValues.months()}
                    onChange={onChange}
                    error={errors.birthdayMonth}
                />
                <SelectField 
                    name="birthdayYear"
                    label="Year"
                    value={user.birthdayYear}
                    options={birthdayValues.years()}
                    onChange={onChange}
                    error={errors.birthdayYear}
                />
            </div>
            <CheckboxField 
                name="allowAge"
                label="Allow my age to be public"
                value={user.allowAge}
                onChange={onChange}
                error={errors.allowAge}
            />
            {errors.form && <p>{errors.form}</p>}
            <button type="submit" name="submit" className="btn inactive">Update</button>
        </form>
    );
};
ProfileInfoBirthdayForm.propTypes = {
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    saving: PropTypes.bool.isRequired,
    errors: PropTypes.object,
};
export default ProfileInfoBirthdayForm;