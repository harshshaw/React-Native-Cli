
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import demo from './components/demo'


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


function Homescreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lets Explores !</Text>
      <Button title="Go to startup"
        onPress={() => navigation.navigate('Nature')}></Button>
    </View>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Nature' component={demo} />
        <Stack.Screen name='Home' component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#46466d'
  },
  text: {
    color: 'white'
  }
});
