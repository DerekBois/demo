import React from 'react';
import PropTypes from 'prop-types';
import SubNav from './SubNav';

const MainPageWrapper = ({route = {}, pathname = '', children, title='', slug}) => {
    return (
        <div className="main-wrapper">
            <SubNav 
                slug={slug}
                title={title}
                route={route}
                path={pathname}
            />
            <div className="main">
                {children}
            </div>
        </div>
    );
};
MainPageWrapper.propTypes = {
    route: PropTypes.object,
    pathname: PropTypes.string
}
export default MainPageWrapper;