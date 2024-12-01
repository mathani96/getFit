import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomePageButton = ({ title, onPress, backgroundColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
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
    justifyContent: 'center',
    width: '80%', // Adjust width as needed
    marginVertical: 8, // Space between buttons
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default HomePageButton;
