import React, {useState, useEffect} from 'react';
import {StyleSheet,View,Text,TextInput, Button,Keyboard, TouchableWithoutFeedback, Alert,  KeyboardAvoidingView} from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {AddPhoneNumber} from '../redux/actions'
import store from '../redux/store'
import {useSelector, useDispatch} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';


function LoginScreen({navigation}){

    const dispatch = useDispatch()

    const[enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
     };  

    const saveData = async () => {
        try {
          await AsyncStorage.setItem('storeNumber', enteredValue)
        } catch (e) {
        alert('Unable to store locally for future use')
        }
      }
    

    const onClickHandler = () => {
         
    
      if(enteredValue.length == 10)
      {
        dispatch(AddPhoneNumber(enteredValue));
        saveData(enteredValue)
        navigation.replace('InputDetailsScreen');
      }

      else
      {
      alert('Please input a valid 10 digit phone number');
      }
        }
  
     return(
    <KeyboardAvoidingView  behavior="height" style={styles.keyboardstyle}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
     <View style={styles.screen}>

         <View style={styles.hellocontainer}>
                <Text style={styles.hellotext}>Hello!</Text>
         </View >
     
         <View style={styles.requestcontainer}>
                <Text style={styles.text}>Please enter phone number</Text>
         </View>

         <View style={styles.inputcontainer}>
                <TextInput style={styles.input} keyboardType = 'numeric' maxLength={10}  onChangeText={numberInputHandler}
                value={enteredValue}    />
         </View>

         <View style={styles.buttoncontainer}>
         <MaterialCommunityIcons.Button name='arrow-right-bold-circle-outline' size={60} color='white' backgroundColor={Colors.primary} onPress={() => onClickHandler()}/>
         </View>

     </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

    );
};

const styles= StyleSheet.create({

    screen :
    {
     flex :1,
     backgroundColor : Colors.primary
    },

    keyboardstyle : 
    {
        flex : 1
    },

    hellocontainer :{
        position:'absolute',
        bottom : '65%',
        width:'100%',
        flexDirection : 'row',
        justifyContent:"space-around",
        elevation: 5

    },

    requestcontainer :{
        position:'absolute',
        bottom:'40%',
        width:'100%',
        flexDirection : 'row',
        justifyContent:"space-around"

    },
    
    inputcontainer : {
        position:'absolute',
        bottom: '28%',
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
        bottom: '6%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }

});

export default LoginScreen;