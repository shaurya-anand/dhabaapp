import React from 'react';
import {StyleSheet,View,Text, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function OrderConfirmedScreen({navigation}){

    return(
    <View style={styles.screen}>
        
        <View style={styles.smiley}>
        <MaterialCommunityIcons.Button name='emoticon-tongue' size={180} color={Colors.primary} backgroundColor='white' />
        </View>

        <View >
            <Text style={styles.text}>Order confirmed!</Text>
        </View>


        <View style={styles.buttoncontainer}>
        <MaterialCommunityIcons.Button name='arrow-left-bold-circle-outline' size={60} color={Colors.primary} backgroundColor='white' onPress={() => navigation.navigate('HomeScreen')}/>
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
        backgroundColor: 'white'
   },

    smiley: {
        marginTop:110,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    
    buttoncontainer :{
        position:'absolute',
        bottom:50,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }

});

export default OrderConfirmedScreen;