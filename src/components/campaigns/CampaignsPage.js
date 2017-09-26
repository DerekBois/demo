import React from 'react';
import PropTypes from 'prop-types';
import SubNav from '../common/SubNav';

class CampaignsPage extends React.Component {
    render() {
        // grab campaigns and add to store -- LOAD_CAMPAIGNS
        // Loads 
        return (
            <div className="main-wrapper">
                <SubNav 
                    route={this.props.route}
                    path={this.props.location.pathname}
                />
                <div className="main">
                    {React.cloneElement(this.props.children, {campaigns: []})}
                </div>
            </div>
        );
    }
}
CampaignsPage.propTypes = {
    children: PropTypes.object.isRequired
};
export default CampaignsPage;