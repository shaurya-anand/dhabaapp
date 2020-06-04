import React, {useState} from 'react';
import {StyleSheet,View,Text,TextInput, Button,Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
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
    <ScrollView style = {styles.screen} keyboardShouldPersistTaps='always'>

    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <View style = { styles.screen}>

        <View style={styles.namecontainer}>
               <Text style={styles.text}>Name</Text>
        </View >
               
        <TextInput style={styles.nameinputcontainer} onChangeText={nameInputHandler}
                value={enteredName}/>

        <View style={styles.numbercontainer}>
               <Text style={styles.text}>Contact Number</Text>
         </View >

         <TextInput style={styles.numberinputcontainer} keyboardType = 'numeric' maxLength={10}  onChangeText={numberInputHandler}
                value={enteredNumber}/>
        
        
         <View style={styles.addresscontainer}>
               <Text style={styles.text}>Address</Text>
        </View>
               
        <TextInput style={styles.addressinputcontainer} onChangeText={addressInputHandler}
                value={enteredAddress}/>

        
        <View style={styles.buttoncontainer}>
        <MaterialCommunityIcons.Button name='arrow-right-bold-circle-outline' size={60} color='white' backgroundColor={Colors.primary} onPress={() => onClickHandler() }/>
        </View>

    </View>
    </TouchableWithoutFeedback>

    </ScrollView>
 

    

   );

};

const styles= StyleSheet.create({
    screen :
    {
     flex :1,
     backgroundColor : Colors.primary
    },
    
    namecontainer :{
        marginTop : '20%',
        width:'100%',
        justifyContent: 'center',
        alignItems : 'center'

    },

    numbercontainer :{
        marginTop : '20%',
        width:'100%',
        justifyContent: 'center',
        alignItems : 'center'

    },

    addresscontainer :{

        marginTop : '20%',
        width:'100%',
        justifyContent: 'center',
        alignItems : 'center'

    },

    nameinputcontainer : {
        paddingHorizontal:5,
        backgroundColor:'white',
        borderRadius : 10,
        borderColor: 'white',
        borderWidth:1,
        width:'50%',
        height: 50,
        elevation:1,
        textAlign:'center',
        marginHorizontal : '25%',
        marginTop : '5%'
    },

    numberinputcontainer : {
        paddingHorizontal:5,
        backgroundColor:'white',
        borderRadius : 10,
        borderColor: 'white',
        borderWidth:1,
        width:'60%',
        height: 50,
        elevation:1,
        textAlign:'center',
        marginHorizontal : '20%',
        marginTop : '5%'
    },

    addressinputcontainer : {
        paddingHorizontal:5,
        backgroundColor:'white',
        borderRadius : 10,
        borderColor: 'white',
        borderWidth:1,
        width:'70%',
        height: 50,
        elevation:1,
        textAlign:'center',
        marginHorizontal : '15%',
        marginTop : '5%'
    },

    text :{
        fontFamily : 'Roboto',
        fontSize : 22,
        fontWeight :'bold',
        color:'white'
    },

    buttoncontainer :{
        marginTop : '10%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }


});

export default EditDetailsScreen;