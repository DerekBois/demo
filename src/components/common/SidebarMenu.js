import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const SidebarMenu = ({path}) => {
    let sidebarItems = [
        {title: 'Profile', path: '/profile', icon: 'profile.svg'},
        {title: 'Reports', path: '/profile1', icon: 'reports.svg'},
        {title: 'Campaigns', path: '/profile1', icon: 'campaigns.svg'},
        {title: 'Upgrade', path: '/profile1', icon: 'upgrade.svg'},
        {title: 'Help', path: '/profile1', icon: 'help.svg'},
        {title: 'Log Out', path: '/profile1', icon: 'logout.svg'}
    ];
    return (
        <div className="sidebar-wrapper">
            <ul>
                {sidebarItems.map((item, i) => {
                    let active = item.path === path;
                    return (
                        <li key={i} className={active && 'active'}>
                            <Link to={item.path}>
                                <img src={`../images/icons/${item.icon}`} alt={item.title}/>
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