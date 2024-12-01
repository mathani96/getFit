import React from "react";
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import HomePageButton from "../components/HomePageButton";


const HomePage = ({navigation}) => {
    return (
            <SafeAreaView style={styles.container}>
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
                    onPress={() => navigation.navigater('Instructions')}/>
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
    }
});

export default HomePage;