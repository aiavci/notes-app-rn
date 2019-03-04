import { createAppContainer, createStackNavigator } from 'react-navigation';

import { HomeScreen, NewNoteScreen } from "./screens";

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
        fontWeight: 'bold',
      },
    },
});

export default createAppContainer(AppNavigator);