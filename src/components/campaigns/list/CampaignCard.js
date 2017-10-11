import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const CampaignCard = ({title, slug, description, sponsor}) => {
    return (
        <Link to={'/campaigns/'+slug} className="campaign-card">
            <div className="card-header">
                <h1>{title}</h1>
                <hr/>
                <p>{description}</p>
            </div>
            <div className="card-body">
                {sponsor && <p>{sponsor}</p>}
                <p className="title">{sponsor ? 'Sponsor' : 'Custom Campaign'}</p>
            </div>
        </Link>
    );
}
CampaignCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sponsor: PropTypes.string
};
export default CampaignCard;