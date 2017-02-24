import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import configureStore from './src/store/configureStore';
import AppContainer from './src/containers/AppContainer';

import {
    AppRegistry,
} from 'react-native';

const store = configureStore({});

const App = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);

AppRegistry.registerComponent('weekdays', () => App);

// tutorial link
// https://www.youtube.com/watch?v=WrDwSRu8oz8&list=PLk083BmAphjtGWyZUuo1BiCS_ZAgps6j5&index=3