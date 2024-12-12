import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import Demonstration from "../components/Demonstration";
import WorkoutImages from '../WorkoutImages';
import StorageService from "../assets/services/StorageService";
import ProgressBar from "../components/ProgressBar";

const WorkoutPage = ({ navigation, route, title}) => {
    const workoutName = route.params;

    // Timer state: starts at 1 minute (60 seconds)
    const [timeLeft, setTimeLeft] = useState(3);
    const [isPaused, setIsPaused] = useState(false);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [action, setAction] = useState("ready");
    const [currentDemo, setCurrentDemo] = useState(WorkoutImages.ready);
    const [progress, setProgress] = useState(0);
    const [prevProgress, setPrevProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [exerciseName, setExerciseName] = useState(" ");
    const [exerciseInstructions, setExerciseInstructions] = useState(" ");

    const exercises = WorkoutImages.exercises[workoutName];
    const names = WorkoutImages.exerciseNames[workoutName];
    const instructions = WorkoutImages.exerciseInstructions[workoutName];

    useEffect(() => {
        const loadProgress = async () => {
           const savedProgress = await StorageService.loadWorkoutProgress(workoutName);
           setPrevProgress(savedProgress || 0);
           console.log('Loaded saved WorkoutProgress : ', savedProgress);
        };

        loadProgress();
        setIsLoaded(true);
       
        return () => {
            console.log("Page is being unloaded!");
        };
    }, []);

    // Countdown logic
    useEffect(() => {
        if (!isLoaded){
            return; // Wait until progress is loaded
        } 

        if (timeLeft > 0 && !isPaused) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer); // Cleanup
        } else if (timeLeft === 0) {
            if (action === "exercise") {
                setTimeLeft(6);
                setExerciseName(" ");
                setExerciseInstructions(" ");
                setCurrentDemo(WorkoutImages.rest);
                setAction("rest");
                if (currentExercise === exercises.length) {
                    setAction("finished");
                    setTimeLeft(0);
                    setCurrentDemo(WorkoutImages.finish);
                    setExerciseName(" ");
                    setExerciseInstructions(" ");
                    setProgress(prevProgress + 1);
                    StorageService.saveStreak();
                }
            } else if (action === "ready") {
                setTimeLeft(6);
                setCurrentExercise(0);
                setCurrentDemo(exercises[currentExercise]);
                setExerciseName(names[currentExercise]);
                setExerciseInstructions(instructions[currentExercise]);
                setCurrentExercise((prevIndex) => prevIndex + 1);
                setAction("exercise");
            } else if (action === "rest") {
                setTimeLeft(8);
                setCurrentExercise((prevIndex) => prevIndex + 1);
                setCurrentDemo(exercises[currentExercise]);
                setExerciseName(exerciseName[currentExercise]);
                setExerciseInstructions(exerciseInstructions[currentExercise]);
                setAction("exercise");
            }
        }
    }, [timeLeft, isPaused, isLoaded]);

    useEffect(() => {
        StorageService.saveWorkoutProgress(workoutName, progress);
        console.log('New progress saved: ', progress);
    }, [progress]);    
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <SafeAreaView style={styles.container}>

            
            <ProgressBar length={exercises.length} current={currentExercise}></ProgressBar>

            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
                
            </View>

            <View style={styles.workoutName}>
                <Text style={styles.nameText}>{exerciseName}</Text>
            </View>

            <View style={styles.workoutDemo}>
                <Demonstration exercisePath={currentDemo}></Demonstration>
            </View>

            <View style={styles.workoutDescription}>
                <Text style={styles.descriptionText}>{exerciseInstructions}</Text>
            </View>

            <View style={styles.footer}>

                <View style={styles.buttonPosQuit}>
                    <CustomButton buttonName="Quit workout" onPress={() => navigation.navigate('Home')} />
                </View>


                <View style={styles.buttonPosPause}>
                    <CustomButton
                        buttonName={isPaused ? "Resume" : "Pause"}
                        
                        onPress={() => {setIsPaused(!isPaused);}}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:20 ,
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    progressBar:{
        height:10,
        width: "90%",
        borderRadius:3,
        borderWidth: 1,
        backgroundColor: "#ffcc00",
        borederColor: "#000",
    },
    timerContainer: {
        marginTop:20 ,
        backgroundColor: "#ffcc00",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        width: "90%",
    },
    timerText: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#333",
    },
    workoutName: {
        alignItems:"center",
    },
    nameText: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        textAlign:"center",
    },
    workoutDemo: {
        marginTop: 20,
        width: "90%",  
        aspectRatio: 16 / 9, 
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
    },   
    workoutDescription: {
        marginTop: 20,
        width: "90%",
        height: "20%",
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
    },
    descriptionText: {
        fontSize: 16,
        color: "#333",
        textAlign:"center",
    },
    footer: {
        marginTop:20 ,
        height: "15%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
    },
    buttonPosQuit: {
        flex:1,
        paddingTop: "20",
        justifyContent: "flex-start",
        width: "50%",
    },
    buttonPosPause: {
        flexDirection: "row",
        paddingTop: "20",
        justifyContent: "flex-end",
        width: "50%",
    },
});

export default WorkoutPage;
