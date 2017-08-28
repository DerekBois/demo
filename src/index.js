import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {loadAuthUser} from './actions/authActions';
import routes from './routes';

const store = configureStore();
let token = localStorage.getItem('userToken');

if (token && token !== undefined) {
    store.dispatch(loadAuthUser(token));
}
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);