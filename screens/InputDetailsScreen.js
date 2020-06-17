import React, {useState} from 'react';
import {StyleSheet,View,Text,TextInput, Button,Keyboard, TouchableWithoutFeedback, ScrollView} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import {AddName, AddAddress} from '../redux/actions'
import store from '../redux/store'
import {useSelector, useDispatch} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';



function InputDetailsScreen({navigation}){
    
    const dispatch = useDispatch()


    const[enteredName, setEnteredName] = useState('');
    const[enteredAddress, setEnteredAddress] = useState('');

    const saveData = async () => {
        try {
          await AsyncStorage.setItem('storeName', enteredName)
          await AsyncStorage.setItem('storeAddress', enteredAddress)
        } catch (e) {
        alert('Unable to store locally for future use')
        }
      }
    

    const nameInputHandler = inputText => {
        setEnteredName(inputText);
     };

     const addressInputHandler = inputText => {
        setEnteredAddress(inputText);
     };
    

    const onClickHandler = () => {
         
        if(enteredName.length > 0 && enteredAddress.length > 0)
        {
          dispatch(AddName(enteredName))
          dispatch(AddAddress(enteredAddress))
          saveData(enteredName, enteredAddress)
          navigation.replace('HomeScreen')
        }
  
        else
        {
        alert("Can't leave any field blank");
        }
             }
    
   return(
   

    <View style = {styles.screen}>
    <ScrollView contentContainerStyle= {{flexGrow : 1}} keyboardShouldPersistTaps='always'>
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <View style = { styles.screen}>

        <View style={styles.namecontainer}>
               <Text style={styles.text}>Name</Text>
        </View >

         <View style={styles.nameinputcontainer}>     
        <TextInput style={styles.nameinput} onChangeText={nameInputHandler}
                value={enteredName}/>
        </View> 
    
        <View style={styles.addresscontainer}>
               <Text style={styles.text}>Address</Text>
        </View>

         <View style={styles.addressinputcontainer}>       
        <TextInput style={styles.addressinput} onChangeText={addressInputHandler}
                value={enteredAddress}/>
        </View>

        <View style={styles.privacyPolicyContainer}>
            <Text style={styles.privacyText} onPress={() => navigation.navigate('PrivacyPolicyScreen') }> Privacy Policy </Text>
        </View>
        
        <View style={styles.buttoncontainer}>
        <MaterialCommunityIcons.Button name='arrow-right-bold-circle-outline' size={60} color='white' backgroundColor={Colors.primary} onPress={() => onClickHandler() }/>
        </View>

    </View>
    </TouchableWithoutFeedback>
    </ScrollView>
    </View>

 
    
    
   );

};

const styles= StyleSheet.create({
    screen :
    {
     flex:1,
     backgroundColor : Colors.primary
    },
    
    namecontainer :{
        marginTop : 120,
        width:'100%',
        justifyContent: 'center',
        alignItems : 'center'

    },

    addresscontainer :{

        marginTop : 100,
        width:'100%',
        justifyContent: 'center',
        alignItems : 'center'

    },

    nameinput : {
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
        
    },

    nameinputcontainer : {
        marginTop : 30
    },

    addressinputcontainer : {
        marginTop : 30
    },

    addressinput : {
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
       
    },

    text :{
        fontFamily : 'Roboto',
        fontSize : 22,
        fontWeight :'bold',
        color:'white'
    },

    buttoncontainer :{
        marginTop : 15,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },

    privacyPolicyContainer :{
        marginTop : 30,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },

    privacyText : {
        color : 'white',
        fontFamily : 'Roboto',
        
    }


});

export default InputDetailsScreen;