import {isUndefined} from 'lodash';
import React from 'react';
import moment from 'moment';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import DetailComponent from '../components/DetailComponent';

import Color from '../utilities/Color';
import Tag from '../components/Tag';

const HomeDetailScreen = ({navigation, route}) => {
  const {
    container,
    headerContainer,
    titleDetail,
    bannerContainer,
    bannerTitle,
    bannerDescr,
    itemContainer,
    itemTitle,
    detailsCard,
    statusCard,
    rowTime,
    descriptionCard,
    detailRow,
    itemTimeContainer,
    dot,
    dateValue,
    dateLabel,
    tag,
    CTALink,
    logo,
    btnTxt,
  } = styles;
  const defaultDescription =
    "As an engineer, I will define a docker container to run locally the proxy API that is part of the Cittadinanza Digitale app.\n\nAcceptance Criteria:\n- It should allow other engineers to work with the code base \n- It should be able to mock responses when there's no data";
  const item = route.params;

  const goBack = () => {
    navigation.pop();
  };

  return (
    <ScrollView>
      <View style={container}>
        <View style={headerContainer}>
          <TouchableOpacity onPress={goBack}>
            <Icon name="chevron-left" size={24} style={styles.moreIcon} />
          </TouchableOpacity>
          <Text style={titleDetail}>Story</Text>
          <TouchableOpacity onPress={() => {}}>
            <Icon name="question" size={24} style={styles.moreIcon} />
          </TouchableOpacity>
        </View>
        <View style={bannerContainer}>
          <Text style={bannerTitle}>IO - L'app dei servizi pubblici</Text>
          <Image
            source={require('../assets/images/iologoblue.jpg')}
            style={logo}
          />
        </View>
        <Text style={bannerDescr}>Stories</Text>
        <View style={itemContainer}>
          <Text style={itemTitle}>{item?.data?.name}</Text>
          <View style={detailsCard}>
            <Text
              style={{color: Color.textDescription}}
              fontFamily={'TitilliumWeb-Regular'}
              fontSize={12}>
              ID: #{item?.data?.id}
            </Text>
            <View style={statusCard}>
              <View style={dot} />
              <Text
                style={{color: Color.green}}
                fontFamily={'TitilliumWeb-Regular'}
                fontSize={12}>
                {item?.data?.current_state}
              </Text>
            </View>
          </View>
          <View marginTop={12}>
            <Text style={descriptionCard}>
              {item?.data?.description !== undefined
                ? item?.data?.description
                : defaultDescription}
            </Text>
          </View>
          <View style={tag}>
            {isUndefined(item.data.labels) ? (
              <View marginTop={16} />
            ) : (
              item.data.labels.map((item, index) => {
                return <Tag label={item.name} />;
              })
            )}
          </View>
          <Text style={itemTitle}>Details</Text>
          <View style={detailRow}>
            <DetailComponent
              title={'Story type'}
              icon={'cog'}
              value={item?.data?.story_type}
            />
            <DetailComponent
              title={'Priority'}
              icon={'exclamation'}
              value={item?.data?.story_priority}
            />
            <DetailComponent
              title={'Status'}
              icon={'check'}
              value={item?.data?.current_state}
            />
          </View>
          <Text style={itemTitle}>Time</Text>
        </View>
      </View>
      <View style={itemTimeContainer}>
        <View style={rowTime}>
          <Text style={dateLabel}>Creation date: </Text>
          <Text style={dateValue}>
            {moment(item?.data?.created_at).format('MMMM Do YYYY, HH:mm')}
          </Text>
        </View>
        <View style={rowTime}>
          <Text style={dateLabel}>Update date: </Text>
          <Text style={dateValue}>
            {moment(item?.data?.update_at).format('MMMM Do YYYY, HH:mm')}
          </Text>
        </View>
        <View style={rowTime}>
          <Text style={dateLabel}>Acceptance date: </Text>
          <Text style={dateValue}>
            {moment(item?.data?.accepted_at).format('MMMM Do YYYY, HH:mm')}
          </Text>
        </View>
      </View>
      <View marginBottom={32} />
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(item?.data?.url);
        }}>
        <View style={CTALink}>
          <Text style={btnTxt}>Visita la piattaforma IO</Text>
        </View>
      </TouchableOpacity>
      <View marginBottom={32} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    marginHorizontal: 32,
  },
  itemTimeContainer: {
    backgroundColor: Color.backgroundGrey,
    marginTop: 16,
  },
  logo: {
    resizeMode: 'contain',
    width: 32,
    height: 32,
    borderRadius: 6,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  tag: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  moreIcon: {
    color: Color.textTitle,
  },
  CTALink: {
    backgroundColor: Color.primaryBlue,
    marginHorizontal: 32,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  btnTxt: {
    color: 'white',
    fontFamily: 'TitilliumWeb-Bold',
    fontSize: 16,
  },
  rowTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  dateLabel: {
    fontFamily: 'TitilliumWeb-Regular',
    color: Color.textDescription,
    fontSize: 16,
  },
  dateValue: {
    fontFamily: 'TitilliumWeb-Bold',
    color: Color.textTitle,
    fontSize: 16,
  },
  titleDetail: {
    fontFamily: 'TitilliumWeb-Bold',
    color: Color.textTitle,
    fontSize: 20,
  },
  bannerContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bannerTitle: {
    fontFamily: 'TitilliumWeb-Bold',
    color: Color.textTitle,
    fontSize: 16,
  },
  bannerDescr: {
    fontFamily: 'TitilliumWeb-Regular',
    color: Color.textDescription,
    fontSize: 12,
  },
  itemContainer: {},
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemTitle: {
    marginTop: 32,
    fontFamily: 'TitilliumWeb-Bold',
    color: Color.textTitle,
    fontSize: 24,
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
  detailsCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 4,
  },
  descriptionCard: {
    fontFamily: 'TitilliumWeb-Regular',
    fontSize: 14,
    color: Color.textDescription,
    width: '100%',
  },
});

export default HomeDetailScreen;
