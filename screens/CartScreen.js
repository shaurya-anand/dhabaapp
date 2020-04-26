import React,  { useState, useEffect } from 'react';
import {Platform, StyleSheet,View,Text, Button, FlatList, Alert} from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux'
import store from '../redux/store'
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import {update_location_to_true, update_location_to_false} from '../redux/actions'
import { StackActions, NavigationActions } from 'react-navigation'
import { getPreciseDistance} from 'geolib';




function CartScreen({navigation}){

  var cart = useSelector(state => state.cart)
  var cart_total = useSelector(state => state.cart_total)
  const locationavailable = useSelector(state => state.locationavailable)
  const dispatch = useDispatch()
  var dis = 6000

  useEffect(() => {
    (async () => {

      try {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        dispatch(update_location_to_false())
      }

      else 
      {
        dispatch(update_location_to_true())
      }

      let location = await Location.getCurrentPositionAsync({});

      dis = getPreciseDistance(
        { latitude: location.coords.latitude, longitude: location.coords.longitude},
        { latitude: 28.854586, longitude: 77.097063 }
      );

    }

     catch( error)
     {
       let status = Location.getProviderStatusAsync()
       if(!status.locationServicesEnabled)
       {
        dispatch(update_location_to_false())
       }
     }

    })();

  });

  const onClickHandler = () =>
  {
    if(locationavailable)
    {

       if(cart_total < 100)
         {
            alert('The minimum amount for home delivery is ₹100 ')
         }

      else if (dis >= 5000)
      {
        alert('You are too far! (︶︹︺) Delivery radius is 5 kms. If within 5 kms, check location permissions and restart app')
      }

       else
         {
           Alert.alert(  
          'Pakka na ?',  
          'Confirm Order ^_^',  
           [  
            { text: 'No', onPress: () => {},  style: 'cancel',  },  
            { text: 'Yes', onPress: () => { navigation.reset({
                                                            index: 0,
                                                             routes: [{ name: 'OrderConfirmedScreen' }],
                                                           }); }
            },  
           ],

            { cancelable: true } 
            );  
          }
   }

   else
   {
     alert('Unable to access location. Kindly switch on GPS or check app location settings ')
   }

  }
  
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
 
        <View style = {styles.cartlist}>
           <FlatList 
           contentContainerStyle={{ paddingBottom:50 }}
           backgroundColor={'F5F0F0'}
           keyExtractor={(item) => item.itemid}
           data={cart}
           renderItem={({item}) =>
              ( 
              
                
               <View  style={styles.itemContainer}>

                <View style={styles.nameContainer}>
                        <Text style={styles.name}>{item.itemname}</Text>
                </View>

                <View style={styles.quantityContainer}>
                       <Text style={styles.quantity}>{item.itemquantity}</Text>
                       <Text style={styles.asterix}>   X   </Text>
                       <Text style={styles.price}>₹ {item.itemprice} </Text>
                </View>
                
                <View style={styles.subtotalContainer}>
                        <Text style={styles.subtotal}>₹ {item.itemsubtotal}</Text>
                </View>

              </View>
                         
            
              ) } />
 
        </View>

        <View style= {styles.carttotal}>
          <Text style = {styles.carttotalText}> Total  ₹ {cart_total} </Text>
        </View>
      
         <View style={styles.confirmbutton}>
          <Button title="Confirm Order" color={Colors.primary} onPress={() => onClickHandler()}/>
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
            alignItems :'center',
        
       },

       screen: {
        flex: 1,
        backgroundColor: '#fff'
      },

      itemContainer : {
        marginTop : 20,
        flexDirection : 'row',
        flex : 1,
        width : '100%',
        justifyContent: 'space-between',
        
       },

       nameContainer : {
       flex : 3
       },

       quantityContainer :{
       flex : 2,
       flexDirection : 'row',
       alignItems : "center"
       },
    
       subtotalContainer : {
       flex : 1,
       alignItems:"center",
       justifyContent : 'center',
       backgroundColor : Colors.primary,
       marginLeft : 10,
       marginRight : 10,
       borderRadius : 6
       },
          
       name : {
       
        marginLeft : 10,
        fontFamily : 'serif',
        fontSize : 16,
        color : 'black',
        fontWeight : 'bold'
        },

          quantity : {
          color:'black'
          },

        asterix : {
         color : Colors.primary,
         fontSize : 10
        },
    
       price : {
        
        color:'black'
        },

        

          subtotal : {
            color:'black',
            alignItems : 'center',
            color : 'white'
            },

        cartlist : {
          height : 300,
          marginTop : 50,
          width: '100%',
          //backgroundColor : '#FEDDDD',
          backgroundColor : '#F5F0F0',
          borderRadius : 25
        },

        carttotal : {

          marginTop : 30,
          flexDirection : "row",
          justifyContent : 'center',
        },

        carttotalText : {
      
          fontSize : 26,
          color : 'black',
          borderRadius : 30,
           borderColor : Colors.primary,
           borderWidth: 2,
          paddingHorizontal : 8,

        }

});

export default CartScreen;