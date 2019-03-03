import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

import { HomeScreen } from "./screens";

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  }
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);