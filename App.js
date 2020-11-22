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
import store from './redux/store';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

// components
import Collection from './components/Collection';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="lignt-content" />
      <SafeAreaView style={styles.container}>
        <Collection />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

export default App;
