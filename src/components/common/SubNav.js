import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const SubNav = ({title, path, route}) => {
    let pages = [],
        childRoutes = [];

    if (route.indexRoute) {
        pages = [{title: route.indexRoute.pageTitle, path: route.path}];
    }
    if (route.childRoutes) {
        childRoutes = route.childRoutes.filter(child => child.hasOwnProperty('pageTitle'));
        childRoutes = childRoutes.map(child => ({title: child.pageTitle, path: child.path}));
    }
    pages = [...pages, ...childRoutes];
    title = title || route.pageTitle;
    
    return (
        <div className="sub-nav">
            {title && <h1>{title}</h1>}
            <nav>
                <ul>
                    {pages.length > 1 && pages.map((page, i) => {
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
    title: PropTypes.string,
    route: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired
};

export default SubNav;