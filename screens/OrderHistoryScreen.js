import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

function OrderHistoryScreen({navigation}) {

    return(

<View style={styles.screen}>

    <View style={styles.topcontainer}>

        <View style={styles.iconcontainer}>

            <View style={styles.backicon}>
                   <MaterialCommunityIcons.Button name='arrow-left-bold-circle-outline' size={40} color='white' backgroundColor={Colors.primary} onPress={() => navigation.goBack()} />
            </View>

            <View style={styles.foodicon}>
                   <MaterialCommunityIcons name='food' size={90} color='white' backgroundColor={Colors.primary}/>
            </View>

            <View style={styles.fakeicon}>
            </View>

        </View>
        
        <View >
          <Text  style={styles.text}> Order History </Text>
        </View>

    </View> 
</View>
    );

};

const styles= StyleSheet.create({
        
    iconcontainer : {
        flexDirection : 'row',
        backgroundColor: Colors.primary,
        justifyContent : 'space-between'

    },
      
        backicon : {
        flex : 1,
        marginTop : '8%',
        marginLeft : '2%'
        },

        foodicon:{
            flex : 1,
            marginTop : '8%',
            marginLeft : '6%'
        },

         fakeicon : {
            flex : 1,
            },

         text :{
            width:'100%',
            textAlign :'center',
            fontFamily: 'Roboto',
            fontSize:22,
            fontWeight: 'bold',
            color:'white',

          },

          topcontainer : {
            backgroundColor: Colors.primary,
    
        },

        screen : {
            flex: 1
        }
     

});

export default OrderHistoryScreen;