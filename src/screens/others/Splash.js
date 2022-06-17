import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = ({navigation}) => {
    setTimeout(() => {
        navigation.navigate('Home');
      }, 2500);
  return (
    <View>
        <StatusBar backgroundColor={'#000'} barStyle="light-content" />
      <Image 
        style={{height:'100%', width:'100%'}}
        source={require('../../images/splash.png')}
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})