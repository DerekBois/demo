import React from 'react';
import {Link} from 'react-router';

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <h2>Header</h2>
                <Link to="/">Home</Link>
            </div>
        </header>
    );
};
export default Header;