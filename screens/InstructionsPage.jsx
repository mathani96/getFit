import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList, Dimensions, TouchableOpacity } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const InstructionsPage = ({ navigation }) => {
    const carouselItems = [
        {
            title: "Welcome to the Workout App",
            text: "No registration is required. Just open the app and start exploring!",
        },
        {
            title: "Home Page",
            text: "The home page has three buttons:\n1. Workouts\n2. Progress\n3. Instructions",
        },
        {
            title: "Workouts",
            text: "Tap on 'Workouts' to view exercises for different muscle groups. Choose a workout and start exercising!",
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
            setCurrentIndex(viewableItems[0].index); // Update the active slide index
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
                <TouchableOpacity style={styles.buttonX} onPress={() => navigation.push("Home")}>
                    <Text style={styles.textX}>GO TO HOME</Text>
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
        flex: 1, // Ensures the carousel fills the available vertical space
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
        height: "80%", // Adjust card height to fit within the screen dynamically
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginHorizontal: screenWidth * 0.1, // Center the card
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
