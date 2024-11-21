import React from "react";
import {Text, View} from 'react-native';
import {NativeWindStyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';



const HomePage = () => {
    return (
        <NativeWindStyleSheet>
            <SafeAreaView  className=" ">
                <Text>
                   Hello This is HomePage
                </Text>
                <Button
                title="Go to Preview"
                onPress={() => navigation.push('WorkoutsPage')}
            />
            </SafeAreaView>
        </NativeWindStyleSheet>

    );
};

export default HomePage;