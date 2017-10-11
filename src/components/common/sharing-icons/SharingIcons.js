import React from 'react';
import PropTypes from 'prop-types';
import SharingIcon from './SharingIcon';

const SharingIcons = ({mediums, onClick}) => {
    return (
        <div className="sharing-icons">
            {mediums.map((medium, i) => {
                return (
                    <SharingIcon 
                        key={i} 
                        medium={medium} 
                        onClick={onClick}
                    />
                );
            })}
        </div>
    );
}
SharingIcons.propTypes = {
    mediums: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
    slug: PropTypes.string,
    hsid: PropTypes.string,
    targetUrl: PropTypes.string,
    onClick: PropTypes.func
};
export default SharingIcons;