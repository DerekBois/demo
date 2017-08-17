import axios from 'axios';

class UserApi {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/api/users/')
                .then(res => {
                    console.log(res);
                    resolve(res.data);
                }).catch(err => reject(err));
        });
    }
    static loginUser(user) {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/api/login/', {params: user})
                .then(res => {
                    if (res.data.message) {
                        return reject(res.data.message);
                    }
                    resolve(res.data);
                }).catch(err => reject(err));
        });
    }
    static loadUser(user) {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/api/users/')
                .then(res => {
                    resolve(res.data);
                }).catch(err => reject(err));
        });
    }
    static saveUser(user) {
        user = Object.assign({}, user);
        return new Promise((resolve, reject) => {
            axios.get(`http://localhost:3001/api/users/check/${user.email}`)
                .then(res => {
                    if (res.data > 0) {
                        return reject('This email already exists!');
                    }
                    axios.post('http://localhost:3001/api/users/', user)
                        .then(res => {
                            resolve(res.data);
                        }).catch(err => reject(err));
                }).catch(err => reject(err));
        });
    }
    static deleteUser(userId) {
        return new Promise((resolve, reject) => {
        });
    }
}

export default UserApi;