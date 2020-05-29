import React, {useState} from 'react';
import {StyleSheet,View,Text,TextInput, Button,Keyboard, TouchableWithoutFeedback} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {AddName, AddAddress, AddPhoneNumber} from '../redux/actions'
import store from '../redux/store'
import {useSelector, useDispatch} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'



function EditDetailsScreen({navigation}){
    
    const dispatch = useDispatch()

    const[enteredName, setEnteredName] = useState('');
    const[enteredAddress, setEnteredAddress] = useState('');
    const[enteredNumber, setEnteredNumber] = useState('');

    const nameInputHandler = inputText => {
        setEnteredName(inputText);
     };

    const numberInputHandler = inputText => {
        setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
     };  

    const addressInputHandler = inputText => {
        setEnteredAddress(inputText);
     };

    const saveData = async () => {
        try {
          await AsyncStorage.setItem('storeName', enteredName)
          await AsyncStorage.setItem('storeAddress', enteredAddress)
          await AsyncStorage.setItem('storeNumber', enteredNumber)
        } catch (e) {
        alert('Unable to update locally for future use')
        }
      }
    

    const onClickHandler = () => {
         
        if(enteredName.length > 0 && enteredAddress.length > 0 && enteredNumber.length == 10)
        {
          dispatch(AddName(enteredName))
          dispatch(AddAddress(enteredAddress))
          dispatch(AddPhoneNumber(enteredNumber))
          saveData(enteredName, enteredAddress, enteredNumber)
          navigation.goBack()
        }
  
        else
        {
        alert("Can't leave any field blank or 10 digit number required");
        }
             }
    
   return(
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.screen}>
        <View style={styles.namecontainer}>
               <Text style={styles.text}>Name  :   </Text>
               <TextInput style={styles.inputcontainer} onChangeText={nameInputHandler}
                value={enteredName}/>
        </View >
 
        <View style={styles.phonenumbercontainer}>
               <Text style={styles.text}>Number : </Text>
               <TextInput style={styles.inputcontainer} keyboardType = 'numeric' maxLength={10}  onChangeText={numberInputHandler}
                value={enteredNumber}/>
        </View >
    
        <View style={styles.addresscontainer}>
               <Text style={styles.text}>Address  :</Text>
               <TextInput style={styles.inputcontainer} onChangeText={addressInputHandler}
                value={enteredAddress}/>
        </View>
        <View style={styles.buttoncontainer}>
        <MaterialCommunityIcons.Button name='arrow-right-bold-circle-outline' size={60} color='white' backgroundColor={Colors.primary} onPress={() => onClickHandler() }/>
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
        position:'absolute',
        bottom: "65%",
        width:'100%',
        flexDirection : 'row',
        justifyContent:"space-around"

    },

    
    phonenumbercontainer :{
        position:'absolute',
        bottom: "50%",
        width:'100%',
        flexDirection : 'row',
        justifyContent:"space-around"

    },

    addresscontainer :{

        position:'absolute',
        bottom: '35%',
        width:'100%',
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
        elevation:1,
        textAlign:'center'
    },

    text :{
        fontFamily : 'Roboto',
        fontSize : 20,
        fontWeight :'bold',
        color:'white'
    },

    buttoncontainer :{
        position:'absolute',
        bottom:'6%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }


});

export default EditDetailsScreen;