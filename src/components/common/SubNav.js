import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const SubNav = ({title, path}) => {
    let pages = [
        {title: 'Info', path: '/profile'},
        {title: 'Demographic', path: '/demographic'},
        {title: 'Social', path: '/social'},
        {title: 'More', path: '/more'}
    ]
    return (
        <div className="sub-nav">
            <h1>{title}</h1>
            <nav>
                <ul>
                    {pages.map((page, i) => {
                        let active = page.path === path;
                        return (
                            <li key={i} className={active && 'active'}>
                                <Link to={page.path}>{page.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
SubNav.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};

export default SubNav;