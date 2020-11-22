import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addList, removeList} from '../redux/slices/collection';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  Button,
} from 'react-native';
// components
import Header from './Header';
import AddInput from './AddInput';

const Collection = () => {
  const {lists} = useSelector((state) => state.collection);
  const dispatch = useDispatch();

  const onRemoveList = async () => {
    // await dispatch(removeList());
  };

  const renderItem = ({item}) => (
    <View key={item.id}>
      <Text>{item.title}</Text>
      <Text>{item.id}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Header title="Collection" />}
        data={lists}
        renderItem={renderItem}
        ListFooterComponent={<Text>Footer</Text>}
      />
      <AddInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
  },
  header: {
    height: 24,
  },
});

export default Collection;
