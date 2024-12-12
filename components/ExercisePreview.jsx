import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native';



const ExercisePreview = ({ workout }) => {
/*
    const checkSwitch = (workout) => {
        switch (workout) {
          case 'abs':
            return require('../assets/muscleGroups/abs.png');
          case 'legs':
            return require('../assets/muscleGroups/quads.png');
          case 'chest':
            return require('../assets/muscleGroups/chest.png');
          case 'back':
            return require('../assets/muscleGroups/back.png');
          default:
            Alert.alert("Path not found");
            return null;
        }
    };

    const imageUrl = checkSwitch(workout);
    */

  return (
    
      <View style={styles.body}>
      {/* Text on the left */}
      <Text style={styles.buttonText}>{title}</Text>
      {/* Image on the right */}
      <Image source={require('../assets/muscleGroups/core.png')} style={styles.image} />
    </View>
  );
};



const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 5,
    alignItems: 'center',
    width: '80%', // Adjust width as needed
    marginVertical: 8, // Space between buttons
  },
  body: {
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: undefined, 
    aspectRatio: 1,
    borderRadius: 5,
  },
});

export default ExercisePreview;
