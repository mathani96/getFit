import React from "react";
import {Text, View, SafeAreaView, Button} from 'react-native';


const HomePage = ({navigation}) => {
    return (
            <SafeAreaView>
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

export default HomePage;