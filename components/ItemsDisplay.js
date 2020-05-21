import React from 'react';
import {StyleSheet,View,Text,FlatList} from 'react-native';
import Colors from '../constants/Colors';
import AddSubtractItemsBar from '../components/AddSubtractItemsBar';
import ItemsList from '../components/ItemsList';

function ItemsDisplay(){

function categoryselector (item)  {
switch(item.category) {

  case 1 : return styles.name1
  break;
  case 2 : return styles.name2
  break;
  case 3 : return styles.name3
  break;
  case 4 : return styles.name4
  break;
  case 5 : return styles.name5
  break;
  default : return styles.name2
  
}
}
  

   
    return(
    <View>
           <FlatList 
           contentContainerStyle={{ paddingBottom: 250}}
           keyExtractor={(item) => item.id}
           data={ItemsList.list}
           renderItem={({item}) =>
              ( 
        
            
                <View  style={styles.itemContainer}>
                     <Text style={categoryselector(item)}>{item.name}</Text>
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
      
   name1 : {
    flex :1,
    marginLeft : 10,
    fontFamily : 'serif',
    fontSize : 16,
    color : 'black',
    fontWeight : 'bold'
    },

    name2 : {
      flex :1,
      marginLeft : 10,
      fontFamily : 'serif',
      fontSize : 16,
      color : '#959A02',
      fontWeight : 'bold'
      },
    
    name3 : {
        flex :1,
        marginLeft : 10,
        fontFamily : 'serif',
        fontSize : 16,
        color : '#9B00AF',
        fontWeight : 'bold'
        },

     name4 : {
          flex :1,
          marginLeft : 10,
          fontFamily : 'serif',
          fontSize : 16,
          color : '#A66404',
          fontWeight : 'bold'
          },

      name5 : {
            flex :1,
            marginLeft : 10,
            fontFamily : 'serif',
            fontSize : 16,
            color : '#0740A1',
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