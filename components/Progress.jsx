import React, { useEffect, useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import ProgressService from "../assets/services/ProgressService";

const screenWidth = Dimensions.get("window").width;

const Progress= () => {
    const streakDays = 5;
    const [data, setData] = useState([
        { name: "Core/Abs", population: 0, color: "#f94144", legendFontColor: "#7F7F7F", legendFontSize: 12 },
        { name: "Back/Biceps", population: 0, color: "#f3722c", legendFontColor: "#7F7F7F", legendFontSize: 12 },
        { name: "Legs/Glutes", population: 0, color: "#90be6d", legendFontColor: "#7F7F7F", legendFontSize: 12 },
        { name: "Chest/Triceps", population: 0, color: "#577590", legendFontColor: "#7F7F7F", legendFontSize: 12 },
   
    ]);

    useEffect(() => {

        const loadProgress = async () => {
            try {
                const legsProgress = await ProgressService.load("legs") || 0;
                const chestProgress = await ProgressService.load("chest") || 0;
                const backProgress = await ProgressService.load("back") || 0;
                const coreProgress = await ProgressService.load("core") || 0;

                setData([
                    { name: "Core/Abs", population: coreProgress, color: "#f94144", legendFontColor: "#7F7F7F", legendFontSize: 12 },
                    { name: "Back/Biceps", population: backProgress, color: "#f3722c", legendFontColor: "#7F7F7F", legendFontSize: 12 },
                    { name: "Legs/Glutes", population: legsProgress, color: "#90be6d", legendFontColor: "#7F7F7F", legendFontSize: 12 },
                    { name: "Chest/Triceps", population: chestProgress, color: "#577590", legendFontColor: "#7F7F7F", legendFontSize: 12 },
                ]);
            } catch (error) {
                console.log('Failed to load chart data');
            }
        };

        loadProgress();

    }, []); 


    

    return (
            <SafeAreaView style={styles.container}>
                {/* Streak Section */}
                <View style={styles.streakContainer}>
                    <Text style={styles.streakText}>🔥 {streakDays} Days Streak!</Text>
                </View>

                {/* Pie Chart Section */}
                <Text style={styles.sectionTitle}>Workout Breakdown</Text>
                <PieChart
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
                    marginBottom={"10"}
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
    streakContainer: {
        backgroundColor: "#ffcc00",
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
        alignItems: "center",
        width: "90%",
    },
    streakText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
        color: "#000", // Text stands out on background
    },
});

export default Progress;