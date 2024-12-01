import React from "react";
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList } from "react-native";



const { width: screenWidth } = Dimensions.get("window");

const WORKOUTS = [
    {
        id: "1",
        title: "Core/Abs",
        imageUrl: "https://images.pexels.com/photos/27875415/pexels-photo-27875415/free-photo-of-flexing-abs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        route: "CoreWorkoutPage"
    },
    {
        id: "2",
        title: "Back/Biceps",
        imageUrl: "https://images.pexels.com/photos/17898141/pexels-photo-17898141/free-photo-of-a-muscular-man-flexing-his-muscles-at-the-gym.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        route: "BackBicepsWorkoutPage"
    },
    {
        id: "3",
        title: "Legs/Glutes",
        imageUrl:"https://images.pexels.com/photos/8462937/pexels-photo-8462937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        route: "LegsGlutesWorkoutPage"
    },
    {
        id: "4",
        title: "Chest/Triceps",
        imageUrl: "https://images.pexels.com/photos/8058746/pexels-photo-8058746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        route: "ChestTricepsWorkoutPage"
    }
];

const WorkoutsPage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* FlatList for Horizontal Scrolling (Carousel-like effect) */}
            <FlatList
                data={WORKOUTS}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}  // Hide scroll indicator
                contentContainerStyle={styles.flatListContent} // Align items and add margin
                renderItem={({ item }) => (
                    <View style={styles.section}>
                        <TouchableOpacity 
                            style={styles.touchableContainer} 
                            onPress={() => navigation.push('Preview')}
                            // Navigates to the workout page
                        >
                            <Image 
                                source={{ uri: item.imageUrl }} 
                                style={styles.image}
                            />
                            <Text style={styles.text}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            {/* Footer with GO TO HOME button */}
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.buttonX} 
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.textX}>GO TO HOME</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    flatListContent: {
        paddingVertical: 20,  // Add padding for top/bottom spacing
        paddingLeft: 10,      // Space to the left of the first item
        paddingRight: 10,     // Space to the right of the last item
        alignItems: "center", // Center items horizontally
    },
    section: {
        width: screenWidth - 40,  // Each section takes up most of the screen width
        marginHorizontal: 10,     // Space between each section
        alignItems: "center",
        justifyContent: "center",
    },
    touchableContainer: {
        width: "100%",
        alignItems: "center",
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#fff",
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    image: {
        width: "100%",   // Fill container's width
        height: "80%",     // Fixed height for each image
        resizeMode: "cover",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 10,
        color: "#333",
    },
    footer: {
        width: "100%",
        alignItems: "center",
        position: "absolute",
        bottom: 0,  // Fix the footer at the bottom of the screen
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
});

export default WorkoutsPage;
