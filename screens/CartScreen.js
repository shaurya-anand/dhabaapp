import React,  { useState, useEffect } from 'react';
import {Platform, StyleSheet,View,Text, Button, FlatList, Alert} from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux'
import store from '../redux/store'
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import {update_location_to_true, update_location_to_false, clear_cart} from '../redux/actions'
import { getPreciseDistance} from 'geolib';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';




function CartScreen({navigation}){

  var cart = useSelector(state => state.cart)
  var cart_total = useSelector(state => state.cart_total)
  var phone_number = useSelector(state => state.phone_number)
  const locationavailable = useSelector(state => state.locationavailable)
  const dispatch = useDispatch()
  var dis = 6000

  const [isInternetReachable, setIsInternetReachable] = useState(null)

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

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('storeOrder', JSON.stringify(cart))
    } catch (e) {
    alert('Unable to store locally for order history')
    }
  }

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
        alert('You are too far !              ︶︹︺                    Delivery radius is 5 kms. If within 5 kms, kindly check location permissions and restart app.')
      }

       else
         {
           Alert.alert(  
          'Pakka na ?',  
          'Confirm Order ^_^',  
           [  
            { text: 'No', onPress: () => {},  style: 'cancel',  },  
            { text: 'Yes', onPress: () => { 
                                           saveData()
                                           navigation.reset({ index: 0, routes: [{ name: 'OrderConfirmedScreen' }], });
                                          
                                          }
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

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
    
        setIsInternetReachable(state.isInternetReachable)
        
      });
    });

   useEffect(() => {
   
      if(!isInternetReachable && isInternetReachable != null)
        {
            alert('Kindly check internet connection')
            dispatch(clear_cart())
        }
    },[isInternetReachable])
  
    return(

<View style={styles.screen}>
    <View style={styles.topcontainer}>
        <View style={styles.iconcontainer}>

                <View style={styles.backicon}>
                       <MaterialCommunityIcons.Button name='arrow-left-bold-circle-outline' size={40} color='white' backgroundColor={Colors.primary} onPress={() => navigation.goBack()}/>
                </View>

                <View style={styles.foodicon}>
                       <MaterialCommunityIcons name='silverware-fork-knife' size={56} color='white' backgroundColor={Colors.primary}/>
                </View>

                <View style={styles.fakeicon}>

                </View>

        </View>
        
        <View>
          <Text  style={styles.text}> Your Plate </Text>
        </View>
    </View>
 
        <View style = {styles.cartlist}>
           <FlatList
           backgroundColor={'F5F0F0'}
           contentContainerStyle = {{paddingBottom : 20}}
           keyExtractor={(item) => item.itemid}
           data={cart}
           extraData = {cart}
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

        <View style= {styles.infoContainer}>
          <Text style = {styles.infoNumberText}> You will be contacted at {phone_number} </Text>
          <Text style = {styles.infoPaymentText}> Pay on delivery via cash or wallet </Text>
        </View>
      
         <View style={styles.confirmbutton}>
          <Button title= '  Confirm Order  ' color={Colors.primary} onPress={() => onClickHandler()}/>
        </View>


</View> 
    );

};

const styles= StyleSheet.create({
 
    iconcontainer : {
        flexDirection : 'row',
        backgroundColor: Colors.primary,
        justifyContent: 'space-around'

    },

    topcontainer : { 
      backgroundColor : Colors.primary,
    },
      
    backicon : {
      flex : 1,
      marginTop : '8%',
      marginLeft : '2%'
      },

      foodicon:{
          flex : 1,
          marginTop : '10%',
          marginLeft : '11%'
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
            marginTop : 3,
            marginBottom : 1

          },

          confirmbutton :{
            flexDirection : 'row',
            position: 'absolute',
            width: '100%',
            bottom: '5%',
            justifyContent: 'center',
        
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
        fontSize : 15,
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
          height : '35%',
          marginTop : 40,
          width: '100%',
          //backgroundColor : '#FEDDDD',
          backgroundColor : '#F5F0F0',
          borderRadius : 25,
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

        },

        infoContainer : {

          marginTop :'5%',
          justifyContent : 'center',
          alignItems : 'center'
        },

        infoNumberText : {
      
          fontSize : 16,
          color : 'red',
          fontWeight : 'bold',
          flexWrap : 'wrap',
          fontFamily : 'Roboto'
           },

           
        infoPaymentText : {
      
          fontSize : 16,
          color : 'black',
          flexWrap : 'wrap',
          fontFamily: 'Roboto',
           },

});

export default CartScreen;