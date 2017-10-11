import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const Icon = ({i}) => {
    return <i className="material-icons">{i}</i>;
}

const SidebarMenu = ({path}) => {
    let sidebarItems = [
        {title: 'Profile', path: '/profile', icon: 'accessibility'},
        {title: 'Reports', path: '/profile1', icon: 'trending_up'},
        {title: 'Campaigns', path: '/campaigns', icon: 'assignment'},
        {title: 'Upgrade', path: '/profile1', icon: 'call_made'},
        {title: 'Help', path: '/profile1', icon: 'help_outline'},
        {title: 'Log Out', path: '/profile1', icon: 'forward'}
    ];
    return (
        <div className="sidebar-wrapper">
            <ul>
                {sidebarItems.map((item, i) => {
                    let active = item.path === path;
                    return (
                        <li key={i} className={active && 'active'}>
                            <Link to={item.path} className="nav-icon">
                                <Icon i={item.icon}/>
                            </Link>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
SidebarMenu.propTypes = {
    path: PropTypes.string
}
export default SidebarMenu;