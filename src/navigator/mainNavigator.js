import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial182495Navigator from '../features/Tutorial182495/navigator';
import NotificationList182467Navigator from '../features/NotificationList182467/navigator';
import Settings182466Navigator from '../features/Settings182466/navigator';
import Settings182458Navigator from '../features/Settings182458/navigator';
import UserProfile182456Navigator from '../features/UserProfile182456/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial182495: { screen: Tutorial182495Navigator },
NotificationList182467: { screen: NotificationList182467Navigator },
Settings182466: { screen: Settings182466Navigator },
Settings182458: { screen: Settings182458Navigator },
UserProfile182456: { screen: UserProfile182456Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
