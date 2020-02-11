import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function BottomBar({navigation}){
  return(
    <View style={styles.container}>
        <MaterialCommunityIcons.Button name='history' size={40} color='white' backgroundColor={Colors.primary} onPress={() => navigation.navigate('OrderHistoryScreen')}/>
        <MaterialCommunityIcons.Button name='arrow-right-bold-circle-outline' size={40} color='white' backgroundColor={Colors.primary}/>
        <MaterialCommunityIcons.Button name='account' size={40} color='white' backgroundColor={Colors.primary}/>
    </View>
  );
};

const styles= StyleSheet.create({

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

export default BottomBar;