import React, {useState} from 'react'
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';

import TrackPlayer, {
    Event,
    Track,
    useTrackPlayerEvents
} from 'react-native-track-player'
import SongInfo from './SongInfo';
import { Data } from './trackConstants';
import ProgressBar from './ProgressBar';
import Bar from './Bar';



const {width} = Dimensions.get('window')


const MusicPlayer = () => {
    const [track, setTrack] = useState<Track | null>()

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
        switch (event.type) {
            case Event.PlaybackActiveTrackChanged:
                const playingTrack = await TrackPlayer.getActiveTrackIndex()
                setTrack()
                break;
        
        }
    })

    const renderArtWork = () => {
        return(
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artwork && (
                        <Image
                        style={styles.albumArtImg}
                        source={{uri: track?.artwork?.toString()}}
                        />
                    )}
                </View>
            </View>
        )
    }

  return (
    <View style={styles.container}>
        <FlatList
        horizontal
        data={Data}
        renderItem={renderArtWork}
        keyExtractor={song => song.url}
        />

        <SongInfo track={track}/>
        <ProgressBar />
        <Bar/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    listArtWrapper: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 300,
      height: 300,
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 4,
    },
  });
  

export default MusicPlayer