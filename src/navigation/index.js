import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Forgot, Login, Welcome } from '../screens';

const AppNavigator = createStackNavigator(
  {
    Forgot: {
      screen: Forgot,
    },
    Login: {
      screen: Login,
    },
    Welcome: {
      screen: Welcome,
    },
  },
  {
    initialRouteName: 'Welcome',
  },
);

export default createAppContainer(AppNavigator);
