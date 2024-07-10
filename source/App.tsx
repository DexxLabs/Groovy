import { Dimensions, ImageBackground,Image, SafeAreaView, StatusBar, StyleSheet, Text, useWindowDimensions, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import TrackPlayer from 'react-native-track-player';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {setupPlayer,addTrack} from '../musicPlayerServices'
import Bar from './Bar';
import SongInfo from './SongInfo';
import MusicPlayer from './MusicPlayer';

const statusBarHeight = getStatusBarHeight();

export default function App() {
const [isPlayerReady,setisPlayerReady] = useState(false)

async function setup() {
  let isSetup = await setupPlayer()
  if (isSetup) {
    await addTrack()
  }
  setisPlayerReady(isSetup)
}
useEffect(() => {
  setup()
}, [])
  
  if (!isPlayerReady) {
    return(
      <SafeAreaView >
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }

  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true}/>
      <ImageBackground source={require('../assets/background.jpg' )} resizeMode='cover' style={styles.backgroundImage}>
      {/*Header Section */}
        <View style={styles.headerContainer}>
        <Image style={styles.menuImage} source = {require('../assets/menu.png')}/>
          <Text style={styles.header}>GROOVY</Text>
        <Image style={styles.profileImage} source = {require('../user.jpg')}/>
        </View>
      <MusicPlayer/>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    color:'#fff',
    fontSize: 15,
    fontFamily: 'Inter-VariableFont_slnt,wght',

  },
  headerContainer:{
    alignItems: 'center',
    marginTop: statusBarHeight,
    paddingVertical: 15,
  flexDirection: 'row',
    justifyContent: 'space-between'
  },
  backgroundImage:{
    flex: 1
  },
  WelcomeText:{
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: '#000',
  
  },
  profileImage:{
    height:35,
    width:35,
    marginRight:12,
    borderRadius: 25
  },
  menuImage:{
     height: 25,
     width:25,
     marginLeft:12,
     marginRight: 10
  }
})