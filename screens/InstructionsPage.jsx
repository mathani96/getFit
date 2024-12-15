import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList, Dimensions, TouchableOpacity } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const InstructionsPage = ({ navigation }) => {
    const carouselItems = [
        {
            title: "Welcome to GetFit!",
            text: "No registration is required. Just open the app and start exploring!",
        },
        {
            title: "Home Page",
            text: "The home page has three buttons:\n1. Workouts\n2. Progress\n3. Walkthrough\nthere is also a window with motivational quotes to help you get motivated for your workout session.",
        },
        {
            title: "Workouts",
            text: "Tap on 'Workouts' to view exercises for the different muscle groups. Press on the desired muscle group you want to train.",
        },
        {
            title: "Workout Previw",
            text: "Tap on 'Workouts' to view the exercises that are included in the upcoming workout session. Adjust the Exercise and Rest times to what suits you. Press start and begin exercising!",
        },
        {
            title: "Workout Page",
            text: "Once you hit start on the previous page you are then led to the workout page where there is a video for visual aid on how to preform each workout and written instructions for additional guidance.",
        },
        {
            title: "Progress",
            text: "Tap on 'Progress' to view your streaks and a breakdown of your workouts.",
        },
        {
            title: "Instructions",
            text: "Tap on 'Instructions' for help with using the app and its features.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const onViewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index); 
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.carouselContainer}>
                <FlatList
                    data={carouselItems}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                    onViewableItemsChanged={onViewableItemsChanged}
                    viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
                />
                <Text style={styles.footerText}>
                    {`Step ${currentIndex + 1} of ${carouselItems.length}`}
                </Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonX} onPress={() => navigation.popToTop()}>
                    <Text style={styles.textX}>Go To Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
    },
    carouselContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        height:'70%',
    },
    card: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 20,
        width: screenWidth * 0.8,
        height: "80%", 
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: screenWidth * 0.1, 
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
        color: "#333",
    },
    text: {
        fontSize: 16,
        textAlign: "center",
        color: "#555",
    },
    footerText: {
        fontSize: 14,
        color: "#777",
        marginTop: 10,
    },
    buttonX: {
        backgroundColor: "#ffcc00",
        padding: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        marginBottom: 20,
    },
    textX: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
    },
    footer: {
        width: "100%",
        alignItems: "center",
    },
});

export default InstructionsPage;
