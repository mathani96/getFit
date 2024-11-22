import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, SafeAreaView} from 'react-native';

const WorkoutsPage = ({navigation}) => {
    return (
        <SafeAreaView>
            <Button
                title="Go to Home"
                onPress={() => navigation.push('Home')}
            />
        </SafeAreaView>
    );
};

export default WorkoutsPage;