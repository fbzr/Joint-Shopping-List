/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
// React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SafeAreaView, StatusBar, StyleSheet, Button} from 'react-native';

// Screens
import Collection from './components/screens/Collection';
import List from './components/screens/List';

// Socket.io test
import io from 'socket.io-client';

const Root = createStackNavigator();

const App: () => React$Node = () => {
  useEffect(() => {
    const socket = io('http://localhost:8000');

    socket.on('loadData', (data) => {
      console.log('***data from socket***\n', data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Root.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              cardStyle: {backgroundColor: '#FFFFFF'},
              screenStyle: {
                margin: 30,
              },
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
