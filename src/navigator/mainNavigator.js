import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps114937Navigator from '../features/Maps114937/navigator';
import Add-Item114936Navigator from '../features/Add-Item114936/navigator';
import Maps114932Navigator from '../features/Maps114932/navigator';
import UserProfile114928Navigator from '../features/UserProfile114928/navigator';
import Maps114886Navigator from '../features/Maps114886/navigator';
import Add-Item114885Navigator from '../features/Add-Item114885/navigator';
import Maps114881Navigator from '../features/Maps114881/navigator';
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
Maps114937: { screen: Maps114937Navigator },
Add-Item114936: { screen: Add-Item114936Navigator },
Maps114932: { screen: Maps114932Navigator },
UserProfile114928: { screen: UserProfile114928Navigator },
Maps114886: { screen: Maps114886Navigator },
Add-Item114885: { screen: Add-Item114885Navigator },
Maps114881: { screen: Maps114881Navigator },
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
