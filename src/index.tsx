import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginPage from './pages/login/LoginPage';
import {HomePage, RecuperarSenhaPage, Dashboard, NovaContaPage} from './pages';

const Routes = createAppContainer(
  createStackNavigator(
    {
      LoginPage: LoginPage,
      HomePage: HomePage,
      RecuperarSenhaPage: RecuperarSenhaPage,
      NovaContaPage: NovaContaPage,
      Dashboard: Dashboard,
    },
    {
      initialRouteName: 'HomePage',
    },
  ),
);

export default Routes;
