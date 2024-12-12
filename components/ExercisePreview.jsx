import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View } from 'react-native';



const ExercisePreview = ({ name, exerciseSource }) => {

  return (
    
    <View style={styles.container}>
      {/* Text on the left */}
      <Text style={styles.buttonText}>{name}</Text>
      {/* Image on the right */}
      <Image source={exerciseSource} style={styles.image} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderWidth: 5,
    borderColor: "#ffcc00",
    borderRadius: 10,
    marginTop: 5,
    width: "95%",
    height: 110,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',

  },
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
    width: '80%',
  },
  buttonText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  image: {
    width: 100,
    height: undefined, 
    aspectRatio: 1,
    borderRadius: 5,
  },
});

export default ExercisePreview;
