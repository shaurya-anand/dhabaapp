import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function OrderHistoryScreen({navigation}) {

    return(
     <View>

        <View style={styles.topcontainer}>

        <View style={styles.backicon}>
        <MaterialCommunityIcons.Button name='arrow-left-bold-circle-outline' size={40} color='white' backgroundColor={Colors.primary} onPress={() => navigation.goBack()} />
        </View>

        <View style={styles.foodicon}>
        <MaterialCommunityIcons name='food' size={90} color='white' backgroundColor={Colors.primary}/>
        </View>

        </View>
        
        <View>
          <Text  style={styles.text}> Order History </Text>
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
            paddingLeft:85,
            paddingTop : 20
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
     

});

export default OrderHistoryScreen;