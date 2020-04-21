import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import Colors from '../constants/Colors';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import AddSubtractItemsBar from '../components/AddSubtractItemsBar';
import ItemsDisplay from '../components/ItemsDisplay';
import ItemsList from '../components/ItemsList';
import {useSelector, useDispatch} from 'react-redux'
import store from '../redux/store'

function HomeScreen({navigation}){

    const cart_total = useSelector(state => state.cart_total)

    return(
    <View style={styles.screen}>
     <View style={styles.bar}>
        <Text style={styles.menuText}>Menu</Text>
    </View>
    <View style={styles.header}>
        <Text style={styles.itemsText}> Items </Text>
        <Text style={styles.priceText}> Price </Text>
        <Text style={styles.totalText}> Total {'\u20B9'} {cart_total} </Text>
    </View>
    
    <View>
        <ItemsDisplay/>
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
    
        menuText : {
            fontSize : 30,
            fontFamily : 'Roboto',
            color : 'white',
            fontWeight : 'bold',
            paddingTop: 30
            
        },

        
        itemsText : {
            fontSize : 20,
            fontFamily : 'Roboto',
            color : 'red',
            fontWeight : 'bold',
            flex :1,
            marginLeft : 20
        },

        
        priceText : {
            fontSize : 20,
            fontFamily : 'Roboto',
            color : 'red',
            fontWeight : 'bold',
            flex :1,
            marginLeft : 10
            
        },

        totalText : {
            fontSize : 20,
            fontFamily : 'Roboto',
            color : 'white',
            fontWeight : 'bold',
            marginLeft : 15,
            backgroundColor : Colors.primary,
            flex :1,
            borderRadius : 10
            
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
        },

        header : {
            flexDirection : 'row',
            marginVertical : 10
           
        }

});

export default HomeScreen;