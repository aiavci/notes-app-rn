import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigation';

import { createStore } from 'redux';

import reducer from './reducers';

const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}