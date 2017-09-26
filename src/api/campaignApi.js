import axios from 'axios';

class CampaignApi {
    static createCampaign(campaign) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3001/api/campaign/user', {campaign})
                .then(res => {
                    if (res.data.error) {
                        return reject(res.data.error);
                    }
                    resolve(res.data);
                }).catch(err => reject(err));
        });
    }
    // static saveCampaign(campaign) {
    //     return new Promise((resolve, reject) => {
    //         axios.post('http://localhost:3001/api/campaigns', {campaign})
    //             .then(res => {
    //                 if (res.data.error) {
    //                     return reject(res.data.error);
    //                 }
    //                 resolve(res.data);
    //             }).catch(err => reject(err));
    //     });
    // }
    static loadCampaign(slug) {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/api/campaign', {slug})
                .then(res => {
                    if (res.data.error) {
                        return reject(res.data.error);
                    }
                    resolve(res.data);
                }).catch(err => reject(err));
        });
    }
    static loadAllCampaigns(id) {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/api/campaigns', {id})
                .then(res => {
                    if (res.data.error) {
                        return reject(res.data.error);
                    }
                    resolve(res.data);
                }).catch(err => reject(err));
        });
    }
}

export default CampaignApi;