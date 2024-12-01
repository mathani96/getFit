import React from "react";
import { Text, StyleSheet, TouchableOpacity} from 'react-native';


const CustomButton= ({buttonName, onPress}) => {
    return(
                <TouchableOpacity style={styles.buttonX} onPress={onPress}>
                    <Text style={styles.textX}>{buttonName}</Text>
                </TouchableOpacity>

    );
};
const styles = StyleSheet.create({
    
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
export default CustomButton;