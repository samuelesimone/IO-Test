import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../utilities/Color';
const Header = ({label, showSearch = true}) => {
  const {logo, headerContainer, title, divider} = styles;
  return (
    <View>
      <View style={headerContainer}>
        <Image source={require('../assets/images/iologo.png')} style={logo} />
        {showSearch && (
          <Icon name={'search'} size={24} color={Color.textDescription} />
        )}
      </View>
      <View marginLeft={32} marginBottom={32}>
        <Text style={title}>{label}</Text>
      </View>
      <View style={divider} marginBottom={16} />
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
  logo: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
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

export default Header;
