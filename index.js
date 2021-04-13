/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {loadCldr} from 'react-native-globalize';

// Example: loading German, English, and Spanish
loadCldr(
  require('react-native-globalize/locale-data/de'),
  require('react-native-globalize/locale-data/en'),
  require('react-native-globalize/locale-data/es'),
);
AppRegistry.registerComponent(appName, () => App);
