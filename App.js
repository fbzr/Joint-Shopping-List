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

import {SafeAreaView, StatusBar, StyleSheet, Button} from 'react-native';

// Screens
import Collection from './components/screens/Collection';
import List from './components/screens/List';

const Root = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="lignt-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Root.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
            }}>
            <Root.Screen name="Collection" component={Collection} />
            <Root.Screen
              name="List"
              component={List}
              options={({route}) => ({
                title: route.params.title,
              })}
            />
          </Root.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
