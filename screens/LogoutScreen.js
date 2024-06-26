import React, {useState, useEffect} from 'react';
import {StyleSheet,View,Text, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '../firebase'

function LogoutScreen({navigation}){

    const readData = async () => {
        try {
          
          setTimeout(async function(){
              firebase.auth().signOut()
              await AsyncStorage.setItem('storeIsLoggedIn', 'false') }, 1000); 
          
        } 
        catch (e) {
          alert('Error logging out. Kindly restart app and try again.')
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
        fontSize:38,
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