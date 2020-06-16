import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '../firebase'

function InitialScreen({navigation}){

    
const readData = async () => {
    try {

      firebase.auth().onAuthStateChanged(async function(user) {
        if (user) {
          // User is signed in.
            const isLoggedIn = await AsyncStorage.getItem('storeIsLoggedIn')
            const Number = await AsyncStorage.getItem('storeNumber')
            const Name = await AsyncStorage.getItem('storeName')
            const Address = await AsyncStorage.getItem('storeAddress')
        
            if ( isLoggedIn == 'true' && Number !== null && Name !== null && Address !== null) {
              navigation.replace('HomeScreen');
            }

            else if ( isLoggedIn == 'true' && Number !== null && Name == null && Address == null)
            {
              navigation.replace('InputDetailsScreen');
            }

        } else {
          // No user is signed in.
          navigation.replace('LoginScreen')
        }
      });

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

