import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, SafeAreaView} from 'react-native';
import WorkoutButton from '../components/WorkoutButton';
import ExercisePreview from '../components/ExercisePreview';

const WorkoutPreviewPage = ({ navigation, route}) => {

    const { workout } = route.params;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.body}>
                <Text style={styles.text}>{workout} Workout</Text>
                <Text style={styles.text}>MUSTAARRRDDDDDD</Text>
            </View>
            <View style={styles.body}>
                
            </View>
            <View style={styles.body}>
                
            </View>
            <View style={styles.body}>
               
            </View>
        
            <View style={styles.body}>
                
            </View>

            <Button 
            title='Start'
            onPress={() => navigation.push('Workout', {workout: workout})}
            ></Button>
             
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

export default WorkoutPreviewPage;