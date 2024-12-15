import React, {useEffect} from "react";
import { View, StyleSheet} from 'react-native';

import * as ExpoVideo from 'expo-video';
const { useVideoPlayer, VideoView } = ExpoVideo;


const Demonstration= ({exercisePath }) => {

    const player = useVideoPlayer(exercisePath, player => {
        player.loop = true;
      });

        useEffect(() => {
            player.play();
        }, [player]);


    return(
        <View style={styles.div}>
            <VideoView style={styles.gif}
             player={player} 
             resizeMode = "cover"   
             nativeControls = {false}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    
    gif: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    div: {
        flex: 1,
        borderRadius: 5,
    },
    
});

export default Demonstration;