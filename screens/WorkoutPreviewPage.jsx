import React from "react";
import {Text, View, SafeAreaView, Button, TouchableOpacity, StyleSheet} from 'react-native';


const WorkoutPreviewPage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.buttonX} onPress={() => navigation.push('Home')}> 
               <Text style={styles.textX}>GO Back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f5f5f5"
    },
    buttonX: {
        backgroundColor: '#ffcc00',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginBottom: 20,
    },
    textX: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
    },

});

export default WorkoutPreviewPage;