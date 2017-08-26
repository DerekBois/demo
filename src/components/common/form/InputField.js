import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({type = 'text', name, label, value = '', onChange, error}) => {
    return (
        <div className="form-element">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type}
                name={name}
                onChange={onChange}
                value={value}
            />
            {error && <p>{error}</p>}
        </div>
    );
};
InputField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};
export default InputField;