import React from 'react';
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {addList, removeList} from '../../redux/slices/collection';
// Icon
import Icon from 'react-native-vector-icons/Feather';
// React-Native
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
// Components
import AddInput from '../AddInput';

const Collection = ({navigation, route}) => {
  const {lists} = useSelector((state) => state.collection);
  const dispatch = useDispatch();

  const onRemoveList = async () => {
    // await dispatch(removeList());
  };

  const onAddList = async (title) => {
    await dispatch(addList({title}));
  };

  const renderItem = ({item}) => (
    <View key={item.id}>
      <TouchableHighlight
        style={styles.listButton}
        onPress={() => {
          navigation.push('List', {id: item.id, title: item.title});
        }}>
        <View style={styles.listContainer}>
          <View style={styles.iconContainer}>
            <Icon name="corner-down-right" size={20} color="#333" />
          </View>
          <Text>{item.title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={Object.values(lists)} renderItem={renderItem} />
      <AddInput placeholder="Add a list" actionFunc={onAddList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listButton: {},
});

export default Collection;
