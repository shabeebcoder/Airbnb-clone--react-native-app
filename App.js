import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from './screens/home';
import SavedScreen from './screens/save';
import InboxScreen from './screens/inbox';
import TripsScreen from './screens/trips';


export default createBottomTabNavigator({
  Expore :{ 
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  },
  Saved :{ 
    screen: SavedScreen ,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-heart" color={tintColor} size={24} />
      )
    }
  },
  Trips :{ 
    screen: TripsScreen,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon:({tintColor})=>(
        <Image source={require('./assets/airbnb.png')} style={{height:24, width:24,}}/>
      )
    }
  },
  Inbox :{ 
    screen: InboxScreen,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-chatboxes" color={tintColor} size={24} />
      )
    }
  },
  Profile :{ 
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-person" color={tintColor} size={24} />
      )
    }
  },

},{
 tabBarOptions : {
   activeTintColor: 'red',
   inactiveTintColor: 'grey',
   style : {
     backgroundColor: 'white',
     borderTopWidth:0,
     shadowOffset:{width:5,height:3},
     shadowColor:'black',
     shadowOpacity:0.5,
     elevation:5
   }
 }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
