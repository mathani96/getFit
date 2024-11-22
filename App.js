import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutsPage from './components/screens/WorkoutsPage';
import HomePage from './components/screens/HomePage';
import InstructionsPage from './components/screens/InstructionsPage';
import ProgressPage from './components/screens/ProgressPage';
import WorkoutPage from './components/screens/WorkoutPage';
import WorkoutPreviewPage from './components/screens/WorkoutPreviewPage';
import "./global.css"

export default function App() {

  const Stack = createStackNavigator(); 

  return (

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomePage}/>
          <Stack.Screen name="Workouts" component={WorkoutsPage}/>
          <Stack.Screen name='Progress' component={ProgressPage}/>
          <Stack.Screen name="Workout" component={WorkoutPage}/>
          <Stack.Screen name="Preview" component={WorkoutPreviewPage}/>
          <Stack.Screen name="Instructions" component={InstructionsPage}/>
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
