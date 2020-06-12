import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet,View,Text,TextInput, Button,Keyboard, TouchableWithoutFeedback, Alert, ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {AddphoneNumber} from '../redux/actions'
import store from '../redux/store'
import {useSelector, useDispatch} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import firebase from '../firebase'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';


function LoginScreen({navigation}){

    const dispatch = useDispatch()

    const[phoneNumber, setPhoneNumber] = useState('');
    const[code, setCode] = useState('')
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    const phoneNumberInputhandler = inputText => {
        setPhoneNumber(inputText.replace(/[^0-9]/g, ''));
     };  

    const codeInputhandler = inputText => {
        setCode(inputText.replace(/[^0-9]/g, ''));
     }; 

    const saveData = async () => {
        try {
          await AsyncStorage.setItem('storeNumber', phoneNumber)
          await AsyncStorage.setItem('storeAuthNumber', '+91'+ phoneNumber)
          await AsyncStorage.setItem('storeIsLoggedIn', 'true')
          
        } catch (e) {
        alert('Unable to store locally for future use')
        }
      }
    
      const sendVerification = async  () => {
        try{
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        await phoneProvider
          .verifyPhoneNumber('+91'+ phoneNumber, recaptchaVerifier.current)
          .then(setVerificationId);

            Alert.alert(  
            'Code sent',  
            'Kindly wait for 10 seconds before resending or try a different number.',  
             [  
              { text: 'Ok', style: 'cancel'  },  
             
             ],
  
              { cancelable: true } 
              );
        }

        catch(e) {
            alert('Unable to send request. Kindly check internet connection or try again later.')
        }
      };

      const confirmCode = async () => {

        try{
          const credential = firebase.auth.PhoneAuthProvider.credential(
          verificationId,
          code
        );

        await firebase
          .auth()
          .signInWithCredential(credential)
          .then((result) => {
            // Do something with the results here
          saveData(phoneNumber);
          navigation.replace('InputDetailsScreen');

          });

        }

        catch(e) {
            alert('Wrong OTP')
        }
      }
    

    const onClickHandler = () => {
         
    
      if(phoneNumber.length == 10)
      {
        sendVerification()
        setPhoneNumber(phoneNumber)
        }

      else
      {
      alert('Please input a valid 10 digit phone number');
      }
        }
  
     return(
    <View style = {styles.screen}>
    <ScrollView contentContainerStyle= {{flexGrow : 1}} keyboardShouldPersistTaps='always'>
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <View style = { styles.screen}>
        <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebase.app().options}/>

        <View style = {styles.hellocontainer}>
              <Text style={styles.hellotext}>Hello!</Text>
        </View> 
     
        <View style = {styles.requestnumbercontainer}>
        <Text style={styles.requesttext}>Please enter 10 digit phone number</Text>
        </View>
        
        <View style = {styles.inputnumbercontainer} >
        <TextInput style={styles.numberinput} keyboardType = 'numeric' maxLength={13} placeholder="_ _ _ _ _ _ _ _ _ _"  onChangeText={phoneNumberInputhandler}
                value={phoneNumber}    />
        </View>

        <View style={styles.sendcodebutton}>
        <Button title='  SEND CODE  ' color={'black'} onPress={() => onClickHandler()}/>
        </View> 
        
         <View style = {styles.requestcodecontainer}>
        <Text style={styles.requesttext}>Enter the code sent via SMS</Text>
        </View>

         <View style={styles.inputcodecontainer}>
                <TextInput style={styles.codeinput} keyboardType = 'numeric' maxLength={10} placeholder="Code"  onChangeText={codeInputhandler}
                value={code}    />
         </View>

         <View style={styles.buttoncontainer}>
         <MaterialCommunityIcons.Button name='arrow-right-bold-circle-outline' size={60} color='white' backgroundColor={Colors.primary}  onPress={confirmCode}/>
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
      flex : 1,
     backgroundColor : Colors.primary,
    },

    keyboardstyle : 
    {
        flex : 1
    },

    hellocontainer :{
        marginTop : 50,
        width:'100%',
        justifyContent: "center",
        alignItems : 'center',
        elevation: 5

    },

    requestnumbercontainer :{
        marginTop : 70,
        width:'100%',
        justifyContent:"space-around",
        alignItems : 'center'

    },
    
    inputnumbercontainer : {
      marginTop : 20,
      width:'100%',
      justifyContent:"space-around",
      alignItems : 'center'

    },

    sendcodebutton :{
        marginTop : 10,
        width: '100%',
        justifyContent:'center',
        alignItems : 'center',
        elevation : 10
    
   },

    requestcodecontainer :{
      marginTop : 70,
      width:'100%',
      justifyContent:"space-around",
      alignItems : 'center'

    },

    inputcodecontainer : {
      marginTop : 20,
      width:'100%',
      justifyContent:"space-around",
      alignItems : 'center'

    },

    numberinput : {
        paddingHorizontal:5,
        backgroundColor:'white',
        borderRadius : 10,
        borderColor: 'white',
        borderWidth:1,
        width:'50%',
        height: 50,
        textAlign:'center',
        
    }, 

    codeinput : {
        paddingHorizontal:5,
        backgroundColor:'white',
        borderRadius : 10,
        borderColor: 'white',
        borderWidth:1,
        width:'30%',
        height: 50,
        textAlign:'center',
        
    }, 

    requesttext :{
        fontFamily : 'Roboto',
        fontSize : 20,
        fontWeight :'bold',
        color:'white',
        textAlign : 'center',
        flexWrap: 'wrap'
        
    },

    hellotext :{
        fontFamily : 'Roboto',
        fontSize : 50,
        fontWeight :'bold',
        color:'white',
        textAlign : 'center',
    },


    buttoncontainer :{
        marginTop : 10,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    }

});

export default LoginScreen;