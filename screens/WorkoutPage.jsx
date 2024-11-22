import React from "react";
import {Text, View, SafeAreaView, Button} from 'react-native';


const WorkoutPage = ({navigation}) => {
    return (
        <SafeAreaView>
            <Button
                title="Go to Home"
                onPress={() => navigation.push('Home')}
            />
        </SafeAreaView>
    );
};

export default WorkoutPage;