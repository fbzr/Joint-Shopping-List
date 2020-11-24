/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
// React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Redux
import {Provider} from 'react-redux';
import store from './redux/store';

import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

// Screens
import Collection from './components/screens/Collection';
import List from './components/screens/List';

const Root = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="lignt-content" />
        <SafeAreaView style={styles.container}>
          <Root.Navigator>
            <Root.Screen name="Collection" component={Collection}></Root.Screen>
            <Root.Screen name="List" component={List}></Root.Screen>
          </Root.Navigator>
        </SafeAreaView>
      </NavigationContainer>
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
