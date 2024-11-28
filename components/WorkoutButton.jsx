import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native';



const WorkoutButton = ({ title, onPress, backgroundColor, workout }) => {

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

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]} 
      onPress={onPress}
    >
      <View style={styles.body}>
      {/* Text on the left */}
      <Text style={styles.buttonText}>{title}</Text>
      {/* Image on the right */}
      <Image source={imageUrl} style={styles.image} />
    </View>
    </TouchableOpacity>
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
    width: '100%',
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

export default WorkoutButton;
