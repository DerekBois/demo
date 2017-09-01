import React from 'react';
import PropTypes from 'prop-types';

const SelectField = ({name, label, value, options, onChange, error}) => {
    return (
        <div className="form-element">
            <label htmlFor={name}>{label}</label>
            <select name={name} value={value} onChange={onChange}>
                <option></option>
                {options.map((option, i) => {
                    return <option key={i} value={option.value}>{option.text}</option>;
                })}
            </select>
            {error && <p>{error}</p>}
        </div>
    );
};
SelectField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};
export default SelectField;