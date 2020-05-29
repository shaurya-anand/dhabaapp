import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

function InitialScreen({navigation}){

    
const readData = async () => {
    try {
      const Number = await AsyncStorage.getItem('storeNumber')
      const Name = await AsyncStorage.getItem('storeName')
      const Address = await AsyncStorage.getItem('storeAddress')
  
      if (Number !== null && Name !== null && Address !== null) {
        navigation.replace('HomeScreen');
      }

      else 
      {
        navigation.replace('LoginScreen')
      }
    } 
    catch (e) {
        navigation.replace('LoginScreen')
    }
  }
  
  useEffect(() => {
     readData()
  },[])


    return(<View style={styles.initialBackground}></View>)

}


const styles = StyleSheet.create({
  
    initialBackground : {
      flex : 1,
      backgroundColor : '#FF0E4D',
    }
    });

export default InitialScreen