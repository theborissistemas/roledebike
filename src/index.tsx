import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginPage from './pages/login/LoginPage';
import {
  HomeScreen,
  ForgotPasswordScreen,
  RegisterScreen,
  Dashboard,
} from './pages';

const Routes = createAppContainer(
  createStackNavigator(
    {
      LoginPage: LoginPage,
      HomeScreen: HomeScreen,
      ForgotPasswordScreen: ForgotPasswordScreen,
      RegisterScreen: RegisterScreen,
      Dashboard: Dashboard,
    },
    {
      initialRouteName: 'HomeScreen',
    },
  ),
);

export default Routes;
