import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Assets from '../Assets';

const WorkoutButton = ({ title, onPress, workoutName }) => {

    const getImageSource = (workoutName) => {
        const imageSource = Assets.workoutCategories[workoutName];
        if (imageSource) {
          return imageSource;
        } else {
          Alert.alert("Error", "Image not found");
          return null;
        }
      };
    
      const imageSource = getImageSource(workoutName);

  return (
    <TouchableOpacity
      style={[styles.buttonX]} 
      onPress={onPress}
    >
      <View style={styles.body}>
     
      <Text style={styles.textX}>{title}</Text>

      {imageSource && <Image source={imageSource} style={styles.image} />}
    </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  
  body: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    width: '100%',
  },
  textX: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 25,
  },
  image: {
    width: 100,
    height: undefined, 
    aspectRatio: 1,
    borderRadius: 5,
  },
    buttonX: {
        backgroundColor: '#ffcc00',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginBottom: 20,
    },
    
});

export default WorkoutButton;
