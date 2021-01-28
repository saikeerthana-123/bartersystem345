import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSidebarMenu from './customsidebarmenu.js';
import {AppTabNavigator} from './AppTabNavigator.js';
import SettingScreen from '../screens/SettingScreen.js';
import {createStackNavigator} from 'react-navigation-stack';
import RecieverDetailsScreen from '../screens/RecieverDetailsScreen.js'
import DonateScreen from '../screens/DonateScreen.js';

export const AppStackNavigator = createStackNavigator({
   BookDonateList : { screen : DonateScreen,navigationOptions:{headerShown:false} }, 
   RecieverDetails: {screen:RecieverDetailsScreen,navigationOptions:{headerShown:false}}
    },{initialRouteName : 'BookDonateList'})