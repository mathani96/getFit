import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import Demonstration from "../components/Demonstration";
import Assets from '../Assets';
import StorageService from "../services/StorageService";
import ProgressBar from "../components/ProgressBar";

const WorkoutPage = ({ navigation, route}) => {
    const {workoutName, exerciseTime, restTime} = route.params;
 
    const [timeLeft, setTimeLeft] = useState(5);
    const [isPaused, setIsPaused] = useState(false);
    const [currentExercise, setCurrentExercise] = useState(0);
    const [action, setAction] = useState("ready");
    const [currentDemo, setCurrentDemo] = useState(Assets.ready);
    const [progress, setProgress] = useState(0);
    const [prevProgress, setPrevProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [exerciseName, setExerciseName] = useState(" ");
    const [exerciseInstructions, setExerciseInstructions] = useState(" ");

    const exercises = Assets.exercises[workoutName];
    const names = Assets.exerciseNames[workoutName];
    const instructions = Assets.exerciseInstructions[workoutName];

    useEffect(() => {
        const loadProgress = async () => {
           const savedProgress = await StorageService.loadWorkoutProgress(workoutName);
           setPrevProgress(savedProgress || 0);
        };

        loadProgress();
        setIsLoaded(true);
       
        return () => {
            console.log("Page is being unloaded!");
        };
    }, []);

  
    useEffect(() => {
        if (!isLoaded){
            return; 
        } 

        if (timeLeft > 0 && !isPaused) {
            const timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            if (action === "exercise") {
                setTimeLeft(restTime);
                setExerciseName(" ");
                setExerciseInstructions(" ");
                setCurrentDemo(Assets.rest);
                setAction("rest");
                if (currentExercise === exercises.length) {
                    setAction("finished");
                    setTimeLeft(0);
                    setCurrentDemo(Assets.finish);
                    setExerciseName(" ");
                    setExerciseInstructions(" ");
                    setProgress(prevProgress + 1);
                    StorageService.saveStreak();
                }
            } else if (action === "ready") {
                setTimeLeft(exerciseTime);
                setCurrentExercise(0);
                setCurrentDemo(exercises[currentExercise]);
                setExerciseName(names[currentExercise]);
                setExerciseInstructions(instructions[currentExercise]);
                setCurrentExercise((prevIndex) => prevIndex + 1);
                setAction("exercise");
            } else if (action === "rest") {
                setTimeLeft(exerciseTime);
                setCurrentExercise((prevIndex) => prevIndex + 1);
                setCurrentDemo(exercises[currentExercise]);
                setExerciseName(names[currentExercise]);
                setExerciseInstructions(instructions[currentExercise]);
                setAction("exercise");
            }
        }
    }, [timeLeft, isPaused, isLoaded]);

    useEffect(() => {
        if(action === 'finished'){
            StorageService.saveWorkoutProgress(workoutName, progress);
        }
    }, [progress]);    
    
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };
    
    

    return (
        <SafeAreaView style={styles.container}>

            
            <ProgressBar length={exercises.length} current={currentExercise} style={styles.progressBar}></ProgressBar>

            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{formatTime(timeLeft)} 🕔</Text>
                
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
        justifyContent: "center",
    },
    descriptionText: {
        fontSize: 15,
        color: "#333",
        textAlign:"center",
    },
    footer: {
        height: "15%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        position: "absolute",
        bottom: 5,
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
