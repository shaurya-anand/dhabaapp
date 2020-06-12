import React, {useEffect} from 'react';
import {StyleSheet,View,Text, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import {useSelector, useDispatch} from 'react-redux'
import {clear_cart} from '../redux/actions'

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
        <MaterialCommunityIcons name='emoticon-tongue' size={180} color={Colors.primary} backgroundColor='white' />
        </View>

        <View >
            <Text style={styles.text}>Order confirmed!</Text>
        </View>


        <View style={styles.buttoncontainer}>
        <MaterialCommunityIcons.Button name='arrow-left-bold-circle-outline' size={60} color={Colors.primary} backgroundColor='white' onPress={() => { navigation.reset({
                                                            index: 0,
                                                             routes: [{ name: 'HomeScreen' }],
                                                           }); }}/>
        </View>

   </View>
    );
};

const styles= StyleSheet.create({

    screen: {

        flex:1,
        backgroundColor:'white'

    },
    

    text: {
        marginTop: 140,
        width:'100%',
        textAlign :'center',
        fontFamily: 'Roboto',
        fontSize:40,
        fontWeight: 'bold',
        color: Colors.primary,
        backgroundColor: 'white'
   },

    smiley: {
        marginTop:110,
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
    }

});

export default OrderConfirmedScreen;