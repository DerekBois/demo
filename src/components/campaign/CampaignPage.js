import React from 'react';
import SubNav from '../common/SubNav';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as campaignActions from '../../actions/campaignActions';

class CampaignPage extends React.Component {
    componentDidMount() {
        this.props.actions.loadCampaign(this.props.params.slug);
    }
    render() {
        return (
            <div className="main-wrapper">
                <SubNav 
                    title={this.props.campaign.details.title}
                    route={this.props.route}
                    path={this.props.location.pathname}
                    slug={this.props.campaign.details.slug}
                />
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        currentUser: state.currentUser,
        campaign: state.campaign
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(campaignActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CampaignPage);