import TrackPlayer,{Event, RepeatMode} from "react-native-track-player";
import {Data} from './source/trackConstants'
import { transformer } from "./metro.config";

export async function setupPlayer(){
    let isSet = false;
    try {
        await TrackPlayer.getActiveTrack()
        isSet=true;
    } catch (error) {
        await TrackPlayer.setupPlayer()
    }finally{
        return isSet;
    }
}

export async function addTrack() {
    await TrackPlayer.add(Data)
    await TrackPlayer.getRepeatMode(RepeatMode.Queue)
}

export async function PlaybackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })
    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })
    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })
}