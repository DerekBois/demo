import React from 'react';
import PropTypes from 'prop-types';

const Header = ({user}) => {
    return (
        <header>
            <div className="logo-wrapper">
                <div className="logo"></div>
            </div>
            <div className="user">
                <div className="user-details">
                    <div className="name">{user.firstName}</div>
                    <div className="email">{user.email}</div>
                </div>
                <div className="profile-image"></div>
            </div>
        </header>
    );
};
Header.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string
}
export default Header;