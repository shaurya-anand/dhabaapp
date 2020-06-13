import React, {useState, useEffect} from 'react';
import {StyleSheet,View,Text, Button, Alert} from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux'
import {clear_cart} from '../redux/actions'
import store from '../redux/store'
import AsyncStorage from '@react-native-community/async-storage';
import { FontAwesome } from '@expo/vector-icons';

function ProfileScreen({navigation}) {
    
    const dispatch = useDispatch()
   
    const name = useSelector(state => state.name)
    const address = useSelector(state => state.address)
    const number = useSelector(state => state.phone_number)

    const logout =  () => {
      Alert.alert(  
        'Are you sure?',  
        'Confirm Logout',  
         [  
          { text: 'No', onPress: () => {},  style: 'cancel',  },  
          { text: 'Yes', onPress: () => {  redirect()    }              },  
         ],

          { cancelable: true } 
          );  
     
    }

    const redirect = () => {
      navigation.reset({
        index: 0,
         routes: [{ name: 'LogoutScreen' }],
       });
       dispatch(clear_cart())
    }


    return(
  <View style={styles.screen}>
      <View style={styles.topcontainer}>

       <View style={styles.backicon}>
          <MaterialCommunityIcons.Button name='arrow-left-bold-circle-outline' size={40} color='white' backgroundColor={Colors.primary} onPress={() => navigation.goBack()}/>
      </View>
      
      <View style={styles.usericon}>
      <MaterialCommunityIcons name='account' size={105} color='white' backgroundColor={Colors.primary}/>
      </View>

      <View style={styles.editButton}>
      </View>

      </View>

      <View style={styles.nameContainer}>
                <Text style={styles.nametext}> {name} </Text>
      </View>

      <View style={styles.phoneIconContainer}>
      <FontAwesome name="phone-square" size={27} color="black" />
      {/* <MaterialCommunityIcons name="phone" size={32} color="black" />        */}
      </View>

      <View style={styles.numberContainer}>
                <Text style={styles.numbertext}> {number} </Text>         
      </View>

      <View style={styles.addressIconContainer}>
      <MaterialCommunityIcons name="home-heart" size={38} color="black" />       
      </View>

      <View style={styles.addressValueContainer}>
                <Text style={styles.addresstext}> {address} </Text>         
      </View>

      <View style={styles.buttonContainer}>
          <Button title="   Logout   " color = 'red' onPress={() => logout() } />
          <Button title="Edit details" color='black' onPress={() => navigation.navigate('EditDetailsScreen')} />
      </View>

  </View>
  );
};

const styles= StyleSheet.create({

 backicon : {
    marginTop : '8%',
    flex : 1,
    paddingLeft :'2%'
    },

 usericon:{
       paddingTop : 50,
       flex : 1,
       backgroundColor: Colors.primary,
       justifyContent : 'center',
       alignItems : "center"
    },

 editButton : {
    flex :1,
    justifyContent : 'center',
    paddingTop : 50,
    paddingRight : '2%'
 },

 descriptiontext :{
    fontFamily : 'Roboto',
    fontSize : 18,
    color: 'black',
    fontWeight :'bold',
  },

  numbertext :{
    fontFamily : 'Roboto',
    fontSize : 16,
    fontWeight :'bold',
    color: Colors.primary,
    textAlign  : 'center',
    
  },

  addresstext :{
    fontFamily : 'Roboto',
    fontSize : 16,
    fontWeight :'bold',
    color: Colors.primary,
    textAlign  : 'center',
    
  },

  nametext :{
    paddingHorizontal : 10,
    fontFamily : 'Roboto',
    fontSize : 22,
    fontWeight :'bold',
    color: 'white',
    backgroundColor : Colors.primary,
    borderRadius  : 20,
    elevation : 20,
    
  },

buttonContainer :{
    flexDirection: 'row',
    width:'100%',
    justifyContent: "space-around",
    position: 'absolute',
    bottom: '4%',
  
},

topcontainer : {
    backgroundColor : Colors.primary,
    flexDirection : 'row'
},
screen: {
    flex: 1,
    backgroundColor: '#fff'
  },

  nameContainer :{
    marginTop : '10%',
    width:'100%',
    flexDirection : 'row',
    justifyContent:"space-around",
    flexWrap : 'wrap'

},

numberContainer :{
    
  marginTop : '2%',
  width:'100%',
  flexDirection : 'row',
  justifyContent:"center",
  flexWrap : 'wrap'
},

addressIconContainer :{
    
    marginTop : '10%',
    width:'100%',
    flexDirection : 'row',
    justifyContent:"center",
    flexWrap : 'wrap'
},

phoneIconContainer :{
    
  marginTop : '20%',
  width:'100%',
  flexDirection : 'row',
  justifyContent:"center",
  flexWrap : 'wrap'
},


addressValueContainer :{
    
    marginTop : '2%',
    width:'100%',
    flexDirection : 'row',
    justifyContent:"space-around",
    flexWrap : 'wrap'
}

});

export default ProfileScreen;