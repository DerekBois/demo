import React from 'react';
import PropTypes from 'prop-types';
import SharingLinks from './SharingLinks';
import PixelCode from './PixelCode';

const CampaignTracking = ({campaign, loading}) => {
    return (
        <div className="main">
            <div className="text-header">
                <h2>Select a campaign</h2>
                <p>Understanding your influencer campaign analytics doesn’t need to be daunting, we make designing a public profile, tracking hashtags, clicks to your blog, and the number of impressions and engagement on your social posts quick and easy. Let's create your first campaign and public profile!</p>
            </div>
            {loading ? <div className="loading"><h1>Loading...</h1></div> : // replace with component
                <div className="content">
                    <div>
                        <h1>{campaign.title}</h1>
                        <p>{campaign.description}</p>
                        <hr/>
                        <h2>Contents (form if custom campaign)</h2>
                        <p>Hashtag</p>
                        <p>Images</p>
                        <p>Copy (textarea with tinyMCE perhaps</p>
                        <p>Target URL</p>
                    </div>
                    <div>
                        <div className="fields-section">
                            <h2>Share Links</h2>
                            <p>Instructions</p>
                            <SharingLinks
                                slug={campaign.slug}
                                hsid={'45678'}
                                targetUrl={'http://google.ca'}
                            />
                        </div>
                        <div className="fields-section">
                            <h2>Blog pixel</h2>
                            <p>Instructions</p>
                            <PixelCode 
                                slug={campaign.slug}
                                hsid={'45678'}
                            />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
CampaignTracking.propTypes = {
    campaign: PropTypes.object
};
export default CampaignTracking;