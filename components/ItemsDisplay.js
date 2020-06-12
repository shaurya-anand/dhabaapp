import React, { useState, useEffect, useRef } from 'react';
import {ActivityIndicator, StyleSheet,View,Text,FlatList} from 'react-native';
import Colors from '../constants/Colors';
import AddSubtractItemsBar from '../components/AddSubtractItemsBar';
import ItemsList from '../components/ItemsList';
import NetInfo from '@react-native-community/netinfo';
import {useSelector, useDispatch} from 'react-redux'
import store from '../redux/store'
import {clear_cart} from '../redux/actions'
import firebase from '../firebase'
import {db} from'../firebase'

function ItemsDisplay(){
  
  const dispatch = useDispatch()

  const [isInternetReachable, setIsInternetReachable] = useState(null)

  useEffect(() => {
  const unsubscribe = NetInfo.addEventListener(state => {
  
      setIsInternetReachable(state.isInternetReachable)
      
    });
  });

 

  useEffect(() => {
   
    if(!isInternetReachable && isInternetReachable != null)
      {
          alert('Kindly check your internet connection')
          dispatch(clear_cart())
      }
  },[isInternetReachable])

function categoryselector (item)  {
switch( String(item.category)[0] ) {

  case '1' : return styles.name1
  break;
  case '2' : return styles.name2
  break;
  case '3' : return styles.name3
  break;
  case '4' : return styles.name4
  break;
  case '5' : return styles.name5
  break;
  default : return styles.name2
  
}
}

const [isLoading, setLoading] = useState(true);
const [isLoading2, setLoading2] = useState(true);
const [data, setData] = useState([]);
const [filteredData, setFilteredData] = useState([]);


useEffect( () => {

  try {
  
    return db.collection('store').onSnapshot(querysnapshot => {

      if (querysnapshot.empty) {
        setLoading2(false)
      }

      querysnapshot.forEach(doc => {
      const listobject = doc.data()
      setData(Object.values(listobject))
      
     } );
    
     if(isLoading)
     {
     setLoading(false)
    
     }
  
  });

}
  
  catch(error) {
  setLoading(true)
  }

}, []);

useEffect(() => {
  filter();
}, [data]);

 const ListEmpty = () => {
  if(!isLoading2) {
  return (
    //View to show when list is empty
    <View style={styles.EmptyContainer}>
      <Text style = {styles.storeClosedText}>    Abhi nahi !    </Text>
    </View>
  );
  }
};

const filter = () =>
{
  tempdata= []
  count = 0;
  for(i=0; i< data.length; i++)
   {
     if(data[i].available)
     {
     tempdata.push(data[i])
     }

     if(i>0)
     {
     count = count+1
     }

    }
  setFilteredData(tempdata)
  if(count!=0)
  {
  setLoading2(false)
  }
 }

   
    return(

    <View > 
      { !isInternetReachable || isLoading ? ( 
        <View style = {styles.spinner}>
        <ActivityIndicator size="large" color={Colors.primary}/>
       </View>
      
         )
                  : (
          
            <FlatList 
           contentContainerStyle={{ paddingBottom: 250}}
           keyExtractor={(item) => item.id}
           data={filteredData}
           extraData={filteredData}
           ListEmptyComponent={ListEmpty()}
           renderItem = { ({item}) =>
              (
        
                <View  style={styles.itemContainer}>
                     <Text style={categoryselector(item)}>{item.name}</Text>
                     <Text style={styles.price}>{'\u20B9'} {item.price} </Text>
                     <AddSubtractItemsBar style={styles.bar} item={item} />
                </View>
              
              ) } />  

                   ) 
     
      } 

    

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
      color : '#136D46',
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
    },

    EmptyContainer: {
      justifyContent: 'center',
      alignItems : 'center',
      flex: 1,
    },

    spinner : {
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      marginTop : '50%'
    },
   storeClosedText : { 
      textAlign: 'center',
      color : 'white',
      marginTop : '50%', 
      fontSize : 18,
      fontFamily : 'Roboto',
      fontWeight :'bold',
      backgroundColor : Colors.primary,
      padding : 10,
      borderRadius : 15
      
   }
});

export default ItemsDisplay;