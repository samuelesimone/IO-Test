import {isUndefined} from 'lodash';
import React, {useState, useEffect} from 'react';

import {Text, View, StyleSheet} from 'react-native';

import Color from '../utilities/Color';

const HomeDetailScreen = () => {
  const {container} = styles;

  return (
    <View style={container}>
      <Text>Ciao</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
});

export default HomeDetailScreen;
