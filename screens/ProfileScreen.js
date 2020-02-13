import React from 'react';
import {StyleSheet,View,Text, Button} from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function ProfileScreen({navigation}) {

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

      <View>
          <Text style={styles.text}> Name : </Text>
          <Text style={styles.text}> Address : </Text>
      </View>

      <View style={styles.editbutton}>
          <Button title="Edit details" color={Colors.primary} onPress={() => navigation.navigate('EditDetailsScreen')} />
      </View>

  </View>
  );
};

const styles= StyleSheet.create({

 backicon : {
    marginTop: 40,
    marginLeft: 5
    },

 usericon:{
       alignItems:'center',
       backgroundColor: Colors.primary
    },

 text :{
    marginTop:50,
    marginLeft:10,
    fontFamily : 'Roboto',
    fontSize : 20,
    fontWeight :'bold',
    color: 'black'
  },

 editbutton :{
     flexDirection: 'row',
     position: 'absolute',
     bottom: 50,
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
  }

});

export default ProfileScreen;