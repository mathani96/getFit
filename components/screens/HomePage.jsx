import React from "react";
import {Text, View} from 'react-native';
import {NativeWindStyleSheet} from 'react-native';

const HomePage = () => {
    return (
        <NativeWindStyleSheet>
            <SafeAreaView  className=" ">
                <Text>
                    Hello, NativeWind!
                </Text>
            </SafeAreaView>
        </NativeWindStyleSheet>

    );
};

export default HomePage;