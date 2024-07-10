import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import {PlaybackService} from '../musicPlayerServices'


export default function Bar() {
    const [buttonState,setButtonState] = useState('play')
    const playBackState = usePlaybackState()
    // next button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
    }
    // Previous button
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }

    const togglePlayback = async () => {
       
       if (buttonState === 'play') {
        await TrackPlayer.play()
        setButtonState('pause')
       }else{
        await TrackPlayer.pause()
        setButtonState('play')
       }
    }

  return (
    <View style={styles.container}>
        <Pressable onPress={skipToPrevious}>
      <Image source={require('../assets/previous.png')} style={styles.controls}/>
        </Pressable>
        <Pressable onPress={() => togglePlayback()}>
        <Image source={buttonState === 'play' ? require('../assets/play.png') : require('../assets/pause.png')} style={styles.controls}/>
        </Pressable>
      <Pressable onPress={skipToNext}>
        <Image source={require('../assets/next.png')} style={styles.controls}/>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    controls:{
        height: 30,
        width:30,
        margin: 25
    }
})