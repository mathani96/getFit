import React from 'react';
import {Image, Text, StyleSheet, View } from 'react-native';



const ExercisePreview = ({ name, exerciseSource }) => {

  return (
    
    <View style={styles.container}>
   
      <Text style={styles.buttonText}>{name}</Text>
     
      <Image source={exerciseSource} style={styles.image} />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderWidth: 5,
    borderColor: "#ffcc00",
    borderRadius: 10,
    marginTop: 5,
    width: "100%",
    height: 110,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
    alignSelf: "center",

  },
  buttonText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    flex: 1, 
    flexShrink: 1, 
    marginRight: 10,
  },
  image: {
    width: 100,
    height: undefined, 
    aspectRatio: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
});

export default ExercisePreview;
