import delay from './delay';
import axios from 'axios';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
    {
        id: 'cory-house',
        firstName: 'Cory',
        lastName: 'House'
    },
    {
        id: 'scott-allen',
        firstName: 'Scott',
        lastName: 'Allen'
    },
    {
        id: 'dan-wahlin',
        firstName: 'Dan',
        lastName: 'Wahlin'
    }
];

class UserApi {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/api/users')
                .then(res => {
                    console.log(res);
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
    static loadUser(user) {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/api/users/')
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
    static saveUser(user) {
        user = Object.assign({}, user);
        return new Promise((resolve, reject) => {
            axios.get(`http://localhost:3001/api/users/check/${user.email}`)
                .then(res => {
                    if (res.data > 0) {
                        reject('This email already exists!');
                    }
                    axios.post('http://localhost:3001/api/users/', user)
                        .then(res => {
                            resolve(res.data);
                        })
                        .catch(err => {
                            reject(err);
                        });
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    // static saveUser(user) {
    //     user = Object.assign({}, user); // to avoid manipulating object passed in.
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             // Simulate server-side validation
    //             const minUserNameLength = 3;
    //             if (user.firstName.length < minUserNameLength) {
    //                 reject(`First Name must be at least ${minUserNameLength} characters.`);
    //             }

    //             if (user.lastName.length < minUserNameLength) {
    //                 reject(`Last Name must be at least ${minUserNameLength} characters.`);
    //             }

    //             if (user.id) {
    //                 const existingUserIndex = users.findIndex(a => a.id === user.id);
    //                 users.splice(existingUserIndex, 1, user);
    //             } else {
    //                 //Just simulating creation here.
    //                 //The server would generate ids for new users in a real app.
    //                 //Cloning so copy returned is passed by value rather than by reference.
    //                 user.id = generateId(user);
    //                 users.push(user);
    //             }

    //             resolve(user);
    //         }, delay);
    //     });
    // }

    static deleteUser(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfUserToDelete = users.findIndex(user => {
                    return user.id === userId;
                });
                users.splice(indexOfUserToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default UserApi;