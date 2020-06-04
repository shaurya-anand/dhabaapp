import React, {useState, useEffect} from 'react';
import {StyleSheet,View,Text, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

function LogoutScreen({navigation}){

    const readData = async () => {
        try {
          await AsyncStorage.setItem('storeIsLoggedIn', 'false')
          alert('Logged Out Successfully')
        } 
        catch (e) {
          alert('Error. Kindly restart app to try again.')
        }
      }
      
      useEffect(() => {
         readData()
      },[])
    


    return(
    <View style={styles.screen}>
        
        <View style={styles.smiley}>
        <MaterialCommunityIcons name='emoticon-tongue' size={180} color={Colors.primary} backgroundColor='white' />
        </View>

        <View style = {styles.container}>
            <Text style={styles.text}>Have a nice day !</Text>
        </View>

   </View>
    );
};

const styles= StyleSheet.create({

    screen: {

        flex:1,
        backgroundColor:'white'

    },
    

    text: {
        marginTop: 140,
        width:'100%',
        textAlign :'center',
        fontFamily: 'Roboto',
        fontSize:40,
        fontWeight: 'bold',
        color: Colors.primary,
        backgroundColor: 'white',
        flexWrap : 'wrap'
   },

    smiley: {
        position : 'absolute',
        top :'20%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    
    container :{
        position:'absolute',
        top : '50%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }

});

export default LogoutScreen;