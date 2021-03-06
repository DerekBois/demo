import React from 'react';
// import PropTypes from 'prop-types';
import SubNav from '../common/SubNav';
import CampaignsList from './list/CampaignsList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as campaignActions from '../../actions/campaignActions';

class CampaignsPage extends React.Component {
    componentDidMount() {
        this.props.actions.loadCampaigns(this.props.currentUser._id);
    }
    render() {
        return (
            <div className="main-wrapper">
                <SubNav 
                    route={this.props.route}
                    path={this.props.location.pathname}
                />
                <CampaignsList 
                    loading={this.props.campaigns.loading}
                    campaigns={this.props.campaigns.list}
                />
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return {
        currentUser: state.currentUser,
        campaigns: state.campaigns
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(campaignActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CampaignsPage);