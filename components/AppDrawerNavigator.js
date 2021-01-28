import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSidebarMenu from './customsidebarmenu.js';
import {AppTabNavigator} from './AppTabNavigator.js';
import SettingScreen from '../screens/SettingScreen.js';
import RecieverDetailsScreen from '../screens/RecieverDetailsScreen.js';
import DonateScreen from '../screens/DonateScreen.js'

export const AppDrawerNavigator = createDrawerNavigator({
   Home : { screen : AppTabNavigator },
   Setting: {screen:SettingScreen},
   MyBarters: {screen:DonateScreen},
  },
   
   {
       contentComponent:CustomSidebarMenu },
     { initialRouteName : 'Home' 
    })