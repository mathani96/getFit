import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomePageButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonX]}
      onPress={onPress}
    >
      <Text style={styles.textX}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  
  buttonX: {
    backgroundColor: '#ffcc00',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginBottom: 20,
  },
  textX: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default HomePageButton;
