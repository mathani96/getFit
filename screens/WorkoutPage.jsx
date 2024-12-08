import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import CustomButton from "../components/CustomButton";
import Demonstration from "../components/Demonstration";
import WorkoutImages from '../WorkoutImages';
import ProgressService from "../assets/services/ProgressService";

const WorkoutPage = ({ navigation, route, title}) => {
    const workoutName = route.params;

    // Timer state: starts at 1 minute (60 seconds)
    const [timeLeft, setTimeLeft] = useState(2);
    const [isPaused, setIsPaused] = useState(false);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [action, setAction] = useState("ready");
    const [currentDemo, setCurrentDemo] = useState(WorkoutImages.ready);
    const [progress, setProgress] = useState(0);
    const [prevProgress, setPrevProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const exercises = WorkoutImages.exercises[workoutName];

    useEffect(() => {
        const loadProgress = async () => {
           const savedProgress = await ProgressService.load(workoutName);
           setPrevProgress(savedProgress || 0);
           console.log('Laded saved progress : ', savedProgress);
        };

        loadProgress();
       
        return () => {
            console.log("Page is being unloaded!");
        };
    }, []);

    // Countdown logic
    useEffect(() => {
        if (!isLoaded) return; // Wait until progress is loaded

        if (timeLeft > 0 && !isPaused) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer); // Cleanup
        } else if (timeLeft === 0) {
            if (action === "exercise") {
                setTimeLeft(3);
                setCurrentDemo(WorkoutImages.rest);
                setAction("rest");
                if (currentExercise === exercises.length) {
                    setAction("finished");
                    setTimeLeft(0);
                    setCurrentDemo(WorkoutImages.finish);
                    setProgress(prevProgress + 1);
                }
            } else if (action === "ready") {
                setTimeLeft(5);
                setCurrentExercise(0);
                setCurrentDemo(exercises[currentExercise]);
                setCurrentExercise((prevIndex) => prevIndex + 1);
                setAction("exercise");
            } else if (action === "rest") {
                setTimeLeft(5);
                setCurrentExercise((prevIndex) => prevIndex + 1);
                setCurrentDemo(exercises[currentExercise]);
                setAction("exercise");
            }
        }
    }, [timeLeft, isPaused, isLoaded]);

    useEffect(() => {
        ProgressService.save(workoutName, progress);
        console.log('New progress saved: ', progress);
    }, [progress]);    
    
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

            <View style={styles.workoutDemo}>
                <Demonstration exercisePath={currentDemo}></Demonstration>
            </View>

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
