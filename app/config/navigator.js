import React from "react";
import { Platform } from "react-native";
import { fromBottom, fromLeft, fromTop } from 'react-navigation-transitions';
import * as Constants from "../util/Constants";

import {
  createSwitchNavigator,createAppContainer
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { View, Image, Text } from "react-native";


import LinkedLoginContainer from "../Component/LinkedLoginContainer";
import SignIn from "../Component/SignIn";
import SplashScreen from "../Component/SplashScreen";
import EmployeeId from "../Component/EmployeeId";
import Step1 from "../Component/Step1";
import Step2 from "../Component/Step2";
import YourOwnComponent from "../Component/YourOwnComponent";
import Editprodile from "../Component/Editprodile";
import Singupconfirm from "../Component/Singupconfirm";







import Home from "../Component/Home";

import Verification from "../Component/Verification";








const Events = createStackNavigator({
  SignIn,
  EmployeeId,
  EmployeeId
  
});

const SettingsNav = createStackNavigator({
  SignIn,
  EmployeeId
});
// Events.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true;
//   let routeName = navigation.state.routes[navigation.state.index].routeName;
//   if (routeName === "IndividualChat") {
//     tabBarVisible = false;
//   }
//   return {
//     tabBarOnPress({ navigation, defaultHandler }) {


//       if (navigation.isFocused()) {
//         const now = new Date().getTime();

//         EventsList.refreshFlatList(navigation);
//       }
//       defaultHandler();
//     },
//     tabBarVisible
//   };
// };



// const ChatNav = createStackNavigator({
//   ChatList,
//   Chat,
//   CreateEvent,
//   CloseEvent,
//   EventDetails,
//   EventMembers,
//   ChatUserProfile,
//   ChatProfile
//   //   }, {
//   //  transitionConfig: () => fromBottom(700),
// // }, {
// //   transitionConfig: (nav) => Constants.handleCustomTransition(nav)
// });

// ChatNav.navigationOptions = ({ navigation }) => {
//   let tabBarVisible = true;
//   let routeName = navigation.state.routes[navigation.state.index].routeName;
//   if (routeName === "Chat" || routeName === "EventDetails") {
//     tabBarVisible = false;
//   }

//   return {
//     tabBarOnPress({ navigation, defaultHandler }) {

//       ChatList.refreshFlatList(navigation);
//       defaultHandler();
//     },
//     tabBarVisible
//   };
// };

// const SettingsNav = createStackNavigator({
//   Settings,
//   Profile,
//   Account,
//   Logout,
//   SetiingInner,
//   Notification,
//   DataUsage,
//   ProfilePicture,
//   EditProfile
//   // }, {
//   //  transitionConfig: () => fromBottom(700),
// });

const HomeNavigator = createBottomTabNavigator(
  {
   
    Events: {
      screen: Events,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <BadgeTabIcon displayBadge focused={focused} icon="chat" />
        ),
        title: 'Chat',


      }
    },
    Settings: {
      screen: SettingsNav,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <SettingTabIcon focused={focused} icon="settings" />
        ),
        title: 'Account',

      }
    }
  },
  {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "#8A2BE2",

      inactiveTintColor: 'gray',


    }
  }
);

const AuthNavigator = createStackNavigator(
  {
    SplashScreen,
    SignIn,
    EmployeeId,
    Step1,
    Step2,
    LinkedLoginContainer,
    Singupconfirm,
    YourOwnComponent,
    Verification,
    Editprodile,
    Home
  },
  {
     transitionConfig: () => fromLeft(100),
     
    headerMode: "none"
  }
);

const RootNavigator = createSwitchNavigator({
  SplashScreen,
  Auth: AuthNavigator,
  App: HomeNavigator
});

export default createAppContainer(RootNavigator);
