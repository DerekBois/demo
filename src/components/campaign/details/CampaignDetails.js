import React from 'react';
// import PropTypes from 'prop-types';
import CampaignDetailsForm from './CampaignDetailsForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as campaignActions from '../../../actions/campaignActions';

class CampaignDetails extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            campaign: Object.assign({}, this.props.campaign),
            uploadPreviews: [],
            loading: false,
            saving: false,
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.imageUploads = this.imageUploads.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.campaign !== nextProps.campaign) {
            this.setState({
                campaign: nextProps.campaign,
                loading: nextProps.loading,
                saving: nextProps.saving
            });
        }
    }
    imageUploads(files = []) {
        let uploadPreviews = [];

        const previewImages = (file) => {
            return new Promise((resolve, reject) => {
                let reader = new FileReader();

                reader.onload = function() {
                    resolve(this.result);
                }
                reader.readAsDataURL(file);
            });
        };
        const updateState = (uploadPreviews, fileList) => {
            let campaign = Object.assign({}, this.state.campaign, {imageUploads: fileList});

            this.setState({uploadPreviews, campaign});
        }
        [...files].forEach(file => {
            previewImages(file).then(image => {
                uploadPreviews.push(image);
                if (uploadPreviews.length === files.length) {
                    updateState(uploadPreviews, files);
                }
            });
        });
    }
    onChange(e) {
        let campaign = Object.assign({}, this.state.campaign),
            fieldsSection = e.target.closest('.fields-section'),
            submitBtn = fieldsSection.querySelector('button[type=submit]'),
            value = e.target.value;

        if (submitBtn.classList.contains('inactive')) {
            submitBtn.classList.remove('inactive')
        }
        if (e.target.type === 'checkbox') {
            value = e.target.checked;
        }
        if (e.target.type === 'file') {
            return this.imageUploads(e.target.files);
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
        this.props.actions.updateCampaign(this.state.campaign); //.then((error) => {
        //     if (error) {
        //         return this.setState({errors: {form: error}, saving: false});
        //     }
        //     this.setState({saving: false});
        // });
    }
    render() {
        return (
            <div className="main">
                <div className="text-header">
                    <h2>Campaign Details</h2>
                    <p>These are the details of your campaign</p>
                </div>
                <CampaignDetailsForm 
                    campaign={this.state.campaign}
                    onChange={this.onChange}
                    uploadPreviews={this.state.uploadPreviews}
                    onSubmit={this.onSubmit}
                    saving={this.state.saving}
                    errors={this.state.errors}
                />
            </div>
        );
    }
}
// CampaignDetails.propTypes = {
//     campaign: PropTypes.object.isRequired
// };
function mapStateToProps(state, ownProps) {
    return {
        campaign: state.campaign.details,
        loading: state.campaign.loading,
        saving: state.campaign.saving
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(campaignActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CampaignDetails);