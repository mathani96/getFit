import React from "react";
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import Progress from "../components/Progress";


const ProgressPage = ({navigation}) => {
   return (
        <SafeAreaView style={styles.container}>
            <Progress></Progress>
            <View style={styles.footer}>
                    <TouchableOpacity style={styles.buttonX} onPress={() => navigation.pop()}>
                        <Text style={styles.textX}>GO BACK</Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
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
    footer: {
        width: "100%",
        alignItems: "center",
    },
});

export default ProgressPage;
