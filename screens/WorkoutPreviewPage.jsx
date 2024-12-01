import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, SafeAreaView} from 'react-native';
import WorkoutButton from '../components/WorkoutButton';
import ExercisePreview from '../components/ExercisePreview';
import CustomButton from '../components/CustomButton';

const WorkoutPreviewPage = ({ navigation, route}) => {

    const { workoutName } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.textX}>{workoutName} Workout</Text>
            </View>
            <View style={styles.body}>
                
            </View>
            <View style={styles.body}>
                
            </View>
            <View style={styles.body}>
               
            </View>
        
            <View style={styles.body}>
                
            </View>

            <CustomButton 
                buttonName='Start'
                onPress={() => navigation.navigate("Workout",workoutName)}
            ></CustomButton>
             
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#f5f5f5",
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
    },
    textX: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    }
});

export default WorkoutPreviewPage;