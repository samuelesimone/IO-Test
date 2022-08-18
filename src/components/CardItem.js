import moment from 'moment';
import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {isEmpty, isUndefined} from 'lodash';
import Color from '../utilities/Color';
import Tag from './Tag';

const CardItem = ({item}) => {
  const {
    cardContainer,
    cardHeader,
    titleCard,
    dateCard,
    detailsCard,
    statusCard,
    dot,
    tag,
    descriptionCard,
    divider,
  } = styles;
  const defaultDescription =
    "As an engineer, I will define a docker container to run locally the proxy API that is part of the Cittadinanza Digitale app.\n\nAcceptance Criteria:\n- It should allow other engineers to work with the code base \n- It should be able to mock responses when there's no data";
  return (
    <View style={cardContainer}>
      <View style={cardHeader}>
        <Text style={titleCard}>{item?.name}</Text>
        <Text style={dateCard}>{moment(item?.created_at).format('ll')}</Text>
      </View>
      <View style={detailsCard}>
        <Text
          style={{color: Color.textDescription}}
          fontFamily={'TitilliumWeb-Regular'}
          fontSize={12}>
          ID: #{item?.id}
        </Text>
        <View style={statusCard}>
          <View style={dot} />
          <Text
            style={{color: Color.green}}
            fontFamily={'TitilliumWeb-Regular'}
            fontSize={12}>
            {item?.current_state}
          </Text>
        </View>
      </View>
      <View style={tag}>
        {isUndefined(item.labels)
          ? null
          : item.labels.map((item, index) => {
              return <Tag label={item.name} />;
            })}
      </View>
      <View marginTop={12} flexDirection={'row'}>
        <Text style={descriptionCard} numberOfLines={2} ellipsizeMode="tail">
          {item?.description !== undefined
            ? item?.description
            : defaultDescription}
        </Text>
        <View style={styles.moreContainer}>
          <Icon name="chevron-right" size={24} style={styles.moreIcon} />
        </View>
      </View>
      <View style={divider} />
    </View>
  );
};
const styles = StyleSheet.create({
  titleCard: {
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 20,
    color: Color.textDescription,
    width: 230,
  },
  dateCard: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 14,
    color: Color.textTitle,
  },
  cardContainer: {
    marginHorizontal: 32,
    marginVertical: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 4,
  },
  statusCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 14,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 12,
    marginRight: 4,
    backgroundColor: Color.green,
  },
  tag: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  descriptionCard: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 14,
    marginBottom: 16,
    color: Color.textDescription,
    paddingRight: 72,
    width: '100%',
  },
  divider: {
    height: 1,
    backgroundColor: Color.lightGrey,
  },
  moreContainer: {
    position: 'relative',
    justifyContent: 'flex-start',
  },

  moreIcon: {
    color: Color.primaryBlue,
  },
});

export default CardItem;
