import React from 'react';
// import PropTypes from 'prop-types';
import InputField from '../../common/form/InputField';
// import CheckboxField from '../../common/form/CheckboxField';
// import SelectField from '../../common/form/SelectField';

const CampaignCreateForm = ({campaign, onChange, onSubmit, saving, errors}) => {
    return (
        <form onSubmit={onSubmit} className="thin-content" noValidate>
            <div className="fields-section">
                <h5>Details</h5>
                <p>Here are your basic campaign details.</p>
                <hr />
                <InputField 
                    name="title"
                    label="Title"
                    value={campaign.title}
                    onChange={onChange}
                    error={errors.title}
                />
                <InputField 
                    name="description"
                    label="Description"
                    value={campaign.description}
                    onChange={onChange}
                    error={errors.description}
                />
                {errors.form && <p>{errors.form}</p>}
                <button type="submit" name="submit" className="btn inactive">Save</button>
            </div>
        </form>
    );
};
// ProfileInfoForm.propTypes = {
//     user: PropTypes.object.isRequired,
//     onChange: PropTypes.func.isRequired,
//     onSubmit: PropTypes.func.isRequired,
//     saving: PropTypes.bool.isRequired,
//     errors: PropTypes.object
// };
export default CampaignCreateForm;