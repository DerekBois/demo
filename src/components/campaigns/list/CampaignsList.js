import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import CampaignCard from './CampaignCard';

const CampaignsList = ({campaigns = [], loading = false}) => {
    return (
        <div className="main">
            <div className="text-header">
                <h2>Select a campaign</h2>
                <p>Understanding your influencer campaign analytics doesn’t need to be daunting, we make designing a public profile, tracking hashtags, clicks to your blog, and the number of impressions and engagement on your social posts quick and easy. Let's create your first campaign and public profile!</p>
            </div>
            {loading ? <div className="loading"><h1>Loading...</h1></div> : // replace with component
                <div className="campaign-cards">
                    {campaigns.map((campaign, i) => <CampaignCard key={i} {...campaign}/>)}
                    <Link to="/campaign/create" className="add-campaign"><span>+</span></Link>
                </div>
            }
        </div>
    );
}
CampaignsList.propTypes = {
    campaigns: PropTypes.array
};
export default CampaignsList;