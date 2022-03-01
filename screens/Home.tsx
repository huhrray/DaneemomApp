import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Main';
import Shop from './Shop';
import Community from './Community';

const Tab = createBottomTabNavigator();


const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Community" component={Community} />
    </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})
