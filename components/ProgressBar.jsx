import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import WorkoutImages from '../WorkoutImages';
import StorageService from "../assets/services/StorageService";

const ProgressBar = ({length, current}) => {

    const progressPercentage = (current/length)*100;


    //const[progress, setProgress] = useState(0);


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