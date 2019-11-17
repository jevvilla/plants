import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Login, Forgot } from '../screens';

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Forgot: {
      screen: Forgot,
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);
