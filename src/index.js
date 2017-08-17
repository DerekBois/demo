import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
// import {loadContacts} from './actions/contactActions';
import routes from './routes';

const store = configureStore();
// store.dispatch(loadContacts());

// check local storage for token, if so, dispatch store.dispatch(authenticateUser());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);