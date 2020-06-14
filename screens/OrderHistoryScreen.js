import React, {useEffect, useState} from 'react';
import {StyleSheet,View,Text, FlatList} from 'react-native';
import Colors from '../constants/Colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { Entypo } from '@expo/vector-icons'; 

function OrderHistoryScreen({navigation}) {

    const[prevOrder, setPrevOrder] = useState([])
    const[prevTotal, setPrevTotal] = useState('')

    const readData = async () => {
        try {
          const order = await AsyncStorage.getItem('storeOrder')
          const orderTotal = await AsyncStorage.getItem('storeTotal')
          setPrevOrder(JSON.parse(order))
          setPrevTotal(orderTotal)
          if(order == null)
          {
            alert('No previous order found')
          }
        } 
        catch (e) {
            alert("No previous order or unable to retrieve")
        }
      }
      
      useEffect(() => {
         readData()
      },[])


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
    
    <View style = {styles.prevOrderContainer}>
      <Text style = {styles.prevOrderText}> Previous Order </Text>
    </View>

    <View style = {styles.cartlist}>
           <FlatList
           backgroundColor={'F5F0F0'}
           contentContainerStyle = {{paddingBottom : 20}}
           keyExtractor={(item) => item.itemid}
           data={prevOrder}
           extraData = {prevOrder}
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
    <Text style ={styles.totalText}> Total ₹ {prevTotal} </Text>
    </View>


    <View style = {styles.helpContainer}>
            <Entypo name="old-phone" size={24} color="black" />
            <Text style = { styles.dhabaContactText}> Contact Dhaba </Text>
            <Text style = { styles.dhabaNumberText} selectable={true} selectionColor={Colors.secondary}> 9958889933 | 9205011408 </Text>
      <Text selectable={true} selectionColor={Colors.secondary}>
            <Text style = { styles.appContactText} selectable={false}> Please report app errors at </Text>
            <Text style = { styles.appEmailText} selectable={true} selectionColor={Colors.secondary}>himachalidhaba@gmail.com </Text>
      </Text>   
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
              marginTop : 16,
              width: '100%',
              backgroundColor : '#FEDDDD',
              //backgroundColor : '#F5F0F0',
              borderRadius : 25,
            },

            prevOrderContainer : {
              marginTop : 24,
              alignItems : 'center',
              justifyContent : 'center',
              
            },

            prevOrderText : 
            {
              fontFamily : 'Roboto',
              color : 'red',
              fontSize : 16,
              fontWeight : 'bold'
            },

            totalText : {
              textAlign : 'center',
              fontFamily : 'Roboto',
              fontSize : 16,
              marginBottom : 3
        
            },

            helpContainer : {
                width : '100%',
                position: 'absolute',
                bottom: 8,
                justifyContent:'center',
                alignItems : 'center'
                
            },

            dhabaContactText : {
            fontFamily : 'Roboto',
            fontSize : 18,
            fontWeight : 'bold'
            },

            appContactText : {
              fontFamily : 'Roboto',
              fontSize : 10,
              fontWeight : 'bold',
              marginTop : 5,
              color : 'red',
          
              
            },

           dhabaNumberText : {
              fontFamily : 'Roboto',
              fontSize : 18,
              fontWeight : 'bold',
              color : 'red',
              marginBottom  : 5
              },
  
          appEmailText : {
                fontFamily : 'Roboto',
                fontSize : 10,
                fontWeight : 'bold',
                color : 'red'
              }
     

});

export default OrderHistoryScreen;