import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Color from '../utilities/Color';

const DetailComponent = ({title, icon, value}) => {
  const {cardContainer, titleCard, elementsLayout, descriptionCard} = styles;

  return (
    <View style={cardContainer}>
      <View style={elementsLayout}>
        <Text style={titleCard}>{title}</Text>
        <Icon name={icon} size={24} style={styles.moreIcon} />
        <Text style={descriptionCard}>{value}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  titleCard: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 16,
    color: Color.primaryBlue,
    marginVertical: 24,
  },
  descriptionCard: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 16,
    color: Color.textDescription,
    marginVertical: 24,
  },

  elementsLayout: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContainer: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    width: 100,
    height: 140,
    borderColor: Color.primaryBlue,
    borderWidth: 2,
  },
  moreIcon: {
    color: Color.textDescription,
  },
});

export default DetailComponent;
