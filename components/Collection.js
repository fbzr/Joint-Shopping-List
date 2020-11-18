import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addList} from '../stateManagement/slices/lists';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  Button,
} from 'react-native';

const Collection = () => {
  const {lists} = useSelector((state) => state);
  const dispatch = useDispatch();

  const onAddList = async () => {
    await dispatch(addList({title: 'Fabr'}));
    console.log(lists);
  };

  const onRemoveList = async () => {
    // await dispatch(removeList());
  };

  return (
    <>
      <FlatList
        ListHeaderComponent={<Text>Header</Text>}
        data={lists}
        renderItem={({item}) => <Text key={item.id}>{item.title}</Text>}
        ListFooterComponent={<Text>Footer</Text>}
      />
      <View style={styles.buttonsContainer}>
        <Button
          onPress={onAddList}
          title="Add"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={onRemoveList}
          title="Remove"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default Collection;
