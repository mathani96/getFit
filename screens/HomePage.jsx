import React from "react";
import {Text, View, SafeAreaView, Button, StyleSheet} from 'react-native';
import HomePageButton from "../components/HomePageButton";


const HomePage = ({navigation}) => {
    return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.body}>
                <HomePageButton 
                    title="Workouts"
                    onPress={() => navigation.push('Workouts')}/>
                </View>
                <View style={styles.body}>
                    <HomePageButton 
                    title="Progress"
                    onPress={() => navigation.push('Progress')}/>
                </View>
                <View style={styles.body}>
                    <HomePageButton 
                    title="Instructions"
                    onPress={() => navigation.push('Instructions')}/>
                </View>
            </SafeAreaView>

    );
    
};
const styles = StyleSheet.create({
    safeArea : {
        backgroundColor: '#A9A9A9',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        marginVertical: 10,
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
    }
});

export default HomePage;