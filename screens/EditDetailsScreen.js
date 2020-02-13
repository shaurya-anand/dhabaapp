import React from 'react';
import {StyleSheet,View,Text,TextInput, Button,Keyboard, TouchableWithoutFeedback} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



function InputDetailsScreen({navigation}){
    
   return(
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.screen}>
        <View style={styles.namecontainer}>
               <Text style={styles.text}>Name :</Text>
               <TextInput style={styles.inputcontainer}/>
        </View >
    
        <View style={styles.addresscontainer}>
               <Text style={styles.text}>Address :</Text>
               <TextInput style={styles.inputcontainer}/>
        </View>
        <View style={styles.buttoncontainer}>
        <MaterialCommunityIcons.Button name='arrow-right-bold-circle-outline' size={60} color='white' backgroundColor={Colors.primary} onPress={() => navigation.navigate('HomeScreen')}/>
        </View>
    </View>
    </TouchableWithoutFeedback>
   );

};

const styles= StyleSheet.create({
    screen :
    {
     flex :1,
     backgroundColor : Colors.primary
    },

    namecontainer :{
        marginTop: 350,
        flexDirection : 'row',
        justifyContent:"space-around"

    },

    addresscontainer :{
        marginTop: 20,
        flexDirection : 'row',
        justifyContent:"space-around"

    },

    inputcontainer : {
        paddingHorizontal:5,
        backgroundColor:'white',
        borderRadius : 10,
        borderColor: 'white',
        borderWidth:1,
        width:'50%',
        height: 50,
        elevation:1
    },

    text :{
        fontFamily : 'Roboto',
        fontSize : 20,
        fontWeight :'bold',
        color:'white'
    },

    buttoncontainer :{
        position:'absolute',
        bottom:50,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }


});

export default InputDetailsScreen;