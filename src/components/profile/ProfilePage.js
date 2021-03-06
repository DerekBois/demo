import React from 'react';
import PropTypes from 'prop-types';
import SubNav from '../common/SubNav';

class ProfilePage extends React.Component {
    render() {
        return (
            <div className="main-wrapper">
                <SubNav 
                    route={this.props.route}
                    path={this.props.location.pathname}
                />
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
ProfilePage.propTypes = {
    children: PropTypes.object.isRequired
};
export default ProfilePage;