import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, SafeAreaView} from 'react-native';

const WorkoutPage = ({navigation}) => {
    return (
        <SafeAreaView>
            <Button
                title="Go to Home haaa"
                onPress={() => navigation.push('Home')}
            />
        </SafeAreaView>
    );
};

export default WorkoutPage;