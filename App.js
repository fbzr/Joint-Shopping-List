/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// Redux
import {Provider} from 'react-redux';
import store from './stateManagement/store';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';

// components
import Header from './components/Header';
import List from './components/List';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.contentContainer}>
          <List />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 11,
  },
});

export default App;
