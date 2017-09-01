import React from 'react';
import PropTypes from 'prop-types';

const CheckboxField = ({name, label, value = false, onChange, error}) => {
    return (
        <div className="form-element checkbox-wrapper">
            <input 
                type="checkbox"
                name={name}
                onChange={onChange}
                checked={value}
            />
            <label htmlFor={name}>{label}</label>
            {error && <p>{error}</p>}
        </div>
    );
};
CheckboxField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};
export default CheckboxField;