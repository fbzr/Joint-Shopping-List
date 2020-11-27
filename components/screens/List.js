import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
// Icon
import Icon from 'react-native-vector-icons/Feather';
// Redux
import {useSelector, useDispatch} from 'react-redux';
import {addItem, removeItem, toggleItem} from '../../redux/slices/collection';
// Components
import AddInput from '../AddInput';

// list id is passed through the route param
const List = ({navigation, route}) => {
  const list = useSelector((state) => state.collection.lists[route.params.id]);
  const dispatch = useDispatch();

  const onAddItem = async (title) => {
    await dispatch(addItem({listId: route.params.id, title}));
  };

  const onToggleItem = async ({id, listId}) => {
    await dispatch(toggleItem({itemId: id, listId}));
  };

  const renderItem = ({item}) => (
    <View key={item.id} style={styles.itemContainer}>
      <CheckBox value={item.done} onValueChange={() => onToggleItem(item)} />
      <Text style={[styles.itemTitle, item.done ? styles.itemDone : {}]}>
        {item.title}
      </Text>
      <View style={styles.iconContainer}>
        <Icon name="trash" size={20} color="#333" />
      </View>
    </View>
  );

  return (
    route.params.id && (
      <View>
        <FlatList data={Object.values(list.items)} renderItem={renderItem} />
        <AddInput placeholder="Add a new item" actionFunc={onAddItem} />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
  },
  itemTitle: {
    flex: 1,
    fontSize: 18,
  },
  itemDone: {
    textDecorationLine: 'line-through',
  },
});

export default List;
