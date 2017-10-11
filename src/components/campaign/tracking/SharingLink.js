import React from 'react';
import PropTypes from 'prop-types';

const SharingLink = ({link, onCopy, onClick, loading}) => {
    if (!link && !loading) {
        return <div></div>;
    }
    return (
        <div className="sharing-links-container">
            <input 
                className="sharing-link" 
                onCopy={() => onCopy()}
                value={loading ? '' : link} 
                readOnly
            />
            <button type="button" className="btn sharing-link-copy" onClick={(e) => onClick(e)}>Copy</button>
        </div>
    );
};
SharingLink.propTypes = {
    link: PropTypes.string,
    onCopy: PropTypes.func,
    onClick: PropTypes.func,
    loading: PropTypes.bool
};
export default SharingLink;