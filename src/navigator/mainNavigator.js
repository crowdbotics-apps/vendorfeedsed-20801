import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile114877Navigator from '../features/UserProfile114877/navigator';
import Maps114796Navigator from '../features/Maps114796/navigator';
import Add-Item114795Navigator from '../features/Add-Item114795/navigator';
import Maps114791Navigator from '../features/Maps114791/navigator';
import UserProfile114787Navigator from '../features/UserProfile114787/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile114877: { screen: UserProfile114877Navigator },
Maps114796: { screen: Maps114796Navigator },
Add-Item114795: { screen: Add-Item114795Navigator },
Maps114791: { screen: Maps114791Navigator },
UserProfile114787: { screen: UserProfile114787Navigator },

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
