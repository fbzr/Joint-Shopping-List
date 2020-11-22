import React from 'react';
import {View, Text} from 'react-native';

const List = ({navigation, route}) => {
  return (
    <View>
      <Text>{`List ID: ${route.params.id}`}</Text>
    </View>
  );
};
