import React from 'react';
import PropTypes from 'prop-types';
import SharingIcons from '../../common/sharing-icons/SharingIcons';
import SharingLink from './SharingLink';
import {channels} from '../../../constants';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shortUrlActions from '../../../actions/shortUrlActions';

class SharingLinks extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.sharingIconClick = this.sharingIconClick.bind(this);
        this.copyAction = this.copyAction.bind(this);
        this.clearShortUrl = this.clearShortUrl.bind(this);
    }
    componentWillUnmount() {
        this.clearShortUrl();
    }
    clearShortUrl() {
        this.props.actions.clearShortUrl();
    }
    sharingIconClick(medium) {
        let {slug, hsid, targetUrl} = this.props,
            shareUrl = `//${location.host}/campaigns/${slug ? slug+'/' : ''}`,
            paramsArray = [];

        if (hsid) {
            let channel = channels[medium.toUpperCase()];
            paramsArray.push(`hsid=${channel+hsid}`);
        }
        if (targetUrl) {
            paramsArray.push(`r=${encodeURIComponent(targetUrl)}`);
        }
        if (paramsArray.length) {
            shareUrl = shareUrl += '?'+paramsArray.join('&');
        }
        this.props.actions.getShortUrl(shareUrl);
    }
    copyAction() {
        // pass channel and campaign to increment reporting
        alert('Link copied!');
        this.props.actions.clearShortUrl();
        console.log('Change this to another action that increments for reporting');
    }
    triggerCopy(e) {
        let input = e.target.parentNode.querySelector('.sharing-link');

        input.focus();
        input.setSelectionRange(0, input.value.length);
        document.execCommand('copy');
    }
    render() {
        let mediums = Object.keys(channels).map(c => c.toLowerCase());
        mediums = mediums.filter(m => m !== 'pixel');

        return (
            <div className="sharing-links">
                <SharingIcons
                    mediums={mediums}
                    slug={this.props.slug}
                    hsid={this.props.hsid}
                    targetUrl={this.props.targetUrl}
                    onClick={this.sharingIconClick}
                />
                <SharingLink 
                    inputRef={el => this.inputElement = el}
                    link={this.props.shortUrl.link} 
                    loading={this.props.shortUrl.loading}
                    onCopy={this.copyAction}
                    onClick={this.triggerCopy}
                />
            </div>
        );
    }
}
SharingLinks.propTypes = {
    slug: PropTypes.string,
    hsid: PropTypes.string,
    targetUrl: PropTypes.string
};
function mapStateToProps(state, ownProps) {
    return {
        shortUrl: state.shortUrl
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(shortUrlActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SharingLinks);