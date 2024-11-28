import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, SafeAreaView} from 'react-native';
import WorkoutButton from '../components/WorkoutButton';

const WorkoutsPage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.body}>
                <Text style={styles.text}>Choose your Workout</Text>
            </View>
            <View style={styles.body}>
                <WorkoutButton
                    title="Legs"
                    onPress={() => navigation.push('Workout')}
                    workout="legs"
                />
            </View>
            <View style={styles.body}>
                <WorkoutButton
                    title="Chest/Triceps"
                    onPress={() => navigation.push('Workout')}
                    workout="chest"
                />
            </View>
            <View style={styles.body}>
                <WorkoutButton
                    title="Back/Biceps"
                    onPress={() => navigation.push('Workout')}
                    workout="back"
                />
            </View>
        
            <View style={styles.body}>
                <WorkoutButton
                    title="Abs"
                    onPress={() => navigation.push('Workout')}
                    workout="abs"
                />
            </View>
             
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea : {
        backgroundColor: '#A9A9A9',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        marginVertical: 10,
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    }
});

export default WorkoutsPage;