import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const SubNav = ({title, path, route, slug}) => {
    let pages = [];

    const returnPages = (route) => {
        const returnAllRoutes = (innerParent) => {
            let index = {
                    pageTitle: innerParent.indexRoute.pageTitle, 
                    path: innerParent.path.replace(/:slug/, slug)
                },
                routes = innerParent.childRoutes.filter(child => child.hasOwnProperty('pageTitle'));
                
            return [index, ...routes];
        }

        if (route.childRoutes) {
            let innerParent = route.childRoutes.filter(c => {
                return location.pathname === c.path.replace(/:slug/, slug);
            })[0];

            if (innerParent && innerParent.hasOwnProperty('childRoutes')) {
                return returnAllRoutes(innerParent);
            }
            return returnAllRoutes(route);
        }
    }
    pages = returnPages(route) || [];
    title = title || route.pageTitle;

    return (
        <div className="sub-nav">
            {title && <h1>{title}</h1>}
            <nav>
                <ul>
                    {pages.length > 1 && pages.map((page, i) => {
                        let active = page.path.replace(/:slug/, slug) === path;
                        return (
                            <li key={i} className={active && 'active'}>
                                <Link to={page.path}>{page.pageTitle}</Link>
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
    route: PropTypes.object,
    path: PropTypes.string
};

export default SubNav;