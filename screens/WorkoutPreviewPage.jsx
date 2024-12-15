import { StyleSheet, Text, View, ScrollView , SafeAreaView} from 'react-native';
import ExercisePreview from '../components/ExercisePreview';
import CustomButton from '../components/CustomButton';
import Assets from '../Assets';
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

const generateOptions = (min, max) => {
    const options = [];
    for (let i = min; i <= max; i += 5) {
        options.push({ label: `${i} seconds`, value: i });
    }
    return options;
};

const WorkoutPreviewPage = ({ navigation, route}) => {

    const {workoutName} = route.params;
    const previews = Assets.previews[workoutName];
    const names = Assets.exerciseNames[workoutName];

    const [exerciseTime, setExerciseTime] = useState(60);
    const [restTime, setRestTime] = useState(30);



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.textX}>{workoutName} Workout</Text>
            </View>
            
            <ScrollView contentContainerStyle={styles.scrollBody}>
              
                {previews.map((imagePath, index) => (
                    <ExercisePreview
                        key={index}
                        name={names[index]}
                        exerciseSource={imagePath} 
                    />
                ))}
            </ScrollView>

            <View style={styles.inputContainer}>
                <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Exercise Time</Text>
                <RNPickerSelect
                    onValueChange={(value) => setExerciseTime(value)}
                    items={generateOptions(10, 180)}
                    value={exerciseTime}
                />
                </View>

                <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Rest Time</Text>
                <RNPickerSelect
                    onValueChange={(value) => setRestTime(value)}
                    items={generateOptions(5, 120)}
                    value={restTime}
                />
                </View>
            </View>

            <View style={styles.footer}>
            <CustomButton 
                buttonName='Start'
                onPress={() => navigation.navigate("Workout",{workoutName, exerciseTime, restTime})}
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
        justifyContent: 'center',
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
    inputContainer: {
        padding: 5,
        borderWidth: 5,
        borderColor: "#ffcc00",
        borderRadius: 10,
        width: '90%',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
    },
    inputLabel: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    inputBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width:"50%",
    },
    footer: {
        width:"100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    }
});

export default WorkoutPreviewPage;