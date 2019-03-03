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
});

export default createAppContainer(AppNavigator);