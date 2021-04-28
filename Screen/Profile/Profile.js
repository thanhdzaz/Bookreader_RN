import React, { useState } from "react";
import { StyleSheet, Text, Button, View, TextInput, } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

import axios from "../../API/AxiosApi"






const App = () => {  
  const [status,setStatus] = useState(true);
  const [data,setData] = useState([])
  React.useEffect(() => {
      axios.get('/Library')
      .then(res => {
        const resData = res.data;
        console.log(resData);
        setData(resData)
      });
  }, []);

  return (
   <View><Text>Abc</Text>
    <TextInput placeholder="nhap di"></TextInput>

    <Button title="Sub"></Button>
   </View>




  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;