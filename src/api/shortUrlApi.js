import axios from 'axios';

class ShortUrlApi {
    static getShortUrl(url) {
        const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_SHORT_API;
        
        return new Promise((resolve, reject) => {
            axios.post(`https://www.googleapis.com/urlshortener/v1/url?key=${GOOGLE_API_KEY}`, {longUrl: url})
                .then(res => {
                    if (res.data.error) {
                        return reject(res.data.error);
                    }
                    resolve(res.data.id);
                }).catch(err => reject(err));
        });
    }
}
export default ShortUrlApi;