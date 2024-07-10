import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useProgress } from 'react-native-track-player'
import Slider from '@react-native-community/slider'


const ProgressBar = () => {
    const {position,duration} = useProgress()
  return (
    <>
    <View style={styles.BarContainer}>
      <Slider 
      value={position}
      minimumValue={0}
      maximumValue={duration}
      thumbTintColor='#fff'
      maximumTrackTintColor='#fff'
      style={styles.progressBar}
      />
    </View>
    <View style={styles.duraionContainer}>
      <View>
        <Text style={styles.time}>{new Date(position*1000).toISOString().substring(15,19)}</Text>
      </View>
      <View>
    <Text style={styles.time}>
                {new Date((duration-position)*1000).toISOString().substring(15, 19)}
            </Text>
      </View>
    </View>
    </>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
    progressBar:{
      width: 350,
      height: 40,
      marginTop: 25,
  
      flexDirection: 'row',
    },
    duraionContainer:{
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    BarContainer:{ 
     },
    duration:{},
    time:{
      color: '#fff',
    }
})