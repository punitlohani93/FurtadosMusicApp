/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Main from './App/Components/Main';

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class FurtadosMusicApp extends Component {
  render() {
    return (
      <NavigatorIOS style={styles.container}
        initialRoute={{
          component: Main,
          title: '',
          barTintColor: "#DE1931",
          navigationBarHidden: true
        }}/>
      );
  }
}

AppRegistry.registerComponent('FurtadosMusicApp', () => FurtadosMusicApp);
