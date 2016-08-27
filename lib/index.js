import 'babel-core/register';
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import { hashHistory, Route, Router } from 'react-router';
import { Provider } from 'react-redux';

import store from 'store';

import StoryContainer from 'components/Story/Story';
import layout from 'components/index';

require('../node_modules/material-design-lite/material.css');
require('../node_modules/material-design-lite/material');
require('../static/scss/app.scss');


window.ClarityReborn = window.ClarityReborn || {};
window.ClarityReborn.config = require("json!../config.json");

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route component={layout} path="/" >
                <Route component={StoryContainer} path="/stories" />
                <Route component={StoryContainer} path="/pull-requests" />
                <Route component={StoryContainer} path="/release-schedule" />
                <Route component={StoryContainer} path="/analytics" />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
