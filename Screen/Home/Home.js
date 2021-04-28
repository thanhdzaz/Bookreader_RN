import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import HeadBg from '../../Image/Background/Head.jpg'


export default function Home({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <ImageBackground source={HeadBg} style={{ height: '100%', width: '100%', opacity: 4 }}></ImageBackground>
      </View>
      <View style={styles.con}>
        <ScrollView>
          {/* Type */}
          <View>
            <Text style={{ letterSpacing: 3, fontWeight: '900',paddingTop: 5 }}>
              Thể Loại
            </Text>
            <View style={styles.TypeCate}>
              <TouchableOpacity style={styles.TypeCateOne} onPress={() => navigation.navigate('Cate',{tag: "TC",name: 'Tình cảm'})}><Text style={{ textAlign: 'center', fontWeight: '700' }}>Tình cảm</Text></TouchableOpacity>
              <TouchableOpacity style={styles.TypeCateOne} onPress={() => navigation.navigate('Cate',{tag: "TN",name: 'Truyện ngắn'})}><Text style={{ textAlign: 'center', fontWeight: '700' }}>Truyện ngắn</Text></TouchableOpacity>
              <TouchableOpacity style={styles.TypeCateOne} onPress={() => navigation.navigate('Cate',{tag: "TT",name: 'Tiểu thuyết'})}><Text style={{ textAlign: 'center', fontWeight: '700' }}>Tiểu thuyết</Text></TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={{ letterSpacing: 3, fontWeight: '900',paddingTop: 5 }}>
              Thể Loại
            </Text>
            <View style={styles.TypeCate}>
              <TouchableOpacity style={styles.TypeCateOne} onPress={() => Alert.alert("123")}><Text style={{ textAlign: 'center', fontWeight: '700' }}>Tình cảm</Text></TouchableOpacity>
              <TouchableOpacity style={styles.TypeCateOne} onPress={() => Alert.alert("123")}><Text style={{ textAlign: 'center', fontWeight: '700' }}>Hài</Text></TouchableOpacity>
              <TouchableOpacity style={styles.TypeCateOne} onPress={() => Alert.alert("123")}><Text style={{ textAlign: 'center', fontWeight: '700' }}>Tiểu thuyết</Text></TouchableOpacity>
            </View>

          </View>
          {/* Type */}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
  header: {
    width: '100%',
    height: '25%',

  }, con: {
    zIndex: 10,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: "-5%",
    backgroundColor: "#fff",
    height: '78%',
    padding: "5%",
  },
  TypeCate: {
    flex: 3,
    flexDirection: "row",
    justifyContent: 'space-around',
    marginTop: 10,
  },
  TypeCateOne: {
    backgroundColor: '#fddbdc',
    width: '30%',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
  }

});
