import React, {useState, useEffect} from 'react';
import {StyleSheet,View,Text, Button, Alert} from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux'
import {clear_cart} from '../redux/actions'
import store from '../redux/store'
import AsyncStorage from '@react-native-community/async-storage';

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
      <MaterialCommunityIcons name='account' size={100} color='white' backgroundColor={Colors.primary}/>
      </View>

      </View>

      <View style={styles.nameContainer}>
                <Text style={styles.nametext}> {name} </Text>
      </View>

      <View style={styles.numberContainer}>
                <Text style={styles.numbertext}> {number} </Text>         
      </View>

      <View style={styles.addressContainer}>
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
    marginTop: '10%',
    marginLeft: '2%'
    },

 usericon:{
       alignItems:'center',
       backgroundColor: Colors.primary
    },

 descriptiontext :{
    fontFamily : 'Roboto',
    fontSize : 18,
    color: 'black',
    fontWeight :'bold',
  },

  numbertext :{
    fontFamily : 'Roboto',
    fontSize : 20,
    fontWeight :'bold',
    color: Colors.primary,
    
  },

  addresstext :{
    fontFamily : 'Roboto',
    fontSize : 16,
    fontWeight :'bold',
    color: Colors.primary,
    marginHorizontal : 5,
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
    bottom: '6%',
  
},

topcontainer : {
    backgroundColor : Colors.primary
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
    
  marginTop : '22%',
  width:'100%',
  flexDirection : 'row',
  justifyContent:"center",
  flexWrap : 'wrap'
},

addressContainer :{
    
    marginTop : '13%',
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