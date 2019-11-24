import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Forgot, Login, Welcome, SignUp } from '../screens';
import * as routes from './routes';

const AppNavigator = createStackNavigator(
  {
    [routes.FORGOT]: {
      screen: Forgot,
    },
    [routes.LOGIN]: {
      screen: Login,
    },
    [routes.WELCOME]: {
      screen: Welcome,
    },
    [routes.SIGNUP]: {
      screen: SignUp,
    },
  },
  {
    initialRouteName: routes.WELCOME,
  },
);

export default createAppContainer(AppNavigator);
