import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './navigation';

import { createStore, applyMiddleware } from 'redux';

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducer';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}