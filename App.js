/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text,} from 'react-native';
import {createStore, applyMiddleware,compose} from 'redux';
import SplashScreen from 'react-native-splash-screen';
import AppContainer from './app/navigator';
import {Provider} from 'react-redux';
import reducer from './app/redux/reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
