/*
 * Copyright (c) 2019 Ali I. Avci
 */
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { HomeScreen, NewNoteScreen } from "./screens";

import { Dimensions } from "react-native";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  NewNote: {
    screen: NewNoteScreen,
  }
}, {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        width : Dimensions.get('window').width,
        fontWeight: 'bold',
      },
    },
});

export default createAppContainer(AppNavigator);