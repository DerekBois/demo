import axios from 'axios';

class HsidApi {
    static registerHsid(hsid, channel, currentUser) {
        return new Promise((resolve, reject) => {
            console.log(hsid, channel);

            axios.post('http://localhost:3001/api/hsid/visit', {hsid, channel})
                .then(res => {
                    console.log(res.data);
                    // resolve(res.data.original_user_id);
                }).catch(err => reject(err));


            // axios.post('http://localhost:3001/api/auth', {token})
            //     .then(res => {
            //         if (res.data.error) {
            //             return reject(res.data.error);
            //         }
            //         resolve(res.data);
            //     }).catch(err => reject(err));
        });
    }
}

export default HsidApi;