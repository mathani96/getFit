import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const PreviewPage = () => {
    return (
        <SafeAreaView>
            <Text>Musclegroup</Text>
        </SafeAreaView>
    );
};

export default PreviewPage;