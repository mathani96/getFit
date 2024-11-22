import React from "react";
import {Text, View, SafeAreaView, Button} from 'react-native';


const ProgressPage = ({navigation}) => {
    return (
        <SafeAreaView>
            <Button
                title="Go to Home"
                onPress={() => navigation.push('Home')}
            />
        </SafeAreaView>
    );
};

export default ProgressPage;