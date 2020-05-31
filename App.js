/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppContainer from './app/navigator';

const App = ()  => {
  useEffect(()=>{
    SplashScreen.hide();
  },[]);

  return <AppContainer />;
};



export default App;
