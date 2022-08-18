import {isUndefined} from 'lodash';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';

import Color from '../utilities/Color';

const CreditScreen = () => {
  const {container, image, nameTxt, body, descriptionTxt} = styles;

  return (
    <ScrollView>
      <View style={container}>
        <Header label={'Credits'} showSearch={false} />
        <View style={image}>
          <Image
            source={require('../assets/images/sam.jpg')}
            style={{
              resizeMode: 'contain',
              width: 256,
              height: 256,
              borderRadius: 256,
            }}
          />
        </View>
        <View style={body}>
          <Text style={nameTxt}>Samuele Simone</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://it.linkedin.com/in/samuele-simone');
            }}>
            <Icon name={'linkedin'} size={32} color={Color.textDescription} />
          </TouchableOpacity>
          <Text style={descriptionTxt}>
            Bachelor's degree in Computer Science @ University of Milan-Bicocca.
            High-School diploma in computer science @ I.I.S "A. VOLTA" Pescara.
            Passionate about both native and hybrid mobile development through
            Android Studio and React Native.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
  image: {
    marginTop: 16,
    alignItems: 'center',
  },
  nameTxt: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 24,
    marginTop: 8,
    color: Color.textTitle,
  },
  descriptionTxt: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 16,
    marginTop: 8,
    paddingHorizontal: 32,
    color: Color.descriptionTxt,
  },
  body: {
    alignItems: 'center',
    marginBottom: 32,
  },
});

export default CreditScreen;
