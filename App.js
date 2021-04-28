import { NavigationContainer } from '@react-navigation/native';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tab from './Navigator/MainNavigator'


export default function App() {
  
  return (
    <NavigationContainer>
      <Tab/>
    </NavigationContainer>
  );
}

// export default function app(){
//   // Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View>
//         <Text>Login</Text>
//       </View>
//     );
//   }

//   return (
//    <NavigationContainer>
//      <Tab/>
//    </NavigationContainer>
//   );

// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
