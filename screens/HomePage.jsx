import React from "react";
import {Text, View, SafeAreaView, Button, StyleSheet} from 'react-native';


const HomePage = ({navigation}) => {
    return (
            <SafeAreaView style={styles.containerView}>
                <Button 
                title="Workouts"
                onPress={() => navigation.push('Workouts')}/>
                <Button
                title="Progress"
                onPress={() => navigation.push('Progress')}/>
                <Button
                title="Instructions"
                onPress={() => navigation.push('Instructions')}/>
               
                
            </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    containerView: {
        flex:1,
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'100%',
    },
})

export default HomePage;