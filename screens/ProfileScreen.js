import React, {useState, useEffect} from 'react';
import {StyleSheet,View,Text, Button} from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux'
import store from '../redux/store'

function ProfileScreen({navigation}) {
   
    const name = useSelector(state => state.name)
    const address = useSelector(state => state.address)
    const number = useSelector(state => state.phone_number)

    return(
  <View style={styles.screen}>
      <View style={styles.topcontainer}>

       <View style={styles.backicon}>
          <MaterialCommunityIcons.Button name='arrow-left-bold-circle-outline' size={40} color='white' backgroundColor={Colors.primary} onPress={() => navigation.goBack()}/>
      </View>
      
      <View style={styles.usericon}>
      <MaterialCommunityIcons name='account' size={110} color='white' backgroundColor={Colors.primary}/>
      </View>

      </View>

      <View style={styles.nameContainer}>
                <Text style={styles.nametext}>{name}</Text>
      </View>

      <View style={styles.numberContainer}>
                <Text style={styles.descriptiontext}>Contact number  ~  </Text> 
                <Text style={styles.numbertext}>{number}</Text>         
      </View>

      <View style={styles.addressContainer}>
                <Text style={styles.descriptiontext}>- Address -</Text>         
      </View>

      <View style={styles.addressValueContainer}>
                <Text style={styles.addresstext}>{address}</Text>         
      </View>

     
      <View style={styles.editbutton}>
          <Button title="Edit details" color={Colors.primary} onPress={() => navigation.navigate('EditDetailsScreen')} />
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
    fontSize : 19,
    fontWeight :'bold',
    color: Colors.primary
    
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

 editbutton :{
     flexDirection: 'row',
     position: 'absolute',
     bottom: '6%',
     width:'100%',
     justifyContent:'center',
     alignItems :'center'
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
    
  marginTop : '25%',
  width:'100%',
  flexDirection : 'row',
  justifyContent:"center",
  flexWrap : 'wrap'
},

addressContainer :{
    
    marginTop : '15%',
    width:'100%',
    flexDirection : 'row',
    justifyContent:"center",
    flexWrap : 'wrap'
},

addressValueContainer :{
    
    marginTop : '3%',
    width:'100%',
    flexDirection : 'row',
    justifyContent:"space-around",
    flexWrap : 'wrap'
}

});

export default ProfileScreen;