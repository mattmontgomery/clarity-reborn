import 'babel-core/register';
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import { browserHistory, Route, Router } from 'react-router';
import { Provider } from 'react-redux';

import store from 'store';

import StoryContainer from 'components/Story/Story';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={StoryContainer} path="/" />
        </Router>
    </Provider>,
    document.getElementById('app')
);
