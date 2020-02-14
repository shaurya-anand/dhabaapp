import React from 'react';
import {StyleSheet,View,Text,FlatList} from 'react-native';
import Colors from '../constants/Colors';
import AddSubtractItemsBar from '../components/AddSubtractItemsBar';

function ItemsDisplay(){

    const list = [

    {  
        id : '1',
        name : 'Tawa plain roti',
        price : 5,
        available : true

    },

    
    {  
        id : '2',
        name : 'Tawa butter roti',
        price : 7,
        available : true

    },

    
    {  
        id : '3',
        name : 'Plain parantha',
        price : 20,
        available : true

    },

    
    {  
        id : '4',
        name : 'Aloo parantha',
        price : 30,
        available : true

    },
    
    
    {  
        id : '5',
        name : 'Pyaz parantha',
        price : 40,
        available : true

    },

    
    {  
        id : '6',
        name : 'Aloo pyaz parantha',
        price : 40,
        available : true

    },

    
    {  
        id : '7',
        name : 'Paneer parantha',
        price : 60,
        available : true

    },

    
    {  
        id : '8',
        name : 'Pyaz paneer parantha',
        price : 50,
        available : true

    },

    
    {  
        id : '9',
        name : 'Garlic parantha',
        price : 50,
        available : true

    },

    
    {  
        id : '10',
        name : 'Muli parantha',
        price : 30,
        available : true

    },

    
    {  
        id : '11',
        name : 'Gobhi parantha',
        price : 40,
        available : true

    },

    
    {  
        id : '12',
        name : 'Laccha parantha',
        price : 40,
        available : true

    },

    {  
        id : '13',
        name : 'Green chilli parantha',
        price : 40,
        available : true

    },

    {  
        id : '14',
        name : 'Mix veg half',
        price : 60,
        available : true

    },

    {  
        id : '15',
        name : 'Mix veg half',
        price : 60,
        available : true

    },

    {  
        id : '16',
        name : 'Mixf',
        price : 60,
        available : true

    },
    
    {  
        id : '17',
        name : 'Mix veg half',
        price : '60',
        available : true

    },

    {  
        id : '18',
        name : 'Mix veg half',
        price : '60',
        available : true

    },

    {  
        id : '19',
        name : 'Mix veg half',
        price : '60',
        available : true

    },

    {  
        id : '20',
        name : 'Mix veg half broo',
        price : '60',
        available : true

    },
    {  
        id : '21',
        name : 'Mix veg half broo',
        price : '60',
        available : true

    },
    
    {  
        id : '22',
        name : 'Mix veg half broo',
        price : '60',
        available : true

    },
    
    
 ];

    return(
    <View>
           <FlatList 
           contentContainerStyle={{ paddingBottom: 250}}
           keyExtractor={(item) => item.id}
           data={list}
           renderItem={({item}) =>
        ( <View  style={styles.itemContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{'\u20B9'} {item.price} </Text>
          <AddSubtractItemsBar style={styles.bar} />
          </View>
        )
    } />

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