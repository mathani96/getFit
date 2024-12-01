import React from "react";
import {Text, View, SafeAreaView, Button} from 'react-native';


const WorkoutPage = ({navigation, route}) => {

    const { workout } = route.params;

    return (
        <SafeAreaView>
            <Text>{workout}</Text>
        </SafeAreaView>
    );
};

export default WorkoutPage;