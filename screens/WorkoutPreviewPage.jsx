import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView , Button, SafeAreaView} from 'react-native';
import WorkoutButton from '../components/WorkoutButton';
import ExercisePreview from '../components/ExercisePreview';
import CustomButton from '../components/CustomButton';
import WorkoutImages from '../WorkoutImages';

const WorkoutPreviewPage = ({ navigation, route}) => {

    const {workoutName} = route.params;
    const previews = WorkoutImages.previews[workoutName];
    const names = WorkoutImages.exerciseNames[workoutName];

    console.log('workoutName:', workoutName);
    console.log('previews:', WorkoutImages.previews[workoutName]);


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.textX}>{workoutName} Workout</Text>
            </View>
            
            <ScrollView contentContainerStyle={styles.scrollBody}>
                {/* Dynamically spawn ExercisePreview components */}
                {previews.map((imagePath, index) => (
                    <ExercisePreview
                        key={index}
                        name={names[index]}
                        exerciseSource={imagePath} // Pass the image path as prop
                    />
                ))}
            </ScrollView>

            <View style={styles.footer}>
            <CustomButton 
                buttonName='Start'
                onPress={() => navigation.navigate("Workout",workoutName)}
            ></CustomButton>
            </View>
             
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
    scrollBody: {
        marginBottom: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
        width:'100%',
    },
    body: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',
    },
    textX: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'capitalize',
    },
    footer: {
        width:"100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }
});

export default WorkoutPreviewPage;