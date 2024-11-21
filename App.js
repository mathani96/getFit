import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WorkoutsPage from './components/screens/WorkoutsPage';
import HomePage from './components/screens/HomePage';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {

  const Stack = createStackNavigator(); 


  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage}/>
          <Stack.Screen name="WorkoutsPage" component={WorkoutsPage}/>
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
  },
});
