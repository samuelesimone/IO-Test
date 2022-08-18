import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Color from '../utilities/Color';

const Tag = ({label}) => {
  const {tagContainer, tagTxt} = styles;
  return (
    <View style={tagContainer}>
      <Text style={tagTxt}>{label}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  tagContainer: {
    width: 120,
    padding: 8,
    backgroundColor: Color.tagColor,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    marginRight: 8,
  },
  tagTxt: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 12,
    color: Color.textDescription,
  },
});

export default Tag;
