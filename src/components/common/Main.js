import React from 'react';
import PropTypes from 'prop-types';

const Main = ({children}) => {
    return (
        <div className="main">
            <div className="main-content">
                {children}
            </div>
        </div>
    );
};
Main.propTypes = {
    children: PropTypes.object.isRequired
};
export default Main;