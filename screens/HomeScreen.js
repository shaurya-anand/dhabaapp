import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Colors from '../constants/Colors';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function HomeScreen({navigation}){

    return(
    <View style={styles.screen}>
     <View style={styles.bar}>
        <Text style={styles.text}>Menu</Text>
    </View>

    <View style={styles.container}>
        <MaterialCommunityIcons.Button name='history' size={40} color='white' backgroundColor={Colors.primary} onPress={() => navigation.navigate('OrderHistoryScreen')}/>
        <MaterialCommunityIcons.Button name='arrow-right-bold-circle-outline' size={40} color='white' backgroundColor={Colors.primary} onPress={() => navigation.navigate('CartScreen')}/>
        <MaterialCommunityIcons.Button name='account' size={40} color='white' backgroundColor={Colors.primary} onPress={() => navigation.navigate('ProfileScreen')}/>
    </View>

     </View>
    );

};

const styles= StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff'
      },

      bar :{
        height : '12%',
        width : '100%',
        backgroundColor : Colors.primary,
        justifyContent : 'center',
        alignItems : 'center'
    
        },
    
        text : {
            fontSize : 26,
            fontFamily : 'Roboto',
            color : 'white',
            fontWeight : 'bold',
            paddingTop: 30
            
        },

        container : {
            flexDirection : 'row',
            width:'100%',
            height:'8%',
            backgroundColor : Colors.primary,
            position: 'absolute',
            bottom:0,
            justifyContent:'space-between',
            paddingHorizontal: 20
        }

});

export default HomeScreen;