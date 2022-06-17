import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Train from './Train'
import Plane from './Plane'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Bus from './Bus';
import Hotel from './Hotel';
const Tab = createMaterialTopTabNavigator();


const image1=require('../../images/icon1.png')
const image2=require('../../images/plane.jpg')
const image3=require('../../images/bus.png')
const image4=require('../../images/hotel.png')
function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Train" component={Train} 
            options={{
                tabBarLabel: '',
                tabBarIcon: ({color, size}) => (
                    <Image source={image1} style={styles.logosmall} />
                )
            }}
            />
            <Tab.Screen name="Plane" component={Plane} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color, size}) => (
                        <Image source={image2} style={styles.logosmall} />
                    )
                }}
            />
            <Tab.Screen name="Bus" component={Bus} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color, size}) => (
                        <Image source={image3} style={styles.logosmall} />
                    )
                }}
            />
            <Tab.Screen name="Hotel" component={Hotel} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color, size}) => (
                        <Image source={image4} style={styles.logosmall} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
const Main = () => {
  return (
    <MyTabs />
  )
}

export default Main

const styles = StyleSheet.create({
    logosmall:{
        marginLeft:-20,
        width:60,
        height:50,
    }
})