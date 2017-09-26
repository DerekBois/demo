import React from 'react';
import PropTypes from 'prop-types';
import CampaignCreateForm from './CampaignCreateForm';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {bindActionCreators} from 'redux';
import * as campaignActions from '../../../actions/campaignActions';

class CampaignCreatePage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            campaign: Object.assign({}, this.props.campaign),
            saving: false,
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.campaign !== nextProps.campaign) {
            this.setState({campaign: Object.assign({}, nextProps.campaign)});
        }
    }
    onChange(e) {
        let campaign = Object.assign({}, this.state.campaign),
            fieldsSection = e.target.closest('.fields-section'),
            submitBtn = fieldsSection.querySelector('button[type=submit]'),
            value = e.target.value;

        if (e.target.type === 'checkbox') {
            value = e.target.checked;
        }
        if (submitBtn.classList.contains('inactive')) {
            submitBtn.classList.remove('inactive')
        }
        campaign[e.target.name] = value;
        this.setState({campaign: campaign});
    }
    onSubmit(e) {
        let submitBtn = e.target.querySelectorAll('button[type=submit]');

        e.preventDefault();

        [...submitBtn].forEach(btn => {
            if (!btn.classList.contains('inactive')) {
                btn.classList.add('inactive')
            }
        });

        this.setState({errors: {}, saving: true});
        this.props.actions.createCampaign(this.state.campaign).then((error) => {
            if (error) {
                return this.setState({errors: {form: error}, saving: false});
            }
            this.setState({saving: false});
            browserHistory.push('/campaigns');
        });
    }
    render() {
        return (
            <CampaignCreateForm 
                campaign={this.state.campaign}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                saving={this.state.saving}
                errors={this.state.errors}
            />
        );
    }
}
// CampaignCreatePage.propTypes = {
//     currentUser: PropTypes.object.isRequired,
//     actions: PropTypes.object.isRequired
// };

function mapStateToProps(state, ownProps) {
    console.log(state.campaign);
    return {
        campaign: state.campaign
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(campaignActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignCreatePage);