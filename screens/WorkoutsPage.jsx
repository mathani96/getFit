import { StyleSheet, Text, View , SafeAreaView} from 'react-native';
import WorkoutButton from '../components/WorkoutButton';


const WorkoutsPage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.textX}>Choose your Workout</Text>
            </View>
            <View >
                <WorkoutButton
                    title="Legs"
                    onPress={() => navigation.navigate('Preview', {workoutName: 'legs'})}
                    workoutName="legs"
                />
            </View>
            <View >
                <WorkoutButton
                    title="Chest"
                    onPress={() => navigation.navigate('Preview', {workoutName: 'chest'})}
                    workoutName="chest"
                />
            </View>
        
            <View >
                <WorkoutButton
                    title="Core"
                    onPress={() => navigation.navigate('Preview', {workoutName: 'core'})}
                    workoutName="core"
                />
            </View>

            <View >
                <WorkoutButton
                    title="Cardio"
                    onPress={() => navigation.navigate('Preview', {workoutName: 'cardio'})}
                    workoutName="cardio"
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
        fontSize: 28,
        
    },
    button: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        paddingBottom: 10,
    }
});

export default WorkoutsPage;