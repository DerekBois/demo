import React from 'react';
import PropTypes from 'prop-types';

const SharingIcon = ({medium, onClick}) => {
    let imgSrc = `/images/icons/sharing/${medium}-logo.svg`;

    return (
        <div className={`sharing-icon${!onClick ? ' static' : ''}`} onClick={onClick && (() => onClick(medium))}>
            <img src={imgSrc} alt={medium || imgSrc}/>
        </div>
    );
};
SharingIcon.propTypes = {
    medium: PropTypes.string.isRequired,
    onClick: PropTypes.func
};
export default SharingIcon;