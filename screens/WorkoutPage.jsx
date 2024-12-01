import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const WorkoutPage = ({ navigation, route, title}) => {
    const { workoutName } = route.params;

    // Timer state: starts at 1 minute (60 seconds)
    const [timeLeft, setTimeLeft] = useState(5);
    const [isPaused, setIsPaused] = useState(false);

    // Countdown logic using useEffect
    useEffect(() => {
        if (timeLeft > 0 && !isPaused) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer); // Cleanup the timer
        }
    }, [timeLeft, isPaused]);

    // Format time in MM:SS format
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <SafeAreaView style={styles.container}>

<           View style={styles.progressBar}></View>

            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
                
            </View>

            <View style={styles.workoutDemo}></View>

            <View style={styles.footer}>
                <View style={styles.buttonPos}>
                    <CustomButton
                        buttonName={isPaused ? "Resume" : "Pause"}
                        
                        onPress={() => {setIsPaused(!isPaused);}}
                    />
                </View>

                <View style={styles.buttonPos}>
                    <CustomButton buttonName="Quit" onPress={() => navigation.navigate('Workouts')} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    progressBar:{
        marginTop:10,
        height:10,
        width: "90%",
        borderRadius:3,
        borderWidth: 1,
        backgroundColor: "#ffcc00",
        borederColor: "#000",
    },
    timerContainer: {
        backgroundColor: "#ffcc00",
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
        width: "90%",
    },
    timerText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#333",
    },
    workoutDemo: {
        marginTop: 20,
        height: "60%",
        borderColor: "#000",
        borderWidth: 1,
        width: "90%",
        borderRadius: 5,
        marginBottom: 10,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
    },
    buttonPos: {
        width: "50%",
    },
});

export default WorkoutPage;
