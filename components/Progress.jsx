import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, StyleSheet} from 'react-native';
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import StorageService from "../services/StorageService";

const screenWidth = Dimensions.get("window").width;

const Progress= () => {
    const [streakDays, setStreakDays] = useState(0);
    const [data, setData] = useState([
        { name: "Core/Abs", population: 0, color: "#f94144", legendFontColor: "#7F7F7F", legendFontSize: 12 },
        { name: "Cardio/full-body", population: 0, color: "#f3722c", legendFontColor: "#7F7F7F", legendFontSize: 12 },
        { name: "Legs/Glutes", population: 0, color: "#90be6d", legendFontColor: "#7F7F7F", legendFontSize: 12 },
        { name: "Chest/Triceps", population: 0, color: "#577590", legendFontColor: "#7F7F7F", legendFontSize: 12 },
   
    ]);

    useEffect(() => {

        const loadStreak = async () => {
            try {

                const streak = await StorageService.loadStreak() || 0;
                setStreakDays(streak);

            }catch {
                console.log("erro loading streak");
            }
        }

        const loadProgress = async () => {
            try {
                const legsProgress = await StorageService.loadWorkoutProgress("legs");
                const chestProgress = await StorageService.loadWorkoutProgress("chest");
                const backProgress = await StorageService.loadWorkoutProgress("cardio");
                const coreProgress = await StorageService.loadWorkoutProgress("core");

                setData([
                    { name: "Core", population: coreProgress, color: "#f94144", legendFontColor: "#7F7F7F", legendFontSize: 12 },
                    { name: "Cardio", population: backProgress, color: "#f3722c", legendFontColor: "#7F7F7F", legendFontSize: 12 },
                    { name: "Legs", population: legsProgress, color: "#90be6d", legendFontColor: "#7F7F7F", legendFontSize: 12 },
                    { name: "Chest", population: chestProgress, color: "#577590", legendFontColor: "#7F7F7F", legendFontSize: 12 },
                ]);
            } catch (error) {
                console.log('Failed to load chart data');
            }
        };

        loadProgress();
        loadStreak();

    }, []); 


    

    return (
            <SafeAreaView style={styles.container}>

                <View style={styles.streakContainer}>
                    <Text style={styles.streakText}>  Streak: {streakDays} Days 🔥</Text>
                </View>

                <Text style={styles.sectionTitle}>My Workout Progress</Text>
                <PieChart  style={styles.sectionPie}
                    data={data}
                    width={screenWidth}
                    height={220}
                    chartConfig={{
                        backgroundColor: "#1cc910",
                        backgroundGradientFrom: "#eff3ff",
                        backgroundGradientTo: "#efefef",
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    }}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                    center={[10, 0]}
                    absolute
                    marginBottom={"100"}
                />
            </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f5f5f5"
    },
    sectionPie: {
        height: "40%",
        marginBottom: 60,
    },
    streakContainer: {
        backgroundColor: "#f5f5f5",
        padding: 20,
        borderWidth: 10,
        borderColor: "#ffcc00",
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
        width: "90%",
    },
    streakText: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#000",
    },
    sectionTitle: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#000", 
        marginTop: 30,
    },
});

export default Progress;