import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../constants/Colors';

const topMenuBar= props =>{
     return(
    <View style={styles.bar}>
        <Text style={styles.text}>Menu</Text>
    </View>
     );
};

const styles=StyleSheet.create({

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
        
    }

});

export default topMenuBar;
