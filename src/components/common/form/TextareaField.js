import React from 'react';
import PropTypes from 'prop-types';

const TextareaField = ({name, label, placeholder, value = '', rows = 4, onChange, error}) => {
    return (
        <div className="form-element">
            <label htmlFor={name}>{label}</label>
            <textarea 
                name={name}
                placeholder={placeholder}
                rows={rows}
                onChange={onChange}
                value={value}
            >
            </textarea>
            {error && <p>{error}</p>}
        </div>
    );
};
TextareaField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};
export default TextareaField;