import React,{useState} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import {Entypo} from '@expo/vector-icons';
import store from '../redux/store'
import {IncrementItem} from '../redux/actions'
import {DecrementItem} from '../redux/actions'
import {useSelector, useDispatch} from 'react-redux'

function AddSubtractItemsBar(props){

    const dispatch = useDispatch()
    const[count,setCount]=useState(0)
    var item= props.item

      return(  

      <View style={styles.barContainer}>
        
        <View>
        <Entypo.Button name='circle-with-minus' size={15} color={Colors.primary} backgroundColor='white' onPress = {() => {
        if(count>=1)
        {
        dispatch(DecrementItem(item))
        setCount(count-1)
        }
      }} />
        </View>

        <View>
       <Text style={[(count!=0)? styles.counter : styles.nullcounter]}>{count}</Text>
        </View>

        <View style={styles.plusButton}>
        <Entypo.Button name='circle-with-plus' size={15} color={Colors.primary} backgroundColor='white' onPress={() => {
        setCount(count+1)
        dispatch(IncrementItem(item))
         }} />
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
            color : 'red',
            fontWeight : 'bold'
        
        },

        nullcounter : {
          marginTop :6,
        
      
      },


    });




export default AddSubtractItemsBar