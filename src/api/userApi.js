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
            axios.post('http://localhost:3001/api/signup/', {email, password})
                .then(res => {
                    if (res.data.error) {
                        return reject(res.data.error);
                    }
                    resolve(res.data);
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
                    resolve(res.data);
                }).catch(err => reject(err));
        })
    }

    // static loadCurrentUser(user) {
    //     return new Promise((resolve, reject) => {
    //         axios.get(`http://localhost:3001/api/users/${user.email}`)
    //             .then(res => {
    //                 resolve(res.data);
    //             }).catch(err => reject(err));
    //     });
    // }


    // static saveUser(user) {
    //     user = Object.assign({}, user);
    //     return new Promise((resolve, reject) => {
    //         axios.get(`http://localhost:3001/api/users/check/${user.email}`)
    //             .then(res => {
    //                 if (res.data > 0) {
    //                     return reject('This email already exists!');
    //                 }
    //                 axios.post('http://localhost:3001/api/signup/', user)
    //                     .then(res => {
    //                         resolve(res.data);
    //                     }).catch(err => reject(err));
    //             }).catch(err => reject(err));
    //     });
    // }









    // static deleteUser(userId) {
    //     return new Promise((resolve, reject) => {
    //     });
    // }
}

export default UserApi;