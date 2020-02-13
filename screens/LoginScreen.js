import React, {useState} from 'react';
import {StyleSheet,View,Text,TextInput, Button,Keyboard, TouchableWithoutFeedback} from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


function LoginScreen({navigation}){
    
    const[enteredValue, setEnteredValue] = useState('');
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
     };
  
     return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <View style={styles.screen}>
         <View style={styles.hellocontainer}>
                <Text style={styles.hellotext}>Hello!</Text>
         </View >
     
         <View style={styles.requestcontainer}>
                <Text style={styles.text}>Please enter your phone number</Text>
         </View>
         <View style={styles.inputcontainer}>
                <TextInput style={styles.input} keyboardType = 'numeric' maxLength={10}  onChangeText={numberInputHandler}
                value={enteredValue}    />
         </View>
         <View style={styles.buttoncontainer}>
         <MaterialCommunityIcons.Button name='arrow-right-bold-circle-outline' size={60} color='white' backgroundColor={Colors.primary} onPress={() => navigation.navigate('InputDetailsScreen')}/>
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

    hellocontainer :{
        marginTop: 150,
        flexDirection : 'row',
        justifyContent:"space-around"

    },

    requestcontainer :{
        position:'absolute',
        bottom:300,
        width:'100%',
        flexDirection : 'row',
        justifyContent:"space-around",
        marginBottom :50

    },
    
    inputcontainer : {
        position:'absolute',
        bottom:250,
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-around'

    },

    input : {
        paddingHorizontal:5,
        backgroundColor:'white',
        borderRadius : 10,
        borderColor: 'white',
        borderWidth:1,
        width:'50%',
        height: 50,
        elevation:1,
        textAlign:'center',
        
    }, 

    text :{
        fontFamily : 'Roboto',
        fontSize : 20,
        fontWeight :'bold',
        color:'white'
    },

    hellotext :{
        fontFamily : 'Roboto',
        fontSize : 50,
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

export default LoginScreen;