/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigation';

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';

const loggerMiddleware = createLogger()

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}