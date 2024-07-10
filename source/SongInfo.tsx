import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import TrackPlayer, { Track } from 'react-native-track-player'


type SongInfoProp = PropsWithChildren<{
    track: Track | null | undefined
}>

const SongInfo = ({track} : SongInfoProp) => {
  return (
    <View>
      <Text style={styles.songname}>{track?.title}</Text>
      <Text style={styles.artistname}>{track?.artist}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    songname:{
        color: '#fff'
    },
    artistname:{
        color: '#fff'
    }

})
export default SongInfo