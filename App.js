import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View ,InteractionManager, Platform} from 'react-native';
import TopMenuBar from './components/TopMenuBar';
import BottomBar from './components/BottomBar';
import InputDetailsScreen from './screens/InputDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderConfirmedScreen from './screens/OrderConfirmedScreen';
import InitialScreen from './screens/InitialScreen';
import EditDetailsScreen from './screens/EditDetailsScreen';
import LogoutScreen from './screens/LogoutScreen';
import {Provider} from 'react-redux';
import store from './redux/store'
import { StackActions, NavigationActions } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage';

const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === "android") {
  // Work around issue `Setting a timer for long time`
  // see: https://github.com/firebase/firebase-js-sdk/issues/97
  const timerFix = {};
  const runTask = (id, fn, ttl, args) => {
    const waitingTime = ttl - Date.now();
    if (waitingTime <= 1) {
      InteractionManager.runAfterInteractions(() => {
        if (!timerFix[id]) {
          return;
        }
        delete timerFix[id];
        fn(...args);
      });
      return;
    }

    const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
    timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
  };

  global.setTimeout = (fn, time, ...args) => {
    if (MAX_TIMER_DURATION_MS < time) {
      const ttl = Date.now() + time;
      const id = "_lt_" + Object.keys(timerFix).length;
      runTask(id, fn, ttl, args);
      return id;
    }
    return _setTimeout(fn, time, ...args);
  };

  global.clearTimeout = id => {
    if (typeof id === "string" && id.startsWith("_lt_")) {
      _clearTimeout(timerFix[id]);
      delete timerFix[id];
      return;
    }
    _clearTimeout(id);
  };
}

const Stack= createStackNavigator();

function App() {

  return(
    <Provider store={store}>
    
    <NavigationContainer>
     
    
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name = 'InitialScreen' component = {InitialScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='InputDetailsScreen' component={InputDetailsScreen}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='OrderHistoryScreen' component={OrderHistoryScreen}/>
        <Stack.Screen name='CartScreen' component={CartScreen}/>
        <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
        <Stack.Screen name='EditDetailsScreen' component={EditDetailsScreen}/>
        <Stack.Screen name='OrderConfirmedScreen' component={OrderConfirmedScreen}/>
        <Stack.Screen name='LogoutScreen' component={LogoutScreen}/>
    </Stack.Navigator>
    
    </NavigationContainer>
    
    </Provider>
    )
}





const styles = StyleSheet.create({

});

export default App;
