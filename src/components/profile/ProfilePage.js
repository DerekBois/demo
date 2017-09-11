import React from 'react';
import PropTypes from 'prop-types';
import SidebarMenu from '../common/SidebarMenu';
import SubNav from '../common/SubNav';

class ProfilePage extends React.Component {
    render() {
        return (
            <div className="site-content">
                <SidebarMenu
                    path={this.props.route.path}
                />
                <div className="main-wrapper">
                    <SubNav 
                        title={this.props.route.pageTitle}
                        path={this.props.location.pathname}
                    />
                    <div className="main">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
ProfilePage.propTypes = {
    children: PropTypes.object.isRequired
};
export default ProfilePage;