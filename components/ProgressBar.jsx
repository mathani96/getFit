import React  from "react";
import { View, StyleSheet } from "react-native";

const ProgressBar = ({length, current}) => {

    const progressPercentage = (current/length)*100;


    return (
        <View style={styles.container}>
            <View style={[styles.bar, { width: `${progressPercentage}%` }]} />
        </View>
    );
}; 

const styles = StyleSheet.create({
  
    container:{

        width: "90%",
        height: 25,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',

    },
    bar: {
        height: 25,
        backgroundColor: "#ffcc00",
        borderColor: "#000"
    },
    
  });

export default ProgressBar;