import React from 'react';
import { TextInput, View, StyleSheet, } from 'react-native';
import { WebView } from 'react-native-webview';
import { exp } from 'react-native-reanimated';


function PrivacyPolicyScreen ({navigation}) {

  return (

    <View style={styles.container}>
     
     <WebView source={{ uri: 'https://sites.google.com/view/himachali-dhaba-privacypolicy/home' }} />
      
    </View>
    

  );
    }


const styles = StyleSheet.create({
container : {
flex : 1,
backgroundColor:'white',
paddingBottom : 5,
marginTop : 30
},

})

export default PrivacyPolicyScreen;

