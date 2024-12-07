import React, {useEffect} from "react";
import { View, StyleSheet} from 'react-native';

import * as ExpoVideo from 'expo-video';
const { useVideoPlayer, VideoView } = ExpoVideo;

import { useEvent } from "expo";

const Demonstration= ({exercisePath }) => {

    const player = useVideoPlayer(exercisePath, player => {
        player.loop = true;
      });

      // Start playing the video on mount
        useEffect(() => {
            player.play();
        }, [player]);


    return(
        <View>
            <VideoView style={styles.gif}
             player={player}         
            />
        </View>

    );
};

const styles = StyleSheet.create({
    
    gif: {
        padding: 15,
        width: '90%',
        height: '80%',
        marginBottom: 20,
    },
    
});

export default Demonstration;