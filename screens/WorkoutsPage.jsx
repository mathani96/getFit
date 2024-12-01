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
                    title="Legs/Glutes"
                    onPress={() => navigation.push('Preview', {workout: 'legs'})}
                    workout="legs"
                />
            </View>
            <View style={styles.body}>
                <WorkoutButton
                    title="Chest/Triceps"
                    onPress={() => navigation.push('Preview', {workout: 'chest'})}
                    workout="chest"
                />
            </View>
            <View style={styles.body}>
                <WorkoutButton
                    title="Back/Biceps"
                    onPress={() => navigation.push('Preview', {workout: 'back'})}
                    workout="back"
                />
            </View>
        
            <View style={styles.body}>
                <WorkoutButton
                    title="Core/Abs"
                    onPress={() => navigation.push('Preview', {workout: 'abs'})}
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