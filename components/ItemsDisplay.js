import React from 'react';
import {StyleSheet,View,Text,FlatList} from 'react-native';
import Colors from '../constants/Colors';
import AddSubtractItemsBar from '../components/AddSubtractItemsBar';
import ItemsList from '../components/ItemsList';

function ItemsDisplay(){

   
    return(
    <View>
           <FlatList 
           contentContainerStyle={{ paddingBottom: 250}}
           keyExtractor={(item) => item.id}
           data={ItemsList.list}
           renderItem={({item}) =>
              ( 
        
            
                <View  style={styles.itemContainer}>
                     <Text style={styles.name}>{item.name}</Text>
                     <Text style={styles.price}>{'\u20B9'} {item.price} </Text>
                     <AddSubtractItemsBar style={styles.bar} item={item} />
                </View>
             
        
              ) } />

    </View>
    );
};

const styles= StyleSheet.create({

   itemContainer : {
    marginTop : 20,
    flexDirection : 'row',
    flex : 1,
    width : '100%',

   },
      
   name : {
    flex :1,
    marginLeft : 10,
    fontFamily : 'serif',
    fontSize : 16,
    color : 'black',
    fontWeight : 'bold'
    },

   price : {
    flex :1,
    marginLeft : 20,
    marginTop:3,
    color:'black'
    },

    bar : {
   flex :1,
    }
});

export default ItemsDisplay;