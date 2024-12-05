import React from "react";
import { View, Text, StyleSheet, Image} from 'react-native';

const Demonstration= ({exercisePath }) => {


    return(
        <View>
            <Image
                style={styles.gif}
                source={exercisePath} // Path to your video file // Apply your custom styles here
            />
        </View>

    );
};

const styles = StyleSheet.create({
    
    gif: {
        padding: 15,
        width: '100%',
        height: '80%',
        marginBottom: 20,
    },
    
});

export default Demonstration;