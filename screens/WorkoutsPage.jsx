import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import WorkoutButton from '../components/WorkoutButton';
import CustomButton from '../components/CustomButton';


const WorkoutsPage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={styles.textX}>Choose your Workout</Text>
            </View>
            <View >
                <WorkoutButton
                    title="Legs/Glutes"
                    onPress={() => navigation.navigate('Preview', {workoutName: 'legs'})}
                    workoutName="legs"
                />
            </View>
            <View >
                <WorkoutButton
                    title="Chest/Triceps"
                    onPress={() => navigation.navigate('Preview', {workoutName: 'chest'})}
                    workoutName="chest"
                />
            </View>
        
            <View >
                <WorkoutButton
                    title="Core/Abs"
                    onPress={() => navigation.navigate('Preview', {workoutName: 'abs'})}
                    workoutName="abs"
                />
            </View>

            <View >
                <WorkoutButton
                    title="Cardio"
                    onPress={() => navigation.navigate('Preview', {workoutName: 'back'})}
                    workoutName="back"
                />
            </View>
             
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    textX: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 20,
    },
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default WorkoutsPage;