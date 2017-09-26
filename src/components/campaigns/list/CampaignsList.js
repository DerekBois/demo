import React from 'react';
// import PropTypes from 'prop-types';
import {Link} from 'react-router';
import CampaignCard from './CampaignCard';

const CampaignsList = (props) => {
    console.log(props);
    let campaigns = [
        {
            state: 'active',
            title: 'Campaign One',
            slug: 'campaign-one',
            description: 'The first of the campaigns',
            hashtag: '#campaignone',
            body: 'This is a whole bunch of body content for the campaign that I\'m typing because I don\'t want to deal with lorem ipsum',
            targetUrl: 'http://target-url.com',
            sponsor: 'Tim Hortons',
            images: [
                'https://static.pexels.com/photos/34950/pexels-photo.jpg',
                'https://www.w3schools.com/css/trolltunga.jpg',
                'http://www.planwallpaper.com/images#static/images/beautiful-sunset-images-196063.jpg'
            ]
        },
        {
            state: 'active',
            title: 'Campaign Two',
            slug: 'campaign-two',
            description: 'The second of the campaigns',
            hashtag: '#campaigntwo',
            body: 'This is a whole bunch of body content for the campaign that I\'m typing because I don\'t want to deal with lorem ipsum',
            targetUrl: 'http://target-url.com',
            sponsor: 'Toys \'R\' Us',
            images: [
                'https://static.pexels.com/photos/34950/pexels-photo.jpg',
                'https://www.w3schools.com/css/trolltunga.jpg',
                'http://www.planwallpaper.com/images#static/images/beautiful-sunset-images-196063.jpg'
            ]
        },
        {
            state: 'active',
            title: 'Campaign Three',
            slug: 'campaign-three',
            description: 'The third of the campaigns',
            hashtag: '#campaignthree',
            body: 'This is a whole bunch of body content for the campaign that I\'m typing because I don\'t want to deal with lorem ipsum',
            targetUrl: 'http://target-url.com',
            sponsor: 'Toys \'R\' Us',
            images: [
                'https://static.pexels.com/photos/34950/pexels-photo.jpg',
                'https://www.w3schools.com/css/trolltunga.jpg',
                'http://www.planwallpaper.com/images#static/images/beautiful-sunset-images-196063.jpg'
            ]
        }
    ];

    return (
        <div>
            <h1>Campaigns List</h1>
            <div className="campaign-cards">
                {campaigns.map((campaign, i) => {
                    return (
                        <CampaignCard key={i} {...campaign}/>
                    );
                })}
                <Link to="/campaign/create">Create Campaign</Link>
            </div>
        </div>
    );
}
// CampaignsList.propTypes = {
    // children: PropTypes.object.isRequired
// };
export default CampaignsList;