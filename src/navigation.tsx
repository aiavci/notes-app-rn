import { createAppContainer, createStackNavigator } from 'react-navigation';

import { HomeScreen, RepositoriesScreen } from "./screens";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Repositories: {
    screen: RepositoriesScreen,
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