import React, {useEffect} from 'react';
import {StyleSheet,View,Text, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import {useSelector, useDispatch} from 'react-redux'
import {clear_cart} from '../redux/actions'
import { Ionicons } from '@expo/vector-icons'; 

function OrderConfirmedScreen({navigation}){

    const dispatch = useDispatch()

    useEffect(() => {
        try {
        dispatch(clear_cart())
        }

        catch(e) {
            alert("Unable to clear cart")
        }
     },[])
    

    return(
    <View style={styles.screen}>
        
        <View style={styles.smiley}>
        {/* <MaterialCommunityIcons name='emoticon-tongue' size={180} color={Colors.primary} backgroundColor='white' /> */}
        <Ionicons name="md-happy" size={180} color={Colors.primary} />
        </View>

        <View >
            <Text style={styles.text}>Order placed!</Text>
        </View>

        <Text style={styles.confirmationText}> You will receive a confirmation call shortly </Text> 


        <View style={styles.buttoncontainer}>
        <MaterialCommunityIcons.Button name='arrow-right-bold-circle-outline' size={60} color={Colors.primary} backgroundColor='white' onPress={() => { navigation.reset({
                                                            index: 0,
                                                             routes: [{ name: 'HomeScreen' }],
                                                           }); }}/>
        </View>

        <Text style={styles.redirectText}> Homescreen   </Text>

   </View>
    );
};

const styles= StyleSheet.create({

    screen: {

        flex:1,
        backgroundColor:'white'

    },
    

    text: {
        marginTop: 50,
        width:'100%',
        textAlign :'center',
        fontFamily: 'Roboto',
        fontSize:40,
        fontWeight: 'bold',
        color: Colors.primary,
        backgroundColor: 'white'
   },

    smiley: {
        marginTop: 50,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    
    buttoncontainer :{
        position:'absolute',
        bottom:50,
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },

    confirmationText : {
        fontFamily : 'Roboto',
        textAlign : 'center',
        fontWeight : '800',
        color : Colors.primary
    },

    redirectText :{
        position:'absolute',
        bottom:40,
        width:'100%',
        textAlign : 'center',
        fontFamily  :'Roboto',
        fontWeight : 'bold',
        letterSpacing : 1,
    },

});

export default OrderConfirmedScreen;