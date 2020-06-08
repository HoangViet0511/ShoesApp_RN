import React, {useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, SafeAreaView, Platform} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const StoreScreen = () => {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      getLocation();
    } else if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Please Active location',
          message: 'Access location to fetch data store',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      )
        .then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
          } else {
            console.log('Camera permission denied');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  const getLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      info => console.log(info),
      err => console.log(err),
    );
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>StoreScreen</Text>
      <MapView
        style={{flex: 1}}
        zoomControlEnabled
        zoomEnabled
        minZoomLevel={3}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({});
