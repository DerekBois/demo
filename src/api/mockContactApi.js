import delay from './delay';
import axios from 'axios';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const contacts = [
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

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (contact) => {
    return contact.firstName.toLowerCase() + '-' + contact.lastName.toLowerCase();
};

class ContactApi {
    static getAllContacts() {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/api/contacts')
                .then(res => {
                    console.log(res);
                    resolve(res.data);
                })
                .catch(err => {
                    reject(err);
                })
        });
    }

    static saveContact(contact) {
        contact = Object.assign({}, contact); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minContactNameLength = 3;
                if (contact.firstName.length < minContactNameLength) {
                    reject(`First Name must be at least ${minContactNameLength} characters.`);
                }

                if (contact.lastName.length < minContactNameLength) {
                    reject(`Last Name must be at least ${minContactNameLength} characters.`);
                }

                if (contact.id) {
                    const existingContactIndex = contacts.findIndex(a => a.id === contact.id);
                    contacts.splice(existingContactIndex, 1, contact);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids for new contacts in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    contact.id = generateId(contact);
                    contacts.push(contact);
                }

                resolve(contact);
            }, delay);
        });
    }

    static deleteContact(contactId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfContactToDelete = contacts.findIndex(contact => {
                    return contact.id === contactId;
                });
                contacts.splice(indexOfContactToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default ContactApi;