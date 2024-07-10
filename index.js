/**
 * @format
 */

import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import App from './source/App';
import {name as appName} from './app.json';
import { PlaybackService } from './musicPlayerServices';


AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);
