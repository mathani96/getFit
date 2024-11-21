import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';


const WorkoutsPage = () => {
    return (
        <SafeAreaView>
            <Text>Musclegroup</Text>
            <Button
                title="Go to Preview"
                onPress={() => navigation.push('Preview')}
            />
        </SafeAreaView>
    );
};

export default WorkoutsPage;