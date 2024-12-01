import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import WorkoutImages from '../WorkoutImages';

const WorkoutButton = ({ title, onPress, backgroundColor, workout }) => {

    const getImageSource = (workout) => {
        const imageSource = WorkoutImages.workoutCategories[workout];
        if (imageSource) {
          return imageSource;
        } else {
          Alert.alert("Error", "Image not found");
          return null;
        }
      };
    
      const imageSource = getImageSource(workout);

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]} 
      onPress={onPress}
    >
      <View style={styles.body}>
      {/* Text on the left */}
      <Text style={styles.buttonText}>{title}</Text>
      {/* Image on the right */}
      {imageSource && <Image source={imageSource} style={styles.image} />}
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
    width: '80%',
    marginVertical: 8, 
  },
  body: {
    flexDirection: 'row', 
    alignItems: 'center', 
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
