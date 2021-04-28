import React, { useState } from "react";
import {StyleSheet, Text,ScrollView, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import base64 from 'react-native-base64'
import utf8 from 'utf8'







const App = (route) => {
  const [pressStatus,setStatus]=useState(false);
   const {item} =  route.route.params; 
    route.navigation.setOptions({title: item.title});
  return (
    <View style={{position: "relative",height: '100%'}}> 
     <View style={styles.bulb}><TouchableOpacity  onPress={()=>setStatus(!pressStatus)}><Icon name={pressStatus ? "bulb" : "bulb-outline"} size={30} color={pressStatus ? "yellow" : "black"} /></TouchableOpacity></View>
     <View style={{height: '100%'}}><ScrollView style={[ {padding: 16},pressStatus ? styles.bgYellow :  styles.bgWhite]}>
         <Text style={{lineHeight: 25 }}>{utf8.decode(base64.decode(item.content))}</Text>
       </ScrollView>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  bgYellow:{
    backgroundColor: '#ffe0a8',
    
  } ,
  bgWhite:{
    backgroundColor: '#b0fffd'
  },
  bulb:{
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 10000,
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'pink',
    borderRadius: 50,
  }
});

export default App;