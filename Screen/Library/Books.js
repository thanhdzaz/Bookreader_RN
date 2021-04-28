import React, { useState } from "react";
import { ImageBackground, Alert, TouchableOpacity, StyleSheet, Text, Pressable, View, TextInput, FlatList, Sc, ScrollView } from "react-native";
import Book1 from '../../Image/Books/1.jpg'
import axios from "../../API/AxiosApi"

const Card = (props) => {
  const { hie, navigation } = props;
  return <TouchableOpacity style={styles.card} onPress={() => {
    navigation.navigate('Book', { item: hie, navi: navigation });
  }}>
    <View style={styles.cardImg}><ImageBackground source={hie.photo} style={styles.cardImgView} /></View>
    <View><Text>{hie.title}</Text>
      <Text><Text style={{ fontWeight: 'bold' }}>Tác giả: </Text>{hie.author}</Text></View>
  </TouchableOpacity>
}




const App = ({ navigation }) => {

  const [status, setStatus] = useState(true);
  const [data, setData] = useState([])
  React.useEffect(() => {
    axios.get('/Library')
      .then(res => {
        const resData = res.data;
        console.log(resData);
        setData(resData)
      });
  }, []);
  return (
    <ScrollView>
      {data.map(item => {
        return <Card hie={item} navigation={navigation} />
      })}
    </ScrollView>
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
  },
  card: {
    margin: 10,
    flexDirection: 'row',
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff'
  },
  cardImgView: {
    width: '100%',
    height: '100%',


  },
  cardImg: {

    height: '100%',
    width: '30%',
    padding: 5,
    paddingLeft: 0
  }
});

export default App;