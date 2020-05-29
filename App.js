import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React,{useState, useEffect} from 'react';
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
import {Provider} from 'react-redux';
import store from './redux/store'
import { StackActions, NavigationActions } from 'react-navigation'
import AsyncStorage from '@react-native-community/async-storage';

const Stack= createStackNavigator();

function App() {

const [userNumber, setUserNumber] = useState('')

const readData = async () => {
  try {
    const Number = await AsyncStorage.getItem('storeNumber')
    const Name = await AsyncStorage.getItem('storeName')
    const Address = await AsyncStorage.getItem('storeAddress')

    if (Number !== null && Name !== null && Address !== null) {
      setUserNumber(Number)
    }
  } catch (e) {
    setUserNumber('')
  }
}

useEffect(() => {
  readData()
}, [])


  return (

    <Provider store={store}>

    <NavigationContainer>
     
   
    <Stack.Navigator headerMode='none' initialRouteName={[ (userNumber == '') ? 'LoginScreen' : 'HomeScreen']}>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='InputDetailsScreen' component={InputDetailsScreen}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='OrderHistoryScreen' component={OrderHistoryScreen}/>
        <Stack.Screen name='CartScreen' component={CartScreen}/>
        <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
        <Stack.Screen name='EditDetailsScreen' component={EditDetailsScreen}/>
        <Stack.Screen name='OrderConfirmedScreen' component={OrderConfirmedScreen}/>
    </Stack.Navigator>

    </NavigationContainer>

    </Provider>

  );
}

const styles = StyleSheet.create({
  
});

export default App;
