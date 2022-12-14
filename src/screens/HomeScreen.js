import React, {useState, useEffect} from 'react';

import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import CardItem from '../components/CardItem';
import Header from '../components/Header';
import Color from '../utilities/Color';

const URL_DATA =
  'https://www.pivotaltracker.com/services/v5/projects/2116794/stories';
const HomeScreen = ({navigation}) => {
  const {container, divider, activityIndicator} = styles;
  const [JSON_DATA, setJSON_DATA] = useState('');

  const [showIndicator, setShowIndicator] = useState(true);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('HomeDetail', {data: item});
      }}>
      <CardItem item={item} />
    </TouchableOpacity>
  );

  useEffect(() => {
    async function fetchData() {
      fetch(URL_DATA)
        .then(response => response.json())
        .then(responseJson => {
          setJSON_DATA(responseJson);
          setShowIndicator(false);
        })
        .catch(error => {
          console.error(error);
        });
    }
    fetchData();
  }, []);

  return (
    <View style={container}>
      <Header label={'Stories'} />

      <ActivityIndicator
        size="large"
        color={Color.primaryBlue}
        animating={showIndicator}
        style={activityIndicator}
      />
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={[divider && {marginLeft: 0}]} />
        )}
        data={JSON_DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        maxToRenderPerBatch={5}
      />
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
  activityIndicator: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default HomeScreen;
