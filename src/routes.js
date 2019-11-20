import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Main from './pages/main';

const RootStack = createStackNavigator({Main});
const Routes = createAppContainer(RootStack);

export default Routes;
