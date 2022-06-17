
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './src/screens/toptabs/Main'
import Train from './src/screens/toptabs/Train';
import Plane from './src/screens/toptabs/Plane';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/others/Splash';
import Home from './src/screens/others/Home';
import RunningStatus from './src/screens/others/RunningStatus';
import PnrStatus from './src/screens/others/PnrStatus';
import Checksits from './src/screens/others/Checksits';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Running" component={RunningStatus} />
        <Stack.Screen  name="PNR" component={PnrStatus} />
        <Stack.Screen  name="CheckSits" component={Checksits} />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})