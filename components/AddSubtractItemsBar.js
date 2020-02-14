import React,{useState} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import {Entypo} from '@expo/vector-icons';
import { checkForUpdateAsync } from 'expo/build/Updates/Updates';



function AddSubtractItemsBar(){

    const[count,setCount]=useState(0);

      return(  <View style={styles.barContainer}>
        <View>
        <Entypo.Button name='circle-with-minus' size={15} color={Colors.primary} backgroundColor='white' onPress={() => { if(count>=1) setCount(count-1)}} />
        </View>
        <View>
       <Text style={styles.counter}>{count}</Text>
        </View>
        <View style={styles.plusButton}>
        <Entypo.Button name='circle-with-plus' size={15} color={Colors.primary} backgroundColor='white' onPress={() => setCount(count+1)} />
        </View>
   </View>
     );


}

      
     const styles= StyleSheet.create({
       
        barContainer : {
             flexDirection : 'row'
             },
        plusButton :
        {
            marginLeft:8
        },
        counter : {
            marginTop :6,
        
        }
    });




export default AddSubtractItemsBar;