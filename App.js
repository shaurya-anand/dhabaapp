import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopMenuBar from './components/TopMenuBar';
import BottomBar from './components/BottomBar';
import InputDetailsScreen from './screens/InputDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderConfirmedScreen from './screens/OrderConfirmedScreen';
import EditDetailsScreen from './screens/EditDetailsScreen';

const Stack= createStackNavigator();

export default function App()
  //comment
{
  return (
    <NavigationContainer>

    <Stack.Navigator headerMode='none'>
    <Stack.Screen name='LoginScreen' component={LoginScreen}/>
    <Stack.Screen name='InputDetailsScreen' component={InputDetailsScreen}/>
    <Stack.Screen name='HomeScreen' component={HomeScreen}/>
    <Stack.Screen name='OrderHistoryScreen' component={OrderHistoryScreen}/>
    <Stack.Screen name='CartScreen' component={CartScreen}/>
    <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
    <Stack.Screen name='OrderConfirmedScreen' component={OrderConfirmedScreen}/>
    <Stack.Screen name='EditDetailsScreen' component={EditDetailsScreen}/>
    </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  
});
