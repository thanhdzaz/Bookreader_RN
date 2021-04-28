import * as React from 'react'
import {View} from 'react-native'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'


import Profile from '../Screen/Profile/Profile'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from '../Screen/Home/Home'
import Books from '../Screen/Library/Books'
import Book from '../Screen/Library/Book'
import Tags from '../Screen/Library/Tag'
import Cate from '../Screen/Home/Cate'
import Auth from '../Screen/Auth/Auth'







const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const TopTabs =  createMaterialTopTabNavigator();


// const BookStack = () => {
//     return <Stack.Navigator>
//         <Stack.Screen options={{headerShown: false,}} name="Books" component={Books}/>
//         <Stack.Screen name="Book" component={Book}/>
//     </Stack.Navigator>
// }



function LibraryTabs(){
    return <TopTabs.Navigator   tabBarOptions={{
        labelStyle: { fontSize: 16 ,fontWeight: 'bold',textTransform: 'capitalize'},
        tabStyle: { width: 80,borderBottomColor: 'red' },
        style: { backgroundColor: '#dfdfdf', },
        activeTintColor: '#ff8b88',
      }}>
                <TopTabs.Screen name="Sách" component={Books} />
                <TopTabs.Screen name="Tag" component={Tags} />
            </TopTabs.Navigator>
}



const LibStack = () =>{
    return <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="LibTabs" component={LibraryTabs}/>
        <Stack.Screen name="Book" component={Book}/>
    </Stack.Navigator>
}


function HomeStack  (){
    return <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cate" component={Cate} />
        <Stack.Screen name="Book" component={Book} />
    </Stack.Navigator>
}

function ProfileStack (){
    return <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>

}


export default function app(){
    return <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Auth" component={Auth}  options={{headerShown: false}}/>
        <Stack.Screen name="Main" component={AppNavigator} options={{headerShown: false}}/>
    </Stack.Navigator>



}



const AppNavigator =()=>{
    return <Tabs.Navigator 
    initialRouteName="Home"
    tabBarOptions={{ showLabel: false,activeTintColor: 'red',
        inactiveTintColor: 'gray', }} screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
                iconName = focused
                    ? 'home'
                    : 'home-outline';
            } else if (route.name === 'Library') {
                iconName = focused 
                ? 'library' 
                : 'library-outline';
            }else if (route.name === 'UserTab') {
                iconName = focused 
                ? 'menu' 
                : 'menu-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
        },
    })}>
                <Tabs.Screen name="Home" component={HomeStack}/>
                <Tabs.Screen name="Library" component={LibStack}/>
                <Tabs.Screen name="UserTab" component={ProfileStack}/>
            </Tabs.Navigator>
}