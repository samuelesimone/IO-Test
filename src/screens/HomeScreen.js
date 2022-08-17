import {isUndefined} from 'lodash';
import React, {useState, useEffect} from 'react';

import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../utilities/Color';

const HomeScreen = () => {
  const {container, headerContainer, title, divider} = styles;
  return (
    <View style={container}>
      <View style={headerContainer}>
        <Image
          source={require('../assets/images/iologo.png')}
          style={{
            resizeMode: 'contain',
            width: 24,
            height: 24,
          }}
        />
        <Icon name={'search'} size={24} color={Color.textDescription} />
      </View>
      <View marginLeft={32} marginBottom={32}>
        <Text style={title}>Stories</Text>
      </View>

      <View style={divider} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
  title: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 32,
    color: Color.textTitle,
  },
  divider: {
    height: 2,
    backgroundColor: Color.lightGrey,
  },
  headerContainer: {
    margin: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
