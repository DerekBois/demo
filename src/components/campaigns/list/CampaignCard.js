import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const CampaignCard = ({title, slug, description, hashtag, sponsor}) => {
    return (
        <Link to={'/campaign/'+slug} className="campaign-card">
            <h1>{title}</h1>
            <p>{description}</p>
            {hashtag && <p>Hashtag: {hashtag}</p>}
            {sponsor && <p>Sponsor: {sponsor}</p>}
        </Link>
    );
}
CampaignCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    hashtag: PropTypes.string.isRequired,
    sponsor: PropTypes.string.isRequired
};
export default CampaignCard;