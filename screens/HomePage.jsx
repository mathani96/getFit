import React from "react";
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import HomePageButton from "../components/HomePageButton";
import MotivationalMessage from "../components/MotivationalMessage";

const HomePage = ({navigation}) => {
    return (
            <SafeAreaView style={styles.container}>
                <View>
                <Text style={styles.welcomeTitle}>GetFit Home</Text>
                </View>
                <View>
                <Text style={styles.title}>Motivational Quote of the Day 💪</Text>
                </View>
                <View style= {styles.MotivationalMessage}>
                    <MotivationalMessage />
                </View>

                <View style={styles.body}>
                <HomePageButton 
                    title="Workouts"
                    onPress={() => navigation.navigate('Workouts')}/>
                </View>
                <View style={styles.body}>
                    <HomePageButton 
                    title="Progress"
                    onPress={() => navigation.navigate('Progress')}/>
                </View>
                <View style={styles.body}>
                    <HomePageButton 
                    title="Instructions"
                    onPress={() => navigation.navigate('Instructions')}/>
                </View>
            </SafeAreaView>

    );
    
};
const styles = StyleSheet.create({
    container : {
        backgroundColor:"#f5f5f5" ,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
    },
    MotivationalMessage:{
        backgroundColor: "#f5f5f5",
        padding: 20,
        borderWidth: 5,
        borderColor: "#ffcc00",
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
        width: "90%",
        height: "30%",
    },
    title:{
        marginTop: 15,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    welcomeTitle:{
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: "#000",
        padding: 15,
    }
});

export default HomePage;