import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Joint Shopping List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Header;
