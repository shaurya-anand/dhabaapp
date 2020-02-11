import React from 'react';
import {StyleSheet,View,Text, Button} from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


function CartScreen({navigation}){

    return(
        <View style={styles.screen}>

        <View style={styles.topcontainer}>

        <View style={styles.backicon}>
        <MaterialCommunityIcons.Button name='arrow-left-bold-circle-outline' size={40} color='white' backgroundColor={Colors.primary} onPress={() => navigation.goBack()}/>
        </View>

        <View style={styles.foodicon}>
        <MaterialCommunityIcons name='silverware-fork-knife' size={50} color='white' backgroundColor={Colors.primary}/>
        </View>

        </View>
        
        <View>
          <Text  style={styles.text}> Your Plate </Text>
        </View>

        <View style={styles.confirmbutton}>
          <Button title="Confirm Order" color={Colors.primary} />
        </View>


    </View> 
    );

};

const styles= StyleSheet.create({
 
    topcontainer : {
        flexDirection : 'row',
        backgroundColor: Colors.primary

    },
      
        backicon : {
        marginTop: 40,
        marginLeft:5
        },

        foodicon:{
            paddingLeft:100,
            paddingTop : 40
         },

         text :{
            width:'100%',
            textAlign :'center',
            fontFamily: 'Roboto',
            fontSize:22,
            fontWeight: 'bold',
            color:'white',
            backgroundColor:Colors.primary

          },

          confirmbutton :{
            position: 'absolute',
            width: '100%',
            bottom:50,
            justifyContent:'center',
            alignItems :'center'
       },

       screen: {
        flex: 1,
        backgroundColor: '#fff'
      }
});

export default CartScreen;