import React from 'react';
import PropTypes from 'prop-types';
import UploadPreviews from './UploadPreviews';

const FileField = ({name, label, previews, onChange, multiple, error}) => {
    return (
        <div className="form-element">
            {label && <label htmlFor={name}>{label}</label>}
            <input 
                type="file"
                name={name}
                onChange={onChange}
                multiple={multiple}
            />
            <UploadPreviews images={previews} />
            {error && <p>{error}</p>}
        </div>
    );
};
FileField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    previews: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};
export default FileField;