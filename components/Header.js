import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = ({title}) => {
  return <Text style={styles.text}>{title || 'Joint Checklist'}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 24,
  },
});

export default Header;
