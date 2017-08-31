import axios from 'axios';

class UserApi {
    static authUser(token) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3001/api/auth', {token})
                .then(res => {
                    if (res.data.error) {
                        return reject(res.data.error);
                    }
                    resolve(res.data);
                }).catch(err => reject(err));
        });
    }
    static loginUser({email, password}) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3001/api/login', {email, password})
                .then(res => {
                    if (res.data.error) {
                        return reject(res.data.error);
                    }
                    resolve(res.data);
                }).catch(err => reject(err));
        });
    }
    static registerUser({email, password}) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3001/api/signup/', {email, password}).then(res => {
                if (res.data.error) {
                    return reject(res.data.error);
                }
                return resolve(res.data);
            }).catch(err => reject(err));
        })
    }
    static updateUser(user) {
        return new Promise((resolve, reject) => {
            axios.put('http://localhost:3001/api/user', user)
                .then(res => {
                    if (res.data.error) {
                        return reject(res.data.error);
                    }
                    resolve(res.data.user);
                }).catch(err => reject(err));
        })
    }
}

export default UserApi;