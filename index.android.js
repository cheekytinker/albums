// Android code in here

//import library to hepl create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//create a component
const App = () => (
    <Text>Some re</Text>
  );
//render to the device
AppRegistry.registerComponent('albums', () => App);
