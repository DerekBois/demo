import axios from 'axios';

class HsidApi {
    static registerHsid(hsid, channel, currentUser) {
        return new Promise((resolve, reject) => {
            console.log(hsid, channel);

            axios.post('http://localhost:3001/api/hsid/visit', {hsid, channel})
                .then(res => {
                    resolve(res.data);
                }).catch(err => reject(err));
        });
    }
    static influenceUser(newUserId, hsid, channel) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3001/api/influence', {newUserId, hsid, channel})
                .then(res => {
                    if (res.data.error) {
                        return reject(res.data.error);
                    }
                    console.log(res.data);
                    // resolve(res.data);
                }).catch(err => reject(err));
        })
    }

}

export default HsidApi;