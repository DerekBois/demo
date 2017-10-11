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
            axios.get('http://localhost:3001/api/campaign/'+slug)
                .then(res => {
                    if (res.data.error) {
                        return reject(res.data.error);
                    }
                    resolve(res.data);
                }).catch(err => reject(err));
        });
    }
    static loadCampaigns(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                axios.get('http://localhost:3001/api/campaigns/'+userId)
                    .then(res => {
                        if (res.data.error) {
                            return reject(res.data.error);
                        }
                        resolve(res.data);
                    }).catch(err => reject(err));
            }, 1000)

        });
    }
    static updateCampaign(campaign) {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:3001/api/campaigns', {campaign})
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